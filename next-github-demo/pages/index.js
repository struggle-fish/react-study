import { useEffect } from 'react'
import getConfig from 'next/config'
import LRU from 'lru-cache'
import { connect } from 'react-redux'
import Router, { withRouter } from 'next/router'
import { Button, Tabs } from 'antd'

import { MailOutlined} from '@ant-design/icons';
import { cacheArray } from '../lib/repo-basic-cache'

// 组件
import Repo from '../components/Repo'

const isServer = typeof window === 'undefined'
const api = require('../lib/api')

const { publicRuntimeConfig } = getConfig()

const cache = new LRU({
  maxAge: 1000 * 60 * 10 // 10分钟
})

// let cachedUserRepos
// let cachedUserStaredRepos




function Index({ userRepos, userStaredRepos, user, router }) {
  console.log(userRepos, 'userp----')
  console.log(userStaredRepos, 'userStaredRepos----')
  console.log(user, '用户信息---')
  const tabKey = router.query.key || '1'
  if (!user || !user.id) {
    return <div className="root">
      <p>亲，请登录</p>
      <Button type="primary" href={publicRuntimeConfig.OAUTH_URL}>点击登录</Button>
      <style jsx>{`
        .root {
          height: 400px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  }

  useEffect(() => {
    // 客户端访问的时候缓存一下
    if (!isServer) {
      // cachedUserRepos = userRepos || []
      // cachedUserStaredRepos = userStaredRepos || []
      if (userRepos) {
        cache.set('userRepos', userRepos)
      }
      if (userStaredRepos) {
        cache.set('userStaredRepos', userStaredRepos)
      }
    }
  }, [userRepos, userStaredRepos])

  useEffect(() => {
    if (!isServer) {
      cacheArray(userRepos)
      cacheArray(userStaredRepos)
    }
  })
  
  const handleTabChange = (activeKey) => {
    Router.push(`/?key=${activeKey}`)
  }

  return (
    <>
      <div className="root">
        <div className="user-info">
          <img src={user.avatar_url} className="avatar" />
          <span className="login">{ user.login }</span>
          <span className="name">{ user.name }</span>
          <span className="bio">{ user.bio }</span>
          <p className="email">
            <MailOutlined style={{ marginRight: '10px' }}/>
            <a href={`mailto:${user.email || '735801366@qq.com'}`}>{ user.email || '735801366@qq.com' }</a>
          </p>
        </div>
        
        <div className="user-repos">
          <Tabs defaultActiveKey={tabKey} onChange={handleTabChange} animated={false}>
            <Tabs.TabPane tab="你的仓库" key="1">
              {
                userRepos.map((repo, index) => <Repo repo={repo} key={index}></Repo>)
              }
            </Tabs.TabPane>
            <Tabs.TabPane tab="你关注的仓库" key="2">
              {
                userStaredRepos.map((repo, index) => <Repo repo={repo} key={index}></Repo>)
              }
            </Tabs.TabPane>
          </Tabs>
          
        </div>
        <style jsx>{`
          .root {
            display: flex;
            align-items: flex-start;
            padding: 20px 0;
          }
          .user-info {
            width: 200px;
            margin-right: 40px;
            display: flex;
            flex-shrink: 0;
            flex-direction: column;
          }
          .login {
            margin-top: 20px;
            font-weight: 800;
            font-size: 20px;
          }
          .name {
            font-size: 16px;
            color: #777;
          }
          .bio {
            margin-top: 20px;
            color: #333;
          }
          .avatar {
            width: 100%;
            border-radius: 5px;
          }
          .user-repos {
            flex: 1;
          }
        `}</style>
      </div>
    </>
  )
} 


// 服务端获取数据
Index.getInitialProps = async ({ ctx, reduxStore }) => {
  const user = reduxStore.getState().user
  // 判断用户是否已登录
  if (!user || !user.id) {
    return {
      isLogin: false
    }
  }
  // 客户端访问的时候缓存一下
  if (!isServer) {
    // if (cachedUserRepos && cachedUserStaredRepos) {
    //   return {
    //     userRepos: cachedUserRepos,
    //     userStaredRepos: cachedUserStaredRepos
    //   }
    // }
    if (cache.get('userRepos') && cache.get('userStaredRepos')) {
      return {
        userRepos: cache.get('userRepos'),
        userStaredRepos: cache.get('userStaredRepos')
      }
    }
  }

  const userRepos = await api.request(
    {
      url: `/user/repos`
    },
    ctx.req,
    ctx.res
  )
  // 获取关注接口
  const userStaredRepos = await api.request(
    {
      url: '/user/starred'
    },
    ctx.req,
    ctx.res
  )

  return {
    isLogin: true,
    userRepos: (userRepos && userRepos.data) || [],
    userStaredRepos: (userStaredRepos && userStaredRepos.data) || []
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  }
}

export default withRouter(connect(mapStateToProps)(Index))

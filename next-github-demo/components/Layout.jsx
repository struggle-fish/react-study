import { useState, useCallback } from 'react'
import { withRouter } from 'next/router'
import getConfig from 'next/config'
import Link from 'next/link'
import { connect } from 'react-redux'
import axios from 'axios'


import {
  Layout,
  Input,
  Avatar,
  Tooltip,
  Menu,
  Dropdown
} from 'antd'

import { GithubOutlined, UserOutlined } from '@ant-design/icons';

import { logout } from '../store/store'


// 引入包裹 div
import Container from './Container'


const { Header, Content, Footer } = Layout
const { publicRuntimeConfig } = getConfig()






const githubIconStyle = {
  color: 'white',
  fontSize: 40,
  display: 'block',
  paddingTop: 10,
  marginRight: 20
}
const footerStyle = {
  textAlign: 'center'
}



const MyLayout =  ({ children, user, logout, router }) => {
  const urlQuery = router.query && router.query.query
  const [search, setSearch] = useState(urlQuery || '')

  const handleSearchChange = useCallback(
    (event) => {
      setSearch(event.target.value)
    },
    [setSearch],
  )

  // 点击搜索
  const handleOnSearch = useCallback(
    () => {
      router.push(`/search?query=${search}`)
    },
    [search]
  )

  // 点击退出
  const handleLogout = useCallback(() => {
    logout()
  }, [logout])

  const userDropDown = (
    <Menu>
      <Menu.Item>
        <a onClick={handleLogout}>
          退 出
        </a>
      </Menu.Item>
    </Menu>
  )

  // 点击登录
  const handleGotoOAuth = useCallback((e) => {
    e.preventDefault()
    console.log(router, '点击登录----')
    axios.get(`/prepare-auth?url=${router.asPath}`)
    .then(resp => {
      if (resp.status === 200) {
        location.href = publicRuntimeConfig.OAUTH_URL
      } else {
        console.log('prepare auth 错误', resp)
      }
    })
    .catch(err => {
      console.log('prepare auth 错误-err', err)
    })
  }, [])

  return (
    <>
    <Layout>
      <Header>
        <Container renderer={<div className="header-inner"/>}>
          <div className="header-left">
            <div className="logo">
              <Link href="/">
                <GithubOutlined style={githubIconStyle}></GithubOutlined>
              </Link>
            </div>
            <div>
              <Input.Search 
                placeholder="搜索仓库"
                value={search}
                onChange={handleSearchChange}
                onSearch={handleOnSearch}></Input.Search>
            </div>
          </div>
          <div className="header-right">
            <div className="user">
              {
                user && user.id ? (
                  <Dropdown overlay={userDropDown}>
                    <a href="/">
                      <Avatar size={40} src={user.avatar_url}></Avatar>
                    </a>
                  </Dropdown>
                ) : (
                  <Tooltip title="点击进行登录">
                    {/* <a href={`/prepare-auth?url=${router.asPath}`}>
                      <Avatar size={40} icon={<UserOutlined/>}></Avatar>
                    </a> */}
                    <a onClick={handleGotoOAuth}>
                      <Avatar size={40} icon={<UserOutlined/>}></Avatar>
                    </a>
                  </Tooltip>
                )
              }
            </div>
          </div>
        </Container>
      </Header>
      <Content>
        <Container >
          { children }
        </Container>
      </Content>
      <Footer style={footerStyle}>江小鱼 2020年3月15晚</Footer>
    </Layout>
    <style jsx>{`
      .header-inner {
        display: flex;
        justify-content: space-between;
      }
      .header-left {
        display: flex;
        justify-content: flex-start;
      }
    `}</style>
    <style jsx global>{`
      #__next {
        height: 100%;
      }
      .ant-layout {
        min-height: 100%;
      }
      .ant-layout-header {
        padding-left: 0;
        padding-right: 0;
      }
      .ant-layout-content {
        background-color: #FFFFFF;
      }
    `}</style>
    </>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MyLayout))
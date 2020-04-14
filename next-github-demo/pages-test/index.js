import { useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { Button } from 'antd'
import Router from 'next/router'
import { connect } from 'react-redux'
import getConfig from 'next/config'



import { add } from '../store/store'


const { publicRuntimeConfig } = getConfig()




// 路由前事件
const events = [
  'routeChangeStart',
  'routeChangeComplete',
  'routeChangeError',
  'beforeHistoryChange',
  'hashChangeStart',
  'hasChangeComplete'
]

function makeEvent(type) {
  return (...args) => {
    console.log(type, ...args)
  }
}

events.forEach(event => {
  Router.events.on(event, makeEvent(event))
})


const Home = ({ counter, username, rename, add }) => {
  
  function gotoTestPage() {
    Router.push({
      pathname: '/test',
      query: {
        id: 2
      }
    })
  }
  function gotoTestPage2() {
    Router.push({
      pathname: '/test',
      query: {
        id: 2   
      }
    }, '/test/2')
  }

  useEffect(() => {
    axios.get('/api/user/info').then(resp => console.log(resp))
  }, [])

  return (
    <>
      <Link href="/test?id=1">
        <Button>首页测试 Link跳转</Button>
      </Link><br></br>
      <Link href="/hookstest?id=1">
        <Button>Hooks测试 Link跳转</Button>
      </Link><br></br>
      <Button onClick={gotoTestPage}>首页测试 js跳转</Button><br></br>
      <Link href="/test?id=1" as="/test/1">
        <Button>首页测试 路由映射情况 /a/:id</Button>
      </Link><br></br>
      <Button onClick={gotoTestPage2} className="btn">首页测试 js跳转 /a/:id</Button><br></br>
      <a>测试样式</a>
      <button className="button">按钮</button><br></br>
      count:{counter}<br></br>
      username:{username}<br></br>
      <input value={username} onChange={(e) => rename(e.target.value)}></input><br></br>
      <button onClick={() => add(counter)}>加</button><br></br>
      <a href={publicRuntimeConfig.OAUTH_URL}>
          去登录
      </a>
      <style jsx>{`
        a {
          color: red;
        }
        .button {
          color: red;
        }
      `}</style>
      <style jsx global>{`
        .btn {
          color: red;
        }  
      `}</style>
    </>
  )
}

Home.getInitialProps = async ({ reduxStore }) => {
  reduxStore.dispatch(add(3))
  return {}
}


const mapStateToProps = (state, ownProps) => {
  return {
    counter: state.counter.count,
    username: state.user.username
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    add: (num) => {
      return dispatch({ type: 'ADD', num })
    },
    rename: (name) => dispatch({ type: 'UPDATE_USERNAME', name: name })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
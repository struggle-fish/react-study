import App, { Container } from 'next/app'
import { Provider } from 'react-redux'
import 'antd/dist/antd.css'
import Layout from '../components/Layout'
import MyContext from '../lib/my-context'

// import store from '../store/store'

import testHoc from '../lib/width-redux'


class MyApp extends App {
  // 获取数据
  static async getInitialProps (ctx) {
    const { Component } = ctx
    let pageProps = ''
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return {
      pageProps
    }
  }

  render () {
    // 渲染的页面组件
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Container>
        <Layout>
          <Provider store={reduxStore}>
            <MyContext.Provider value="text">
              <Component {...pageProps}></Component>
            </MyContext.Provider>
          </Provider>
        </Layout>
      </Container>
    )
  }
}


export default testHoc(MyApp)
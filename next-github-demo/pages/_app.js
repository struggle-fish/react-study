import App from 'next/app'
import { Provider } from 'react-redux'
import Router from 'next/router'



import 'antd/dist/antd.css'
import Layout from '../components/Layout'


import withRedux from '../lib/with-redux'
import PageLoading from '../components/PageLoading'


class MyApp extends App {
  constructor(props) {
    super(props)
  }
  state = {
    loading: false
  }
  
  startLoading = () => {
    console.log('准备切换了--------')
    this.setState({
      loading: true
    })
  }

  stopLoading = () => {
    this.setState({
      loading: false
    })
  }

  componentDidMount() {
    Router.events.on('routeChangeStart', this.startLoading)
    Router.events.on('routeChangeComplete', this.stopLoading)
    Router.events.on('routeChangeError', this.stopLoading)
  }

  componentWillUnmount() {
    Router.events.off('routeChangeStart', this.startLoading)
    Router.events.off('routeChangeComplete', this.stopLoading)
    Router.events.off('routeChangeError', this.stopLoading)
  }

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
      <Provider store={reduxStore}>
        {
          this.state.loading ? <PageLoading/> : null
        }
        <Layout>
          <Component {...pageProps}></Component>
        </Layout>
    </Provider>
    )
  }
}


export default withRedux(MyApp)
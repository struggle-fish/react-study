const axios = require('axios')
const config = require('../config')

const { client_id, client_secret, request_token_url } = config.github

module.exports = async (server) => {
  // 登录授权处理
  server.use(async (ctx, next) => {
    if (ctx.path === '/auth') {
      const code = ctx.query.code
      console.log(code, '验证码---324')
      if (!code) {
        ctx.body = 'code 不存在'
        return
      }
      const result = await axios({
        method: 'POST',
        url: request_token_url,
        data: {
          client_id,
          client_secret,
          code
        },
        headers: {
          Accept: 'application/json'
        }
      })
      if (result.status === 200 && (result.data && !result.data.error)) {
        ctx.session.githubAuth = result.data
        const { access_token, token_type } = result.data

        // 根据 token 获取用户信息
        const userInfoResp = await axios({
          method: 'GET',
          url: `https://api.github.com/user`,
          headers: {
            'Authorization': `${token_type} ${access_token}`
          }
        })

        // console.log(userInfoResp.data, 'userInfoResp')

        // 保存在 session 中
        ctx.session.userInfo = userInfoResp.data


        ctx.redirect((ctx.session && ctx.session.urlBeforeOAuth) || '/')
        ctx.session.urlBeforeOAuth = ''
      } else {
        const errorMsg = result.data && result.data.error
        ctx.body = `请求失败了${errorMsg}`
      }
    } else {
      await next()
    }
  })

  // 退出处理
  server.use(async (ctx, next) => {
    const path = ctx.path
    const method = ctx.method
    if (path === '/logout' && method === 'POST') {
      ctx.session = null
      ctx.body = 'logout success'
    } else {
      await next()
    }
  })

  server.use(async (ctx, next) => {
    const path = ctx.path
    const method = ctx.method
    if (path === '/prepare-auth' && method === 'GET') {
      const { url } = ctx.query
      console.log(ctx.query, '去登录钱-----服务端')
      // TODO：这里是有问题的，，暂时没有解决 Link跳转详情页面登录，，url 不是 /detail 而是 /
      ctx.session.urlBeforeOAuth = url
      console.log(ctx.session.urlBeforeOAuth, 'urlBeforeOAuth')
      ctx.body = 'ready'
      // 另一种方法
      // ctx.redirect(config.OAUTH_URL)
    } else {
      await next()
    }
  })
}
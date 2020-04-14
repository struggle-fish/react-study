const Koa = require('koa')
const Router = require('koa-router')
const next = require('next')
const session = require('koa-session')
const Redis = require('ioredis')
const auth = require('./server/auth')

const RedisSessionStore = require('./server/session-store')


const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

const handle = app.getRequestHandler()

// 创建 redis client
const redis = new Redis()

app.prepare().then(() => {
  const server = new Koa()
  const router = new Router()

  // 设置一个随意的 key
  server.keys = ['fish develop Github App']
  const SESSION_CONFIG = {
    key: 'fishid',
    store: new RedisSessionStore(redis)
  }

  server.use(session(SESSION_CONFIG, server))

  // 配置处理 github OAuth 的登录
  auth(server)


  // 测试使用
  router.get('/test/:id', async(ctx) => {
    const id = ctx.params.id
    await handle(ctx.req, ctx.res, {
      pathname: '/test',
      query: {
        id
      }
    })
    ctx.respond = false 
  })
  // 测试使用
  router.get('/api/user/info', async(ctx) => {
    const user = ctx.session.userInfo
    if (!user) {
      ctx.status = 401
      ctx.body = '需要登录'
    } else {
      ctx.body = ctx.session.userInfo
      ctx.set('Content-Type', 'application/json')
    }
  })

  // 测试使用
  router.get('/set/user', async(ctx) => {
    ctx.session.user = {
      name: 'fish',
      age: 18
    }
    ctx.body = 'set session success'
  })

  router.get('/delete/user', async(ctx) => {
    ctx.session = null
    ctx.body = 'delete session success'
  })



  server.use(router.routes())

  server.use(async (ctx, next) => {
    ctx.req.session = ctx.session
    await handle(ctx.req, ctx.res)
    ctx.respond = false 
  })

  server.listen(3000, () => {
    console.log('koa server listening on 3000')
  })
})




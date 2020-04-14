const Koa = require('koa')
const Router = require('koa-router')
const next = require('next')
const session = require('koa-session')
const Redis = require('ioredis')
const koaBody = require('koa-body')
const auth = require('./server/auth')
const atob = require('atob')
const RedisSessionStore = require('./server/session-store')
const api = require('./server/api')


const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

const handle = app.getRequestHandler()

// 创建 redis client
const redis = new Redis()

// 设置nodejs 全局增加一个atob 方法
global.atob = atob

app.prepare().then(() => {
  const server = new Koa()
  const router = new Router()
  server.use(koaBody())
  // 设置一个随意的 key
  server.keys = ['fish develop Github App']
  const SESSION_CONFIG = {
    key: 'fishid',
    store: new RedisSessionStore(redis)
  }

  server.use(session(SESSION_CONFIG, server))

  // 配置处理 github OAuth 的登录
  auth(server)
  api(server)

  server.use(router.routes())

  server.use(async (ctx, next) => {
    ctx.req.session = ctx.session
    await handle(ctx.req, ctx.res)
    ctx.respond = false 
  })

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200
    await next()
  })

  server.listen(3000, () => {
    console.log('koa server listening on 3000')
  })
})





function getRedisSessionId (sid) {
  return `ssid:${sid}`
}

class RedisSessionStore {
  constructor (client) {
    this.client = client
  }


  // 获取 redis 中存储的session数据
  async get (sid) {
    // console.log('get session----', sid)
    const id = getRedisSessionId(sid)
    const data = await this.client.get(id)
    if (!data) {
      return null
    }
    try {
      const result = JSON.parse(data)
      return result
    } catch (error) {
      console.error('获取错了--23', error)
    }
  }

  // 存储 session 到 redis
  // sess 要存储的内容
  async set (sid, sess, ttl) {
    // console.log('set session----', sid)
    const id = getRedisSessionId(sid)
    if (typeof ttl === 'number') {
      ttl = Math.ceil(ttl / 1000)
    }

    try {
      const sessStr = JSON.stringify(sess)
      if (ttl) {
        await this.client.setex(id, ttl, sessStr)
      } else {
        await this.client.set(id, sessStr)
      }
    } catch (error) {
      console.error('存储报错了--38', error)
    }
  }

  // 从 redis 中删除某个 session
  async destroy (sid) {
    // console.log('destory session----', sid)
    const id = getRedisSessionId(sid)
    await this.client.del(id)
  }
}

module.exports = RedisSessionStore
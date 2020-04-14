const axios = require('axios')
const github_base_url = 'https://api.github.com'
const isServer = typeof window === 'undefined'

// 给服务端用的
async function requestGithub(method, url, data, headers) {
  console.log(`${github_base_url}${url}`, '服务端接口请求---324')
  return await axios({
    method,
    url: `${github_base_url}${url}`,
    data,
    headers
  }).catch(err => {
    console.log(err, `${url}请求错误`)
  })
}



// 给页面组件用的
async function request({ method = 'GET', url, data = {}, headers }, req, res) {
  if (!url) {
    throw Error('url 没传递')
  }
  // 区分服务端和客户端
  if (isServer) {
    console.log(url, '服务端url接口---')
    const session = req.session
    const githubAuth = session.githubAuth || {}
    const headers = {}
    console.log(githubAuth, 'githubAuth---服务端lib')
    if (githubAuth && githubAuth.access_token) {
      headers['Authorization'] = `${githubAuth.token_type} ${githubAuth.access_token}`
      console.log(`${githubAuth.token_type} ${githubAuth.access_token}`, '秘钥')
    }
    
    return await requestGithub(method, url, data, headers)
  } else {
    return await axios({
      method,
      url: `/github${url}`,
      data
    })
  }
}


module.exports = {
  request,
  requestGithub
}
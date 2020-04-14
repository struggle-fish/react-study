import { useEffect } from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import Repo from './Repo'
import api from '../lib/api'
import { get, cache } from '../lib/repo-basic-cache'

const isServer = typeof window === 'undefined'

function makeQuery(queryObject) {
  const query = Object.entries(queryObject)
  .reduce((result, entry) => {
    result.push(entry.join('='))
    return result
  }, []).join('&')
  return `?${query}`
}

export default function (Comp, type = 'index') {
  function WithDetail ({ repoBasic, router, ...rest }) {
    // console.log(rest, '剩余的参数')
    const query = makeQuery(router.query)
    
    useEffect(() => {
      if (!isServer) {
        cache(repoBasic)
      }
    }, [])
  
    return (
      <div className="root">
        <div className="repo-basic">
          <Repo repo={repoBasic}></Repo>
          <div className="tabs">
            {
              type === 'index' ? <span className="tab">Readme</span> : (
                <Link href={`/detail${query}`}>
                  <a className="tab index">
                    Readme
                  </a>
                </Link>
              )
            }
            {
              type === 'issues' ? <span className="tab">Issues</span> : (
                <Link href={`/detail/issues${query}`}>
                  <a className="tab issues">
                    Issues
                  </a>
                </Link>
              )
            }
            
          </div> 
        </div> 
        <div>
          <Comp {...rest}></Comp>
        </div>
        <style jsx>{`
          .root {
            padding-top: 20px;
          }
          .repo-basic {
            padding: 20px;
            border: 1px solid #eee;
            margin-bottom: 20px;
            border-radius: 5px;
          }
          .tab + .tab {
            margin-left: 20px;
          }
        `}</style>
      </div>
    )
  } 
  
  
  
  // 服务端数据
  WithDetail.getInitialProps = async (context) => {
    const { ctx, router } = context
    // return new Promise(resolve => {
    //   setTimeout(() => {
    //     resolve({})
    //   }, 2000)
    // })
    const { owner, name } = ctx.query // 此处使用 ctx.query 保证url是实时
    const full_name = `${owner}/${name}`

  
    let pageData = {}
    if (Comp.getInitialProps) {
      pageData = await Comp.getInitialProps(context)
    }

    if (get(full_name)) {
      return {
        repoBasic: get(full_name),
        ...pageData
      }
    }

    const repoBasic = await api.request(
      {
        url: `/repos/${owner}/${name}`
      },
      ctx.req,
      ctx.res
    )
    return {
      repoBasic: repoBasic.data,
      ...pageData
    }
  }

  return withRouter(WithDetail)
}

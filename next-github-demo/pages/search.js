import { isValidElement, useEffect } from 'react'
import { withRouter } from 'next/router'
import { Row, Col, List, Pagination } from 'antd'
import Link from 'next/link'
import Repo from '../components/Repo'

import { cacheArray } from '../lib/repo-basic-cache'

const isServer = typeof window === 'undefined'


/**
 * 
 * sort 排序方式
 * order 排序顺序
 * lang 仓库的项目开发主语言
 * page 分页页面
 */

const api = require('../lib/api')



// 搜索条件
const LANGUAGES = ['JavaScript', 'HTML', 'CSS', 'TypeScript', 'Java']
const SORT_TYPES = [
  {
    name: 'Best Match'
  },
  {
    name: 'Most Stars',
    value: 'stars',
    order: 'desc'
  },
  {
    name: 'Fewest Stars',
    value: 'stars',
    order: 'asc'
  },
  {
    name: 'Most Forks',
    value: 'forks',
    order: 'desc'
  },
  {
    name: 'Fewest Forks',
    value: 'forks',
    order: 'asc'
  }
]

const selectedItemStyle = {
  borderLeft: '2px solid #e36209',
  fontWeight: 100
}

const FilterLink = ({ name, query, lang, sort, order, page }) => {
  // 点击搜索
  // const doSearch = config => {
  //   Router.push({
  //     pathname: '/search',
  //     query: {
  //       query,
  //       lang,
  //       sort,
  //       order
  //     }
  //   })
  // }
  let queryString = `?query=${query}`
  if (lang) {
    queryString += `&lang=${lang}`
  }
  if (sort) {
    queryString += `&sort=${sort}&order=${order || 'desc'}`
  }
  if (page) {
    queryString += `&page=${page}`
  }
  queryString += `&per_page=${per_page}`
  return (
    <Link href={`/search${queryString}`}>
      {
        isValidElement(name) ? name : <a >{ name }</a>
      }
    </Link>
  )
}



function noop () {}
const per_page = 30


function Search({ router, repos }) {
  console.log(repos, 'sousuo')
  const { ...querys } = router.query
  const { lang, sort, order, page } = router.query

  useEffect(() => {
    if (!isServer) {
      cacheArray(repos.items)
    }
  })


  return (
    <div className="root">
      <Row gutter={20}>
        <Col span={6}>
          <List
            bordered
            header={<span className="list-header">语言</span>}
            style={{ marginBottom: 20 }}
            dataSource={LANGUAGES}
            renderItem={ item => {
              let selected = lang === item
              return (
                <List.Item style={selected ? selectedItemStyle : null}>
                  {
                    selected ? <span>{item}</span> : <FilterLink
                    {...querys}
                    lang={item}
                    name={item}/>
                  }
                </List.Item>
              )
            } }
          ></List>
          <List
            bordered
            header={<span className="list-header">排序</span>}
            dataSource={SORT_TYPES}
            renderItem={item => {
              let selected = false
              if (item.name === 'Best Match' && !order) {
                selected = true
              } else if (item.value === sort && item.order === order) {
                selected = true
              }
              return (
                <List.Item style={selected ? selectedItemStyle : null}>
                  {
                    selected ? <span>{ item.name }</span> : <FilterLink
                    {...querys}
                    sort={item.value}
                    order={item.order}
                    name={item.name}/>
                  }
                </List.Item>
              )
            }}
          ></List>
        </Col>
        <Col span={18}>
          <h3 className="repos-title">{ repos.total_count }个仓库</h3>
          {
            repos.items.map(repo => <Repo repo={repo} key={repo.id} />)
          }
          <div className="pagination">
            <Pagination
              pageSize={per_page}
              current={Number(page) || 1}
              total={1000}
              onChange={noop}
              itemRender={(page, type, ol) => {
                const p = type === 'page'?  page : type === 'prev' ? page - 1 : page + 1
                const name = type === 'page' ? page : ol
                return <FilterLink {...querys} page={p} name={name}></FilterLink>
              }}
            ></Pagination>
          </div>
        </Col>
      </Row>
      <style jsx>{`
        .root {
          padding: 20px 0;
        }
        .list-header {
          font-weight: 800;
          font-size: 16px;
        }
        .repos-title {
          border-bottom: 1px solid #eee;
          font-size:  24px;
          line-height: 50px;
        }
        .pagination {
          padding: 20px;
          text-align: center;
        }
      `}</style>
    </div>
  )
}


// 服务端获取数据
Search.getInitialProps = async ({ ctx }) => {
  const { query, sort, lang, order, page } = ctx.query
  // 搜索词不存在的时候
  if (!query) {
    return {
      repos: {
        total_count: 0
      }
    }
  }

  let queryString = `?q=${query}`
  if (lang) {
    queryString += `+language:${lang}`
  }
  if (sort) {
    queryString += `&sort=${sort}&order=${order || 'desc'}`
  }
  if (page) {
    queryString += `&page=${page}`
  }
  queryString += `&per_page=${per_page}`
  const result = await api.request(
    {
      url: `/search/repositories${queryString}`
    },
    ctx.req,
    ctx.res
  )
  
  return {
    repos: (result && result.data) || []
  }

}

export default withRouter(Search)
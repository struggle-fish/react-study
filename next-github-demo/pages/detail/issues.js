import { useState, useCallback } from 'react'
import { Avatar, Button, Select, Spin } from 'antd'
import withRepoBasic from '../../components/with-repo-basic'
import SearchUser from '../../components/SearchUser'
import api from '../../lib/api'
import { getastUpdated } from '../../lib/utils'
import dynamic from 'next/dynamic'


const MDRender = dynamic(() => import('../../components/MarkdownRender'))

function IssueDetail ({ issue }) {
  return (
    <div className="root">
      <MDRender content={issue.body}></MDRender>
      <div className="actions">
        <Button href={issue.html_url} target="_blank">
          打开issue讨论页面
        </Button>
      </div>
      <style jsx>{`
        .root {
          background-color: #fefefe;
          padding: 20px;
        }
        .actions {
          text-align: right;
        }
      `}</style>
    </div>
  )
}


function IssuesItem({ issue }) {
  const [ showDetail, setShowDetail ] = useState(false)

  const toggleShowDetail = useCallback(() => {
    setShowDetail(detail => !detail)
  }, [])

  return (
    <div>
      <div className="issue">
        <Button 
          type="primary"
          size="small"
          onClick={toggleShowDetail}
          style={{ position: 'absolute', right: 10, top: 10 }}>
          { showDetail ? '隐藏' : '查看' }
        </Button>
        <div className="avatar">
          <Avatar src={issue.user.avatar_url} shape="square" size={50}></Avatar>
        </div>
        <div className="main-info">
          <h6>
            <span>{ issue.title }</span>
          </h6>
          <p className="sub-info">
            <span>Updated at { getastUpdated(issue.updated_at) }</span>
          </p>
        </div>
        <style jsx>{`
          .issue {
            display: flex;
            position: relative;
            padding: 10px;
          }
          .issue:hover {
            background-color: #fafafa;
          }
          .issue + .issue {
            border-top: 1px solid #eee;
          }
          .main-info > h6 {
            padding-right: 40px;
            max-width: 600px;
            font-size: 16px;
          }
          .avatar {
            margin-right: 20px;
          }
          .sub-info {
            margin-bottom: 0;
          }
          .sub-info > span + span {
            display: inline-block;
            margin-right: 20px;
            font-size: 12px;
          }

        `}</style>
      </div>
      {
        showDetail ? <IssueDetail issue={issue}></IssueDetail> : null
      }
    </div>
  )
}



const Option = Select.Option

function makeQuery(creator, state, labels) {
  let creatorStr = creator ? `creator=${creator}` : ''
  let stateStr = state ? `state=${state}` : ''
  let labelStr = ''
  if (labels && labels.length > 0) {
    labelStr = `labels=${labels.join(',')}`
  } 
  const arr = []
  if (creatorStr) {
    arr.push(creatorStr)
  }
  if (stateStr) {
    arr.push(stateStr)
  }
  if (labelStr) {
    arr.push(labelStr)
  }
  return `?${arr.join('&')}`
}


function Issues({ initialIssues, labels, owner, name }) {


  const [ creator, setCreator ] = useState()
  const [ state, setState ] = useState()
  const [ label, setLabel ] = useState([])
  const [ issues, setIssues ] = useState(initialIssues)
  const [ fetching, setFetching ] = useState()



  const handleCreatorChange = useCallback((value) => {
    setCreator(value)
  }, [])
  const handleStateChange = useCallback((value) => {
    setState(value)
  }, [])
  const handleLabelChange = useCallback((value) => {
    setLabel(value)
  }, [])



  const handleSearch = useCallback(() => {
    setFetching(true)
    api.request(
      {
        url: `/repos/${owner}/${name}/issues${makeQuery(creator, state, label)}`
      }
    ).then(resp => {
      setIssues(resp.data)
      setFetching(false)
    }).catch(error => {
      console.log(error)
      setFetching(false)
    })
  }, [owner, name, creator, state, label])


  return (
    <div className="root">
      <div className="search">
        <SearchUser 
          onChange={handleCreatorChange}
          value={creator}></SearchUser>
        <Select
          placeholder="状态"
          onChange={handleStateChange}
          value={state}
          style={{ width: 200, marginLeft: 20 }}
        >
          <Option value="all">all</Option>
          <Option value="open">open</Option>
          <Option value="closed">closed</Option>
        </Select>
        <Select 
          placeholder="label"
          mode="multiple"
          onChange={handleLabelChange}
          value={label}
          style={{ flexGrow: 1, marginLeft: 20, marginRight: 20 }}
        >
          {
            labels.map(la => <Option value={la.name} key={la.id}>
              {
                la.name
              }
            </Option>)
          }
        </Select>
        <Button type="primary" disabled={fetching}  onClick={handleSearch}>搜索</Button>
      </div>
      {
        fetching ? <div className="loading"><Spin></Spin></div> : (
          <div className="issues">
            {
              issues.map(issues => <IssuesItem issue={issues} key={issues.id}></IssuesItem>)
            }
          </div>
        )
      }
      <style jsx>{`
        .issues {
          border: 1px solid #eee;
          border-radius: 5px;
          margin-bottom: 20px;
          margin-top: 20px;
        }
        .search {
          display: flex;
          
        }
        .loading {
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  )
}


Issues.getInitialProps = async ({ ctx }) => {
  const { owner, name } = ctx.query
  const fetchs = await Promise.all([
    await api.request(
      {
        url: `/repos/${owner}/${name}/issues`
      },
      ctx.req,
      ctx.res
    ),
    await api.request(
      {
        url: `/repos/${owner}/${name}/labels`
      },
      ctx.req,
      ctx.res
    )
  ])

  return {
    owner: owner,
    name: name,
    initialIssues: fetchs[0].data,
    labels: fetchs[1].data
  }
}

export default withRepoBasic(Issues, 'issues')
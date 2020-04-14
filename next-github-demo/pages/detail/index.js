import dynamic from 'next/dynamic'
import withRepoBasic from '../../components/with-repo-basic'
// import MDRender from '../../components/MarkdownRender'

import api from '../../lib/api'
// 提取公用代码并进行缓存 dynamic
const MDRender = dynamic(
  () => import('../../components/MarkdownRender'),
  {
    loading: () => <p>正在加载异步 js</p>
  }
)


function Detail({ readme }) {
  return (
    <>
      <MDRender content={readme.content} isBase64={true} ></MDRender>
    </>
  )
}


Detail.getInitialProps = async ({ ctx: { query: { owner, name }, req, res } }) => {
  const readmeResp = await api.request(
    {
      url: `/repos/${owner}/${name}/readme`
    },
    req,
    res
  )

  return {
    readme: readmeResp.data
  }
}

export default withRepoBasic(Detail, 'index')

import Link from 'next/link'
import dynamic from 'next/dynamic'
import { withRouter } from 'next/router'
import { Button } from 'antd'
import styled from 'styled-components'
// import moment from 'moment'

// import Comp from '../components/Comp'
// 异步组件
const Comp = dynamic(import('../components/Comp'))

const Title = styled.h1`
  color: yellow;
  font-size: 40px;
`

const Test = ({ router, name, time }) => (
  <>
    我是测试页面
    <Title>title- {time}</Title>
    <Link href="/">
      <Button>测试 Link</Button>
    </Link><br></br>
    url上的参数{router.query.id}<br></br>
    传惨---{name}<br></br>
    <Comp></Comp>
  </>
)

Test.getInitialProps = async (ctx) => {
  // 按需加载模块
  const moment = await import('moment')
  return {
    name: 'jokcy',
    time: moment.default(Date.now() - 60 * 1000).fromNow()
  }
}

export default withRouter(Test)

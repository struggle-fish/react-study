import React, { useState, useEffect, useReducer, useContext, useRef } from 'react'
import MyContext from '../lib/my-context'
// 常规方式
class MyCount extends React.Component {
  constructor () {
    super()
    this.ref = React.createRef()
  }
  state = {
    count: 0
  }

  componentDidMount () {
    // this.ref.current  获取ref 节点
    this.interval = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      })
    }, 1000);
  }

  componentWillUnmount () {
    if (this.interval) {
      clearInterval(this.interval)
    }
  }

  render () {
    return (
      <span ref={this.ref}> { this.state.count }</span>
    )
  }
}

function countReducer (state, action) {
  switch (action.type) {
    case 'add': 
      return state + 1
    case 'minus': 
      return state - 1
    default:
      return state
  }
}

function MyCountFunc () {
  // const [ count, setCount ] = useState(0)

  // setCount(1) 传参数给 count
  // setCount((c) => c + 1) 基于最新的 count 值做修改

  const [ count, dispatchCount ] = useReducer(countReducer, 0)
  const [ name, setName ] = useState('jokcy')

  // 组件渲染完成后会执行 useEffect里的回调函数
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // setCount( c => c + 1)
  //     dispatchCount({ type: 'add' })
  //   }, 1000);
  //   return () => clearInterval(interval)
  // }, [])

  useEffect(() => {
    console.log('effect invoked')
    console.log(inputRef, 'inputRef')
    return () => console.log('effect deteched')
  })

  const context = useContext(MyContext)
  const inputRef = useRef()

  return (
    <div>
      <input value={name} ref={inputRef} onChange={(e) => setName(e.target.value)}></input>
      <button onClick={() => dispatchCount({ type: 'add' })}>{count}</button>
      <p>context: 
        {
          context
        }
      </p>
    </div>
  )
}


// export default MyCount
export default MyCountFunc
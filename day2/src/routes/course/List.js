import React from 'react';
import { connect } from 'react-redux';
import { Carousel, Icon, Button } from 'antd'
import { Link } from 'react-router-dom';
import action from '../../store/action';

class List extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isLoading: false
    }
  }
  async componentDidMount() {
    let { queryBanner, bannerData, courseData, queryList } = this.props;
    if (!bannerData || bannerData.length === 0) {
      await queryBanner();
    }
    if (courseData.data.length === 0) {
      queryList();
    }
  }
  componentWillReceiveProps () {
    // 属性改变触发
    this.setState({
      isLoading: false
    })
  }
  
  // 查询类型
  queryType = () => {
    let { courseType } = this.props;
    let text = '全部课程';
    switch(courseType) {
      case 'react':
        text = 'react框架开发课程';
      break;
      case 'vue':
        text = 'vue框架开发课程';
      break;
      case 'node':
        text = 'node框架开发课程';
      break;
    }
    return text;
  }
  // 加载更多
  loadMore = () => {
    let { queryList, courseData, courseType } = this.props;

    // 防止快速点击
    if (this.state.isLoading) return;
    this.setState({
      isLoading: true
    });
    // 重新发送新的dispatch
    queryList({
      page: courseData.page + 1,
      type: courseType,
      flag: 'push'
    });
  }
  render() {
    let { bannerData, courseData } = this.props;
    let { data } = courseData;
    return <div className='listBox'>
      {/* 轮播图 */}
      { 
        bannerData && bannerData.length ?  (<Carousel autoplay>
          { bannerData.map((item, index) => {
            let {pic} = item
            return <div key={index}>
              <img src={pic} />
            </div>
          }) }
        </Carousel>) : ''
      }
      {/* 数据列表 */}
      <div className='courseList'>
        <h2>
          <Icon type='menu-fold'></Icon>
          {this.queryType()}
        </h2>
        { data && data.length !== 0 ? (
          <div>
            <ul>
              {data.map((item, index) => {
                let { name, pic, dec, id, time } = item;
                return <li key={index}>
                  <Link to={{
                    pathname: '/course/info',
                    search: `?courseID=${id}`
                  }}>
                    <h3>{name}</h3>
                    <div className='content'>
                      <div className='pic'>
                        <img src={pic}/>
                      </div>
                      <div className='desc'>
                        <p>课程描述: {dec}</p>
                        <p>时间： {time}</p>
                      </div>
                    </div>
                  </Link>
                </li>
              })}
            </ul>
            {courseData.total <= courseData.page ? '' : (<Button type='dashed' onClick={this.loadMore} loading={this.state.isLoading}>加载更多。。。</Button>)}
          </div>
        ) : '暂无数据~' }
      </div>
    </div>
  }
}
// 把redux挂载到属性上去
export default connect(state => ({...state.course}), action.course)(List);

import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { getHomeList } from './store/actions';
import withStyle from '../../WithStyle';
import styles from './style.css';

class Home extends Component {
  componentWillMount() {
    if (this.props.staticContext) {
      this.props.staticContext.css.push(styles._getCss());
    }
  }
  componentDidMount() {
    if (!this.props.list.length) {
      this.props.getHomeList(false);
    }
  }
  getList() {
    const { list } = this.props;
    return list.map(item => (
      <div key={item.id}>{item.name}</div>
    ))
  }
  render () {
    return (
      <>
        <Helmet>
          <title>这是ssr首页</title>
        </Helmet>
        <div className={styles.home}>
          <div>啊哈哈哈{this.props.name}</div>
          {
            this.getList()
          }
          <button onClick={() => {alert('啊哈哈333')}}>点击我</button>
        </div>
      </>
    )
  }
}



const mapStateToProps = state => ({
  name: state.home.name,
  list: state.home.newsList
});

const mapDispatchToProps = dispatch => ({
  getHomeList() {
    console.log('测试代码');
    dispatch(getHomeList());
  }
});

const ExportHome = connect(mapStateToProps, mapDispatchToProps)(withStyle(Home, styles));

ExportHome.loadData = (store) => {
  // 负责在服务端渲染之前，把这个路由需要的数据提前加载好
  return store.dispatch(getHomeList(true)); // promise
};
export default ExportHome;
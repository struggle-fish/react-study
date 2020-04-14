import React, {Component} from 'react';
import { connect } from 'react-redux';
import actions from '../../store/actions/home'
class Home extends Component {
  componentWillMount() {
    if (this.props.list.length == 0) {
      this.props.getHomeList();
    }
  }
  render () {
    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <ul className="list-group">
            {
              this.props.list.map(item => (
                <li className="list-group-item" key={item.id}>{item.name}</li>
              ))
            }
          </ul>
        </div>
      </div>
    )
  }
}


Home = connect(state => state.home ,actions)(Home);
// 此方法是用来异步加载数据的
Home.loadData = function(store) {
  // dispatch的返回值就是派发的action 
  return store.dispatch(actions.getHomeList());
}
export default Home;
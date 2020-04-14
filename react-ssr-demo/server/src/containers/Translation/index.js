import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { getTranslationList} from './store/actions';



class Translation extends Component {
  componentDidMount() {
    if (!this.props.list.length) {
      this.props.getTranslationList();
    }
  }
  getList() {
    const { list } = this.props;
    return list.map(item => (
      <div key={item.id}>{item.title}</div>
    ))
  }
  render () {
    if (this.props.login) {
      return (
        <div>
          Translation
          {this.getList()}
        </div>
      )
    } else {
      return (
        <div>
          Translation
          未登录
          <Redirect to='/'></Redirect>
        </div>
      )
    }
  }
}

Translation.loadData = (store) => {
  return store.dispatch(getTranslationList());
};

const mapStateToProps = state => ({
  list: state.translation.translationList,
  login: state.header.login
});

const mapDispatchToProps = dispatch => ({
  getTranslationList() {
    dispatch(getTranslationList());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Translation);
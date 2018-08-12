import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
class List extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    let { data } = this.props;
    return <ul className='list-group'>
      {data.map((item, index) => {
        let {id, name} = item;
        return <li className='list-group-item' key={index} onClick={ev => {
          // this.props.history.push('/custom/detail');
        }}>
          <Link to={{
            pathname: '/custom/detail',
            // search: `?id=${id}`,
            state: id
          }}>
            编号：{id}
            &nbsp;&nbsp;
            {name}
          </Link>
        </li>
      })}
    </ul>
  }
}

export default connect(state => ({...state.custom}))(List);
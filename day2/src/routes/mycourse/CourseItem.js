import React from 'react';
import { connect } from 'react-redux';
import action from '../../store/action';
import { Link } from 'react-router-dom';

class CourseItem extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    let {name, pic, dec, id, price, check} = this.props.item;
    return <li>
        {
          this.props.input ? (<input type='checkbox' checked={check} onChange={this.props.handleSelect.bind(this, id)}/>) : ''
        }
        <Link to={`/course/info?courseID=${id}`}>
            <h3>
              
              {name}
            </h3>
            <div className='content'>
                <div className='pic'>
                  <img src={pic} />
                </div>
                <div className='desc'>
                    <p>{dec}</p>
                    <p>价格: {price}</p>
                </div>
            </div>
        </Link>
    </li>;
  }
}

export default connect(state => ({...state.course}), action.course)(CourseItem) 
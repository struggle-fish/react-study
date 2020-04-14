import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import cls from 'classnames';
import SvgIcon from 'components/Icon-Svg';
import { homeUpdate } from '../../../store/moudules/home';

import styles from './index.less';


const mapStateToProps = ({ home }) => ({
  topBarShrink: home.topBarShrink,
  locationInfo: home.locationInfo
})

const mapActionsToProps = dispatch => bindActionCreators({ homeUpdate }, dispatch)

@connect(mapStateToProps, mapActionsToProps)
@withRouter
export default class TopBar extends React.PureComponent {

  render() {
    const { topBarShrink, history } = this.props;
    return (
      <div className={ cls({ [styles.header] : true, [styles.shrink] : false }) }>
        <div className={styles.location}>
          <SvgIcon className={styles.icon} name='#location'/>
          <span className={styles.address}>
            北京
          </span>
          <SvgIcon className={styles.down} name='#triangle_down_fill' />
        </div>
        <div className={styles.search} onClick={() => history.push('/search-shop')}>
          <SvgIcon className={styles.icon} name='#search'/>
          <p className={styles.desc}>搜索饿了么商家、商品名称3</p>
        </div>
      </div>
    )
  }
}









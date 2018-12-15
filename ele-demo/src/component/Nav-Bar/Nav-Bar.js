import React from 'react';
import styles from './Nav-Bar.less';
import SvgIcon from 'components/Icon-Svg';
import Proptypes from 'prop-types';
import cls from 'classnames';

export default class NavBar extends React.PureComponent {
  static proptypes = {
    iconLeft: Proptypes.string,
    iconRight: Proptypes.string,
    leftClick: Proptypes.func,
    rightClick: Proptypes.func,
    title: Proptypes.string,
    className: Proptypes.string
  }
  static defaultProps = {
    iconLeft: '',
    iconRight: '',
    leftClick: () => {},
    rightClick: () => {},
    title: ''
  }
  render() {
    const {
      iconLeft,
      iconRight,
      leftClick,
      rightClick,
      title,
      className
    } = this.props;
    return (
      <div className={cls(styles.nav, className)}>
        {
          iconLeft ? (
            <div className={styles.icon} onClick={leftClick}>
              <SvgIcon name={iconLeft}></SvgIcon>
            </div>
          ) : null
        }
        <div className={styles.title}>
          {title}
        </div>
        {
          iconRight ? (
            <div className={styles.icon} onClick={rightClick}>
              <SvgIcon name={iconRight}></SvgIcon>
            </div>
          ) : null
        }
      </div>
    )
  }
}

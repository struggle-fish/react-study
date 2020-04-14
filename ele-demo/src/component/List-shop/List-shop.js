import React from 'react';
import cls from 'classnames';
import Rate from '../../component/Rate/Rate';
import Badge from '../../component/Badge/Badge';
import styles from './List-shop.less';


export default class ShopListRow extends React.PureComponent {

  render () {
    return (
      <section className={styles['shop-row']}>
        <div className={styles['info-wrapper']}>
          <div className={styles['img']}>
            <img alt="" src={'https://fuss10.elemecdn.com/a/b3/259e1b77a1d4896f20f584087a9c4jpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/'} />
            <span className={styles.desc}>21：00开始配送</span>
          </div>
          <div className={styles.describe}>
            <h1 className={styles.name}>怡宝桶装水便利（中关村店）</h1>
            
            <div className={styles['rate-wrapper']}>
              <div className={styles.rate}>
                <Rate className={styles['reate-style']} value={4} size='1em'/>
              </div>
              <span className={styles.text}>4</span>
              <span className={styles.text}>{`月售50单`}</span>
              <Badge className={styles.delivery} text='蜂鸟配送'></Badge>
            </div>

            <div className={styles['price-info']}>
              <div className={styles.delivery}>
                <span className={styles.text}>{`￥20起配送`}</span>
                <i className={`${styles.line} hairline-v`}></i>
                <span className={styles.text}>
                  {`配送费￥20`}
                </span>
              </div>
              <div className={styles.address}>
                <span className={styles.text}>{`20km`}</span>
                <i className={`${styles.line} hairline-v`}></i>
                <span className={styles.text}>{`30分钟`}</span>
              </div>
            </div>
          </div>
        </div>
        <i className={`${styles['bottom-line']} hairline-h`}></i>
      </section>
    )
  }
}
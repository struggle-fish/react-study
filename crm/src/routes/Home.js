import React from 'react';
import { connect } from 'react-redux';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import { DatePicker, Icon, Button, LocaleProvider, Calendar  } from 'antd';
// import 'moment/src/'
import '../static/css/antd.css';

class Home extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      loading: true
    }
  }
  render() {
    return <LocaleProvider locale={zh_CN}>
     <div>
       <div style={{width: '500px', margin: '0 auto'}}>
        {/* <Calendar></Calendar> */}
        <Icon type='zhihu' style={{fontSize: '22px', color: 'red'}}></Icon>
        <Button type='danger' loading={this.state.loading}>危险</Button>
       </div>
     </div>
    </LocaleProvider>
  }
}

export default connect()(Home);
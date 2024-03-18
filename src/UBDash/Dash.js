import React from 'react';
import Dash_head from './Dash_head';
import Welcome from './Welcome';
import Dash_body from './Dash_body';
import Care_center from './Care_center';
import Calender from './Calender';
import './Dash.scss';
// import DashBody from './DashBody';
import { Row,Col } from 'antd';
import Book_History from './Book_History';
import Promotions from './Promotions';

const Dash = () => {
  return (
    <div className='dash'>
       <div className='dash_container'>
      <Dash_head/>
      <div className='dashbody'>
        <div className='dash_info'>
            <Row>
              <Col span={18} id='web'>
                <Dash_body/>
                <Care_center/>
                </Col>
                <Col span={6} id='web'>
                   <Calender/>
                  <Book_History/>                                   
                </Col>
                <Col span={24} id='ipad'>
                  <Dash_body/>
                  <Care_center/>
                  <Calender />
                  <Book_History />
                </Col>
            </Row>
        </div>
    </div>
      {/* <DashBody/> */}
      {/* <Row>
              <Col span={18}>
                <Dash_body/>
                <Care_center/>
                </Col>
                <Col span={6}>
                   <Calender/>
                  <Book_History/>                                   
                </Col>
            </Row> */}
    </div>
    </div> 
  );
}

export default Dash;

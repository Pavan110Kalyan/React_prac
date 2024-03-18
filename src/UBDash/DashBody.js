import React from 'react';
import Dash_body from './Dash_body';
// import Care_center from './Care_center';
// import './DashBody.scss';
import Calender from './Calender';
import { Col, Row } from 'antd';
import Bookings from './Bookings';
import Book_History from './Book_History';
const DashBody = () => {
  return (
    <div className='dashbody'>
        <div className='dash_info'>
            <Row>
              <Col span={18}>
                <Dash_body/>
                <Care_center/>
                </Col>
                <Col span={6}>
                   <Calender/>
                  <Book_History/>                                   
                </Col>
            </Row>
        </div>
    </div>
  );
}

export default DashBody;



{/* <div className='dash_body'>
            <Row>
            <Col span={24}>
                <Dash_body/>
                <Care_center/>
                </Col>
            </Row>
        </div>
        <div className='dash_side'>
           <Row>
            <Col span={24}>
                    <Calender/>
                    <Book_History/>                                   
                  </Col>
           </Row>
        </div>  */}
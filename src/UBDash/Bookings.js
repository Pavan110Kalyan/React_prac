import { CalendarOutlined } from '@ant-design/icons';
import React from 'react';
// import './Bookings.scss';
import welcome1 from '../images/welcome1.png';
import { Col, Row } from 'antd';
const Bookings = () => {
  return (
   <Row>
    <Col span={24}>
    <div className='bookings'>
      {/* <h3>Previous updates</h3> */}
      <div className='booking_history'>
       <div className='history_title'>
       <ul>
            <li>pending</li>
        </ul>
        <h2>genesis senior care</h2>
        <div className='position_tag'>
          <img src={welcome1}/>
          <h3>Senior Care</h3>
        </div>
       </div>
        <div className='history_body'>
            <div className='icon'>
            <CalendarOutlined id='calc'/>
            </div>
        <div className='historyBody_info'>
           <div className='checkin'>
                <h3>jan-12</h3>
               <h4>check in</h4>
           </div>
           <div className='checkout'>
                <h3>jan-13</h3>
               <h4>check out</h4>
           </div>
           <div className='bookingID'>
                <h3>GEQK309CN9</h3>
               <h4>booking id</h4>
           </div>
           <div className='payment'>
                <h3>online</h3>
               <h4>payment type</h4>
           </div>
        </div>
        </div>
      </div>
    </div>
    </Col>
   </Row>
  );
}

export default Bookings;

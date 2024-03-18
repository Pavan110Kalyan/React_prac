import React from 'react';
import header_logo from '../images/header_logo.png';
import './HeaderDropD.js';
import { BellOutlined, MenuOutlined } from '@ant-design/icons';
// import './Dash_head.scss';
import HeaderDropD from './HeaderDropD.js';
import uh from '../images/uh.png';

const Dash_head = () => {
  return (
    <div className='dash_head'>
            <div className='head2'>
              <h3><MenuOutlined /></h3>
              <img src={uh}/>
              <div className='rem'>
              <h1><BellOutlined /></h1>
              <h2>S</h2>
              </div>
            </div>
            {/* <div className='head1'> */}
              <div className='head_img'>
              <img src={header_logo}/>
              </div>
              <div className='head_nav'>
              <h1>Dashboard</h1>
              <h1>bookings</h1>
              <h1>appointment</h1>
              <h1>health records</h1>
              </div>
              <div className='head_log'>
              <h3><HeaderDropD /></h3>
              <h1><BellOutlined /></h1>
              <h2>S</h2>
              </div>
            {/* </div> */}
            {/* <div className='head_img'>
            <img src={header_logo}/>
            </div>
            <div className='head_nav'>
            <h1>Dashboard</h1>
            <h1>bookings</h1>
            <h1>appointment</h1>
            <h1>health records</h1>
            </div>
            <div className='head_log'>
            <h3><HeaderDropD /></h3>
            <h1><BellOutlined /></h1>
            <h2>S</h2>
            </div> */}
    </div>
  );
}

export default Dash_head;

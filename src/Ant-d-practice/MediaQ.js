import React from 'react';
import './MediaQ.scss'
import dev2prod from '../images/dev2prod.svg';
import { TwitterOutlined, FacebookOutlined, LinkedinOutlined, InstagramOutlined } from '@ant-design/icons';
const MediaQ = () => {
  return (
    <div className='header'>
      <div className='social_links'>
        <TwitterOutlined id='tw' />
        <FacebookOutlined id='fb' />
        <LinkedinOutlined id='in' />
        <InstagramOutlined id='ig' />
      </div>
      <div className='navi'>
        <div className='dev2prod_img'>
          <img src={dev2prod} alt="no-img" />
        </div>
        <div className='navi_details'>
          <h1 id='active'>Home</h1>
          <h1>About Us</h1>
          <h1>Services</h1>
          <h1>Contact Us</h1>
        </div>
      </div>
    </div>
  );
}

export default MediaQ;

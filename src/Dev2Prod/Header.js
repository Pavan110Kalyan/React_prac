import React from 'react';
import { TwitterOutlined, FacebookOutlined, LinkedinOutlined, InstagramOutlined, MenuOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
// import './Header.scss';
import dev2prod from '../images/dev2prod.svg';
import { Image, Icon } from 'antd';
import './Dev2Prod.scss';


const Header = () => {
  return (
    <div className='header'>
        <div className='social_links'>
           <TwitterOutlined  id='tw'/>
           <FacebookOutlined id='fb'/>
           <LinkedinOutlined  id='in'/>
           <InstagramOutlined id='ig'/>
        </div>
        <div className='navi'>
            <div className='dev2prod_img'>
              <img src={dev2prod} alt="no-img" />
            </div>
          <MenuOutlined id="navbar"/>
            <div className='navi_details'>
                <h1 className='home'>Home</h1>
                <h1>About Us</h1>
                <h1 >Services</h1>
                <h1>Contact Us</h1>
            </div>
        </div>
    </div>
  );
}

export default Header;

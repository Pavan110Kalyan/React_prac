import React from 'react';
import dev2prod from '../images/dev2prod.svg';
import { Link } from 'react-router-dom';
import { Button, Input } from 'antd';
import { TwitterOutlined, FacebookOutlined, LinkedinOutlined, InstagramOutlined } from '@ant-design/icons';
// import './Foot.scss';

const Foot = () => {
  return (
    <>
    <div className='foot'>
      <div className='foot_logo_details'>
        <img src={dev2prod}/>
        <p>Dev2Prod is an international team of technological pundits that helps startups and small businesses build and deploy modern-day technological marvels. Our experts come with decades of experience and deal with cutting-edge advanced solutions like Machine learning and Artificial Intelligence.</p>
      </div>
      <div className='foot_links_info'>
        <div className='links'>
            <h3>Usefull Links</h3>
            <h4>Home</h4>
            <h4>About Us</h4>
            <h4>Services</h4>
            <h4>Terms of services</h4>
            <h4>Primary policy</h4>

        </div>
        <div className='contact'>
            <h3>Contact Us</h3>
            <p>
                Plot.No: 97, Beside CGR international School
                Ayyappa Society Main Rd, Madhapur, Hyderabad 500081
                Telangana, India.<br/>
                <span>Email:</span> admin@dev2prod.com
            </p>
        </div>
        <div className='social_links'>
            <TwitterOutlined id='tw'/>
            <FacebookOutlined id='fb'/>
            <LinkedinOutlined id='in'/>
            <InstagramOutlined id='ig'/>
        </div>
      </div>
      <div className='feedback'>
        <h4>Send Us A Message</h4>
        <Input placeholder='Your Name'/>
        <Input placeholder='Your Email'/>
        <Input placeholder='Subject'/>
        <Input placeholder='Message'/>
        {/* <textarea placeholder='Message'></textarea> */}
        <Button>Send Message</Button>
      </div>
    
    </div>
    <div className='copyrights'>
    <h3>© Copyright <span>Dev2prod Soft Solutions.</span> All Rights Reserved</h3>
  </div>
  </>
  );
}

export default Foot;

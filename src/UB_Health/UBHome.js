import { Button } from 'antd';
import React from 'react';
import homeBanner from '../images/homeBanner.avif';
// import './UBHome.scss';

const UBHome = () => {
  return (
    <div className='ub_home'>
        <div className='ub_content'>
            <h1>ease your healthcare worries with uborahealth services</h1>
            <h2>senior care.</h2>
            <img src={homeBanner} alt='no-img' id='mobile_img'/>
            <h5>Uborahealth provides a one-stop solution for all your healthcare needs. From senior care to tele health and care giver, we have you covered. We provide comprehensive health care solutions that take the guesswork out of finding the right care for your family. We make sure you get the best-in-class service you deserve!</h5>
            <Button>get started</Button>
        </div>
        <div className='ub_img'>
            <img src={homeBanner} alt='no-img'/>
        </div>
      
    </div>
  );
}

export default UBHome;
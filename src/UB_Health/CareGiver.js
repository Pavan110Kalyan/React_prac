import { Button } from 'antd';
import React from 'react';
import CGiver from '../images/CGiver.png';
// import './CareGiver.scss';

const CareGiver = () => {
  return (
    <div className='caregiver'>
       <img src={CGiver} alt='no-img'/>
        <div className='caregiver_info'>
            <h1>Our Care Givers</h1>
            <h2>Look For You</h2>
            <h3>get professional caregiver services</h3>
            <h5>We understand that sometimes professional help is needed when taking care of your elderly or sick family members. With Uborahealth, you can easily book an experienced caregiver who will look after your loved ones in the comfort of their own home. We also provide professional, compassionate care givers who can offer support and assistance with tasks such as personal hygiene, meal preparation, mobility assistance and more. Our experienced team understands that.</h5>
            <Button>Book care giver</Button>
        </div>
        {/* <div className=''>
          <img src={CGiver} alt='no-img'/>
        </div> */}
    </div>
  );
}

export default CareGiver;

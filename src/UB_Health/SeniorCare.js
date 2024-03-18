import React from 'react';
import SCare from '../images/SCare.png';
import { Button } from 'antd';
// import './SeniorCare.scss';
const SeniorCare = () => {
  return (
    <div className='SeniorCare'>
      <div className='sc_info'>
        <h1>your's family trusted</h1>
        <h2>senior care</h2>
        <h3>care for your loved ones with uborahealth</h3>
        <h5>We understand that taking care of your loved ones can be a daunting task. With Uborahealth, we make it easy for you to make sure that they are in good hands. We provide professional senior care and tele health services so you can be sure that your loved ones are in safe hands. We understand that everyone has different needs when it comes to healthcare. That's why we offer a wide range of services, tailored to meet each individual's specific needs. Whether you're looking for senior care or just need a little extra help with daily tasks – our team is here to find you the right solution.
</h5>
        <Button>book day care</Button>
      </div>
      <div className='sc_img'>
        <img src={SCare} alt='no-img'/>
      </div>
    </div>
  );
}

export default SeniorCare;

import { Button } from 'antd';
import React from 'react';
import doctor from '../images/doctor.png';
// import './Doctors.scss';
import { CommentOutlined, VideoCameraOutlined } from '@ant-design/icons';

const Doctors = () => {
  return (
    <div className='doctor'>
      
      <img src={doctor} alt='no-img' />
       
        <div className='doctor_info'>
            <h1>Our Doctors</h1>
            <h2>Come to you</h2>
            <h3>Reduce Stress With Uborahealth</h3>
            <h5>Our telehealth services are designed to provide peace of mind when it comes to managing your health. With access to medical experts and up-to-date information, uborahealth information makes sure you have easy access to all the resources you need – whenever and wherever you need them. Enjoy easy access to quality healthcare from the comfort of your own home with our telehealth services. Our team of experts ensure you get the best service possible.</h5>
            <h4><VideoCameraOutlined />Video call with doctors</h4>
            <h4><CommentOutlined />Chat with professionals</h4>
            <Button>book appointment</Button>
        </div>      
    </div>
  );
}

export default Doctors;

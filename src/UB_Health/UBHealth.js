import React from 'react';
import UBHeader from './UBHeader';
import SeniorCare from './SeniorCare';
import Doctors from './Doctors';
import CareGiver from './CareGiver';
import Download from './Download';
import Foot from './Foot';
import Reviews from './Reviews';
import UBHome from './UBHome.js';
import './UBHealth.scss';


const UBHealth = () => {
  return (
    <div className='ubhealth'>
      <UBHeader/>
      <UBHome />
      <SeniorCare/>
      <Doctors/>
      <CareGiver />
      <Reviews />
      <Download />
      <Foot/>
    </div>
  );
}

export default UBHealth;

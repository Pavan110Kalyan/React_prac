import React from 'react';
import Day_Month from './Day_Month';
// import './Care_center.scss';
import Center1 from './Center1';
import Center2 from './Center2';


const Care_center = () => {
  return (
    <div className='care_center'>
      <div className='recommend'>
        <h3>Recommended senior cares</h3>
        <Day_Month/>
      </div>
      <div className='centers'>
        <Center1/>
        <Center1/>
        <Center1/>
        <Center1/>
        <Center1/>
        <Center1/>
        <Center1/>
        <Center1/>
        <Center1/>
      </div>
    </div>
  );
}
export default Care_center;

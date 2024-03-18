import React from 'react';
import Welcome from './Welcome';
// import './Dash_body.scss';
import Promotions from './Promotions';
const Dash_body = () => {
  return (
    <div className='dash_body'>
      <Welcome/>
      <Promotions/>
    </div>
  );
}

export default Dash_body;

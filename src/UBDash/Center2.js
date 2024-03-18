import React from 'react';
import center1 from '../images/center1.jpeg';
import { CheckCircleOutlined, HeartOutlined, StarOutlined } from '@ant-design/icons';
import './Center1.scss';
const Center2 = () => {
  return (
    <div className='center1'>
    <div className='center1_img'>
    <img src={center1}/>
    <div className='positions'>
      <div className='disco_fav'>
        <h2>20%  Discount</h2>
        <HeartOutlined />
      </div>
      <div className='name_check'>
        <h2>Senior Care Center</h2>
        <CheckCircleOutlined />
      </div>
    </div>
    </div>
    <div className='center1_info'>
    <h2>Genesis Senior Care</h2>
    <h4>Rancho Cucamonga,CA,USA</h4>
    <div className='ratings_cost'>
        <div className='star'>
          <ul>
            <li><StarOutlined /></li>
            <li><StarOutlined /></li>
            <li><StarOutlined /></li>
            <li><StarOutlined /></li>
          </ul>
          <h4>1 reviews</h4>
        </div>
        <h3>$100<span>/night</span> <span id='on_wards'>onwards</span></h3>
        </div>
    </div>
  </div>
  );
}

export default Center2;

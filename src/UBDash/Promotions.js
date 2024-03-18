import React from 'react';
import offers from '../images/offers.jpg';
// import './Promotions.scss';

const Promotions = () => {
  return (
    <div className='promotions'>
      <div className='promo_img'>
        <img src={offers}/>
      </div>
      <div className='promo_info'>
        <div className='disco'>
        <h1>flat <span>10%</span> off</h1>
        <h1>on <span>Senior care</span> services</h1>
        </div>
        <h5>Test the preview Test the preview Test the previewTest the preview Test the preview Test the previewTest the preview Test the previewTest the preview</h5>
        <div className='coupon'>
          <h3>Use Coupon : <span>TET10</span></h3>
        </div>
        <div className='valid'>
          <h4>Valid : <span>02-28-2024</span></h4>
        </div>
      </div>
    </div>
  );
}

export default Promotions;

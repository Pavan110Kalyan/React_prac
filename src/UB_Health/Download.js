import React from 'react';
import googleplay from '../images/googleplay.png';
import appleStore from '../images/appleStore.png';
import mobilePic from '../images/mobilePic.png';
// import './Download.scss';
const Download = () => {
  return (
    <div className='download'>
        <div className='download_info'>
            <h2>Want to explore ubora health?</h2>
            <h1>download our app!</h1>
            <div className='store_img'>
              <img src={googleplay} alt='no-img'/>
              <img src={appleStore} alt='no-img'id='apple'/>
            </div>
        </div>
        <div className='download_img'>
            <img src={mobilePic} alt='no-img'/>
        </div>
      
    </div>
  );
}

export default Download;

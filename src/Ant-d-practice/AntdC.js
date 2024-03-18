import React from 'react';
import { Carousel } from 'antd';
import CHESTAI from '../images/CHESTAI.svg';
import culinda from '../images/culinda.png';
import healthShare from '../images/healthShare.png';
import medscore from '../images/medscore.png';
import './AntdC.scss';
const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  border:'3px solid black',
  display:'flex',
};
const AntdC = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel afterChange={onChange}>
      <div>
        <h3>
           <img src={CHESTAI} alt="no-img"/>
            <img src={culinda} alt="no-img"/>
            <img src={healthShare} alt="no-img"/>
            <img src={medscore} alt="no-img"/>
            <img src={CHESTAI} alt="no-img"/>
            <img src={culinda} alt="no-img"/>
            </h3>
      </div> 
      <div>
        <h3 style={contentStyle}><img src={culinda} alt="no-img"/></h3>
      </div>
      <div>
        <h3 style={contentStyle}><img src={healthShare} alt="no-img"/></h3>
      </div>
      <div>
        <h3 style={contentStyle}><img src={culinda} alt="no-img"/></h3>
      </div>
    </Carousel>
  );
};
export default AntdC;
import { Carousel } from 'antd';
import React from 'react';
import CHESTAI from '../images/CHESTAI.svg';
import culinda from '../images/culinda.png';
import healthShare from '../images/healthShare.png';
import medscore from '../images/medscore.png';
import './ClientCarousel.scss';


const ClientCarousel = () => {
  return (
    <Carousel autoplay>
        <div className='contentStyle'>
            <h2 className='contentStyle'>
                <img src={CHESTAI} alt="no-img"/>
                <img src={culinda} alt="no-img"/>
                <img src={healthShare} alt="no-img"/>
                <img src={medscore} alt="no-img"/>
                <img src={CHESTAI} alt="no-img"/>
                <img src={culinda} alt="no-img"/>
            </h2>
        </div>
        <div className='contentStyle'>
            <h2 className='contentStyle'>
                <img src={CHESTAI} alt="no-img"/>
                <img src={culinda} alt="no-img"/>
                <img src={healthShare} alt="no-img"/>
                <img src={medscore} alt="no-img"/>
                <img src={CHESTAI} alt="no-img"/>
                <img src={culinda} alt="no-img"/>
            </h2>
        </div>
    </Carousel>
  );
}

export default ClientCarousel;

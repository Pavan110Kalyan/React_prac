import React from 'react';
import CHESTAI from '../images/CHESTAI.svg';
import culinda from '../images/culinda.png';
import healthShare from '../images/healthShare.png';
import medscore from '../images/medscore.png';
// import './Clients.scss';
import ClientCarousel from './ClientCarousel';


const Clients = () => {
  return (
    <div className='clients'>
        <div className='client_title'>
            <h3>Our Clients</h3>
        </div>
        <div className='client_img'>
            <ClientCarousel/>
        </div>
      
    </div>
  )
}

export default Clients;
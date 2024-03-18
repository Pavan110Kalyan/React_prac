import React from 'react';
// import './Welcome.scss';
import welcome_img from '../images/welcome_img.png';
import welcome1 from '../images/welcome1.png';
import welcome2 from '../images/welcome2.png';
import welcome3 from '../images/welcome3.png';
import welcome4 from '../images/welcome4.png';
import welcome5 from '../images/welcome5.png';
import welcome6 from '../images/welcome6.png';
import { Avatar } from 'antd';


const Welcome = () => {
  return (
    <div className='welcome_body'>
        <div className='welcome_img'>
            <img src={welcome_img}/>
        </div>
        <div className='welcome_info'>
            <div className='info_title'>
                <h2>Welcome, <span>Pavan Kalyan</span></h2>
                <h4>tuesday,february 14th, 2024,4:05:09pm</h4>
            </div>
            <div className='info_img'>
                <div className='info1'>
                <img src={welcome1}/>
                <h4>Senior care</h4>
                </div>
                <div className='info1'>
                <img src={welcome2} id='img2'/>
                <h4>home health</h4>
                </div>
                <div className='info1'>
                <img src={welcome3} id='img3'/>
                <h4>doctors</h4>
                </div>
                <div className='info1'>
                <img src={welcome4} id='img4'/>
                <h4>care givers</h4>
                </div>
                <div className='info1'>
                <img src={welcome5} id='img5'/>
                <h4>diagnostics</h4>
                </div>
                <div className='info1'>
                <img src={welcome6} id='img6'/>
                <h4>pharmacy</h4>
                </div>
            </div>
            <div className='infoImg_details'>
                {/* <h4>Senior care</h4>
                <h4>home health</h4>
                <h4>doctors</h4>
                <h4>care givers</h4>
                <h4>diagnostics</h4>
                <h4>pharmacy</h4> */}
            </div>
        </div>
    </div>
  );
}

export default Welcome;

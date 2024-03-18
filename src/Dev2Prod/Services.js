import React from 'react';
// import './Services.scss';
import { Link } from 'react-router-dom';
import option1 from '../images/option1.png';
import option2 from '../images/option2.png';
import option3 from '../images/option3.png';
import option4 from '../images/option4.png';
import option5 from '../images/option5.png';
import option6 from '../images/option6.png';
const Services = () => {
  return (
    <div className='services'>
        <div className='services_title'>
            <h3>Services</h3>
            <p>Thinking Big? We make it Possible! Choose From Our Varied Range of Services.</p>
        </div>
        <div className='services_options'>
            <div className='option'>
                <img src={option1} alt="no-img" />
                <h3>UX/UI Designs</h3>
                <p>Unique mockups or design solutions that marries UI and UX principles to transform into a seamless customer journey.</p>
            </div>
            <div className='option' id='option2'>
                <img src={option2} alt="no-img" className='img2'/>
                <h3>Enterprise Web Applications</h3>
                <p>Custom B2B and B2C web applications that are built from scratch to meet operational efficiency and the highest degrees of modularity.</p>
            </div>
            <div className='option'>
                <img src={option3} alt="no-img" className='img3'/>
                <h3>Mobile Applications</h3>
                <p>Native and Hybrid applications that out far excellence for being intuitive, mobile friendly and easy on budget at the same time.</p>
            </div>
            <div className='option'>
                <img src={option4} alt="no-img" className='img4'/>
                <h3>Cloud Solutions</h3>
                <p>Native and Hybrid applications that out far excellence for being intuitive, mobile friendly and easy on budget at the same time.</p>
            </div>
            <div className='option'>
                <img src={option5} alt="no-img" className='img5'/>
                <h3>Voice Applications</h3>
                <p>A foray into the realm of groovy and sassy voice apps. Say goodbye to antiques with new application building technologies.</p>
            </div>
            <div className='option'>
                <img src={option6} alt="no-img" className='img6'/>
                <h3>AI/ML</h3>
                <p>Explore the new world of ideas and assist businesses in making wise choices. Ping us to build the AI apps you dream of. We got the right team for you.</p>
            </div>

        </div>
      
    </div>
  );
}

export default Services;

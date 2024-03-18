import React from 'react';
import foot from '../images/foot.png';
import { EnvironmentOutlined } from '@ant-design/icons';
// import './Foot.scss';

const Foot = () => {
  return (
    <div className='foot'>
        <div className='footer1'>
            <div className='foot_logo'>
                <img src={foot} alt='no-img'/>
            </div>
            <div className='foot_info'>
                <div className='foot_contact'>
                    <h3><span>Tel</span> +1 (888) 844-6505</h3>
                    <h3><span>Fax</span> +1909 284 8554</h3>
                    <h3><span>Email</span> support@uborahealth.com</h3>
                </div>
                <div className='foot_service'>
                    <div className='service_head'>
                        <h2><span>services</span></h2>
                    </div>
                    <div className='service_details'>
                        <h3>doctors</h3>
                        <h3>senior care</h3>
                        <h3>care givers</h3>
                        <h3>pharmacy</h3>
                    </div>
                </div>
                <div className='foot_feed'>
                    <div className='feed_head'>
                        <h2><span>customer support</span></h2>
                    </div>
                    <div className='feed_details'>
                        <h3>about us</h3>
                        <h3>privacy policy</h3>
                    </div>
                </div>
            </div>
        </div>
        <div className='footer2'>
            <div className='foot_address'>
                <div className='company_details'>
                    <h3>ubora health</h3>
                    <h5>Ubora Health provides a one-stop solution for all your healthcare needs.</h5>
                </div>
                <div className='company_address'>
                    <h3>address</h3>
                    <h5><EnvironmentOutlined />3595-4 Inland Empire Blvd. Suite 200 Ontario, California, United States, 91764</h5>
                </div>
            </div>
        </div>
        <div className='copyright'>
            <h5>Ubora Health | All rights reserved 2023</h5>
        </div>
    </div>
  );
}

export default Foot;

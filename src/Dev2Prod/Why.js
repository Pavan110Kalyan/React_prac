import React from 'react';
// import './Why.scss';
import whyus from '../images/whyus.svg';
import diamond from '../images/diamond.png';
import square from '../images/square.png';
import text from '../images/text.png';

const Why = () => {
  return (
    <div className='why'>
        <div className='why_title'>
            <h3>Why choose us?</h3>
            <p>Your decision for your product has everything to do with your success. Let the experts guide you.</p>
        </div>
        <div className='why_content'>
            <div className='why_img'>
                <img src={whyus} alt="no-img"/>
            </div>
            <div className='why_content_info'>
                <p>Starting a venture is not easy. The team, along with the product, plays a pivotal role in bring a mere idea to a living product. This is where we come into the picture with our innovative solutions and expert mentorship programs.</p>
                <p>Learn why we are a great fit for your next project.</p>
                <div className='content_info_para1'>
                    <div className='img_content'>
                        <img src={diamond} alt="no-img"/>
                        <h4>Budget-Friendly and Timely Delivery</h4>
                    </div>
                    <div>
                        <p>They say that time is money. True enough. Software solutions are resource-intensive and complex at the very least. With Dev2Prod, you get an eye-opener about things you need and, more importantly, things you don’t need for your startup. This way, we help businesses build the perfect solutions they are looking for.</p>
                    </div>
                </div>
                <div className='content_info_para1'>
                    <div className='img_content'>
                        <img src={square} alt="no-img" />
                        <h4>Experienced and Dedicated Team</h4>
                    </div>
                    <p>For us, our paramount importance lies in helping you get started. This could be any software project. Our team of experienced and dedicated developers works hard to ensure you get only the best in the desired time frame. On the other hand, our team of experienced developers ensure better software solutions that goes beyond standard conventions.</p>
                </div>
                <div className='content_info_para1'>
                    <div className='img_content'>
                        <img src={text} alt="no-img" />
                        <h4>Customer Centric</h4>
                    </div>
                    <p>While most companies claim to be customer centric, we go without the need. Our work reflects how deeply we value your idea and efforts and craft solutions with unparalleled conventions and expertise.</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Why;

import { Carousel } from 'antd';
import React from 'react';
import img_centre from '../images/img_centre.jpg';
import img_right from '../images/img_right.jpg';
import img_left from '../images/img_left.jpg';
// import './Reviews.scss';

const Reviews = () => {
  return (
    <div className='review'>
        <h1>our happy clients</h1>
        <Carousel autoplay>
        <div className='review1'>
            <div className='clients_content'>
                <h2>"</h2>
                <h4>"My father has been a resident at this senior care center for several months now, and we could not be more pleased with the level of care he has received. The staff is attentive and kind, and they have gone out of their way to accommodate his needs and preferences. The facility itself is clean and well-maintained, and there are always plenty of activities and events to keep the residents engaged and stimulated. I would definitely recommend this facility to others."</h4>
                <h2>"</h2>
            </div>
            <div className='reviews_content'>
                <div className='review_left'>
                    <img src={img_left} alt='no-img'/>
                    <h5>Marie</h5>
                    <p>"I couldn't be happier with the care my mom receives at this senior care facility. The staff is incredibly kind and patient, and they make sure she gets everything she needs. The facility is always clean and well-maintained.</p>
                </div>
                <div className='review_centre'>
                    <img src={img_centre} alt='no-img'/>
                    <h3>Leonie</h3>
                </div>
                <div className='review_right'>
                    <img src={img_right} alt='no-img'/>
                    <h5>Julia</h5>
                    <p>"The caregivers at this senior care service are simply amazing. They're compassionate, attentive, and truly care about the well-being of their residents. My father has been a resident for a few months now, and we've seen a noticeable improvement in his quality of life."</p>
                </div>
            </div>
        </div>

        <div className='review1'>
            <div className='clients_content'>
                <h2>"</h2>
                <h4>"My father has been a resident at this senior care center for several months now, and we could not be more pleased with the level of care he has received. The staff is attentive and kind, and they have gone out of their way to accommodate his needs and preferences. The facility itself is clean and well-maintained, and there are always plenty of activities and events to keep the residents engaged and stimulated. I would definitely recommend this facility to others."</h4>
                <h2>"</h2>
            </div>
            <div className='reviews_content'>
                <div className='review_left'>
                    <img src={img_left} alt='no-img'/>
                    <h5>Marie</h5>
                    <p>"I couldn't be happier with the care my mom receives at this senior care facility. The staff is incredibly kind and patient, and they make sure she gets everything she needs. The facility is always clean and well-maintained.</p>
                </div>
                <div className='review_centre'>
                    <img src={img_centre} alt='no-img'/>
                    <h3>Leonie</h3>
                </div>
                <div className='review_right'>
                    <img src={img_right} alt='no-img'/>
                    <h5>Julia</h5>
                    <p>"The caregivers at this senior care service are simply amazing. They're compassionate, attentive, and truly care about the well-being of their residents. My father has been a resident for a few months now, and we've seen a noticeable improvement in his quality of life."</p>
                </div>
            </div>
        </div>
        
        <div className='review1'>
            <div className='clients_content'>
                <h2>"</h2>
                <h4>"My father has been a resident at this senior care center for several months now, and we could not be more pleased with the level of care he has received. The staff is attentive and kind, and they have gone out of their way to accommodate his needs and preferences. The facility itself is clean and well-maintained, and there are always plenty of activities and events to keep the residents engaged and stimulated. I would definitely recommend this facility to others."</h4>
                <h2>"</h2>
            </div>
            <div className='reviews_content'>
                <div className='review_left'>
                    <img src={img_left} alt='no-img'/>
                    <h5>Marie</h5>
                    <p>"I couldn't be happier with the care my mom receives at this senior care facility. The staff is incredibly kind and patient, and they make sure she gets everything she needs. The facility is always clean and well-maintained.</p>
                </div>
                <div className='review_centre'>
                    <img src={img_centre} alt='no-img'/>
                    <h3>Leonie</h3>
                </div>
                <div className='review_right'>
                    <img src={img_right} alt='no-img'/>
                    <h5>Julia</h5>
                    <p>"The caregivers at this senior care service are simply amazing. They're compassionate, attentive, and truly care about the well-being of their residents. My father has been a resident for a few months now, and we've seen a noticeable improvement in his quality of life."</p>
                </div>
            </div>
        </div>
        </Carousel>
    </div>
  );
}

export default Reviews;

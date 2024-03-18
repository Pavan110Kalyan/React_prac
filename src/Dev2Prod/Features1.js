import React from 'react';
import features1 from '../images/features1.svg';
// import './Features1.scss';
const Features = () => {
  return (
    <div className='features'>
      <div className='features_img'>
            <img src={features1} alt='no-img'/>
      </div>
      <div className='features_content'>
        <h4>Our working method is standardized, with key components given paramount importance.</h4>
        <p>Every great software begins with an humble idea. At this stage we sit with you to help you clarify your requirements and brainstorm solutions that are feasible and innovative in their approach.</p>
        <p>Based on the initial brainstorming session, we then move on to the mockup phase where we deliver a mockup that helps you visualize the end product and/ or make any modifications if as such needed.</p>
        <p>Only after required changes and based on your feedback, we enter into product development stage that gives shape to your vision and gives a visible form.</p>
      </div>
    </div>
  );
}

export default Features;

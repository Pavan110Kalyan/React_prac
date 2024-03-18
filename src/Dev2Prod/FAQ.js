import React from 'react';
import Expand from '../Ant-d-practice/Expand';
import FAQExpand from './FAQExpand';
// import './FAQ.scss';

const FAQ = () => {
  return (
    <div className='faq'>
      <div className='faq_title'>
        <h3>Frequently Asked Questions</h3>
        <p>Get answers to your all doubts. For more information feel free to get in touch.</p>
      </div>
      <div className='faq_content'>
        <FAQExpand/>
      </div>
    </div>
  );
}

export default FAQ;

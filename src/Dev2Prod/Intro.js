import React from 'react'
import introImg from '../images/introImg.svg';
import introbg from '../images/introbg.jpg';
import { Button, Image } from 'antd';

const Intro = () => {
  return (
    <div className='intro'>

      <img src={introbg} alt='no-img' id="introbg"/>

        <div className='intro_info'>
            <h2>Celebrate success with software solutions that go beyond <span>future</span> </h2>
            <Button className='btn_get_started'>get Started</Button>
        </div>
        <div className='intro_img'>
            <img src={introImg} alt="no-img" />
        </div>
      
    </div>
  )
}

export default Intro

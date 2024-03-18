import React from 'react'
import Intro from './Intro'
import Header from './Header'
import introbg from '../images/introbg.jpg';
import { Image } from 'antd';
import About from './About';
import Services from './Services';
import Why from './Why';
import Features1 from './Features1';
import Features2 from './Features2';
import Clients from './Clients';
import FAQ from './FAQ';
import FAQExpand from './FAQExpand';
import Foot from './Foot';
import './Dev2Prod.scss';
import Combo from './Combo';

const Dev2prodHome = () => {
  return (
    <div className='Dev2prod'>
      <Header />
      <Intro />
      {/* <Combo/> */}
      <About/>
      <Services/>
      <Why/>
      <Features1/>
      <Features2/>
      <Clients/>
      <FAQ/>
      <Foot/>
    </div>
  )
}

export default Dev2prodHome;

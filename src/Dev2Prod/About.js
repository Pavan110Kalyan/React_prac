import React from 'react';
import aboutImg from '../images/aboutImg.svg';
// import './About.scss';
import {CheckCircleOutlined} from '@ant-design/icons';

const About = () => {
  return (
    <div className='about'>
        <div className='about_img'>
            <img src={aboutImg} alt="no-img" />
        </div>
        <div className='about_info'>
            <h2>About Us</h2>
            <h3>Exploration and inquisitiveness can take you far. It is only after you meet real experts you start your journey. Meet the architects of future.</h3>
            <p>Dev2Prod soft solutions is a global, multinational team of technology experts that all have a single goal in mind – achieve exceptional relationships with our customers. we offer a range of services to suit your needs. For us no project is “big” or “small” for we enjoy challenges at every level.</p>
            <p>Our solutions are based on the latest technologies. By continuous exchange of knowledge and experiences with clients, dev2prod recognises the desires and needs, and together with them - we develop projects that bring a competitive advantage in the market. In this way, the satisfaction is mutual, and we grow together with our clients since each project brings new knowledge, new ideas, and new skills.</p>
            <ul>
                <li><CheckCircleOutlined />Design global solutions that meet international standards</li>
                <li><CheckCircleOutlined />Software development that follows agile development practices</li>
                <li><CheckCircleOutlined />Deploying cloud based solutions that turns vision into reality</li>
            </ul>
        </div>
      
    </div>
  )
}

export default About;

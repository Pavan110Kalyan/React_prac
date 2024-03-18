import React from 'react'
import Project_Task from './Project_Task';
import { Button, Carousel, Col, Row } from 'antd'
import './SeniorCareRoom.scss';

const SeniorCareRoom = () => {
  return (
   <Row>
        <Col span={24}>
        <div>
            <Carousel autoplay>
                <Project_Task/>
                <Project_Task/>
                <Project_Task/>
            </Carousel>
            <div className='slicks'>
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
            </div>
        </div>
        </Col>
   </Row>
  )
}

export default SeniorCareRoom

import { CalendarOutlined, MoreOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react';
import './Project1.scss';

const Project1 = () => {
  return (
    <div className='project_container'>
      <div className='project_header'>
        <h2>current promotions</h2>
        <h2>request promotions</h2>
      </div>
      <div className='project_body'>
         <div className='card1'>
           <div className='card_aside'>
                <h1>columb1</h1>
           </div>
           <div className='card_content'>
                <div className='card_head'>
                    <Button>Active</Button>
                    <MoreOutlined />
                </div>
                <div className='card_info'>
                    <div className='info1'>
                        <h2>colummb1 1% off</h2>
                       <div className='info_calendar'>
                         <CalendarOutlined />
                         <h6>3-27-24 _ 3-30-24</h6>
                       </div>
                    </div>
                </div>
           </div>
         </div>
      </div>
    </div>
  )
}

export default Project1

import React from 'react';
import HeaderDropD from './HeaderDropD';
import members from '../images/users.svg';
import book from '../images/book.svg';
import { Button } from 'antd';
import './Menu.scss';
import { BookOutlined, CloseOutlined, HomeOutlined, LoginOutlined, UserAddOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import HeaderDropD1 from './HeaderDropD1';
import { useNavigate } from 'react-router-dom';


const Menu = () => {
    const navigate=useNavigate()

 const login = ()=>{
    navigate("/login");
 }
  return (
    <div className='menu'>
        <div className='menu_head'>
            <h1 id='drop'><HeaderDropD /></h1>
            <h1><CloseOutlined onClick={()=>navigate(-1)}/></h1>
        </div>
        <div className='menu_details'>
            <h1><HomeOutlined /><span>home page</span></h1>
            <h1><UsergroupAddOutlined /> <span>Services</span></h1>
            <h1><BookOutlined /><span>how it works ?</span></h1>
            <h1><UserAddOutlined /><span>partner with us</span></h1>
            <h1><LoginOutlined  onClick={login} /><span onClick={login}>login</span></h1>
        </div>
        <div className='menu_foot'>
            <h3>Want to learn more about Ubora Health?</h3>
            <h3>Download app now!</h3>
            <Button>download the app</Button>
        </div>
      
    </div>
  );
}

export default Menu;

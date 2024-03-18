import React from 'react';
import header_logo from '../images/header_logo.png';
import { Button } from 'antd';
import HeaderDropD from './HeaderDropD';
// import './UBHeader.scss';
import HeaderDropD1 from './HeaderDropD1';
import { MenuOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

const UBHeader = () => {
 const navigate=useNavigate()

  const menu = () => {
    navigate("/menu");
  };

  const login = ()=>{
    navigate("/login");
  };


  return (
    <div className='UBHeader'>
        <div className='header_img'>
             <img src={header_logo} alt='no-img'/>
        </div>
        <div className='header_info'>
            <MenuOutlined className='menubar' onClick={menu}/>
            <div className='navi'>
              <Button className='drop'><HeaderDropD id="drop"/></Button>
              <Button className='drop'><HeaderDropD1 id="drop"/></Button>
              <Button className='login' onClick={login}>Login</Button>
              <Button className='partner'>Partner with us</Button>
            </div>
        </div>
    </div>
  );
}

export default UBHeader;

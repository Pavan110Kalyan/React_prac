import React from 'react';
import Login_H from './Login_H';
import Login_Body from './Login_Body';
import { useNavigate } from 'react-router-dom';
import loginArrow from '../images/loginArrow.png';
import { Button, Input } from 'antd';
import header_logo from '../images/header_logo.png';
import './Login.scss';

const Login = () => {
    const navigate = useNavigate();
  return (
    <div className='login'>
              <Login_H/>
               <Login_Body/>
    </div>
    
  );
}

export default Login;

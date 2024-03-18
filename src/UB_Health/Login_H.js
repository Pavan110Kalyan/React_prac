import React from 'react';
import header_logo from '../images/header_logo.png';
// import './Login_H.scss';
import { useNavigate } from 'react-router-dom';
const Login_H = () => {
  const navigate= useNavigate();
  return (
    <div className='login_header'>
        <img src={header_logo} onClick={()=>navigate(-1)}/>
    </div>
  );
}

export default Login_H;

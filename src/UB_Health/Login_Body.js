import { Button, Carousel, Input } from 'antd';
import React from 'react';
import loginArrow from '../images/loginArrow.png';
// import './Login_Body.scss';
import Caro1 from '../images/Caro1.png';
import caro2 from '../images/caro2.png';
import caro3 from '../images/caro3.png';
import caro4 from '../images/caro4.png';
import caro5 from '../images/caro5.png';
import { useNavigate } from 'react-router-dom';
import { EyeInvisibleOutlined } from '@ant-design/icons';

const Login_Body = () => {
  const navigate =useNavigate();
  const login =()=>{
    navigate("/login");
  }
  return (
    <div className='login_body'>
      <div className='login_info'>
        <h1>Hello, Welcome back!</h1>
        <h3><span onClick={login}>Login</span> with your data you entered during registration.</h3>
        <div className='input'>
          <Input placeholder='Email Address'></Input>
          <Input placeholder='Password'></Input>
          <EyeInvisibleOutlined id='eye'/>
        </div>
        <h4>Forget password ?</h4>
        <div className='login_btn'>
          <Button><img src={loginArrow}/></Button>
          <h4>Don’t have an account? <span>sign up</span></h4>
        </div>
      </div>
      <div className='login_img'>
        <Carousel autoplay>
            <img src={Caro1}/>
            <img src={caro2}/>
            <img src={caro3}/>
            <img src={caro4}/>
            <img src={caro5}/>
        </Carousel>
      </div>
    </div>
  );
}

export default Login_Body;

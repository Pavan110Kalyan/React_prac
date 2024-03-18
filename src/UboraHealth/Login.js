import React from 'react';
import Routing from '../pages/Routing';


import { useNavigate } from "react-router-dom";

const Login = () => {
  
const navigate= useNavigate()
  return (
    <div>
        <h4>Login page</h4>
        <h5>here you are</h5>
        <button onClick={()=>navigate(<Login/>)}></button>
        <button onClick={()=>navigate(-1)}>Go Back?</button>
    </div>
  );
}

export default Login;

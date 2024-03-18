import React from "react";
import Home from '../pages/Home';


import { useNavigate } from "react-router-dom";
import OrderSummary from "../pages/OrderSummary";
function Partner(){
    const navigate= useNavigate()
    const order = () => {
        navigate("/order");
      };
    return(
<div>

        <h4>Partner page</h4>
        <h5>happy to connect with you</h5> 
        <button onClick={order}>partner with us</button>
        {/* <button onClick={()=>navigate(<Partner/>)}></button>
        <button onClick={()=>navigate(<OrderSummary />)}>partner with us</button>
        <button onClick={()=>navigate(-1)}>Go Back?</button> */}
{/* <h5>Partner Page</h5> */}

<Home/>
</div>
    );
}
export default Partner;
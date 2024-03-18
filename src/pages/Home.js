import React from "react";
import { useNavigate } from "react-router-dom";
let Home=()=>{
    const navigate = useNavigate ()
    return (
        <>
        Home Page
        <button onClick={()=> navigate("order")}>Place Order</button>
        </>
    );
}
export default Home;
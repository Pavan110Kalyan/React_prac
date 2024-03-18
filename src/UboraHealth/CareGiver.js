import React from "react";
import Blog from "../pages/Blog";
import OrderSummary from "../pages/OrderSummary";

function CareGiver(){
    return(
        <div>
             <h2>Care Giver</h2>
      
             <Blog/>
             <OrderSummary/>
        </div>
      
    );
}
export default CareGiver;
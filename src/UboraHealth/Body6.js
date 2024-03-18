import React from "react";
import gplay from '../images/gplay.png';
import apple from '../images/apple.png';
import mobile from '../images/mobile.png';
function Body6(){
    return(
        <div className="home_content6">
        <div className="content6_details">
            <h1 className="para1">Want to explore ubora health?</h1>
            <h1 className="para2">download our app!</h1>
            <img src={gplay} alt="no-img"/>
            <img src={apple} alt="no-img"/>
        </div>
        <div className="content6_img">
            <img src={mobile} alt="no-img"/>
        </div> 
    </div>
    );
} 
export default Body6;
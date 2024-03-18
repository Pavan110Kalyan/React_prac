import React from "react";
import content7 from '../images/content7.png';
function Body7(){
    return(
        <div className="home_content7">
            <div className="content7_logo">
                <img src={content7} alt="no-img"/>
            </div>
            <div className="content7_details">
                <div className="para1">
                    <h2><span>Tel</span>  +1 (888) 844-6505</h2>
                    <h2><span>Fax </span> +1909 284 8554</h2>
                    <h2><span>Email </span> support@uborahealth.com</h2>
                </div>
                <div className="para2">
                    <h1>Services</h1>
                    <h2>doctors</h2>
                    <h2>senior game</h2>
                    <h2>pharmacy</h2>
                </div>
                <div className="para3">
                    <h1>Customer Support</h1>
                    <h2>about us</h2>
                    <h2>privacy policy</h2>
                </div>
            </div>
            <div className="content7_foot">
                <div className="foot_details1">
                    <h1>ubora health</h1>
                    <h2>Ubora Health provides a one-stop solution for all your healthcare needs.</h2>
                </div>
                <div className="foot_details2">
                    <h1>address</h1>
                    <h2>3595-4 Inland Empire Blvd. Suite 200 Ontario, California, United States, 91764</h2>
                </div>
            </div>
            <div className="copyrights">
                <h3>Ubora Health | All rights reserved 2023</h3>
            </div>
        </div>
    );
} 
export default Body7;
import React from "react";
import content1 from '../images/content1.png';
import { useNavigate } from "react-router-dom";
function Body1(){
    const navigate = useNavigate();

    const login = () => {
        navigate("/start");
      };

return(
    <div className="home_content1">
            <div className="content1_details">
                <h5 className="para1">Ease your healthcare worries with uborahealth services</h5>
                <h1>Doctors</h1>
                <h5 className="para2">Uborahealth provides a one-stop solution for all your healthcare needs. From senior care to tele health and care giver, we have you covered. We provide comprehensive health care solutions that take the guesswork out of finding the right care for your family. We make sure you get the best-in-class service you deserve!</h5>
                <button onClick={login}>Get Started</button>
            </div>
            <div className="content1_img">
                <img src={content1} alt="no-img"/>
            </div>
        </div>   
);
}
export default Body1;
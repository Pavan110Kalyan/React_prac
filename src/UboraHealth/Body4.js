import React from "react";
import content4 from '../images/content4.png';
import { useNavigate } from "react-router-dom";
function Body4(){
    const navigate = useNavigate();

    const sendSubmit = () => {
        navigate("/caregiver");
      };
    return(
        <div className="home_content4">
            <div className="content4_details">
                <h1 className="para1">Our care givers</h1>
                <h1 className="para2">look for you</h1>
                <h1 className="para3">get professional caregiver service</h1>
                <h3 className="para4">We understand that sometimes professional help is needed when taking care of your elderly or sick family members. With Uborahealth, you can easily book an experienced caregiver who will look after your loved ones in the comfort of their own home. We also provide professional, compassionate care givers who can offer support and assistance with tasks such as personal hygiene, meal preparation, mobility assistance and more. Our experienced team understands that.</h3>
                <button onClick={sendSubmit}>book care giver</button>
            </div>
            <div className="content4_img">
                <img src={content4} alt="no-img"/>
            </div>
        </div>
        
    );
}
export default Body4;

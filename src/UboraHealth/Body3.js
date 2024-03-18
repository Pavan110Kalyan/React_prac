import React from "react";
import content3 from '../images/content3.png';
import video from '../images/video.svg';
import chat from '../images/chat.svg';
import { useNavigate } from "react-router-dom";
function Body3(){

    const navigate = useNavigate();

    const sendSubmit = () => {
        navigate("/appoint");
      };
 return(
<div className="home_content3">
            <div className="content3_img">
                <img src={content3} alt="no-img" />
            </div>
            <div className="content3_details">
                <h2 className="para1">Our Doctors</h2>
                <h1 className="para2">Come to you</h1>
                <h2 className="para3">reduce stress with uborahealth</h2>
                <h3 className="para4">Our telehealth services are designed to provide peace of mind when it comes to managing your health. With access to medical experts and up-to-date information, uborahealth information makes sure you have easy access to all the resources you need – whenever and wherever you need them. Enjoy easy access to quality healthcare from the comfort of your own home with our telehealth services. Our team of experts ensure you get the best service possible.</h3>
                <a href="#"><img src={video} alt="no-img"/>Video call with doctors</a>
                <a href="#"><img src={chat} alt="no-img"/>chat with professionals</a>
                <button onClick={sendSubmit}>book appointment</button>
            </div>
        </div>
 );
}
export default Body3;
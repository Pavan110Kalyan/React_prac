import React from "react";
import content2 from '../images/content2.png';
import { useNavigate } from "react-router-dom";
function Body2(){

    const navigate = useNavigate();

    const sendSubmit = () => {
        navigate("/daycare");
      };

    return(
        <div className="home_content2">
        <div className="content2_details">
            <h5 className="para1"><span className="para1_head1">Your family's trusted </span><span className="para1_head2">senior care</span> <span className="para1_head3">care for your loved ones with uborahealth</span></h5>
            <h5 className="para2">We understand that taking care of your loved ones can be a daunting task. With Uborahealth, we make it easy for you to make sure that they are in good hands. We provide professional senior care and tele health services so you can be sure that your loved ones are in safe hands. We understand that everyone has different needs when it comes to healthcare. That's why we offer a wide range of services, tailored to meet each individual's specific needs. Whether you're looking for senior care or just need a little extra help with daily tasks – our team is here to find you the right solution.</h5>
            <button onClick={sendSubmit}>Book Day Care</button>
        </div>
        <div className="content2_img">
            <img src={content2} alt="no-img"/>
        </div>
    </div>
    );
}
export default Body2;
import React from "react";
import content5_1 from '../images/content5_1.png';
import content5_2 from '../images/content5_2.png';
import content5_3 from '../images/content5_3.png';

function Body5(){
    return(
       
<div className="home_content5">
            <div className="content5_title">
                <h1>Our happy clients</h1>
            </div>
            <div className="content5_details">
                <h2 className="para1">my father has been a resident at this senior care centre for several months now, and we could not be more pleased with the level of care he has received. the staff is attentive and kind, and they have gone out of their way to accommodate his needs and preferences. the facality itself is clean and well-maintained, and there are always plenty of activities and events to keep the residents engaged and stimulated. i would definitely recommended this facility to others.</h2>
                <div className="content5_img">
                    <img className="img1" src={content5_1} alt="no_img"/>
                    <img className="img2" src={content5_2} alt="no-img"/>
                    <img className="img1" src={content5_3} alt="no-img"/>
                </div>
                <div className="para2">
                    <div className="review1">
                        <h1>lucas</h1>
                        <h2>i am incredible grateful for the compassionate and professional care that my mother has received at the senior care facility. the staff goes beyond and above ensure that she is comfortable and well cared for, and they always treat her with dignity and respect.</h2>
                    </div>
                    <div className="review2">
                        <h1>Oliver</h1>
                    </div>
                    <div className="review3">
                        <h1>amelia</h1>
                        <h2>i am incredible grateful for the compassionate and professional care that my mother has received at the senior care facility. the staff goes beyond and above ensure that she is comfortable and well cared for, and they always treat her with dignity and respect.</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Body5;
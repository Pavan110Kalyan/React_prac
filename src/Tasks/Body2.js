import React from "react";
import img1 from './img1.png';
import img2 from '../images/img2.png'
import arrow1 from '../images/arrow1.svg.png';
import msg from '../images/msg.svg';
import call from '../images/call.svg';
import fav from '../images/fav.svg';
import checklist from '../images/checklist.svg';
import star from '../images/star.svg';
import tick from '../images/tick.svg';
let Body2 =()=>{
    return(
        <React.Fragment>
              <div className="body">

<div className="card1">
    <div className="card1_info">
    
          <button className="verify"><img src={tick}/>verified</button> {/*<span><img src={tick}/></span>*/}
          <div>
         <img className="card_img" src={img2}></img>
   </div>
   <div className="card1_details">
        <h4>A1 Quality Health Care,Inc.</h4>
            <div className="rating">
                <div className="star_rating">
                <h5>Quality Rating</h5>
                <div className="star">
                <img src={star}/>
                <img src={star}/>
                <img src={star}/>
                <img src={star}/>
                </div>
                </div>
                <div  className="star_rating">
                <h5>Patient survey rating</h5>
                <div className="star">
                <img src={star}/>
                <img src={star}/>
                <img src={star}/>
                <img src={star}/>
                </div>
                </div>
             </div>
             <div>
                <h5>Location</h5>
                <p>202 E Colarado Blvd, Pasadena, California</p>
        </div>
    </div>
</div>

<div className="card1_contact">

<img src={call} alt="noimg"/>
    <h6>(086)897-0987</h6>
   <img src={msg} alt="no img"/>
    <h6>Leave a message</h6>
    <button>compare</button>
    <img src={fav} alt="no img"/>
</div>
</div>
</div>
        </React.Fragment>
    );
}
export default Body2;
import React from "react";
import img2 from '../images/img2.png';
import search from '../images/search.svg';
import remainder from '../images/remainder.svg';
import profile from '../images/profile.png';

let Head=()=>{
    return(
        <React.Fragment>
            <div className="DashBoard">
            <div className="head">
                <div  className="header_1">
            <img src={img2}/>
            <h3>A1 Quality Health Care, Inc</h3>
            <input placeholder="Search"></input>
            <img src={search} alt="no img" id="search"/>
            </div>
                <div  className="header_2">
                <img src={remainder} alt="no img" id="bell"/>
                <h3>Jane Doe</h3>
                <img src={profile} alt="no img" id="profile"/>
                <select>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                </select>
            </div>
            </div>
            </div>
        </React.Fragment>
    );
}
export default Head;
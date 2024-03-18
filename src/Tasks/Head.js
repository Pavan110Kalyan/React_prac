import React from "react";
import img1 from './img1.png';
import arrow1 from '../images/arrow1.svg.png';
import msg from '../images/msg.svg';
import call from '../images/call.svg';
import fav from '../images/fav.svg';
import checklist from '../images/checklist.svg';


function Head (){
    return(
        <React.Fragment>
            <div className="Home_page">
                <div className="header">
                    <div className="header_info">
                            <a href="https://fonts.google.com/icons?selected=Material+Symbols+Outlined:favorite:FILL@0;wght@400;GRAD@0;opsz@24&icon.query=love" target="_blank"><img src={arrow1} alt = ""/></a>
                            <h4>Home Health Agencies</h4>
                    </div>
                </div>
                <div className="navbar">
                    <div className="search">
                        <div className="search_tab">
                            <label>Location</label>
                            <input id="location_input"></input>
                       </div>
                       <div className="search_tab">
                            <label>Name of Agency(optional)</label>
                            <input id="agency_input"></input>
                       </div>
                       <button id="search_button">Search</button>
                    
                        <button id="agency_button"><img src={checklist}/>Agency Checklist</button>
                     
                    </div>
                    <div className="search_footer">
                        <div className="search">
                            <h5>Showing 1-20/300 home health agencies near your location</h5>
                        </div>
                        <div className="search_filters">
                            <div className="filter1">
                            <label>Sort By:</label>
                           <select name="language" id="">
                            <option>Alphabeticals</option>
                            <option>Numerical</option>
                            <option>Alpha</option>
                            <option>symbols</option>
                           </select>
                           </div>
                           <div className="filter2">
                           <label>Filter By:</label>
                           <select>
                            <option>Quality Rating</option>
                            <option>Quality Rating</option>
                            <option>Quality Rating</option>
                            <option>Quality Rating</option>
                           </select>
                           <select>
                            <option>Patient Survey Rating</option>
                            <option>Patient Survey Rating</option>
                            <option>Patient Survey Rating</option>
                            <option>Patient Survey Rating</option>
                            </select>
                            <a href="#">clear all filters</a>
                            </div>
                        </div>
                </div>
                </div>
              
                <div className="footer"></div>
            </div>
        </React.Fragment>
    );
}
export default Head;
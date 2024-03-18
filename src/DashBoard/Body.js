import React from "react";
import home from '../images/home.svg';
let Body=()=>{
    return(
        <React.Fragment>
            <div className="DashBoard">
           <div className="body_dash">
           <div className="Nav">
            <a href="#"><img src={home}/>Dashboard</a>
            <a href="#"><img src={home}/>Service Request</a>
            <a href="#"><img src={home}/>Client Management</a>
            <a href="#"><img src={home}/>Service Providers</a>
            <a href="#"><img src={home}/>Communication Hub</a>
            <a href="#"><img src={home}/>Insurance & Billing</a>
            <a href="#"><img src={home}/>Appointment Scheduling</a>
            <a href="#"><img src={home}/>Client Details</a>
            <a href="#"><img src={home}/>Service Analytics</a>
            </div>
            <div className="appoint">
            <div className="appoint_head">
            <input type="date"></input>
            <button>+ Add Appointment</button>
            </div>
            <div>
            <h3>Today's Appointments</h3>
            </div>
    
            <table className="History">
                <tr>
                <th>Client Name</th>
                <th>Appointment Type</th>
                <th>Doctor Name</th>
                <th>Service Type</th>
                <th>Appointment Date&Time</th>
                <th>Status</th>
                <th>Location</th>
                <th>Action</th>
                </tr>
                <tr>
                    <td>Jim Carry</td>
                    <td>initial</td>
                    <td>Dr.Sarath Mitchel,PT</td>
                    <td>Speeech Therapy</td>
                    <td>16-Jan-2024,06:00AM</td>
                    <td>Completed</td>
                    <td>Rancho Cucamanga</td>
                    <td>...</td>
                </tr>
                <tr>
                    <td>Jim Carry</td>
                    <td>initial</td>
                    <td>Dr.Sarath Mitchel,PT</td>
                    <td>Speeech Therapy</td>
                    <td>16-Jan-2024,06:00AM</td>
                    <td>Completed</td>
                    <td>Rancho Cucamanga</td>
                    <td>...</td>
                </tr>
                <tr>
                    <td>Jim Carry</td>
                    <td>initial</td>
                    <td>Dr.Sarath Mitchel,PT</td>
                    <td>Speeech Therapy</td>
                    <td>16-Jan-2024,06:00AM</td>
                    <td>Completed</td>
                    <td>Rancho Cucamanga</td>
                    <td>...</td>
                </tr>
                <tr>
                    <td>Jim Carry</td>
                    <td>initial</td>
                    <td>Dr.Sarath Mitchel,PT</td>
                    <td>Speeech Therapy</td>
                    <td>16-Jan-2024,06:00AM</td>
                    <td>Completed</td>
                    <td>Rancho Cucamanga</td>
                    <td>...</td>
                </tr>
                <tr>
                    <td>Jim Carry</td>
                    <td>initial</td>
                    <td>Dr.Sarath Mitchel,PT</td>
                    <td>Speeech Therapy</td>
                    <td>16-Jan-2024,06:00AM</td>
                    <td>Completed</td>
                    <td>Rancho Cucamanga</td>
                    <td>...</td>
                </tr>
                <tr>
                    <td>Jim Carry</td>
                    <td>initial</td>
                    <td>Dr.Sarath Mitchel,PT</td>
                    <td>Speeech Therapy</td>
                    <td>16-Jan-2024,06:00AM</td>
                    <td>Completed</td>
                    <td>Rancho Cucamanga</td>
                    <td>...</td>
                </tr>
            
            </table>
            </div>
               </div>
               </div>
        </React.Fragment>
    );
}
export default Body;
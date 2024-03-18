import React from "react";
import logoname from '../images/logoname.png';
import { useNavigate } from "react-router-dom";



let Header = () => {
    const navigate = useNavigate();

    const login = () => {
        navigate("/login");
      };
      const sendSubmit1=()=>{
        navigate("/partner");
      }

    return (
        <React.Fragment>
            <div className="logo">
                <img src={logoname} alt="no-img" />
                <select>
                    <option>English</option>
                    <option>Espanol</option>
                </select>
                <select className="service">
                    <option>Our Services</option>
                    <option>Senior Care</option>
                    <option>Doctors</option>
                    <option>Care Givers</option>
                </select>
                <button className="login_btn" onClick={login}>Login</button>
                <button className="partner_btn" onClick={sendSubmit1}>Partner With Us</button>
            </div>
        </React.Fragment>
    );
}
export default Header;
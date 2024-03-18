import React from "react";
import './UbNav.scss'
import Header from "./Header";
import Body1 from "./Body1";
import Body2 from "./Body2";
import Body7 from "./Body7";
import Body6 from "./Body6";
import Body5 from "./Body5";
import Body4 from "./Body4";
import Body3 from "./Body3";
let UbHome=()=>{
  return(
    <div className="UbHome">
        <Header/>
        <Body1/>
        <Body2/>
        <Body3/>
        <Body4/>
        <Body5/>
        <Body6/>
        <Body7/>
       </div>
   
  );
}
export default UbHome;
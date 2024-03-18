import React, { useState } from "react";
function HookCar(){
    let[model,setModel]=useState("Mustang")
    let[brand,setBrand]=useState("BMW")
    let[year,setYear]=useState("1964")
    let[color,setColor]=useState("Red");
    
    return(
        <>
        <h1>My {brand} is a {model} model ,{color} color car manufactured in {year}</h1>
        </>
    );
}
export default HookCar;
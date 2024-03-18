import React, { useState } from "react";
function HookCars(){
    let [car,setCar]=useState({
   cars:[ { brand:'bmw',color:'red',year:'1898',model:'b21' },
    { brand:'ford',color:'blue',year:'1998',model:'f33'}
    ]});
    
    let {cars}=car;
    return(
        <React.Fragment>
            <h1>my car is {cars[0].brand} and its model is {cars[0].model} color is {cars[0].color} manufactured in {cars[0].year}</h1>
            <h1>my car is {cars[1].brand} and its model is {cars[1].model} color is {cars[1].color} manufactured in {cars[1].year}</h1>
            
        </React.Fragment>
    );
   
}export default HookCars;
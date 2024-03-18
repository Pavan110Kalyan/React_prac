import React, { useState } from "react";
let Student1=()=>{
    let [state , setState]=useState({
       students : [ {
            name:'pavan',
            course:'MBBS'},
            {
                name:'kalyan uppala',
                course:"btech"
            }]
});
let{students}=state; //Destructuring in ES6/ES2017 
    return(
        <React.Fragment>
            <h2>welcome to react Js</h2>
            <div className="card">
                <div className="card_data">
                <span>Name : {students[0].name}</span><br/>
                <span>Course : {students[0].course}</span>
                </div>
            </div>
            <div className="card">
                <div className="card_data">
                <span>Name : {students[1].name}</span><br/>
                <span>Course : {students[1].course}</span>
                </div>
            </div>
            
        </React.Fragment>
    );
}
export default Student1;
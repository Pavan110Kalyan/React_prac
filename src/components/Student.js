import React from "react";
let Student = (props) =>{
    return(
        <React.Fragment>
            <div className="card">
                <div className="card_data">
            <h2>Student Name : {props.name}</h2>
            <h3>Course :{props.course}</h3>
            <pre>{JSON.stringify(props)}</pre>
            </div>
            </div>
        </React.Fragment>
    );
}
export default Student;
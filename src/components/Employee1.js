import React from "react";
export class Employee1 extends React.Component{
     constructor(props){
         super(props);
         this.state={
            employees :[{
            name:'pavan uppala',
            age:23
            },
        {
            name:'kalyan',
            age:33
        }]
         }
     }
    render(){
        return(
            <React.Fragment>
                <h2>Welcome to Employee1</h2>
                <div className="card">
                    <div className="card_data">
                        <span>Name : {this.state.employees[0].name}</span><br/>
                        <span>Age : {this.state.employees[0].age}</span>
                    </div>
                </div>
                <div className="card">
                    <div className="card_data">
                        <span>Name : {this.state.employees[1].name}</span><br/>
                        <span>Age : {this.state.employees[1].age}</span>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
import React, { useEffect, useState } from "react";
function Effect(){
    let [count,setCount]=useState(0);
    useEffect(()=> {
        setTimeout(()=>{
            setCount((count)=> count+1);
        },1000);
    },[]);
    return <h1>I've rendered {count} times !</h1>
}
export default Effect;
{/* <nav className="navbar">
<span><h4>Welcome to App Components</h4></span>
</nav> */}
{/* <MessageCard/>
<WishCard/> */}
{/* <Employee name="naveen" age="23"/>
<Employee name="pavan" age="33"/>
<Employee name="kalyan" age="43"/>
<Employee name="uppala" age="53"/> */}
{/* <Student name="pavan" course="Mca"/> */}
{/* <Employee1/> */}
{/* <Student1/> */}
{/* <Item1/>  */}
{/* <HookCar /> */}
{/* <HookCars /> */}
{/* <Effect /> */}




/*body {
  margin: 0;
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html{
  font-size: 10px;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
.navbar{
  background-color: deepskyblue;
  font-size: 10px;
  padding: 5px;
}
.card{
  box-shadow: 0 0 5px black;
  width: 20rem;
  margin: 1.8rem;
  padding: 1.4rem;
  text-align: center;
  background-color: teal;
  color: whitesmoke;
}
button{
  box-shadow: 0 0 5px black;
  width: 10rem;
  margin: 1.8rem;
  padding: 1rem;
  text-align: center;
  background-color: teal;
  color: whitesmoke;
}
#blue{
  background-color: blue;
}
#red{
  background-color: red;
}
#black{
  background-color: black;
}
#green{
  background-color: green;
} */




// import Hook1 from './components/Hook1'
// // import Employee from './components/Employee';
// //  import MessageCard from './components/MessageCard';
// //  import WishCard from './components/WishCard';
// //import Student from './components/Student';
// import {Employee1} from './components/Employee1';
// import Student1 from './components/Student1';
// // import Item1 from './components/Item';
// import Item1 from './components/Item1';
// import HookCar from './components/HookCar';
// import HookCars from './components/HookCars';
// import Effect from './components/Effect';



 // let App=function(){
    // let App=()=>{
  //return (
     // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
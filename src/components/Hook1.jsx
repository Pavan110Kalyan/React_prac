import React,{useState} from "react";
function Hook1(){
    let [color,setColor]=useState("----");
    return( 
        <React.Fragment>
             <h1>My Favourite color is {color}!</h1>
             <button
             type="button" id="blue"
             onClick={()=>setColor("Blue")}
             >Blue</button>
              <button
             type="button" id="red"
             onClick={()=>setColor("Red")}
             >Red</button>
              <button
             type="button" id="green"
             onClick={()=>setColor("Green")}
             >Green</button>
              <button
             type="button" id="black"
             onClick={()=>setColor("Black")}
             >Black</button>
        </React.Fragment>
    );
}
export default Hook1;
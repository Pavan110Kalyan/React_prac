import React  from "react";
import right from '../images/right.svg';
import left from '../images/left.svg';
let Foot=()=>{
    return(
        <React.Fragment>
            <div className="Foot">
                <button><img src={left}/></button>
                <button>1</button>
                <button><img src={right}/></button>
                
            </div>
        </React.Fragment>
    );
}
export default Foot;
import { useNavigate } from "react-router-dom";

let NoPage=()=>{
    const navigate=useNavigate();
 return(
    <>
    <h1>404</h1>;
    <button  onClick={()=>navigate(-1)}></button>
 </>
 );
}
export default NoPage;
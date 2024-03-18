import { useNavigate } from "react-router-dom";

const Routing=()=>{
    const navigate = useNavigate()
return(
    <>
<h1>Routing Practice</h1>
<button onClick={()=>navigate(-1)}>go back</button>
</>
);
}
export default Routing;
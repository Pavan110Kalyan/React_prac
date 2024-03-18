import { Outlet, Link} from "react-router-dom";
let Layout=()=>{
    return(
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/blogs"><button>blogs</button></Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/react">React</Link>
                </li>
                <li>
                    <Link to="/route">Route</Link>
                </li>
                <li>
                    <Link to="/head">Head</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
        </>
    );
}
export default Layout;
import { Link } from "react-router-dom";
import "./navhref.css";
import i18next from "i18next";


export const Navhref:React.FC = ()=>{
    return( 
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/book/">book</Link></li>
            <li><Link to="/book/">book</Link></li>
            <li><Link to="/contact/">Contact us</Link></li>
            <li><Link to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/SVG_Logo.svg/512px-SVG_Logo.svg.png" alt="logo" /></Link></li>
        </ul>
    )
}
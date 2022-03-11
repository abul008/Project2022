import { Link } from "react-router-dom";
import i18next from "i18next";


export const Navhref:React.FC = ()=>{
    return( 
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/book/">book</Link></li>
        </ul>
    )
}
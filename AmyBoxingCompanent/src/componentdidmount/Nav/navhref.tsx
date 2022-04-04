import { Link } from "react-router-dom";
import "./navhref.css";
import i18next from "i18next";


export const Navhref:React.FC = ()=>{
    return( 
        <ul>
            <li><Link to="/">{i18next.t('home')}</Link></li>
            <li><Link to="/book/">{i18next.t('book')}</Link></li>
            <li><Link to="/book/">{i18next.t('contact')}</Link></li>
            <li><Link to="/contact/">{i18next.t('contact')}</Link></li>
            <li><Link to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/SVG_Logo.svg/512px-SVG_Logo.svg.png" alt="logo" /></Link></li>
        </ul>
    )
}
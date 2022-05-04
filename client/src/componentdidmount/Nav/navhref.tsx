import { Link , NavLink } from "react-router-dom";
import "./navhref.css";
import i18next from "i18next";

export const Navhref:React.FC = ()=>{
 
   

    function scrollToTop(): void {
        return window.scrollTo({ top: 0, behavior: "smooth" });
    }
    function scrollbutton(): void {
        return window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
    }
 
      
    
    return( 
        <ul>
            <li>
                <NavLink
                onClick={scrollToTop} 
                to="/">{i18next.t('home')}
                </NavLink>
            </li>
            <li>
                <NavLink
                activeClassName={'active-nav-admin'}
                to="/book/">{i18next.t('book')}</NavLink></li>
            <li>
                <NavLink
                onClick={scrollbutton}
                to="#">{i18next.t('contact')}
                </NavLink>
            </li>
            <li>
                <NavLink 
                activeClassName={'active-nav-admin'}  
                to="/basket/1">{i18next.t('basket')}
                </NavLink>
            </li>
            <li>
                <Link to="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/SVG_Logo.svg/512px-SVG_Logo.svg.png" alt="logo" />
                </Link>
            </li> 
        </ul>
    )
}
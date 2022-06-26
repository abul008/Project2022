import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {SvgLogo} from '../../svg'
import i18next from 'i18next'
import './index.css'

export const Navhref:React.FC = ()=>{
 
function scrollToTop (): void {
  return window.scrollTo({ top: 0, behavior: "smooth" });
}
function scrollbutton(): void {
  return window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
}
     
return ( 
  <div className="nav-ul_cantrol">
    <ul>
      <li>
        <NavLink
          onClick={scrollToTop} 
          to="/">{i18next.t <string> ('home')}
          </NavLink>
      </li>
      <li>
        <NavLink
          activeClassName={'active-nav-admin'}
          to="/book/">{i18next.t <string> ('book')}</NavLink></li>
      <li>
        <NavLink
          onClick={scrollbutton}
          to="#">{i18next.t <string> ('contact')}
        </NavLink>
      </li>
      <li>
        <NavLink 
          activeClassName={'active-nav-admin'}  
          to="/basket/1">{i18next.t <string> ('basket')}
        </NavLink>
      </li>
      <li>
        <Link to="/">
          <SvgLogo />
                {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/SVG_Logo.svg/512px-SVG_Logo.svg.png" alt="logo" /> */}
        </Link>
      </li> 
    </ul>
  </div>
  )
}
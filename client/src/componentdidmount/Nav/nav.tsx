import React from "react";
import "./nav.css" ;
import {Navhref} from "./navhref"
import {NavLeft} from "./navleft";



export const Nav:React.FC = ()=>{




    return( 
        <div className="nav-wrapper-page">
           <div className="nav-wrapper-page-search-section">
                <NavLeft />
                <Navhref />            
           </div> 
        </div>
    )
}
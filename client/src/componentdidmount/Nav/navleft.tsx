import React from "react";
import {Search} from "../search/search";
import "./navleft.css" ;
import i18next from "i18next";
import {Profil} from "../profil/profile";


export const NavLeft:React.FC = ()=>{



  
    return( 
      
           <div className="nav-left_">
             <Search placeholder={i18next.t('search')}  />  
             <Profil />
          </div>

    )
}
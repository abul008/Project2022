import React from "react"
import {Search} from "../../search"
import i18next from "i18next"
import {Profil} from "../../profil"
import "./index.css"

export const NavLeft:React.FC = () => {

return ( 
  <div className="nav-left_">
    <Search placeholder={i18next.t('search')}  />  
    <Profil />
  </div>
  )
}
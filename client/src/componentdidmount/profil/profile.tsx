import React from "react";
import {SvgProfile} from "../svgicon/svg";
import {useTypedSelector} from "../../hooks/userTypedSelector";
import {ProfilPhoto} from "./profilphoto";
import "./profile.css"

export const Profil:React.FC = ()=>{
    const {users} = useTypedSelector(state => state.user)
     
    if(!users.name) return null
      
    
    return(
        <div  className="nav-profile">
           {users.photo_url ? <ProfilPhoto /> :  <SvgProfile /> }
        </div>
    )
}
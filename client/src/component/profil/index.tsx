import React from "react"
import { SvgProfile } from "../svg"
import { useTypedSelector } from "../../hooks/userTypedSelector"
import "./style.css"

export const Profil: React.FC = () => {
  const {users} = useTypedSelector(state => state.user)  
  if(!users.name) return null

  const ProfilPhoto = () => {
    return (
      <span  
        style={{backgroundImage:`url(https://images.pexels.com/photos/89551/pexels-photo-89551.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)`}}>
      </span>
    )
  }
     
  return (
    <div  className="nav-profile">
      {users.photo_url ? ProfilPhoto() :  <SvgProfile /> }
    </div>
  )
}
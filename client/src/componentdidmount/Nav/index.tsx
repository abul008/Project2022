import React from "react"
import "./index.css" 
import { Navhref } from './href'
import { NavLeft } from './serach'

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
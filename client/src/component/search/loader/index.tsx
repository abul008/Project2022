import React from "react"
import { Props } from "./types/props"
import "./index.css"

export const SearchLoader: React.FC<Props> = ({loaderstyle}) => { 
  return (
    <div className="loader" style={loaderstyle}></div>
  )
}

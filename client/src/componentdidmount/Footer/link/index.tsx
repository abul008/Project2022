import React from "react"
import { Link } from "react-router-dom"

interface Footerlink {
  footerdata: typeshref[]
}

interface typeshref {
  footerhref:string,
  footername:string
}

export const Footerlink: React.FC<Footerlink> = (props) => {

  return (
    <ul>
      {
        props.footerdata.map( (data,index) =>
          <li key={index}>
             <Link to={`/${data.footerhref}`}>{data.footername}</Link>
          </li>         
        )
      }
    </ul>
  )
}
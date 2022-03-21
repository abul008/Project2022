import React from "react"
import { Link } from "react-router-dom"
import {useTypedSelector} from "../../hooks/userTypedSelector";
import { Footer } from "./footer"





interface typeshref{
    footerhref:string,
    footername:string
}
export const FooterContactlink:React.FC = () =>{


 
    const {getHomedata} = useTypedSelector(state => state.home)
    

    console.log(getHomedata[0] ? getHomedata[0].phone_number : undefined)

    return(
     <ul>

        <li>
            <Link to={`/`}>{getHomedata[0] ? getHomedata[0].phone_number : undefined}</Link>
        </li>         
     </ul>
    )
}
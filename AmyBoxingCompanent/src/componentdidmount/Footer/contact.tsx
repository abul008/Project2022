import React from "react"
import { Link } from "react-router-dom"
import {useTypedSelector} from "../../hooks/userTypedSelector";
import "./contact.css" ;






interface typeshref{
    footerhref:string,
    footername:string
}
export const FooterContactlink:React.FC = () =>{


 
    const {getHomedata} = useTypedSelector(state => state.home)
    

    console.log(getHomedata)


    return(
     <ul >
        <ul className="footer-phone_cantrol" >
            <li>
                 <a href={`tel:${getHomedata[0] ? getHomedata[0].phone_number : undefined}`}>
                 {getHomedata[0] ? getHomedata[0].phone_number : undefined}
                 </a>
            </li>         
            <li>
                 <a href={`tel:${getHomedata[0] ? getHomedata[0].phone_number2 : undefined}`}>
                 {getHomedata[0] ? getHomedata[0].phone_number2 : undefined}
                 </a>
            </li>  
        </ul>
        <ul>
            <li>
                <a href={`tel:${getHomedata[0] ? getHomedata[0].email : undefined}`}>
                {getHomedata[0] ? getHomedata[0].email : undefined}
                </a>
            </li>  
        </ul>
     </ul>
    )
}
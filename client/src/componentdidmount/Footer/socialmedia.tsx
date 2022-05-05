import React from "react"
import {useTypedSelector} from "../../hooks/userTypedSelector";
import {SvgFacebook ,SvgInstagram,SvgLocetion ,SvgTelegram} from "../svgicon/svg";
import "./socialmedia.css" ;





export const SocialMedia:React.FC = () =>{


 
    const {getHomedata} = useTypedSelector(state => state.home)

    
    return(
     <ul className="social-media">
       <li><a ><SvgFacebook /></a></li>  
       <li><a ><SvgInstagram /></a></li>  
       <li><a ><SvgTelegram /></a></li>
       <li><a href={getHomedata[0] ? getHomedata[0].addres : undefined }><SvgLocetion /></a></li>        
     </ul>
    )
}
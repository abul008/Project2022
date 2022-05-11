import React from "react"
import {useTypedSelector} from "../../hooks/userTypedSelector";
import {SvgFacebook ,SvgInstagram,SvgLocetion ,SvgTelegram} from "../svgicon/svg";
import "./socialmedia.css" ;





export const SocialMedia:React.FC = () =>{


 
    const {getHomedata} = useTypedSelector(state => state.home)

    

    
    return(
     <ul className="social-media">
       <li><a href={getHomedata[0] ? getHomedata[0].facebook_url : undefined } target="_blank"  ><SvgFacebook /></a></li>  
       <li><a href={getHomedata[0] ? getHomedata[0].instagram_url : undefined } target="_blank"  ><SvgInstagram /></a></li>  
       <li><a href={getHomedata[0] ? getHomedata[0].telegram_url : undefined } target="_blank"  ><SvgTelegram /></a></li>
       <li><a href={getHomedata[0] ? getHomedata[0].addres : undefined } target="_blank" ><SvgLocetion /></a></li>        
     </ul>
    )
}
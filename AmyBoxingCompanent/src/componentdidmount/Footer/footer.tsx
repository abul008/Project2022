import "./footer.css";
import { Footerlink } from "./footelink";
import {useTypedSelector} from "../../hooks/userTypedSelector";
import { FooterContactlink } from "./contact";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";



interface Footerdata{
    footerhref:string,
    footername:string
}

export const Footer:React.FC = () =>{
   
let contact:Footerdata[] = [
    {
        footerhref:"hello",
        footername:"hellos" 
    },
]
    
    const {getHomedata} = useTypedSelector(state => state.home)

   


    return(
        <div className="footer-wrapper">
            <div className="footer-top-section"> 
                <div className="footer-link">
                 <FooterContactlink />
                </div>
                 <div className="footer-social-media"></div>
            </div>
            <div className="footer-bottom-section">
                 
            </div>
        </div>
    )
}

import "./footer.css";
import i18next from "i18next";
import { Footerlink } from "./footelink";
import { SocialMedia } from "./socialmedia";
import {useTypedSelector} from "../../hooks/userTypedSelector";
import { FooterContactlink } from "./contact";
import {changelenguage} from "../helpers/auth";
import ReactHtmlParser from 'html-react-parser';
import React from "react";
import { Link } from "react-router-dom";




export const Footer:React.FC= () =>{
   
    
    const {getHomedata} = useTypedSelector(state => state.home)


    return(
        <div className="footer-wrapper"  id="footer">
            <div className="footer-top-section"> 
                 <div className="footer-logo-svg">
                     <img src="/svgfolder/logo.svg"></img> 
                     <img src="./erevan.png"></img> 
                 </div>
                 <div className="footer-top_center">
                     <ul>
                         <li><Link to="/">{i18next.t('faq')}</Link></li>
                         <li><Link to="/">{i18next.t('about_us')}</Link></li>
                         <li><Link to="/">{i18next.t('Howtoorder')}</Link></li>
                     </ul>
                     {ReactHtmlParser(`${changelenguage(getHomedata[0] , 'litleinfo')}`)}
                 </div>
                 <div className="footer-link-cantrol">
                  <div className="footer-link">
                   <FooterContactlink />
                   <SocialMedia />
                </div>
                  <div className="link_section_svg">
                     <img src="/svgfolder/logo.svg" /> 
                  </div>
                </div>
                
            </div>
            <div className="footer-lina"></div>
            <div className="footer-bottom-section">
            {ReactHtmlParser(`${changelenguage(getHomedata[0] , 'copyright')}`)}
            </div>
        </div>
    )
}

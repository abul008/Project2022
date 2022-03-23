import "./footer.css";
import i18next from "i18next";
import { Footerlink } from "./footelink";
import { SocialMedia } from "./socialmedia";
import {useTypedSelector} from "../../hooks/userTypedSelector";
import { FooterContactlink } from "./contact";
import ReactHtmlParser from 'html-react-parser';
import React, { useEffect } from "react";
import { Link } from "react-router-dom";



interface Footerdata{
    footerhref:string,
    footername:string,
    // copyright_am:string
}

export const Footer:React.FC = () =>{
   
let contact:Footerdata[] = [
    {
        footerhref:"hello",
        footername:"hellos" 
    },
]



    
    const {getHomedata} = useTypedSelector(state => state.home)

    // console.log(getHomedata)

   let a = getHomedata[0] ? getHomedata[0].copyright_am : undefined
    return(
        <div className="footer-wrapper">
            <div className="footer-top-section"> 
                <div className="footer-link">
                 <FooterContactlink />
                 <SocialMedia />
                </div>
                 <div className="footer-top_center">
                     <ul>
                         <li><Link to="">{i18next.t('faq')}</Link></li>
                         <li><Link to="">{i18next.t('about_us')}</Link></li>
                         <li><Link to="">{i18next.t('Howtoorder')}</Link></li>
                     </ul>
                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae qui totam recusandae. Aspernatur voluptas illum non nemo explicabo optio, ipsa magnam quo praesentium harum aut dolore dolorem consequuntur magni eligendi</p>
                 </div>
            </div>
            <div className="footer-lina"></div>
            <div className="footer-bottom-section">
             
                {/* {ReactHtmlParser(a)} */}
                {a}
            </div>
        </div>
    )
}

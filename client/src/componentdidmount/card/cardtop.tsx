import React from "react";
// import {changelenguage} from "../helpers/auth";
import "./card.css";








interface CardTop{
 url:string,
 id:string,
 file_url:string,
 authorname?:string
}

 

// eslint-disable-next-line react/display-name
export const CardTop = React.memo<CardTop>((props) =>{


    return(

            <div className="page-product-card-top-cantrol">
               <a className="page-product-card-hrefA" target="blank" href={ props.url  + props.id}>  
               <span className="page-product-cards-linkimg-witdh" style={{backgroundImage:`url(${props.file_url})`}}></span>  
               </a>    
               <div id="link" className="page-product-card-link-information"><a href={"/home/techniquenav/product/"}>{props.authorname}</a>  <span>
              </span></div>
            </div>    
           
    )
})

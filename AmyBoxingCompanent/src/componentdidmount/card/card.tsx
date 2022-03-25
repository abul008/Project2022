import React,{useEffect ,useState} from "react";
import axios from "axios" ; 
// import { BiCart} from "react-icons/bi";
// import { BsBookmarks  } from "react-icons/bs";
import {changelenguage} from "../helpers/auth"
import { useDispatch } from "react-redux";

import "./card.css";






interface CardInfo {
  carddata:CardJson[]
}
interface CardJson{
  cardname_am:string,
  cardname_ru:string,
  cardname_en:string,
  cardauthor_am:string,
  cardauthor_ru:string ,
  cardauthor_en:string ,
  cardprice:string,
  cardlanguage:string,
  cardurl:string,
  cardgetgoti:string,
  id:string,
  cardfile:any
}

 
export const Card:React.FC<CardInfo> = ({carddata}) =>{

  const routerproduct = localStorage.getItem('product')
  const [filtersort , setFiltersort] = useState(false)
  const [btnquantity , setBtnquantity] = useState(0)
  const dispatch = useDispatch()
  

 



    return(
      <div className="page-product-card-wrapper" >
   
       <div style={{background:""}} className="page-product-card-bottom-cantrol">
      {
         carddata.map((data,index)=>{
         return(
        <div 
        key={index}
          className="page-product-card-wrapper-cantrol">
           <div className="page-product-card-is-savaliabe">
            <span 
            style={{ 
              background: data.cardgetgoti === "Limited" ? "linear-gradient(to bottom, #cac531, #f3f9a7)" : undefined ||
              data.cardgetgoti === "In stock"  ? "linear-gradient(to bottom, #1d976c, #93f9b9)" : undefined ||
              data.cardgetgoti === "out of stock"  ? "linear-gradient(to bottom, #d31027, #ea384d)" : undefined || 
              data.cardgetgoti === "New"  ? "linear-gradient(to bottom, #1d976c, #93f9b9)" : undefined 
            }}
        
            >{"data.cardisavailabe"}</span>
            <div className="page-product-card-is-savalibe-flag" 
             style={{
               backgroundImage: data.cardgetgoti === "Armenian" ? "url(/svgfolder/flagarm.svg)" : undefined ||
               data.cardgetgoti === "Russian" ? "url(/svgfolder/flagrus.svg)" : undefined ||
               data.cardgetgoti === "English" ? "url(/svgfolder/flaguse.svg)" : undefined 
              
              }}
             >
                 
             </div>
            </div>
            <div  className="page-product-card-head-settings">
            <div className="page-product-card-top-cantrol">
            <a className="page-product-card-hrefA" target="_blank" href={"/book" + data.cardurl + "/" +data.id}>  
            <span className="page-product-cards-linkimg-witdh" style={{backgroundImage:`url(${data.cardfile[0]})`}}></span>  
            </a>    
            <div className="page-product-card-link-information"><a href={"/home/techniquenav/product/"}>{changelenguage(data , 'cardauthor') }</a>  <span>
                {/* <BsBookmarks/> */}
                </span></div>
            </div>    
            <div className="page-product-cards-bottom-cantrol-info">         
            <h4>{  changelenguage(data , 'cardname')}</h4>
            <div className="page-product-cards-bottom">
            <b>{data.cardprice}AMD</b>
          </div> 
        <div className="page-product-cards-shop-info">
         {/* <BsPencil/>    */}
        
         <button style={{
             background:data.cardgetgoti === "out of stock" || 
             data.cardgetgoti === "Առկա չէ" ? "linear-gradient(to bottom, #d31027, #ea384d)" : undefined
        ,    opacity:data.cardgetgoti === "Առկա չէ" || btnquantity === 10 ? "0.6" : undefined
        }}
        onClick={()=>{ setBtnquantity(btnquantity+1);console.log('hello')}}
        // disabled={data.cardisavailabe === "Առկա չէ" || btnquantity === 10 }
         >
              {/* <BiCart/> */}
              <img src="/svgfolder/buyicon.svg" />         </button>
         </div>
         </div>
         </div>
    </div>
           )
          })
   
          
         }

    </div> 

     </div>
    )
}


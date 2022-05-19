import React from "react";
import {changelenguage} from "../helpers/auth";
import {CardJson} from "../InterFace/card";
import {SvgBasket} from "../svgicon/svg";
import {productdatas , orderDataCount} from "../helpers/auth";
import {DiscountCard} from "./carddiscount";
import {PriceCard} from "./cardprice";
import {useTypedSelector} from "../../hooks/userTypedSelector";
import { useActions } from "../../hooks/useActions";
import "./card.css";







interface CardInfo {
  carddata:CardJson[]
}

 
export const Card:React.FC<CardInfo> = ({carddata}) =>{



  const {quantity} = useTypedSelector(state => state.home)
  const {setChangequantity} = useActions()
  const array:string[] = productdatas()
  // const datas:string[] = JSON.parse(localStorage.getItem('data') || "")
 



      

    return(
      <div className="page-product-card-wrapper" >
   
       <div style={{background:""}} className="page-product-card-bottom-cantrol">
      {
         carddata.map((data)=>{
         return(
           
        <div 
          key={data.id}
          className="page-product-card-wrapper-cantrol">
           {/* <div className="page-product-card-is-savaliabe"> */}
             <DiscountCard discount={(+data.cardprice - +data.carddiscount)  * 100 / +data.cardprice} />
            <div className="page-product-card-is-savalibe-flag" 
             style={{
               backgroundImage: data.cardlanguage === "Armenian" ? "url(/svgfolder/flagarm.svg)" : undefined ||
               data.cardlanguage === "Russian" ? "url(/svgfolder/flagrus.svg)" : undefined ||
               data.cardlanguage === "English" ? "url(/svgfolder/flaguse.svg)" : undefined 
              
              }}
             >
             </div>
            {/* </div> */}
            <div  className="page-product-card-head-settings">
            <div className="page-product-card-top-cantrol">

            <a className="page-product-card-hrefA" target="blank" href={ data.cardurl  + data.id}>  
            <span className="page-product-cards-linkimg-witdh" style={{backgroundImage:`url(${data.cardfile[0]})`}}></span>  
            </a>    
            <div id="link" className="page-product-card-link-information"><a href={"/home/techniquenav/product/"}>{changelenguage(data , 'cardauthor') }</a>  <span>
                </span></div>
            </div>    
            <div className="page-product-cards-bottom-cantrol-info">         
            <h4>{changelenguage(data , 'cardname')}</h4>
 
          <PriceCard price={data.cardprice} discount={data.carddiscount} />
        <div className="page-product-cards-shop-info"> 
        <span 
            style={{ 
              background: data.cardgetgoti === "Limited" ? "linear-gradient(to bottom, #cac531, #f3f9a7)" : undefined ||
              data.cardgetgoti === "In stock"  ? "linear-gradient(to bottom, #1d976c, #93f9b9)" : undefined ||
              data.cardgetgoti === "out of stock"  ? "linear-gradient(to bottom, #d31027, #ea384d)" : undefined || 
              data.cardgetgoti === "New"  ? "linear-gradient(to bottom, #1d976c, #93f9b9)" : undefined 
            }}>{data.cardisisavailabe}</span>
        <div className="card-button-head">
         <button disabled={ orderDataCount(array)[data.id] >= 10 ? true : false } style={{
             background:data.cardgetgoti === "out of stock" || 
             data.cardgetgoti === "Առկա չէ" ? "linear-gradient(to bottom, #d31027, #ea384d)" : undefined
        ,    opacity:data.cardgetgoti === "Առկա չէ" || quantity === 10 ? "0.6" : undefined
        }}
          onClick={()=>{
            // const filter = datas.indexOf(data.id)
            // console.log(filter)
            // localStorage.setItem("data" ,JSON.stringify([...datas, {
            //        id:data.id,
            //        count:1
            // }]))
            array !== null ? 
            localStorage.setItem("productdata" , JSON.stringify([...array ,data.id]))
            : localStorage.setItem('productdata'  , JSON.stringify([data.id]))
             setChangequantity(quantity + 1)
            }}
          // disabled={data.cardisavailabe === "Առկա չէ" || btnquantity === 10 }
           >
        <SvgBasket />
         </button>
         </div>
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


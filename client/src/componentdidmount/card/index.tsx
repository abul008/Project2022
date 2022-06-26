import React from "react"
import { changelenguage } from "../helpers/auth"
import { Discount } from "./discount"
import { PriceCard } from "./price"
import { CardLanguage } from "./language"
import { CardTop } from "./top"
import { Isavailabe } from "./isavailabe"
import { CardButton } from "./button"
import Props from "./types/props"
import "./style.css";

export const Card:React.FC<Props> = ({carddata}) => {

  return (
    <div className="page-product-card-wrapper" >
      <div style={{background:""}} className="page-product-card-bottom-cantrol">
        {
          carddata.map( (data) => {
            return(           
              <div key={data.id} className="page-product-card-wrapper-cantrol">
                <Discount discount={(+data.cardprice - +data.carddiscount)  * 100 / +data.cardprice} />
                <CardLanguage language={data.cardlanguage} />
                <div className="page-product-card-head-settings">
                  <CardTop url={data.cardurl} id={data.id} file_url={data.cardfile[0]} authorname={changelenguage(data , 'cardauthor')} />
                  <div className="page-product-cards-bottom-cantrol-info">         
                    <h4>{changelenguage(data , 'cardname')}</h4>
                    <PriceCard price={data.cardprice} discount={data.carddiscount} />
                    <div className="page-product-cards-shop-info">
                      <Isavailabe
                        getgoti={data.cardgetgoti} 
                        isisavailabe={data.cardisisavailabe} /> 
                      <CardButton 
                        getgoti={data.cardgetgoti}
                        id={data.id} 
                        name={data.cardname_am} 
                        author={data.cardauthor_am} 
                        buttonprice={data.cardprice}  
                        file_url={data.cardfile[0]} />
                    </div>
                  </div>
               </div>
             </div>
            )
          }
        )
        }
      </div> 
    </div>
  )
}
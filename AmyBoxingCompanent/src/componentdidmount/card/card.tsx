import React,{useEffect ,useState} from "react";
import axios from "axios" ; 
// import { BiCart} from "react-icons/bi";
// import { BsBookmarks  } from "react-icons/bs";
import { useDispatch } from "react-redux";

import "./card.css";








 
export const Card = () =>{

  const routerproduct = localStorage.getItem('product')
  const [filtersort , setFiltersort] = useState(false)
  const [btnquantity , setBtnquantity] = useState(0)
  const dispatch = useDispatch()
  


    return(
      <div className="page-product-card-wrapper" >
   
       <div className="page-product-card-bottom-cantrol">
      {/* {
         props.data.length == 0 ?
         null :  props.data.map((data,index)=>{
         return( */}
        <div 
        // key={index}
          className="page-product-card-wrapper-cantrol">
           <div className="page-product-card-is-savaliabe">
            <span style={{
            //   background:data.bookisavailabe === "Սահմանափակ է" || data.cardisavailabe === "Limited" ? "linear-gradient(to bottom, #cac531, #f3f9a7)" : null ||
            //   data.cardisavailabe === "In stock" || data.cardisavailabe === "Առկա է" ? "linear-gradient(to bottom, #1d976c, #93f9b9)" : null ||
            //   data.cardisavailabe === "out of stock" || data.cardisavailabe === "Առկա չէ" ? "linear-gradient(to bottom, #d31027, #ea384d)" : null || 
            //   data.cardisavailabe === "New" || data.cardkisavailabe === "Նորույթ" ? "linear-gradient(to bottom, #1d976c, #93f9b9)" : null 
            }}>{"data.cardisavailabe"}</span>
            <div className="page-product-card-is-savalibe-flag" 
            //  style={{backgroundImage: data.cardlenguageproduct === "Armenian" ? "url(/flagleng/armenianflag.png)" : null}}
             >
                 
             </div>
            </div>
            <div  className="page-product-card-head-settings">
            <div className="page-product-card-top-cantrol">
            <a className="page-product-card-hrefA" target="_blank" href={`/product/${"data.cardid"}`}>  
            <span className="page-product-cards-linkimg-witdh" style={{backgroundImage:`url(/$"{data.file[0]}")`}}></span>  
            </a>    
            <div className="page-product-card-link-information"><a href={"/home/techniquenav/product/"}>{ "data.cardname"}</a>  <span>
                {/* <BsBookmarks/> */}
                </span></div>
            </div>    
            <div className="page-product-cards-bottom-cantrol-info">         
            <h4>{"data.cardauthorname"}</h4>
            <div className="page-product-cards-bottom">
            <b>{"data.cardproductprice"}AMD</b>
          </div> 
        <div className="page-product-cards-shop-info">
         {/* <BsPencil/>    */}
        
         <button style={{
        //      background:data.cardisavailabe === "out of stock" || 
        //  data.cardisavailabe === "Առկա չէ" ? "linear-gradient(to bottom, #d31027, #ea384d)" : null
        // ,opacity:data.cardisavailabe === "Առկա չէ" || btnquantity === 10 ? "0.6" : null
        }}
        onClick={()=>{ setBtnquantity(btnquantity+1);console.log('hello')}}
        // disabled={data.cardisavailabe === "Առկա չէ" || btnquantity === 10 }
         >
              {/* <BiCart/> */}
         </button>
         </div>
         </div>
         </div>
    </div>

    </div> 

     </div>
    )
}


import React,{ useEffect, useState  } from "react";
import "./shoppingList.css";
import {changelenguage} from "../helpers/auth";
import {BookinformationCard } from "../InterFace/bookPageInterface";
import axios from "axios";
// import { useParams } from "react-router-dom";
import {productdatas} from "../helpers/auth";
import { useActions } from '../../hooks/useActions';
import {ShopingCard} from "./shopingCard";
import {Pagination} from "../Pagination/pagination";
import {ShopingTable} from "../InterFace/shopList";
import {ShopForm} from "./shoppingform";
import "./shoppingList.css"
import i18next from "i18next";



// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ShopingList:React.FC<any> = ({match}) =>{

  

    const {setViewLoader} = useActions()
    // const { page } = useParams <{page?: string  | undefined}>();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [currentPage , setCurrentPage] = useState<number>(match.params.page);
    const [postsPerPage] = React.useState<number>(7)
    const [formview , setFormview] = useState<boolean>(false)

    const [shoplist , setShoplist] = useState<ShopingTable[]>([])
    const array:string[] = productdatas() 
      
   
  

      useEffect(()=>{
      
      
          setViewLoader(false)
          axios.get('/api/v1/getbookinfo')
          .then(res=>{
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const map:string[] = array.reduce(function(prev:any, cur:string) {
              prev[cur] = (prev[cur]  || 0 ) + 1 ;
              return prev
             }, {});
          let shopdata:ShopingTable[] = []      
          for (const property in map) {
           const filtershoplist =  res.data.filter((filter:BookinformationCard)=>
             {return filter._id  === property})
             .map((data:ShopingTable)=>{
             return{
               name:changelenguage(data,"name"),
               author:changelenguage(data,"author"),
               _id:data._id,
               count:map[property],
               price:data.price,
               filename:data.files[0] ? data.files[0].fileHreaf : undefined
             }
           })  
              shopdata =  [...shopdata , ...filtershoplist]   
           }    
           setShoplist(shopdata)
           setViewLoader(true)
         })

         

       
     
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[])


      if(!array[0]) return null
    
  
   const indexOfLastPost = match.params.page * postsPerPage;
   const indexOfFirstPost = indexOfLastPost - postsPerPage;
   const currentPosts = shoplist.slice(indexOfFirstPost,indexOfLastPost);
   const paginate = (pageNumber:number) => setCurrentPage(pageNumber)  

 
  return(
    <div className="shop-page-wrapper" >
       <div className="shop-list-section">
         <div className="shop-list-card-section">
         {
          currentPosts.map((data,index)=>
               <ShopingCard
                key={index}
                name={data.name} 
                author={data.author} 
                _id={data._id} 
                price={data.price} 
                count={data.count} 
                filename={data.filename} 
                />
          )
        }
         </div>
         <div className="shop-list-under">
          <button onClick={()=>{setFormview(true)}}>{i18next.t('order')}</button> 
          <Pagination postsPerPage={postsPerPage} totalPosts={shoplist.length} paginate={paginate} pageaktiv={match.params.page} />  
         </div> 
       </div>
      <ShopForm 
      open={formview}
      data={shoplist}
      clossClick={()=>{setFormview(false)}}
       />
      </div>
  )

}
import React,{ useState  } from "react";
import "./shoppingList.css";
import {shopList} from "../helpers/auth";
import {ShopingCard} from "./shopingCard";
import {Pagination} from "../Pagination/pagination";
import {ShopForm} from "./shoppingform";
import "./shoppingList.css"
import i18next from "i18next";



// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ShopingList:React.FC<any> = ({match}) =>{

  

  
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [currentPage , setCurrentPage] = useState<number>(match.params.page);
    const [postsPerPage] = React.useState<number>(7)
    const [formview , setFormview] = useState<boolean>(false)

    const datas = shopList()


      
      if(!datas[0]) return null
    
  
   const indexOfLastPost = match.params.page * postsPerPage;
   const indexOfFirstPost = indexOfLastPost - postsPerPage;
   const currentPosts = datas.slice(indexOfFirstPost,indexOfLastPost);
   const paginate = (pageNumber:number) => setCurrentPage(pageNumber)  

   
  return(
    <div className="shop-page-wrapper" >
       <div className="shop-list-section">
         <div className="shop-list-card-section">
         {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          currentPosts.map((data:any,index:any)=>
               <ShopingCard
                key={index}
                name={data.name} 
                author={data.author} 
                _id={data.id} 
                price={data.price} 
                count={data.count} 
                filename={data.file_url} 
                />
          )
        }
         </div>
         <div className="shop-list-under">
          <button onClick={()=>{setFormview(true)}}>{i18next.t('order')}</button> 
          <Pagination postsPerPage={postsPerPage} totalPosts={datas.length} paginate={paginate} pageaktiv={match.params.page} />  
         </div> 
       </div>
      <ShopForm 
      open={formview}
      data={datas}
      clossClick={()=>{setFormview(false)}}
       />
      </div>
  )

}
/* eslint-disable react-hooks/exhaustive-deps */
import React,{ useCallback, useMemo, useState  } from "react";
import "./shoppingList.css";
import {shopList} from "../helpers/auth";
import {ShopingCard} from "./shopingCard";
import {Pagination} from "../Pagination/pagination";
import {ShopForm} from "./shoppingform";
import {UserContext} from "./context";
import "./shoppingList.css"
import i18next from "i18next";
// import { CardShopList } from "../InterFace/shopList";



// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ShopingList:React.FC<any> = ({match}) =>{

  

  

    const [currentPage , setCurrentPage] = useState<number>(match.params.page);
    const [postsPerPage] = React.useState<number>(7)
    const [formview , setFormview] = useState<boolean>(false)
    const datas = shopList()
    
    const open = useCallback(()=>{
      return setFormview(false) 
  },[])
   
  const mydata = useMemo(()=>{
      return datas
   },[formview])
      
    if(!datas[0]) return null
    
  
   const indexOfLastPost = match.params.page * postsPerPage;
   const indexOfFirstPost = indexOfLastPost - postsPerPage;
   const currentPosts = datas.slice(indexOfFirstPost,indexOfLastPost);
   const paginate = (pageNumber:number) => setCurrentPage(pageNumber);  
  
  


   
  return(
    <div className="shop-page-wrapper" >
       <div className="shop-list-section">
         <div className="shop-list-card-section">
         {
          currentPosts.map((data)=>{
          return(
          <React.Fragment key={data.id}>
                  <UserContext.Provider  value={{
                    price:+data.price,
                    name:data.name,
                    author:data.author,
                    _id:data.id,
                    count:data.count,
                    filename:data.file_url
                  }}>
                 <ShopingCard />
               </UserContext.Provider>
          </React.Fragment>
          )
     })
        }
         </div>
         <div className="shop-list-under">
          <button onClick={()=>{setFormview(true)}}>{i18next.t('order')}</button> 
          <Pagination postsPerPage={postsPerPage} totalPosts={datas.length} paginate={paginate} pageaktiv={currentPage} />  
         </div> 
       </div>
      <ShopForm 
      open={formview}
      data={mydata}
      clossClick={open}
       />
      </div>
  )

}
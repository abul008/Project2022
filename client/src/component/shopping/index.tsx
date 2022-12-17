/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useMemo, useState, useEffect } from "react"
import { shopList } from "../helpers/auth"
import { ShopingCard } from "./card"
import { Pagination } from "../Pagination"
import { ShopForm } from "./form"
import { UserContext } from "./count/context"
import {  useParams } from 'react-router-dom'
import i18next from "i18next"
import "./style.css"
// import { CardShopList } from "../InterFace/shopList";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ShopingList:React.FC<any> = () => {

  const [currentPage , setCurrentPage] = useState<number>(1)
  const [postsPerPage] = React.useState<number>(7)
  const [formview , setFormview] = useState<boolean>(false)
  const { page } = useParams <{page: string}>()
  const datas = shopList()

  useEffect(() => {
    setCurrentPage(+page)
  }, [])
    
  const open = useCallback( () => {
    return setFormview(false) 
  }, [])
   
  const mydata = useMemo( () => {
    return datas
  }, [formview])
      
  if(!datas[0]) return null
    
  
  const indexOfLastPost = +page * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = datas.slice(indexOfFirstPost,indexOfLastPost)
  const paginate = (pageNumber:number) => setCurrentPage(pageNumber)
  
  return (
    <div className="shop-page-wrapper" >
      <div className="shop-list-section">
        <div className="shop-list-card-section">
          {
            currentPosts.map( (data) => {
              return (
                <React.Fragment key={data.id}>
                  <UserContext.Provider  value={{
                    price: +data.price,
                    name: data.name,
                    author: data.author,
                    _id: data.id,
                    count: data.count,
                    filename: data.file_url
                    }}>
                    <ShopingCard />
                  </UserContext.Provider>
                </React.Fragment>
                )
              })
          }
        </div>
        <div className="shop-list-under">
          <button onClick={ ()=> {setFormview(true) }}>{i18next.t('order')}</button> 
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
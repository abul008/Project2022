import React,{  useState ,useContext, useLayoutEffect } from "react"
import { shopList } from "../../helpers/auth"
import PropTypes from './props'
import { UserContext } from "./context"
import './style.css'

export const CountButton:React.FC = () => {
  
const [counts , setCounts] = useState(0)
const list = shopList()
const ShopCardContext = useContext(UserContext);

useLayoutEffect( () => {
  setCounts(ShopCardContext.count)
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

return (
  <>
    <div className="shop-list-count">
      <button
        disabled={counts  <= 1 ? true  : false}
        onClick={ () => {  
          setCounts(counts - 1)
          const filter: number =  list.findIndex((index: PropTypes) => index.id === ShopCardContext._id )
          list[filter].count --
          localStorage.setItem("data", JSON.stringify( list ))}} />
        <div className="counts-shop-list">
          {counts}
        </div>
        <button
          disabled={counts  === 10 ? true  : false} 
          onClick={ () => { 
            const filter:number =  list.findIndex(( index: PropTypes) => index.id === ShopCardContext._id)
            list[filter].count ++
            localStorage.setItem("data" , JSON.stringify(list))
            setCounts(counts + 1)}} />  
     </div>   
     <div className="shop-list-price">{ShopCardContext.price * counts}֏</div>
  </>
  )
}
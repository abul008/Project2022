import React from "react"
import { SvgBasket } from "../../svg"
import { shopList } from "../../helpers/auth"
import { productdatas, orderDataCount} from "../../helpers/auth"
import { Shopicon } from "../../shopping/basket/shopingicon"
import { useTypedSelector } from "../../../hooks/userTypedSelector"
import { useActions } from "../../../hooks/useActions"
import Props from "./types/props"
import "../style.css"

export const CardButton:React.FC<Props> = (props) =>{

  const {quantity} = useTypedSelector(state => state.home)
  const {setChangequantity} = useActions()
  const array:string[] = productdatas()
  const datas = shopList()
 
  return (
    <div className="card-button-head">
      <button 
        disabled={ orderDataCount(array)[props.id] >= 10 ? true : false } 
        style={{
          background:props.getgoti === "out of stock" || 
          props.getgoti === "Առկա չէ" ? "linear-gradient(to bottom, #d31027, #ea384d)" : undefined 
          ,opacity:props.getgoti === "Առկա չէ" || quantity === 10 ? "0.6" : undefined
        }}
        onClick={ () => {
        const filter = datas.findIndex((index:Props)=>index.id === props.id)
        if (filter === -1) {
          localStorage.setItem("data" , JSON.stringify([...datas ,{
            id: props.id,
            name:props.name,
            author:props.author,
            price:props.buttonprice,
            file_url:props.file_url,
            count:1
          }]))
        }
        else {
          datas[filter].count ++
          localStorage.setItem("data" , JSON.stringify(datas))
        }   
        setChangequantity(quantity + 1)
        }
      }>
      <SvgBasket />
    </button>
    <Shopicon />
  </div>
  )
}
import { useEffect, useState } from "react";
import "./shopingicon.css";
import {useTypedSelector} from "../../hooks/userTypedSelector";
import {changelenguage} from "../helpers/auth";
import {BookinformationCard } from "../InterFace/bookPageInterface";
import axios from "axios";
import {productdatas} from "../helpers/auth";
import { useActions } from '../../hooks/useActions';
import "./shoppingList.css"

interface ShopingList{
  files: any;
  name:string,
  author:string,
  _id:string,
  price: number,
  count:number,
  filename:any[]
}

export const ShopingList:React.FC = () =>{
  
    const {quantity} = useTypedSelector(state => state.home)
    const {setChangequantity} = useActions()

    const [shoplist , setShoplist] = useState<ShopingList[]>([])
   
    let array:string[] = productdatas() 
    
   
      useEffect(()=>{
        axios.get('http://localhost:8080/api/v1/getbookinfo')
        .then(res=>{
          console.log(res.data)
          let map:string[] = array.reduce(function(prev:any, cur:any) {
           prev[cur] = (prev[cur]  || 0 ) + 1 ;
           return prev
         
          }, {});
        let shopdata:ShopingList[] = []
        for (const property in map) {
         let filtershoplist =  res.data.filter((filter:BookinformationCard)=>{return filter._id  === property}).map((data:ShopingList)=>{
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
       })
      },[quantity])



  

  
  
   
  return(
      <div className="shop-list-section">
         {
           shoplist.map((data,index)=>{
             return(
               <div key={index} className="shop-list-card">
                 <div className="shop-list-product-info">
                   <div className="shop-list-img" style={{backgroundImage:`url(${data.filename})`}}></ div>
                    {/* <div className="shop-list-info"></div> */}
                     <div className="shop-list-name">
                       <span>{data.name} </span>
                       <span>{data.author} </span>
                     </div>
                 </div>
               
                       <div className="shop-list-count">
                          <span
                          onClick={()=>{
                           let indexdelete:number = array.findIndex((element:string) => element === data._id)
                           if (indexdelete > -1) {
                            array.splice(indexdelete, 1).reverse()
                           }

                            localStorage.setItem('productdata', JSON.stringify(array))
                            setChangequantity(quantity - 1)
                          }}
                          >-</span> {data.count} <span onClick={()=>{ 
                            localStorage.setItem("productdata" , JSON.stringify([...array ,data._id]))
                            setChangequantity(quantity + 1)
                          }
                            }>+</span>   
                       </div>
                       <div className="shop-list-price">{data.price * data.count}֏</div>
               </div>
             )
           })
         }
      </div>
  )

}
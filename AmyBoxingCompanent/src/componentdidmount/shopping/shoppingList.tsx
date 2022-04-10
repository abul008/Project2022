import { useEffect, useState } from "react";
import "./shopingicon.css";
import {useTypedSelector} from "../../hooks/userTypedSelector";
import {changelenguage} from "../helpers/auth";
import {BookinformationCard } from "../BookPageScreen/bookPageInterface";
import axios from "axios";
import { useActions } from '../../hooks/useActions';

interface ShopingList{
  files: any;
  name:string,
  count:number,
  filename:any[]
}

export const ShopingList:React.FC = () =>{
  
    const {quantity} = useTypedSelector(state => state.home)
    const {setChangequantity} = useActions()

    const [shoplist , setShoplist] = useState<ShopingList[]>([])
   
    let array:string[] = JSON.parse(localStorage.getItem('productdata') || "") 
    

    

    // array = JSON.parse(array)
  
   
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
             count:map[property],
             filename:data.files[0] ? data.files[0].fileHreaf : undefined
           }
         })  
            shopdata =  [...shopdata , ...filtershoplist]   
         }

         setShoplist(shopdata)
       })
      },[])


   
  return(
      <div className="shop-list-wrapper">
         {
           shoplist.map((data,index)=>{
             return(
               <div key={index} className="">{data.name} {data.count} {data.filename}</div>
             )
           })
         }
      </div>
  )

}
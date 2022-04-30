import {SvgShop} from "../svgicon/svg";
import React, { useState ,memo ,useMemo } from "react";

import "./shoppingform.css";
import {useTypedSelector} from "../../hooks/userTypedSelector";
import { useActions } from '../../hooks/useActions';
import i18next from "i18next";
import axios from "axios";
import {ShopingTable} from "../InterFace/shopList";


interface FormType{
    name:string ,
    lastname:string,
    email:string ,
    phone:string,
    message:string,
    data:ShopingTable
}
export const  ShopForm:React.FC<any> = ({data  ,formstyle ,clossClick})=>{
 
    const {quantity} = useTypedSelector(state => state.home)

    

    const [formdata ,setFormdata] = useState<FormType>({
        name:"" ,
        lastname:"",
        email:"" ,
        phone:"",
        message:"",
        data:data
    })
    const [answer , setAnswer] = useState<string>("")
    
    const {setChangequantity} = useActions()
    
    

const SendOrder = async (e:React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault();
  const config:any = {
    header: {
      'Content-Type': 'application/json'
    },
  };
  

  let datas:FormType = {
   name:formdata.name,
   lastname:formdata.lastname,
   phone:formdata.phone,
   email:formdata.email,
   message:formdata.message,
   data:data
  }   
  

  try {
    
    await axios.post("/api/v1/order",datas)
    .then(res=>setAnswer(res.data))
    // setTimeout(()=>{
    //   window.location.reload(); 
    // },3000)
     
   }catch(error){
    //  setFormerror(error.response.data);
    //  if(error.response.data.email && error.response.data.phone_number){
    //   dispatch(registrationform({...questionssend, phone_number:"" ,email:""}))  
    //  }else if(error.response.data.email){
    //   dispatch(registrationform({...questionssend, email:""}))
    //  }else if(error.response.data.phone_number){
    //   dispatch(registrationform({...questionssend, phone_number:""}))
    //  }          
    //  setTimeout(()=>{
    //     setFormerror("")  
    //  },[6000])
   }


   


}




   
  return(
      <div className="shop-from-sec_" style={formstyle}>
        
        <div className="form-cantrol-sec_">
          <div className="shop-form-title-sec">
            <h2>Tvyalner{answer}</h2>
            <span onClick={clossClick}>Closs</span>
        </div>
         <form onSubmit={SendOrder}>
             <div className="shop-form-input"> 
               <input
                 type="text"
                 placeholder={i18next.t('name')}
                 onChange={(e:React.ChangeEvent<HTMLInputElement>)=>
                 setFormdata({...formdata,name:e.target.value})} 
              />
             </div>
             <div className="shop-form-input"> 
            
             <input
              type="text"
              placeholder={i18next.t('lastname')}
              onChange={(e:React.ChangeEvent<HTMLInputElement>)=>
                setFormdata({...formdata,lastname:e.target.value})} 
              />
              </div>
             <div className="shop-form-input"> 
             <input 
             type="text" 
             placeholder={i18next.t('email')}
             onChange={(e:React.ChangeEvent<HTMLInputElement>)=>
                setFormdata({...formdata,email:e.target.value})} 
              />
              </div>
             <div className="shop-form-input"> 
             <input
              type="text" 
              placeholder={i18next.t('phonenumber')}
              onChange={(e:React.ChangeEvent<HTMLInputElement>)=>
                setFormdata({...formdata,phone:e.target.value})} 
               />
               </div>
             <div className="shop-form-input"> 
               
             <input 
             type="text" 
             placeholder={i18next.t('message')}
             onChange={(e:React.ChangeEvent<HTMLInputElement>)=>
                setFormdata({...formdata,message:e.target.value})} 
             />
             </div>
             <button>{i18next.t('order')}</button>
         </form>
         </div>
      </div>
  )

}

import {SvgShop} from "../svgicon/svg";
import "./shoppingform.css";
import {useTypedSelector} from "../../hooks/userTypedSelector";
import { useActions } from '../../hooks/useActions';
import i18next from "i18next";
import { Link } from "react-router-dom";
import React, { useState } from "react";

interface FormType{
    name:string ,
    lastname:string,
    email:string ,
    phone:string,
    message:string
}
export const ShopForm:React.FC = () =>{
 
    const {quantity} = useTypedSelector(state => state.home)

    const [formdata ,setFormdata] = useState<FormType>({
        name:"" ,
        lastname:"",
        email:"" ,
        phone:"",
        message:""
    })
    
    const {setChangequantity} = useActions()


const SendOrder =(e:React.FormEvent<HTMLFormElement>)=>{
   e.preventDefault()

   const {
    name,
    lastname,
    phone,
    email,
    message
  } = formdata

  console.log(
    name,
    lastname,
    phone,
    email,
    message
  )
}



   
  return(
      <div className="shop-from-sec_">
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
  )

}
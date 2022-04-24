import cookie from 'js-cookie'
import i18next from "i18next"
import {useEffect} from "react"





export const getCookie = (key:any) => {
   const windows:any = window
   if (windows !== 'undefined') {
       return cookie.get(key);
   }
};

export const productdatas = () => {
  
   if (localStorage.getItem('productdata')) {
       return JSON.parse(localStorage.getItem('productdata') || "");
   } else {
       return [];
   }

};

export const isAuth =(name:string)=>{        
  
   // return localStorage.getItem(name)

   // if (window !== 'undefined') {
   //    const cookieChecked = cookie.getCookie('connect.sid');
      
   //    if (cookieChecked) {
          if (localStorage.getItem(name)){
              return localStorage.getItem(name || "");
          } else {
              return false;
          }
      // }
//   }
}





export const changelenguage = (data:any,name:string)=>{
    try{    
    if(data !== undefined){
        let datas = data[(name +i18next.t('lang'))] ;

         return datas;
    }
}catch(error){
   console.log(error)
}
}


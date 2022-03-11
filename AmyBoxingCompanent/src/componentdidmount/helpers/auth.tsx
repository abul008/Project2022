import cookie from 'js-cookie'
import {useEffect} from "react"


cookie.set('name', 'value')
console.log(cookie.get("connect.sid"))


export const getCookie = (key:any) => {
   const windows:any = window
   if (windows !== 'undefined') {
       return cookie.get(key);
   }
};
console.log(getCookie("connect.sid"))

export const isAuth =(name:string)=>{        
  
   return localStorage.getItem(name)

   // if (window !== 'undefined') {
   //    const cookieChecked = cookie.getCookie('connect.sid');
      
   //    if (cookieChecked) {
   //        if (localStorage.getItem(name)){
   //            return localStorage.getItem(name);
   //        } else {
   //            return false;
   //        }
      // }
//   }
}


import cookie from 'js-cookie'
import i18next from "i18next"






export const getCookie = (key:any) => {
   const windows:any = window
   if (windows !== 'undefined') {
       return cookie.get(key);
   }
};

export const productdatas = () => {
  
   if (localStorage.getItem('productdata')) {
       let data:string[] = JSON.parse(localStorage.getItem('productdata') || "");
       return data
   } else {
       return [];
   }

};



export const orderDataCount = (countdata:string[]) =>{ 
    if(localStorage.getItem('productdata')){
        return countdata.reduce((prev:any, cur:string) =>{
            prev[cur] = (prev[cur]  || 0 ) + 1 ;
            return prev
           }, {});
    }else{
        return[]
    }
      
   }



export const isAuth =(name:string)=>{        
          if (localStorage.getItem(name)){
              return localStorage.getItem(name || "");
          } else {
              return false;
          }
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


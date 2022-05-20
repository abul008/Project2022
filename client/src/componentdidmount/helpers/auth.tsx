import i18next from "i18next"


interface CardShopList{
    id:string,
    count:number,
    name:string,
    author:string,
    file_url:string,
  }







export const productdatas = () => {
  
   if (localStorage.getItem('productdata')) {
       const data:string[] = JSON.parse(localStorage.getItem('productdata') || "");
       return data
   } else {
       return [];
   }
};

export const shopList = ()=>{
    if(localStorage.getItem('data')){
        const data:CardShopList[] =JSON.parse(localStorage.getItem('data') || "")
        return data
    }else{
        return [];
    }
}



export const orderDataCount = (countdata:string[]) =>{ 
    if(localStorage.getItem('productdata')){
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
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





// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const changelenguage = (data:any,name:string)=>{
    try{    
    if(data !== undefined){
        const datas:string = data[(name +i18next.t('lang'))] ;

         return datas;
    }
}catch(error){
   console.log(error)
}
}


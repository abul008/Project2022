import axios from 'axios'
import jwt_decode from "jwt-decode";
import dayjs from 'dayjs'


interface UserLocal{
  user:string,
  authTokens:string | number,
  refreshToken:string
}

interface User{
  exp: number,
  iat: number,
  user: string
}

const baseURL = 'http://localhost:8080/'


let authTokens:UserLocal = localStorage.getItem('acessToken') ?  JSON.parse( localStorage.getItem('acessToken') || "") : null


const axiosInstance = axios.create({
    baseURL,
    headers:{authorization: `Bearer ${authTokens?.user}`}
});

axiosInstance.interceptors.request.use(async (req:any)=>{
    if(!authTokens){
       authTokens = localStorage.getItem('acessToken') ? JSON.parse(localStorage.getItem('acessToken') || "") : null
       req.headers.authorization = `Barer ${authTokens.user}` 
    }     
     
    const user:User = jwt_decode(authTokens.user)
      
    const isExpried = dayjs.unix(user.exp).diff(dayjs()) < 1;
     
    if(!isExpried) return req

      const res = await axios.post("/api/v1/refresh/", { token:authTokens.refreshToken });
      localStorage.setItem( "acessToken",JSON.stringify(res.data))
      req.headers.authorization = `Barer ${res.data.user}`
    return req
})


export default axiosInstance;
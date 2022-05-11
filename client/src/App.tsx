
import React from 'react';
import { HeadPage } from './componentdidmount/HeadPageScreen/headPageScreen';
import axios from 'axios';
import jwt_decode from "jwt-decode";


export const App:React.FC = () => {

  const refreshToken = async () => {
    try {
      const res = await axios.post("/api/v1/refresh/", { token:localStorage.getItem('acessTokenRefresh') });
      localStorage.setItem( "acessToken",res.data.user)
      localStorage.setItem( "acessTokenRefresh",res.data.refreshToken)
      
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  

  const axiosJWT = axios.create()
  // let token:any =  localStorage.getItem('acessToken') 
 
  // let b = jwt_decode(token)

  axiosJWT.interceptors.request.use(
    async (config:any) => {
      let token:any =  localStorage.getItem('acessToken') 
      let currentDate:any = new Date();
      const decodedToken:any = jwt_decode(token);
      if (decodedToken.exp * 1000 < currentDate.getTime()) {
        const data = await refreshToken();
        config.headers["authorization"] = "Bearer " + data.accessToken;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  //     let currentDate:any = new Date();
  // console.log(b.exp * 1000 < currentDate.getTime())

  return (
    <div className="App">
      <button style={{zIndex:1000, position:"absolute"}} onClick={refreshToken}><button></button></button>
      <HeadPage />
    </div>
  );
}

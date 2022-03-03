import { useEffect, useState } from "react"
import axios from "axios"
import Cookies from 'js-cookie';
import { useHistory } from "react-router-dom";
interface Login{
    email:string,
    password:string
}

export const AdminLogin:React.FC = ()=>{

    const [adminlogin ,setAdminlogin] = useState<Login>({email:"" , password:""})
    let history = useHistory();

    const logininfo = async(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const {email ,password} = adminlogin
        const config:any = {
            header: {
              "Content-Type": "application/json",
            },
          };

          try{
            await axios.post(
                "http://localhost:8080/api/login",
                { email:email, password:password } ,
                config
              ).then(res=>{localStorage.setItem( "role",res.data.role)})
              // window.location.reload();
              history.push("/webadmin");
          }catch(error){
            console.log(error)
          }
    }

    return( 
        <div className="login-admin-panel-wrappper" >
            <form onSubmit={logininfo}>
                <input onChange={(e)=>{
                   setAdminlogin({...adminlogin,email:e.target.value})
                }} 
                type="email" 
                placeholder="email" 
                />
                <input
                 onChange={(e)=>{
                    setAdminlogin({...adminlogin,password:e.target.value})
                 }} 
                 type="password" 
                 placeholder="email"
                  />
                  <button>send</button>
            </form>
        </div>
    )
}
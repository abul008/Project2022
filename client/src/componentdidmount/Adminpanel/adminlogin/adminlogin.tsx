import {  useState } from "react"
import axios from "axios"
import { useActions } from "../../../hooks/useActions";
import "./adminlogin.css";
import { useHistory } from "react-router-dom";
interface Login{
    email:string,
    password:string
}

export const AdminLogin:React.FC = ()=>{

    const [adminlogin ,setAdminlogin] = useState<Login>({email:"" , password:""})
    // const {} = useTypedSelector(state =>state.home)
    const {setViewLoader} = useActions()
    let history = useHistory();

    const logininfo = async(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const {email ,password} = adminlogin


          try{
            setViewLoader(true)
            await axios.post(
                "/api/v1/login",
                { email:email, password:password } 
              ).then(res=>{
                console.log(res)
                localStorage.setItem( "acessToken",res.data.user)
                localStorage.setItem( "acessTokenRefresh",res.data.refreshToken)
              })
                // await  history.push("/webadmin");
                // await   window.location.reload();
                setViewLoader(true)            
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
                 placeholder="password"
                  />
                  <button>send</button>
            </form>
        </div>
    )
}
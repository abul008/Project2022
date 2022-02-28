import { useState } from "react"

interface Login{
    name:string,
    password:string
}

export const AdminLogin:React.FC = ()=>{

    const [adminlogin ,setAdminlogin] = useState<Login>({name:"" , password:""})
  

    const logininfo = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        
    }

    return( 
        <div className="login-admin-panel-wrappper" >
            <form onSubmit={logininfo}>
                <input onChange={(e)=>{
                   setAdminlogin({...adminlogin,name:e.target.value})
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
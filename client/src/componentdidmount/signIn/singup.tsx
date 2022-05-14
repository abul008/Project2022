import {SingUpName} from "./singupname";
import {SingUpPassword} from "./singuppassword";
import {SingUpType} from "./singupType";
import {useTypedSelector} from "../../hooks/userTypedSelector";
import { useHistory } from "react-router-dom";
import "./singup.css";
import React from "react";
import axios from "axios";

export const SingIn =()=>{
    
    const {createUser} = useTypedSelector(state => state.user)
    const history = useHistory()

const  SingUp = async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()

    try{
      await  axios.post("/api/v1/register" , {...createUser})
      
        await  history.push("/webadmin");

    }catch(error){
      console.log(error)
    }

}
    return(
        <div className="sing-up">
            <form onSubmit={SingUp}>
              <SingUpName />
              <SingUpPassword />
              <SingUpType />
              <button type="submit">send</button>
            </form>
        </div>
    )
}
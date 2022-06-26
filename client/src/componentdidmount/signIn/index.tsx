import React from "react"
import { SingUpName } from "./name"
import { SingUpPassword } from "./password"
import { SingUpType } from "./type"
import { useTypedSelector } from "../../hooks/userTypedSelector"
import { useHistory } from "react-router-dom"
import axios from "axios"
import "./style.css"

export const SingIn = () => {
  
  const {createUser} = useTypedSelector(state => state.user)
  const history = useHistory()

  const  SingUp = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      await  axios.post("/api/v1/register", {...createUser})
      await  history.push("/webadmin")
    }catch(error){
      console.log(error)
    }
  }

  return (
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
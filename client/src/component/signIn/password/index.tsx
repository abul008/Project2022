import React from "react";
import { useTypedSelector } from "../../../hooks/userTypedSelector";
import { useActions } from '../../../hooks/useActions';

export const SingUpPassword:React.FC = () => {

  const {createUser} = useTypedSelector(state => state.user)
  const {setCreateUser} = useActions()

  return (
    <div className="sing-up-input">
      <input
        type="email"
        placeholder="email" 
        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>
        setCreateUser({...createUser,email:e.target.value})} />
      <input 
        type="password" 
        placeholder="password"
        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>
        setCreateUser({...createUser,password:e.target.value})} />
    </div>
  )
}
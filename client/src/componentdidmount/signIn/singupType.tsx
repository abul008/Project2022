import React from "react"
import {useTypedSelector} from "../../hooks/userTypedSelector";
import { useActions } from '../../hooks/useActions';

export const SingUpType:React.FC =()=>{
    const {createUser} = useTypedSelector(state => state.user)
    const {setCreateUser} = useActions()


    return(
        <div className="sing-up-input">
            <input 
            type="text"
            placeholder="type"
            onChange={(e:React.ChangeEvent<HTMLInputElement>)=>
            setCreateUser({...createUser,userType:e.target.value})} 
             />
        </div>
    )
}
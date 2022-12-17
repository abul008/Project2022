import React from "react"
import { useTypedSelector } from "../../../hooks/userTypedSelector"
import { useActions } from '../../../hooks/useActions'
import {InputSequential} from "../formdesign/formdesign"

export const HomeAddres = () => {
const { data } = useTypedSelector(state => state.home)
const { setHomePage } = useActions()

return(
  <InputSequential >
    <div className="admin-input-cantrol">
      <input
        data-testid='phoneNumer1'
        type='text'
        value={data.phone_number}
        onChange={ (e:React.ChangeEvent<HTMLInputElement> ) => setHomePage({...data, phone_number: e.target.value })}
        placeholder="Հեռախոսահամար" />
    </div>
    <div className="admin-input-cantrol" >
      <input
        data-testid="phoneNumer2"
        type="text"
        value={data.phone_number2}
        onChange={(e:React.ChangeEvent<HTMLInputElement>) => setHomePage({...data, phone_number2: e.target.value })}
        placeholder="Հեռախոսահամար" />
    </div>
    <div className="admin-input-cantrol">
      <input
        type="email"
        value={data.email}
        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setHomePage({...data,email:e.target.value})}
        placeholder="էլեկտրոնային հասցե" />
    </div>    
    <div className="admin-input-cantrol">
      <input
        data-testid="adress"
        type="text"
        value={data.addres}
        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setHomePage({...data, addres:e.target.value})}
        placeholder="Մեր հասցեն" />
    </div>        
  </InputSequential>
  )
}
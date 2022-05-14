import React from "react";
import {useTypedSelector} from "../../../hooks/userTypedSelector";
import { useActions } from '../../../hooks/useActions';
import {InputSequential} from "../formdesign/formdesign";




export const Bookinfoformall:React.FC = ()=>{

    
    const {data} = useTypedSelector(state => state.book)

    const {setBookPage} = useActions()

 


    return( 
        <InputSequential >
            <div className="admin-input-cantrol">
                <input
                required
                type="text"
                placeholder="Քաշ" 
                value={data.Weight || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBookPage({...data,Weight:e.target.value})}
             />
            </div>
            <div className="admin-input-cantrol">
                <input
                required
                type="text"
                placeholder="Հրատարակիչ" 
                value={data.Publisher || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBookPage({...data,Publisher:e.target.value})}
             />
            </div>   
            <div className="admin-input-cantrol">
                <input
                required
                type="text"
                placeholder="էջերի քանակ" 
                value={data.Numberofpages || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBookPage({...data,Numberofpages:e.target.value})}
             />
            </div>
          
        </ InputSequential>
    )
}
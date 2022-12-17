import React from "react";
import {useTypedSelector} from "../../../hooks/userTypedSelector";
import { useActions } from '../../../hooks/useActions';
import {InputSequential} from "../formdesign/formdesign";



export const Bookauthorname:React.FC = ()=>{

    
    const {data} = useTypedSelector(state => state.book)


    const {setBookData} = useActions()
   

    return( 
        <InputSequential >
          <div className="admin-input-cantrol">
            <label>հեղինակ:Am</label>
                <input
                type="text"
                required
                placeholder="հեղինակ" 
                value={data.author_am || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBookData({...data,author_am:e.target.value})}
             />
            </div>
            <div className="admin-input-cantrol">
            <label>հեղինակ:Ru</label>
                <input
                type="text"
                required
                placeholder="հեղինակ" 
                value={data.author_ru || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBookData({...data,author_ru:e.target.value})}
             /> 
             </div>
            <div className="admin-input-cantrol">
            <label>հեղինակ:En</label>
                <input
                required
                type="text"
                placeholder="հեղինակ" 
                value={data.author_en || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBookData({...data,author_en:e.target.value})}
             />
             </div>
        </ InputSequential>
    )
}
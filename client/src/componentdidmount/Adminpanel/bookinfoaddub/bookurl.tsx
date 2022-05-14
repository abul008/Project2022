import {useTypedSelector} from "../../../hooks/userTypedSelector";
import { useActions } from '../../../hooks/useActions';
import React,{ useEffect } from "react";



export const  BookinfoUrl:React.FC =()=>{

    
    const {data} = useTypedSelector(state => state.book)

    const {setBookPage} = useActions()

    useEffect(()=>{
        setBookPage({...data, get_absolute_url:`/book/${data.name_en}/`})
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[data.name_en])
    
 
    
    return( 
     <div className="admin-input-cantrol">
       
        <label>Հասցե(Url)</label>
        <input
        required
        type="text"
        placeholder="Հասցե" 
        value={data.get_absolute_url || ''}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBookPage({...data, get_absolute_url:e.target.value})}
      />
      </div>
    )

    }
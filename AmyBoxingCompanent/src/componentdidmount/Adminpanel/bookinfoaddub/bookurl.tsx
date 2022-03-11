

import {useTypedSelector} from "../../../hooks/userTypedSelector";
import { useActions } from '../../../hooks/useActions';
import { useEffect } from "react";



export const  BookinfoUrl:React.FC =()=>{

    
    const {data} = useTypedSelector(state => state.book)

    const {setBookPage} = useActions()

    useEffect(()=>{
        setBookPage({...data, absolute_url:`/${data.name_en}`})
    },[data.name_en])
    
 
    
    return( 
     <div className="admin-input-cantrol">
        <input
        required
        type="text"
        placeholder="Հասցե" 
        value={data.absolute_url}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBookPage({...data, absolute_url:e.target.value})}
      />
      </div>
    )

    }
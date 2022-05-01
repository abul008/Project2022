import {useTypedSelector} from "../../../hooks/userTypedSelector";
import { useActions } from '../../../hooks/useActions';
import { useEffect } from "react";



export const Bookauthorname:React.FC = ()=>{

    
    const {data,getBookdata} = useTypedSelector(state => state.book)
    const {users} = useTypedSelector(state => state.user)

    const {setBookPage,fetchTodos} = useActions()
   

    return( 
        < >
          <div className="admin-input-cantrol">
            <label>հեղինակ:Am</label>
                <input
                type="text"
                required
                placeholder="հեղինակ" 
                value={data.author_am}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBookPage({...data,author_am:e.target.value})}
             />
            </div>
            <div className="admin-input-cantrol">
            <label>հեղինակ:Ru</label>
                <input
                type="text"
                required
                placeholder="հեղինակ" 
                value={data.author_ru}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBookPage({...data,author_ru:e.target.value})}
             /> 
             </div>
            <div className="admin-input-cantrol">
            <label>հեղինակ:En</label>
                <input
                required
                type="text"
                placeholder="հեղինակ" 
                value={data.author_en}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBookPage({...data,author_en:e.target.value})}
             />
             </div>
        </>
    )
}
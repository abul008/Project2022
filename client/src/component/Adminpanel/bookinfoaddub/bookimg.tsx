import React from "react";
import {useTypedSelector} from "../../../hooks/userTypedSelector";
import { useActions } from '../../../hooks/useActions';





export const Bookimg:React.FC = ()=>{

    const onChange = (e: React.ChangeEvent<HTMLInputElement >)=>{
        setBookData({...data, file:e.target.files})
    }
    const {data} = useTypedSelector(state => state.book)

    const {setBookData} = useActions()

    


    return( 
 
            <div className="admin-input-cantrol">
            <label>Նկար</label>
                <input 
                type="file"
                multiple 
                placeholder="գրքի անուն" 
                // value={data.name_am}
                onChange={onChange}
                // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>  setBookData({...data,file:e.target.files, filename:e.target.files[0].name})}
             />
            </div>
      
    )
}
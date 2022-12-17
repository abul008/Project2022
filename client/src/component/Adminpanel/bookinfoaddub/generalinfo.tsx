import React from "react";
import {useTypedSelector} from "../../../hooks/userTypedSelector";
import { useActions } from '../../../hooks/useActions';
import {InputSequential} from "../formdesign/formdesign";




export const GeneralInfo:React.FC = ()=>{

    
    const {data} = useTypedSelector(state => state.book)

    const {setBookPage} = useActions()

    return( 
        <InputSequential >
         <div className="admin-input-cantrol">
        <label>Լեզու</label>

              <select
                 style={{display:"block"}}
                 value={data.Language_am}
                 onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setBookPage({...data,Language_am:e.target.value})}
                 >
                     <option>Armenian</option>
                     <option>Russian</option>
                     <option>Englishe</option>
                 </select>
        </div>  
        <div className="admin-input-cantrol">
        <label>Դասակարգ</label>
           
                 <select
                 style={{display:"block"}}
                 value={data.ցategory || ''}
                 onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setBookPage({...data, ցategory:e.target.value})}
                 >
                     <option>is available</option>
                     <option>Limited</option>
                     <option>Not available</option>
                 </select>
                 </div>
            <div style={{display:"flex"}} className="admin-input-cantrol">
    
                <input
                type="text"
                required
                placeholder="Գին" 
                value={data.price || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBookPage({...data,price:e.target.value})}
             />
          
                <input
                type="text"
                required
                placeholder="Զեխճված գին" 
                value={data.discount || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBookPage({...data,discount:e.target.value})}
             />
            </div>
            <div className="admin-input-cantrol">
            <label>Ամսաթիվ:En</label>
                   <input
                    type="date"
                    required
                    value={data.date || ''}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBookPage({...data,date:e.target.value})}
             />
             </div>
        </InputSequential>
    )
}
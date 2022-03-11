import {useTypedSelector} from "../../../hooks/userTypedSelector";
import { useActions } from '../../../hooks/useActions';



export const Bookinfoformname:React.FC = ()=>{

    
    const {data} = useTypedSelector(state => state.book)

    const {setBookPage} = useActions()

 


    return( 
        < >
            <div className="admin-input-cantrol">
            <label>գրքի անուն:Am</label>
                <input
                type="text"
                required
                placeholder="գրքի անուն" 
                value={data.name_am}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBookPage({...data,name_am:e.target.value})}
             />
            </div>
            <div className="admin-input-cantrol">
            
            <label>գրքի անուն:Ru</label>
                <input
                type="text"
                required
                placeholder="գրքի անուն" 
                value={data.name_ru}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBookPage({...data,name_ru:e.target.value})}
             /> 
             </div>
            <div className="admin-input-cantrol">
            <label>գրքի անուն:En</label>
                <input
                type="text"
                required
                placeholder="գրքի անուն" 
                value={data.name_en}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBookPage({...data,name_en:e.target.value})}
             />
             </div>
        </>
    )
}
import {useTypedSelector} from "../../../hooks/userTypedSelector";
import { useActions } from '../../../hooks/useActions';



export const Bookcover:React.FC = ()=>{

    
    const {data} = useTypedSelector(state => state.book)

    const {setBookPage} = useActions()

 

    
    return( 
        < >
             <div className="admin-input-cantrol">
            <label>հեղինակ:Am</label>
                <textarea 
                placeholder="հեղինակ" 
                value={data.cover_am}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setBookPage({...data,cover_am:e.target.value})}
             />
            </div>
            <div className="admin-input-cantrol">
            
            <label>հեղինակ:Ru</label>
                <textarea
                placeholder="հեղինակ" 
                value={data.cover_ru}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setBookPage({...data,cover_ru:e.target.value})}
             /> 
             </div>
            <div className="admin-input-cantrol">
            <label>հեղինակ:En</label>
                   <textarea
                placeholder="հեղինակ" 
                value={data.cover_en}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setBookPage({...data,cover_en:e.target.value})}
             />
             </div>
        </>
    )
}
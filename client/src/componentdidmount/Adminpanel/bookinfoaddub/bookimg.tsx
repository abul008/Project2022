import {useTypedSelector} from "../../../hooks/userTypedSelector";
import { useActions } from '../../../hooks/useActions';
import {InputSequential} from "../formdesign/formdesign";




export const Bookimg:React.FC = ()=>{

    const onChange = (e: React.ChangeEvent<HTMLInputElement >)=>{
        setBookPage({...data,file:e.target.files})
    }
    const {data} = useTypedSelector(state => state.book)

    const {setBookPage} = useActions()

    


    return( 
 
            <div className="admin-input-cantrol">
            <label>Նկար</label>
                <input 
                type="file"
                multiple 
                placeholder="գրքի անուն" 
                // value={data.name_am}
                onChange={onChange}
                // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>  setBookPage({...data,file:e.target.files, filename:e.target.files[0].name})}
             />
            </div>
      
    )
}
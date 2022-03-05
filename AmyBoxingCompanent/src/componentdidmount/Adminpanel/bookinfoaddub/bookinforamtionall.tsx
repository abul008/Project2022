import {useTypedSelector} from "../../../hooks/userTypedSelector";
import { useActions } from '../../../hooks/useActions';

  // name_am:"",
    // name_ru:"",
    // name_en:"",
    // author_am:"",
    // author_ru:"",
    // author_en:"",
    // Language_am:"",
    // Language_ru:"",
    // Language_en:"",
    // Numberofpages:"",
    // Weight:"",
    // Publisher:"",
    // price:0,
    // Cover_am:"",
    // Cover_ru:"",
    // Cover_en:"",
    // date:"",
    // file:"",
    // filename:""

export const Bookinfoformall:React.FC = ()=>{

    
    const {data} = useTypedSelector(state => state.book)

    const {setBookPage} = useActions()

 


    return( 
        < >
            <div className="admin-input-cantrol">
                <input
                type="text"
                placeholder="Քաշ" 
                value={data.Weight}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBookPage({...data,Weight:e.target.value})}
             />
            </div>
            <div className="admin-input-cantrol">
                <input
                type="text"
                placeholder="Հրատարակիչ" 
                value={data.Publisher}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBookPage({...data,Publisher:e.target.value})}
             />
            </div>   
            <div className="admin-input-cantrol">
                <input
                type="text"
                placeholder="էջերի քանակ" 
                value={data.Numberofpages}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBookPage({...data,Numberofpages:e.target.value})}
             />
            </div>



        </>
    )
}
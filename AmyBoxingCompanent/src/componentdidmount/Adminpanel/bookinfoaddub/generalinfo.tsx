import {useTypedSelector} from "../../../hooks/userTypedSelector";
import { useActions } from '../../../hooks/useActions';



export const GeneralInfo:React.FC = ()=>{

    
    const {data} = useTypedSelector(state => state.book)

    const {setBookPage} = useActions()

 


    return( 
        < >
              <select
                 style={{display:"block"}}
                 value={data.Language_am}
                 onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setBookPage({...data,Language_am:e.target.value})}
                 >
                     <option>Armenian</option>
                     <option>Russian</option>
                     <option>Englishe</option>
                 </select>
                 <select
                 style={{display:"block"}}
                 value={data.ցategory}
                 onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setBookPage({...data, ցategory:e.target.value})}
                 >
                     <option>is available</option>
                     <option>Limited</option>
                     <option>Not available</option>
                 </select>
                 <div className="admin-input-cantrol">
            <label>Գին:Am</label>
                <input
                type="text"
                placeholder="Գին" 
                value={data.price}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBookPage({...data,price:e.target.value})}
             />
            </div>
            <div className="admin-input-cantrol">
            <label>Ամսաթիվ:En</label>
                   <input
                    type="date"
                    value={data.date}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBookPage({...data,date:e.target.value})}
             />
             </div>
        </>
    )
}
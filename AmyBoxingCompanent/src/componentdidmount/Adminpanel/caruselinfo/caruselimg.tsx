import {useTypedSelector} from "../../../hooks/userTypedSelector";
import { useActions } from '../../../hooks/useActions';


export const CaruselFoto = () =>{
    const {data} = useTypedSelector(state => state.carusel)

    const {setCaruselPage} = useActions()

    const onChange = (e: React.ChangeEvent<HTMLInputElement >)=>{
        setCaruselPage({...data,file:e.target.files})
    }
    

    return(
        <div className="admin-input-cantrol">
                <input 
                type="file"
                // multiple 
                placeholder="գրքի անուն" 
                // value={data.name_am}
                onChange={onChange}
                // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>  setBookPage({...data,file:e.target.files, filename:e.target.files[0].name})}
                />
                <input
                type="text"
                value={data.absalute_url}
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setCaruselPage({...data, absalute_url:e.target.value})}
                placeholder="հասցե"
             
             />
        </div>
    )
}
import {useTypedSelector} from "../../../hooks/userTypedSelector";
import { useActions } from '../../../hooks/useActions';


export const HomeAddres = () =>{
    const {data} = useTypedSelector(state => state.home)

    const {setHomePage} = useActions()

  

    return(
        <div className="admin-input-cantrol">
                <input
                type="text"
                value={data.phone_number}
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setHomePage({...data, phone_number:e.target.value})}
                placeholder="Հեռախոսահամար"  
                />
                 <input
                type="text"
                value={data.phone_number2}
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setHomePage({...data, phone_number2:e.target.value})}
                placeholder="Հեռախոսահամար"  
                />
                <input
                type="email"
                value={data.email}
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setHomePage({...data,email:e.target.value})}
                placeholder="էլեկտրոնային հասցե"  
                />
                 <input
                type="text"
                value={data.addres}
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setHomePage({...data, addres:e.target.value})}
                placeholder="Մեր հասցեն"  
                />
        </div>
    )
}
import {useTypedSelector} from "../../hooks/userTypedSelector";
import { useActions } from '../../hooks/useActions';

export const SingUpName =()=>{
    const {createUser} = useTypedSelector(state => state.user)
    const {setCreateUser} = useActions()
    
   
    return(
        <div className="sing-up-fullname">
            <input
             type="text" 
             placeholder="name"
             onChange={(e:React.ChangeEvent<HTMLInputElement>)=>
                setCreateUser({...createUser,name:e.target.value})}  
             />
            <input 
             type="text" 
             placeholder="lastname" 
             onChange={(e:React.ChangeEvent<HTMLInputElement>)=>
                setCreateUser({...createUser,lastname:e.target.value})} 
             />
        </div>
    )
}
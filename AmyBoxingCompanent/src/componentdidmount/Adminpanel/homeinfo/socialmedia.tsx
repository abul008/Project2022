import {useTypedSelector} from "../../../hooks/userTypedSelector";
import { useActions } from '../../../hooks/useActions';


export const HomeSocialMedia = () =>{
    const {data} = useTypedSelector(state => state.home)

    const {setHomePage} = useActions()

  
    // phone_number:string,
    // phone_number2:string,
    // addres:string,
    // facebook_url:string,
    // instagram_url:string,
    // telegram_url:string,
    // copyright_column:string

    return(
        <div className="admin-input-cantrol">
                <input
                type="text"
                value={data.facebook_url}
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setHomePage({...data, facebook_url:e.target.value})}
                placeholder="ֆեյսբուք url"  
                />
                 <input
                type="text"
                value={data.instagram_url}
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setHomePage({...data, instagram_url:e.target.value})}
                placeholder="Ինստագրամ url"  
                />
                 <input
                type="text"
                value={data.telegram_url}
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setHomePage({...data, telegram_url:e.target.value})}
                placeholder="Տելեգրամ url"  
                />
        </div>
    )
}
import {Homestate,HomeActionTypes , HomeAction} from "../types/home";
import {productdatas} from "../../componentdidmount/helpers/auth";



const initialState:Homestate = {
   data:{
    file:"",
    absalute_url:"",
    phone_number:"",
    phone_number2:"",
    email:"",
    addres:"",
    facebook_url:"",
    instagram_url:"",
    telegram_url:"",
    copyright_column:""
   },
   getHomedata:[],
   quantity:productdatas().length
}

export const HomeReducer = (state = initialState, action: HomeAction): Homestate => {
    switch (action.type) {
        case HomeActionTypes.HOME_ADD_INFO:
            return {...state,data:action.payload}
        case HomeActionTypes.HOME_GET_INFO:
            return {...state,getHomedata:action.payload}
            case HomeActionTypes.HOME_CHANGE_QUANTITY:
                return {...state, quantity:action.payload} 
        default:
            return state
    }
}
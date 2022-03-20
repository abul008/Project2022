import {Homestate,HomeActionTypes , HomeAction} from "../types/home";



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
   }
}

export const HomeReducer = (state = initialState, action: HomeAction): Homestate => {
    switch (action.type) {
        case HomeActionTypes.HOME_ADD_INFO:
            return {...state,data:action.payload}
        default:
            return state
    }
}
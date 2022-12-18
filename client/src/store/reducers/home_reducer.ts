import { Homestate, HomeAction } from "../../custom_types/home"
import { HOME_ADD_INFO, HOME_GET_INFO, HOME_CHANGE_QUANTITY, HOME_LOADER } from '../../config'

const initialState:Homestate = {
   data:{
    file:[],
    absalute_url:"",
    phone_number:"",
    phone_number2:"",
    email:"",
    addres:"",
    facebook_url:"",
    instagram_url:"",
    telegram_url:"",
    copyright_column:"",
    createdAt:"",
    _id:""
   },
   getHomedata:[],
   quantity:0,
   loaderpage:true

}

export const HomeReducer = (state = initialState, action: HomeAction): Homestate => {
    switch (action.type) {
        case HOME_ADD_INFO:
            return {...state,data:action.payload}
        case HOME_GET_INFO:
            return {...state,getHomedata:action.payload}
        case HOME_CHANGE_QUANTITY:
                return {...state, quantity:action.payload}
        case HOME_LOADER:
                return {...state, loaderpage:action.payload}          
        default:
            return state
    }
}
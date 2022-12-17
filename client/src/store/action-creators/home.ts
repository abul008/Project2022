import {HomeAction, HomeActionTypes } from "../../custom_types/home.d"
import { Homeinfo } from "../../custom_types/index"
import {  Dispatch  } from 'redux'
import {getChannels} from "../../api/db/index"

export function setHomePage(caruseldata: Homeinfo): HomeAction {
    
    return {
        type: HomeActionTypes.HOME_ADD_INFO,
         payload: caruseldata
        }
}

export const setGetbookinfo = () => {

    
    return async (dispatch: Dispatch<HomeAction>) => {
        dispatch({type: HomeActionTypes.HOME_LOADER, payload: false})
       
        try {
            await getChannels('/api/v1/', 'get/home')
            .then(res=>{
                setTimeout(() => {
                    dispatch({type: HomeActionTypes.HOME_GET_INFO, payload: res.data})
                    dispatch({type: HomeActionTypes.HOME_LOADER, payload: true})
                }, 500)
            })
          
        } catch (e) {
            dispatch({
                type: HomeActionTypes.HOME_GET_INFO,
                _payload: 'Произошла ошибка при загрузке списка дел',
                get payload() {
                    return this._payload;
                },
                set payload(value) {
                    this._payload = value;
                },
            })
        }
    }
}

export function setChangequantity(count: number): HomeAction {
    return {
        type: HomeActionTypes.HOME_CHANGE_QUANTITY,
         payload: count
        }
}

export function setViewLoader(loader: boolean): HomeAction {
    return {
        type: HomeActionTypes.HOME_LOADER,
         payload: loader
        }
}
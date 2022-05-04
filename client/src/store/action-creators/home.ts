import {HomeAction, HomeActionTypes ,Homeinfo} from "../types/home";
import {  Dispatch  } from 'redux';

import axios from "axios";



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
            await axios.get('http://localhost:8080/api/v1/gethomeinfo')
            .then(res=>{
                setTimeout(() => {
                    dispatch({type: HomeActionTypes.HOME_GET_INFO, payload: res.data})
                    dispatch({type: HomeActionTypes.HOME_LOADER, payload: true})
                }, 500)
            })
          
        } catch (e) {
            dispatch({
                type: HomeActionTypes.HOME_GET_INFO,
                payload: 'Произошла ошибка при загрузке списка дел'
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
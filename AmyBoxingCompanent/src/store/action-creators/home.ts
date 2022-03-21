import {HomeAction, HomeActionTypes ,Homeinfo} from "../types/home";
import { ActionCreator, Dispatch } from 'redux';
import axios from "axios";

export function setHomePage(caruseldata: Homeinfo): HomeAction {
    return {
        type: HomeActionTypes.HOME_ADD_INFO,
         payload: caruseldata
        }
}

export const setGetbookinfo = () => {
    
    return async (dispatch: Dispatch<HomeAction>) => {
       
        try {
            // dispatch({type: BookActionTypes.BOOK_GET_INFO})
            const response = await axios.get('http://localhost:8080/api/v1/gethomeinfo')
            // setTimeout(() => {
                dispatch({type: HomeActionTypes.HOME_GET_INFO, payload: response.data})
            // }, 500)
        } catch (e) {
            dispatch({
                type: HomeActionTypes.HOME_GET_INFO,
                payload: 'Произошла ошибка при загрузке списка дел'
            })
        }
    }
}
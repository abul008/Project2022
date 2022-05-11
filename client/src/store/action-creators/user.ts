import { Dispatch } from "redux";
import { UserAction, UserActionTypes } from "../types/user";
import axios from "axios";

let user = localStorage.getItem('acessToken')


export const fetchUsers = () => {

    const config:any = {
        headers:{
            authorization:`Bearer ${user}`
        }
    }
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USERS})
            const response = await axios.get(`/api/v1/getadmin/` , config)
               return dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR,
                payload: 'Произошла ошибка при загрузке пользователей'
            })
        }
    }
}
import { Dispatch } from "redux";
import {FETCH_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR, CREATE_USERS_SING_UP } from "../../config"
import { UserAction, User} from "../../custom_types/";
import axiosInstance from "../../component/utils";


export const fetchUsers = () => {

    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: FETCH_USERS})
            const response = await axiosInstance.get('/api/v1/getadmin/')
               return dispatch({type: FETCH_USERS_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({
                type: FETCH_USERS_ERROR,
                payload: 'Произошла ошибка при загрузке пользователей'
            })
        }
    }
}

export const setCreateUser = (createUser:User)=>{
    return{
        type: CREATE_USERS_SING_UP,
        payload:createUser
    }
}
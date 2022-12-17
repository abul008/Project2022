import { Dispatch } from "redux";
import { UserAction, UserActionTypes ,User} from "../types/user";
import axiosInstance from "../../component/utils";


export const fetchUsers = () => {

    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USERS})
            const response = await axiosInstance.get('/api/v1/getadmin/')
               return dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR,
                payload: 'Произошла ошибка при загрузке пользователей'
            })
        }
    }
}

export const setCreateUser = (createUser:User)=>{
    return{
        type:UserActionTypes.CREATE_USERS_SING_UP,
        payload:createUser
    }
}
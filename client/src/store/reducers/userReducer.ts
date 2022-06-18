import {UserAction,UserState,UserActionTypes} from "../types/user"

const initialState: UserState = {
    users:{
    _id:"",
    name:"",
    lastname:"",
    email:"",
    password:"",
    userType:"",
    photo_url:"",
    },
    createUser:{
        name:"",
        lastname:"",
        email:"",
        password:"",
        userType:"",
        photo_url:"",
       _id:""
    },
    loading: true,
    error: null,
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS:
            return {... state, loading: true, error: null, users:[]}
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return {... state, loading: false, error: null, users: action.payload}
        case UserActionTypes.FETCH_USERS_ERROR:
            return {... state, loading: false, error: action.payload, users:[]}
        case UserActionTypes.CREATE_USERS_SING_UP:
            return {... state, createUser: action.payload}   
        default:
            return state
    }
}
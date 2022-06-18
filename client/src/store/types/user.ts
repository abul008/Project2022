 
export interface User{
    _id:string,
    name:string,
    lastname:string,
    email:string,
    password:string,
    userType:string,
    photo_url:string,
}

export interface UserState{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    users:any,
    loading:boolean,
    error: null | string,
    createUser:User,
    // create:string
}

export enum UserActionTypes{
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
    CREATE_USERS_SING_UP = 'CREATE_USERS_SING_UP'

}

interface FetchUsersAction{
    type:UserActionTypes.FETCH_USERS;
}
interface FetchUsersSuccessAction{
    type:UserActionTypes.FETCH_USERS_SUCCESS;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload:User[]
}
interface FetchUsersErrorAction{
    type:UserActionTypes.FETCH_USERS_ERROR;
    payload:string
}
interface CreateUsersSingUpAction{
    type:UserActionTypes.CREATE_USERS_SING_UP;
    payload:User
}

export type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction | CreateUsersSingUpAction
 
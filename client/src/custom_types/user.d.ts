import { FETCH_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR, CREATE_USERS_SING_UP } from "../config"

export interface User {
  _id:string,
  name:string,
  lastname:string,
  email:string,
  password:string,
  userType:string,
  photo_url:string,
}
  
export interface UserState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  users: any,
  loading:  boolean,
  error: null | string,
  createUser: User
}
 
interface FetchUsersAction {
  type: typeof FETCH_USERS;
}
  
interface FetchUsersSuccessAction {
  type: typeof FETCH_USERS_SUCCESS;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: User[]
}
  
interface FetchUsersErrorAction {
  type: typeof FETCH_USERS_ERROR;
  payload: string
}
  
interface CreateUsersSingUpAction {
  type: typeof CREATE_USERS_SING_UP;
  payload: User
}
  
export type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction | CreateUsersSingUpAction
   
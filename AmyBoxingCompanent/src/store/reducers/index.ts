// import { combineReducers } from "redux";
// import { userReducer } from "./userReducer";

// export const rootReducer = combineReducers({
//     user:userReducer
// })

// export type RootState = ReturnType<typeof rootReducer>

import {combineReducers} from "redux";
import { todoReducer } from "./todoReducer";
import {userReducer} from "./userReducer";
import {traningReducer} from "./traningReduce";
import {BookReducer} from "./bookReducer";
import {CaruselReducer} from "./caruselReducer";



export const rootReducer = combineReducers({
    user: userReducer,
    todo: todoReducer,
    traning:traningReducer,
    book:BookReducer,
    carusel:CaruselReducer
    
})

export type RootState = ReturnType<typeof rootReducer>
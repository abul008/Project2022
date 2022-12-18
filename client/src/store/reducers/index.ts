import { combineReducers } from "redux"
import { userReducer } from "./user_reducer"
import { BookReducer } from "./book_reducer"
import { HomeReducer } from "./home_reducer"
import { TableReducer } from "./table_reducer"

export const rootReducer = combineReducers({
    user: userReducer,
    book:BookReducer,
    home:HomeReducer,
    table:TableReducer    
})

export type RootState = ReturnType<typeof rootReducer>
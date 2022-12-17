import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { BookReducer } from "./bookReducer";
import { HomeReducer } from "./homeReducer";
import { TableReducer } from "./tableReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    book:BookReducer,
    home:HomeReducer,
    table:TableReducer
    
})

export type RootState = ReturnType<typeof rootReducer>
import {bookstate,BookActionTypes , BookAction} from "../types/book";

const initialState: bookstate = {
   data:{
    name_am:"",
    name_ru:"",
    name_en:"",
    author_am:"",
    author_ru:"",
    author_en:"",
    Language_am:"",
    Language_ru:"",
    Language_en:"",
    Numberofpages:"",
    Weight:"",
    Publisher:"",
    price:0,
    cover_am:"",
    cover_ru:"",
    cover_en:"",
    date:"",
    file:"",
    filename:""
   }
}

export const BookReducer = (state = initialState, action: BookAction): bookstate => {
    switch (action.type) {
        case BookActionTypes.BOOK_ADD_INFO:
            return {...state,data:action.payload}
        default:
            return state
    }
}
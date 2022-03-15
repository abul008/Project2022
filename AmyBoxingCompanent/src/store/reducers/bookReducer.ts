import { dataBind } from "jodit/types/core/helpers";
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
    // Language_ru:"",
    // Language_en:"",
    Numberofpages:"",
    Weight:"",
    Publisher:"",
    price:"",
    ցategory:"",
    cover_am:"",
    cover_ru:"",
    cover_en:"",
    date:"",
    absolute_url:"",
    file:"",
    getbookdata:""
    // filename:""
   },
   getBookdata:[]
 
}

export const BookReducer = (state = initialState, action: BookAction): bookstate => {
    switch (action.type) {
        case BookActionTypes.BOOK_ADD_INFO:
            return {...state,data:action.payload}
        case BookActionTypes.BOOK_GET_INFO:
            return {...state,getBookdata:action.payload}
        default:
            return state
    }
}
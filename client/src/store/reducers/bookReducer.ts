import {bookstate,BookActionTypes , BookAction} from "../types/book";

const initialState: bookstate = {
   data:{
    name_am:"",
    name_ru:"",
    name_en:"",
    author_am:"",
    author_ru:"",
    author_en:"",
    Language_am:"Armenian",
    Numberofpages:"",
    Weight:"",
    Publisher:"",
    price:"",
    discount:"",
    ցategory:"is available",
    cover_am:"",
    cover_ru:"",
    cover_en:"",
    date:"",
    get_absolute_url:"",
    file:"",
    // getbookdata:""
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
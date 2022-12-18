import { bookstate, BookAction } from "../../custom_types/book"
import { BOOK_GET_INFO, BOOK_ADD_INFO } from "../../config"
import { deepCopy } from "../../helpers"
const initialState: bookstate = {
   data: {
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
    const newState: bookstate = deepCopy(state)
    switch (action.type) {
        case BOOK_ADD_INFO:
            newState.data = action.payload
            // return {...state, data: action.payload}
            break
        case BOOK_GET_INFO:
            newState.getBookdata = action.payload
            // return {...state, getBookdata: action.payload}
            break
        default:
            return newState
    }
    return newState
}
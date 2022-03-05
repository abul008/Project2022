import {BookAction, BookActionTypes ,Bookinfo} from "../types/book";

export function setBookPage(bookdata: Bookinfo): BookAction {
    return {
        type: BookActionTypes.BOOK_ADD_INFO,
         payload: bookdata
        }
}
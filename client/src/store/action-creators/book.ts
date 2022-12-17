import {  Dispatch } from 'redux';
import {BookAction, BookActionTypes ,Bookinfo as Booking} from "../types/book";

export function setBookPage(bookcase: Booking): BookAction {
    return {
        type: BookActionTypes.BOOK_ADD_INFO,
         payload: bookcase
        }
}


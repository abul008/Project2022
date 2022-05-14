import axios from "axios";
import {  Dispatch } from 'redux';
import {BookAction, BookActionTypes ,Bookinfo} from "../types/book";

export function setBookPage(bookdata: Bookinfo): BookAction {
    return {
        type: BookActionTypes.BOOK_ADD_INFO,
         payload: bookdata
        }
}
  

    export const fetchTodos = () => {
        return async (dispatch: Dispatch<BookAction>) => {
            try {
                // dispatch({type: BookActionTypes.BOOK_GET_INFO})
                const response = await axios.get('http://localhost:8080/api/v1/getkoobinfo')
                setTimeout(() => {
                    dispatch({type: BookActionTypes.BOOK_GET_INFO, payload: response.data})
                }, 500)
            } catch (e) {
                dispatch({
                    type: BookActionTypes.BOOK_GET_INFO,
                    payload: 'Произошла ошибка при загрузке списка дел'
                })
            }
        }
    }


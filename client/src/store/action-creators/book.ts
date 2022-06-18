import {  Dispatch } from 'redux';
import {BookAction, BookActionTypes ,Bookinfo as Booking} from "../types/book";
import { getChannels } from "../../api/db/index";

export function setBookPage(bookcase: Booking): BookAction {
    return {
        type: BookActionTypes.BOOK_ADD_INFO,
         payload: bookcase
        }
}
  

export const fetchTodos = () => {
        return async (dispatch: Dispatch<BookAction>) => {
            try {
                const response = await getChannels('api/v1/', 'get/book/')
                setTimeout(() => {
                    dispatch({type: BookActionTypes.BOOK_GET_INFO, payload: response.data})
                }, 500)
            } catch (e) {
                dispatch({
                    type: BookActionTypes.BOOK_GET_INFO,
                    _payload: 'Произошла ошибка при загрузке списка дел',
                    get payload() {
                        return this._payload;
                    },
                    set payload(value) {
                        this._payload = value;
                    },
                })
            }
        }
    }


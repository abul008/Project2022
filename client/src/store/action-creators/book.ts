import { BookAction, BookActionTypes, BookType} from "../../types/book";

export const setBookData = (data: BookType): BookAction => {
    return {
      type: BookActionTypes.BOOK_ADD_INFO,
      payload: data
    }
}




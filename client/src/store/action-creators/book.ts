import {BookAction, BookActionTypes, BookType} from "../../types/book";

export function setBookPage(bookcase: BookType): BookAction {
    return {
      type: BookActionTypes.BOOK_ADD_INFO,
      payload: bookcase
    }
}




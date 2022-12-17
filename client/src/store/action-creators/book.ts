import { BookAction, BookActionTypes, BookType} from '../../custom_types/book.d'

export const setBookData = (data: BookType): BookAction => {
    return {
      type: BookActionTypes.BOOK_ADD_INFO,
      payload: data
    }
}




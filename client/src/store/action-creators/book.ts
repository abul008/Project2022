import { BookAction, BookType} from '../../custom_types/book.d'
import { BOOK_ADD_INFO } from '../../config'

export const setBookData = (data: BookType): BookAction => {
    return {
      type: BOOK_ADD_INFO,
      payload: data
    }
}




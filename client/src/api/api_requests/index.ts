import { put } from '../db/index'
import { BookType } from '../../custom_types/index'

export const postNewData = async (data: BookType) => {
    put('book', data)
}
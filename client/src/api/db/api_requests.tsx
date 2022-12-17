import { put } from './index'
import {Book} from '../../custom_types/index'

export const postNewData = async (data: Book) => {
    put('book', data)
}
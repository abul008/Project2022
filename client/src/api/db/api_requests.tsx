// import axios from 'axios'
import { put } from './index'
import {Book} from '../../types/index'


export const postNewData = async (data: Book) => {
    put('book', data)
}
import axios from 'axios'
import { BookType } from '../../custom_types/index'

export const getChannels = (dbversion: string, dbName: string) => axios.get(`${dbversion}${dbName}`)

export const put = (dbname: string, data: BookType): Promise<BookType> => {
    return new Promise((resolve)=> {
      axios.put('/api/v1' + '/' + dbname + '/', data)
      .then((res) => {
        resolve(res.data)
      })
    }) 
}

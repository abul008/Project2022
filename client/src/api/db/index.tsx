import axios from 'axios'
import {Book} from '../../types/index'

export const getChannels = (dbversion: string, dbName: string) => axios.get(`${dbversion}${dbName}`)

export const put = (dbname: string, data: Book): Promise<Book> => {
    return new Promise((resolve, reject)=> {
      axios.put('/api/v1' + '/' + dbname + '/', data)
      .then((res) => {
        resolve(res.data)
      })
    }) 
}

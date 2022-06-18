import axios from 'axios'

export const getChannels = (dbversion: string, dbName: string) => axios.get(`${dbversion}${dbName}`)
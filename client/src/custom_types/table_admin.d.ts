import { TABLE_GET_INFO, TABLE_GET_TITLE } from "../config"

export interface Tableinfo {
  email: string
  lastname: string
  message: string
  names: string
  order: TableOrder[]
  phone: string
  _id:string
}

export interface TableOrder {
  author: string
  count: number
  filename: string
  name: string
  price: string
  _id: string
}
  
export interface Tabletitle {
  name:string,
  contact:string,
  order:string
}

export interface Tablestate {
  tabledata:Tableinfo[]
  title:Tabletitle
}
  
interface TableGetInfoAction {
  type: typeof TABLE_GET_INFO
  payload: Tableinfo[]
}
  
interface TableGeTitleAction {
  type: typeof TABLE_GET_TITLE
  payload: Tabletitle
}
  
export type TableAction = TableGetInfoAction | TableGeTitleAction
 
 
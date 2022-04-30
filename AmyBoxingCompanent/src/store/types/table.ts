import { string } from "prop-types"

export interface Tableinfo{
    email: string
    lastname: string
    message: string
    names: string
    order: TableOrder[]
    phone: string
    _id:string
 }

 export interface Tabletitle{
     name:string,
     contact:string,
     order:string
 }

 export interface TableOrder{
    author: string
    count:  string
    filename: string
    name: string
    price: string
    _id: string
 }

export interface Tablestate{
    tabledata:Tableinfo[]
    title:Tabletitle
}

export enum TableActionTypes {
    TABLE_GET_INFO = 'TABLE_GET_INFO',
    TABLE_GET_TITLE = 'TABLE_GET_TITILE',
}

interface TableGetInfoAction {
    type: TableActionTypes.TABLE_GET_INFO;
    payload: Tableinfo[];
}

interface TableGeTitleAction {
    type: TableActionTypes.TABLE_GET_TITLE;
    payload: Tabletitle;
}



export type TableAction = TableGetInfoAction | TableGeTitleAction
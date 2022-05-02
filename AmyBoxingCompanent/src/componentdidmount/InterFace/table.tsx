export interface Tableinfo{
    email: string
    lastname: string
    message: string
    names: string
    order: TableOrder[]
    phone: string
    _id:string
 }

export interface TableOrder{
    author: string
    count:  string
    filename: string
    name: string
    price: string
    _id: string
 }
 
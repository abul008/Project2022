export  interface Order {
    email: string,
    lastname: string,
    message: string,
    names: string,
    order: OrderProdyct[],
    phone: string,
    _id: string
  }

interface OrderProdyct{
    author: string,
    count: number
    filename: string,
    name: string,
    price:string,
   _id:string
}
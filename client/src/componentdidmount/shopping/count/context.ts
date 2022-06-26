import { createContext } from "react";

interface ContextType {
  name:string,
  price:number,
  author:string,
  _id:string,
  count:number,
  filename:string
}

export const UserContext = createContext <ContextType>({
  name: "" , 
  price: 0,
  author: "",
  _id: "" ,
  count: 0,
  filename: ""
})
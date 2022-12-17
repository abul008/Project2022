import { FilesHref } from "./index";

export  interface Book {
  name_am:string,
  name_ru:string,
  name_en:string,
  bookisavailabemb:string,
  author_am:string ,
  author_ru:string ,
  author_en:string,
  price:string,
  discount:string,
  Language_am:string,
  get_absolute_url:string,
  ցategory:string,
  date:string,
  _id:string,
  Numberofpages: string,
  Publisher: string,
  Weight: string,
  files:FilesHref[]
}

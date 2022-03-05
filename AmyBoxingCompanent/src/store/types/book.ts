export interface Bookinfo{
    name_am:string,
    name_ru:string,
    name_en:string,
    author_am:string,
    author_ru:string,
    author_en:string,
    Language_am:string,
    Language_ru:string,
    Language_en:string,
    Numberofpages:string,
    Weight:string,
    Publisher:string,
    price:number,
    cover_am:string,
    cover_ru:string,
    cover_en:string,
    date:string,
    file:any,
    filename:any
}

export interface bookstate{
    data:Bookinfo
}

export enum BookActionTypes {
    BOOK_ADD_INFO= 'BOOK_ADD_INFO',
}


interface BookAddInfoAction {
    type: BookActionTypes.BOOK_ADD_INFO;
    payload: Bookinfo;
}

export type BookAction =
     BookAddInfoAction


export interface Bookinfo{
    name_am:string,
    name_ru:string,
    name_en:string,
    author_am:string,
    author_ru:string,
    author_en:string,
    Language_am:string,
    Numberofpages:string,
    Weight:string,
    Publisher:string,
    price: string,
    ցategory:string,
    cover_am:string,
    cover_ru:string,
    cover_en:string,
    date:string,
    absolute_url:string,
    file:any,
    getbookdata:any
}

// export interface GetBookInfo{
//     getBookdata:any
// }


export interface FetchBookdata{
    FetchData:Bookinfo
}
export interface bookstate{
    data:Bookinfo,
    getBookdata:any
}

export enum BookActionTypes {
    BOOK_ADD_INFO= 'BOOK_ADD_INFO',
    BOOK_GET_INFO= 'BOOK_GET_INFO',
}


interface BookAddInfoAction {
    type: BookActionTypes.BOOK_ADD_INFO;
    payload: Bookinfo;
}

interface BookGetInfoAction {
    type: BookActionTypes.BOOK_GET_INFO;
    payload: any;
}
export type BookAction =
     BookAddInfoAction | BookGetInfoAction


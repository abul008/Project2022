export interface Bookinfo {
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
    discount:string,
    ցategory:string,
    cover_am:string,
    cover_ru:string,
    cover_en:string,
    date:string,
    get_absolute_url:string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    file: any,
    // getbookdata:any
} 

export interface FetchBookdata {
    FetchData:Bookinfo
}

export interface bookstate {
   data:Bookinfo,
   getBookdata:Bookinfo[]
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload: Bookinfo[] ;
}
export type BookAction = BookAddInfoAction | BookGetInfoAction


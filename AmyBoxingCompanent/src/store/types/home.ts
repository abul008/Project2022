export interface Homeinfo{
    file:any,
    _id:string,
    absalute_url:string,
    phone_number:string,
    phone_number2:string,
    copyright_am: string
    copyright_en: string
    copyright_ru:string,
    createdAt:string,
    email:string,
    addres:string,
    facebook_url:string,
    instagram_url:string,
    telegram_url:string,
    litleinfo_am: string,
    litleinfo_en: string,
    litleinfo_ru: string,
    copyright_column:string,
    updatedAt:string
    // getHomedata:any
}


export interface Homestate{
    data:Homeinfo[]
    getHomedata:Homeinfo[]
    quantity:number

}

export enum HomeActionTypes {
    HOME_ADD_INFO = 'HOME_ADD_INFO',
    HOME_GET_INFO = 'HOME_GET_INFO',
    HOME_CHANGE_QUANTITY = "HOME_CHANGE_QUANTITY"
}


interface HomeAddInfoAction {
    type: HomeActionTypes.HOME_ADD_INFO;
    payload: Homeinfo;
}

interface BookGetInfoAction {
    type: HomeActionTypes.HOME_GET_INFO;
    payload: any;
}

interface HomequanitityAction {
    type: HomeActionTypes.HOME_CHANGE_QUANTITY;
    payload: number;
}


export type HomeAction =
HomeAddInfoAction | BookGetInfoAction | HomequanitityAction
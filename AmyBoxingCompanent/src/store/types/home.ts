export interface Homeinfo{
    file:any,
    absalute_url:string,
    phone_number:string,
    phone_number2:string,
    email:string,
    addres:string,
    facebook_url:string,
    instagram_url:string,
    telegram_url:string,
    copyright_column:string
}

export interface Homestate{
    data:Homeinfo
}

export enum HomeActionTypes {
    HOME_ADD_INFO= 'HOME_ADD_INFO',
}


interface HomeAddInfoAction {
    type: HomeActionTypes.HOME_ADD_INFO;
    payload: Homeinfo;
}

export type HomeAction =
HomeAddInfoAction
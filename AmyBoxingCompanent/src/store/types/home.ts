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
    // getHomedata:any
}

export interface Homestate{
    data:Homeinfo
    getHomedata:any
}

export enum HomeActionTypes {
    HOME_ADD_INFO = 'HOME_ADD_INFO',
    HOME_GET_INFO = 'HOME_GET_INFO',
}


interface HomeAddInfoAction {
    type: HomeActionTypes.HOME_ADD_INFO;
    payload: Homeinfo;
}

interface BookGetInfoAction {
    type: HomeActionTypes.HOME_GET_INFO;
    payload: any;
}

export type HomeAction =
HomeAddInfoAction | BookGetInfoAction
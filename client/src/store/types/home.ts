import { Homeinfo } from "../../types/index" ;

export interface Homestate {
    data: Homeinfo
    getHomedata: Homeinfo[]
    quantity: number,
    loaderpage: boolean
}

export enum HomeActionTypes {
    HOME_ADD_INFO = 'HOME_ADD_INFO',
    HOME_GET_INFO = 'HOME_GET_INFO',
    HOME_CHANGE_QUANTITY = "HOME_CHANGE_QUANTITY",
    HOME_LOADER = "HOME_LOADER"
}

interface HomeAddInfoAction {
  type: HomeActionTypes.HOME_ADD_INFO;
  payload: Homeinfo ;
}

interface BookGetInfoAction {
  type: HomeActionTypes.HOME_GET_INFO;
  payload: Homeinfo[];
}

interface HomequanitityAction {
  type: HomeActionTypes.HOME_CHANGE_QUANTITY;
  payload: number;
}

interface Homeloader {
  type: HomeActionTypes.HOME_LOADER
  payload: boolean
}

export type HomeAction = HomeAddInfoAction | BookGetInfoAction | HomequanitityAction | Homeloader
import {HomeAction, HomeActionTypes ,Homeinfo} from "../types/home";

export function setHomePage(caruseldata: Homeinfo): HomeAction {
    return {
        type: HomeActionTypes.HOME_ADD_INFO,
         payload: caruseldata
        }
}
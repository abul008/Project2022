import {CaruselAction, CaruselActionTypes ,Caruselinfo} from "../types/carusel";

export function setCaruselPage(caruseldata: Caruselinfo): CaruselAction {
    return {
        type: CaruselActionTypes.CARUSEL_ADD_INFO,
         payload: caruseldata
        }
}
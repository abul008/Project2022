import {Caruselstate,CaruselActionTypes , CaruselAction} from "../types/carusel";



const initialState: Caruselstate = {
   data:{
    file:"",
    absalute_url:"",
   }
}

export const CaruselReducer = (state = initialState, action: CaruselAction): Caruselstate => {
    switch (action.type) {
        case CaruselActionTypes.CARUSEL_ADD_INFO:
            return {...state,data:action.payload}
        default:
            return state
    }
}
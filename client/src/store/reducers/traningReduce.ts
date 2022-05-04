import {Traninglist,TraningAction,TraningActionTypes} from "../types/traning"

const initialState: Traninglist = {
    traningtimer:0,
    timerStop:false
}

export const traningReducer = (state = initialState, action: TraningAction): Traninglist => {
    switch (action.type) {
        case TraningActionTypes.TRANNIONG_TIMERS:
            return {...state, traningtimer:action.payload}
        case TraningActionTypes.TIMERS_CANTROL:
            return{...state , }    
        default:
            return state
    }
}
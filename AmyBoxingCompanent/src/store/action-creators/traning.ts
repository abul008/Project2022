import {TraningAction, TraningActionTypes} from "../types/traning";


export const setTodoPage =(page: number): TraningAction => {
    return {
        type: TraningActionTypes.TRANNIONG_TIMERS,
        payload: page
    }
}

export const timerstop = (stop:number): TraningAction=>{
     return{
         type:TraningActionTypes.TIMERS_CANTROL,
         payload:stop
     }
}
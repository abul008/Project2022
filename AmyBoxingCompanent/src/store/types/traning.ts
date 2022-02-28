export interface Traninglist {
    traningtimer:number;
    timerStop:boolean
}

export enum TraningActionTypes {
    TRANNIONG_TIMERS = 'TRANNIONG_TIMERS',
    TIMERS_CANTROL = " TIMERS_CANTROL"  
}

interface Timerinformation {
    type: TraningActionTypes.TRANNIONG_TIMERS;
    payload: number;
}
interface Timerstopinformation{
    type: TraningActionTypes.TIMERS_CANTROL;
    payload:number
}


export type TraningAction = Timerinformation | Timerstopinformation

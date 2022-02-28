import {ActionType,TraningActionTypes} from "../action-types"

interface TimerAction {
    type:TraningActionTypes.TIMER
    payload:number
}



export type Action = TimerAction 
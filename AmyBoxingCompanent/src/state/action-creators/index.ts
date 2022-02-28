import { ActionType,TraningActionTypes  } from "../action-types"
import { Dispatch } from "redux"
import { Action } from "../action"

export const traningcount = (count:number) =>{
    return(dispatch: Dispatch<Action>)=>{
        dispatch({
            type: TraningActionTypes.TIMER,
            payload:count
        })
    }
}


import {TraningActionTypes} from "../action-types";
import {Action } from "../action/index"

const initalState = 0;
 
interface UseState {
   user:number
}

// const initalState = {
//    user:0
// }


const reducer = (state : number  = initalState , action: Action)  =>{
    switch(action.type){
        case TraningActionTypes.TIMER:
            return state + action.payload;
        default:
            return state
    }
}

export default reducer
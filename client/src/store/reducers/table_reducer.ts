import {Tablestate, TableAction} from "../../custom_types"
import { TABLE_GET_INFO, TABLE_GET_TITLE } from "../../config"

const initialState:Tablestate = {
    tabledata:[],
    title: {
        name:"Ամբողջական անուն",
        contact:"կոնտակտներ",
        order:"Պատվեր",
    }
}

export const TableReducer = (state = initialState, action: TableAction): Tablestate => {
    switch (action.type) {
        case TABLE_GET_INFO:
            return {...state, tabledata:action.payload}
        case TABLE_GET_TITLE:
            return {...state,title:action.payload}
        default:
            return state
    }
}
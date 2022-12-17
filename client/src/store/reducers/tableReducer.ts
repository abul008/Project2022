import {Tablestate,TableActionTypes , TableAction} from "../../custom_types"

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
        case TableActionTypes.TABLE_GET_INFO:
            return {...state,tabledata:action.payload}
        case TableActionTypes.TABLE_GET_TITLE:
            return {...state,title:action.payload}
        default:
            return state
    }
}
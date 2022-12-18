import { TableAction, Tableinfo, Tabletitle } from "../../custom_types"
import { TABLE_GET_INFO, TABLE_GET_TITLE } from "../../config"


export function setTablePage(tabledata: Tableinfo[]): TableAction {
  return {
    type: TABLE_GET_INFO,
    payload: tabledata
  }
}

export function setTableTitle(tabletitle: Tabletitle): TableAction {
  return {
    type: TABLE_GET_TITLE,
    payload: tabletitle
  }
}
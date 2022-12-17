import {TableAction, TableActionTypes, Tableinfo, Tabletitle } from "../../custom_types/table"

export function setTablePage(tabledata: Tableinfo[]): TableAction {
  return {
    type: TableActionTypes.TABLE_GET_INFO,
    payload: tabledata
  }
}

export function setTableTitle(tabletitle: Tabletitle): TableAction {
  return {
    type: TableActionTypes.TABLE_GET_TITLE,
    payload: tabletitle
  }
}
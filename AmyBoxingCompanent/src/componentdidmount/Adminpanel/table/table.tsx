import { any } from "prop-types"
import {TableStyle} from "./tablestyle";
import {TableThead} from "./tablehead";
import {TableTbody} from "./tableTbody";
import {useTypedSelector} from "../../../hooks/userTypedSelector";
import { useActions } from '../../../hooks/useActions';

// interface Table{
//     name:string,
//     contact:string,
//     order:string
//     data:any
// }

export const Table:React.FC = ()=>{


    const {setTablePage} = useActions()
    const {tabledata} = useTypedSelector(state => state.table)


    return( 

      <TableStyle>
          <TableThead />
          <TableTbody />
      </TableStyle>
    )
}
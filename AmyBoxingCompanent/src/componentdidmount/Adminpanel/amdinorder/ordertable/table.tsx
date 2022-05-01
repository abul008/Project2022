import {TableStyle} from "./tablestyle";
import {TableThead} from "./tablehead";
import {TableTbody} from "./tableTbody";

export const Table:React.FC = ()=>{


    return( 

      <TableStyle>
          <TableThead />
          <TableTbody />
      </TableStyle>
    )
}
import { any } from "prop-types"
import {TableStyle} from "./tablestyle"
import {useTypedSelector} from "../../../hooks/userTypedSelector";
import { useActions } from '../../../hooks/useActions';



export const TableThead:React.FC = ()=>{

    const {title} = useTypedSelector(state => state.table)

    
   console.log(title)

    return( 
        <thead>
         <tr>
            <th>{title.name}</th>
            <th>{title.contact}</th>
            <th>{title.order}</th>
        </tr>
        </thead>
      
    )
}
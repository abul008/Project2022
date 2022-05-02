import {useTypedSelector} from "../../../../hooks/userTypedSelector";
import { useActions } from '../../../../hooks/useActions';
import { Link } from "react-router-dom";



export const TableTbody:React.FC = ()=>{


    const {setTablePage} = useActions()
    const {tabledata} = useTypedSelector(state => state.table)
  

    return( 
         <tbody>  
            {
                tabledata.map((data,index)=>{
                    return(
                        <tr key={data._id}>
                        <td>{data.names} {data.lastname}</td>
                        <td>{data.phone}</td>
                        <td>
                            <span >Delete</span>
                            <Link to={`/webadmin/order/${data._id}`}>more</Link>
                        </td>
                        </tr>
                    )
                })
            }
        </ tbody>
    )
}
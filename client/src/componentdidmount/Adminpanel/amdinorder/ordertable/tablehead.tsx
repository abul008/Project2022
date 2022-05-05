import {useTypedSelector} from "../../../../hooks/userTypedSelector";




export const TableThead:React.FC = ()=>{

    const {title} = useTypedSelector(state => state.table)


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
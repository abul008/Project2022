import i18next from "i18next";
import {useTypedSelector} from "../../hooks/userTypedSelector";
import { useActions } from '../../hooks/useActions';

export const BookProduct:React.FC = ()=>{
   

    const {getBookdata} = useTypedSelector(state => state.book)
    const {fetchTodos} = useActions()

    console.log(getBookdata)
    
    return( 
        <div >Book {i18next.t('name')}</div>
    )
}
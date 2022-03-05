;import {useTypedSelector} from "../../../hooks/userTypedSelector";
import { useActions } from '../../../hooks/useActions';
import {Bookinfoformname} from "./bookinfofromname";
import {Bookauthorname} from "./bookauthorname";
import {Bookinfoformall} from "./bookinforamtionall";
import {Bookcover} from "./bookcover";
 


export const addbookinfo:React.FC = ()=>{

   
    const {setTodoPage ,timerstop} = useActions()
    const {data} = useTypedSelector(state => state.book)
    
    console.log(data)
  
   

    const cretebookinfo = (e:React.FormEvent<HTMLFormElement>)=>{
       e.preventDefault()

    }
    return( 
    <form onSubmit={cretebookinfo}>
       <Bookinfoformname />
       <Bookinfoformall />
       <Bookauthorname />
       <Bookcover />
    </form>
    )
}
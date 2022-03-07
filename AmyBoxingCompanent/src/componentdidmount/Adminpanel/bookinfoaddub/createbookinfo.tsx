;import {useTypedSelector} from "../../../hooks/userTypedSelector";
import { useActions } from '../../../hooks/useActions';
import {Bookinfoformname} from "./bookinfofromname";
import {Bookauthorname} from "./bookauthorname";
import {Bookinfoformall} from "./bookinforamtionall";
import {Bookimg} from "./bookimg";
import axios from "axios";
import JoditReact from "jodit-react-ts";
import 'jodit/build/jodit.min.css';
import { useState } from "react";


export const addbookinfo:React.FC = ()=>{
   // name_am:"",
   // name_ru:"",
   // name_en:"",
   // author_am:"",
   // author_ru:"",
   // author_en:"",
   // Language_am:"",
   // Language_ru:"",
   // Language_en:"",
   // Numberofpages:"",
   // Weight:"",
   // Publisher:"",
   // price:0,
   // cover_am:"",
   // cover_ru:"",
   // cover_en:"",
   // date:"",
   // file:"",
   // filename:""
   
    const {setTodoPage ,timerstop} = useActions()
    const [coverAm,setCoverAm] = useState<string>("")
    const [coverRu,setCoverRu] = useState<string>("")
    const [coverEn,setCoverEn] = useState<string>("")
    const {data} = useTypedSelector(state => state.book)
    

   //  const config = {
	// 	readonly: false // all options from https://xdsoft.net/jodit/doc/
	// }
   

    const cretebookinfo = async(e:React.FormEvent<HTMLFormElement>)=>{
       e.preventDefault()
       const {
         name_am,
         name_ru,
         name_en,
         author_am,
         author_ru,
         author_en,
         Language_am,
         Language_ru,
         Language_en,
         Numberofpages,
         Weight,
         Publisher,
         price,
         date,
         file,
         filename
       } = data

       const formData = new FormData();

       for (let i = 0; i < file.length; i++) {
           formData.append('files', file[i]);                      
       }

       formData.append("name_am",name_am)

       console.log(formData)

       try{
        
         const res = await axios.post('http://localhost:8080/api/get/bookinfo/' , formData,{
                
            headers:{
                'Content-Type': "multipart/form-data"
            },

         })
       }catch(error){
          console.log(error)
       }
      //  formData.append( "name_am", name_am , "name_ru" ,name_ru)


    }
    return( 
    <form onSubmit={cretebookinfo}>
       <Bookinfoformname />
       <Bookinfoformall />
       <Bookauthorname />
       <JoditReact  onChange={(content:string) => setCoverAm(content)}     defaultValue={coverAm} />
       <JoditReact  onChange={(content:string) => setCoverRu(content)}   defaultValue={coverRu} />
       <JoditReact  onChange={(content:string) => setCoverEn(content)}  defaultValue={coverEn} />
       <Bookimg />
       <button>send</button>
    </form>
    )
}
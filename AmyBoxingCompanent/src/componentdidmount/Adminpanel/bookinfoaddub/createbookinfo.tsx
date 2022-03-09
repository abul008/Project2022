;import {useTypedSelector} from "../../../hooks/userTypedSelector";
import { useActions } from '../../../hooks/useActions';
import {Bookinfoformname} from "./bookinfofromname";
import {Bookauthorname} from "./bookauthorname";
import {Bookinfoformall} from "./bookinforamtionall";
import {Bookimg} from "./bookimg";
import Progress from '../../proptypes/proptypes';
import Message from "../../proptypes/message";
import axios from "axios";
import JoditReact from "jodit-react-ts";
import 'jodit/build/jodit.min.css';
import { useState } from "react";



export const addbookinfo:React.FC = ()=>{

   
    const {setTodoPage ,timerstop} = useActions()
    const [coverAm,setCoverAm] = useState<string>("")
    const [coverRu,setCoverRu] = useState<string>("")
    const [coverEn,setCoverEn] = useState<string>("")
    const [uploadedFile ,setUploadedFile] = useState<any>({});
    const [uploadPercentage, setUploadPercentage] = useState<number>(0);
    const [message, setMessage] = useState<string>('');
    const {data} = useTypedSelector(state => state.book)
    

 
     console.log(`${__dirname}public`)
   




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
      //  formData.append("file" , file)
      //  formData.append("name_am", name_am)
       try{
        
         const res = await axios.post('/api/photos/upload' , formData ,{
                
            headers:{
                'Content-Type': "multipart/form-data"
            },
            onUploadProgress: progressEvent => {
               const {loaded, total} = progressEvent

               setUploadPercentage(+Math.round((progressEvent.loaded * 100) / progressEvent.total));
             }
         })
         setTimeout(() => setUploadPercentage(0), 10000);

 
         const { fileName , filePath} = res.data

         setMessage('File Uploaded');
         setUploadedFile({fileName, filePath})

       }catch(error){
          console.log(error)
       }
      //  formData.append( "name_am", name_am , "name_ru" ,name_ru)
    }

    return( 
       <div style={{width:"100%"}}>
       {message ? <Message msg={message} /> : null}
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
    <Progress percentage={uploadPercentage} />
    {uploadedFile ? (
        <div className='row mt-5'>
          <div className='col-md-6 m-auto'>
            <h3 className='text-center'>{uploadedFile.fileName}</h3>
            <img style={{ width: '100%' }} src={require("/media/bookfoto/1646830893576--IMG_4908.JPG")} alt='name' />
          </div>
        </div>
      ) : null}
    </div>
    )
}
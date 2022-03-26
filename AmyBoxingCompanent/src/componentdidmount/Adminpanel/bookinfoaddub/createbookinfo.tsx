;import {useTypedSelector} from "../../../hooks/userTypedSelector";
import { useActions } from '../../../hooks/useActions';
import {Bookinfoformname} from "./bookinfofromname";
import {Bookauthorname} from "./bookauthorname";
import {Bookinfoformall} from "./bookinforamtionall";
import {Bookimg} from "./bookimg";
import {BookinfoUrl} from "./bookurl";
import {GeneralInfo} from "./generalinfo";
import Progress from '../../proptypes/proptypes';
import Message from "../../proptypes/message";
import axios from "axios";
import JoditReact from "jodit-react-ts";
import 'jodit/build/jodit.min.css';
import { useState  ,useEffect} from "react";



export const Bookinfoadd:React.FC = ()=>{

   
    const {setTodoPage ,timerstop} = useActions()
    const [coverAm,setCoverAm] = useState<string>("")
    const [coverRu,setCoverRu] = useState<string>("")
    const [coverEn,setCoverEn] = useState<string>("")
    const [uploadedFile ,setUploadedFile] = useState<any>({});
    const [uploadPercentage, setUploadPercentage] = useState<number>(0);
    const [message, setMessage] = useState<string>('');
    const {data} = useTypedSelector(state => state.book)
    


    useEffect(()=>{
       axios.get('/api/v1/getusers')
       .then(res=> console.log(res.data))
    },[])

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
         ցategory,
         Numberofpages,
         Weight,
         Publisher,
         price,
         date,
         absolute_url,
         file,
       } = data
      
        
       
       const formData = new FormData();
  

       for (let i = 0; i < file.length; i++) {
           formData.append('files', file[i]);   
                 
       }
    
      formData.append('name_am', name_am)
      formData.append('name_ru', name_ru)
      formData.append('name_en', name_en)
      formData.append('author_am',author_am)
      formData.append('author_ru', author_ru)
      formData.append('author_en', author_en)
      formData.append('Language_am',Language_am)
      formData.append('ցategory', ցategory)
      formData.append('Numberofpages', Numberofpages)
      formData.append('Publisher',Publisher)
      formData.append('Weight',Weight)
      formData.append('price', price)
      formData.append('cover_am', coverAm)
      formData.append('cover_ru', coverRu)
      formData.append('cover_en', coverEn)
      formData.append('date', date) 
      formData.append('absolute_url', absolute_url) 

       try{
        
         const res = await axios.post('/api/v1/photos/upload' , formData ,{
                
            headers:{
                'Content-Type': "multipart/form-data"
            },
            onUploadProgress: progressEvent => {


               setUploadPercentage(+Math.round((progressEvent.loaded * 100) / progressEvent.total));
             }
         })
         setTimeout(() => setUploadPercentage(0), 10000);

        //  const { fileName , filePath} = res.data

         setMessage(res.data);

         window.location.reload();

        //  setUploadedFile({fileName, filePath}) 

       }catch(error){
          console.log(error)
       }
    }

    return( 
       <div style={{width:"100%"}}>
       {message ? <Message msg={message} /> : null}
    <form onSubmit={cretebookinfo}>
       <Bookinfoformname />
       <Bookinfoformall />
       <Bookauthorname />
       <JoditReact  onChange={(content:string) => setCoverAm(content)}   defaultValue={coverAm} />
       <JoditReact  onChange={(content:string) => setCoverRu(content)}   defaultValue={coverRu} />
       <JoditReact  onChange={(content:string) => setCoverEn(content)}   defaultValue={coverEn} />
       <Bookimg />
       <GeneralInfo />
       <BookinfoUrl />

       <button>send</button>
    </form>
    <Progress percentage={uploadPercentage} />
    {uploadedFile ? (
        <div className='row mt-5'>
          <div className='col-md-6 m-auto'>
            <h3 className='text-center'>{uploadedFile.fileName}</h3>
            {/* <img style={{ width: '100%' }} src={require("/media/bookfoto/1646856043961.JPG")} alt='name' /> */}
          </div>
        </div>
      ) : null}
    </div>
    )
}
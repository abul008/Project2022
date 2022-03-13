import {CaruselFoto} from "./caruselimg";
import {useTypedSelector} from "../../../hooks/userTypedSelector";
import { useActions } from '../../../hooks/useActions';
import { useState } from "react";
import axios from "axios";


export const Caruselinfo  = ()=>{
    

    const [uploadPercentage, setUploadPercentage] = useState<number>(0);
    const {data} = useTypedSelector(state => state.carusel)

    const {setCaruselPage} = useActions()

    const caruselsubmit = async(event: React.FormEvent<HTMLFormElement>)=>{
          event.preventDefault();

          const {file ,absalute_url} = data

          const formData = new FormData();

        //  file.forEach((element:string) => {
        //      formData.append('files', element)
        //  });

          for (let i = 0; i < file.length; i++) {
            formData.append('file', file[i]);            
          }
          // formData.append('file' , file)
          formData.append('absolute_url' , absalute_url)

          try{
        
            const res = await axios.post('/api/caruselphotos/upload' , formData ,{
                   
               headers:{
                   'Content-Type': "multipart/form-data"
               },
               onUploadProgress: progressEvent => {
   
   
                  setUploadPercentage(+Math.round((progressEvent.loaded * 100) / progressEvent.total));
                }
            })
            setTimeout(() => setUploadPercentage(0), 10000);

            window.location
           
            window.location.reload();
           //  const { fileName , filePath} = res.data
   
            // setMessage(res.data);
   
           //  setUploadedFile({fileName, filePath}) 
   
          }catch(error){
             console.log(error)
          }

    }

    return(
        <div className="carusel-wrapper">
            <form onSubmit={caruselsubmit}>
             <CaruselFoto />
             <button>Send</button>
            </form>
        </div>
    )
}

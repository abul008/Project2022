import {CaruselFoto} from "./caruselimg";
import {HomeAddres} from "./contact";
import {HomeSocialMedia} from "./socialmedia";
import {useTypedSelector} from "../../../hooks/userTypedSelector";
import { useActions } from '../../../hooks/useActions';
import { useState } from "react";
import JoditReact from "jodit-react-ts";
import 'jodit/build/jodit.min.css';
import axios from "axios";


export const Homeinfo  = ()=>{
    

    const [uploadPercentage, setUploadPercentage] = useState<number>(0);
    const [copyrightAm , setCopyrightAm] = useState<string>("")
    const [copyrightRu , setCopyrightRu] = useState<string>("")
    const [copyrightEn , setCopyrightEn] = useState<string>("")
    const {data} = useTypedSelector(state => state.home)

    const {setHomePage } = useActions()

    
    
 
   
    const caruselsubmit = async(event: React.FormEvent<HTMLFormElement>)=>{
          event.preventDefault();

          const {
            file,
            absalute_url,
            phone_number,
            phone_number2,
            email,
            addres,
            facebook_url,
            instagram_url,
            telegram_url,
          } = data

      

          const formData = new FormData();

        //  file.forEach((element:string) => {
        //      formData.append('files', element)
        //  });

          for (let i = 0; i < file.length; i++) {
            formData.append('file', file[i]);            
          }
          formData.append('absolute_url' , absalute_url)
          formData.append('phone_number' , phone_number)
          formData.append('phone_number2' , phone_number2)
          formData.append('email' , email) 
          formData.append('addres' , addres)
          formData.append('facebook_url' , facebook_url)
          formData.append('instagram_url' , instagram_url)
          formData.append('telegram_url' , telegram_url)
          formData.append('copyright_am' , copyrightAm)
          formData.append('copyright_ru' , copyrightRu)
          formData.append('copyright_en' , copyrightEn)

          try{
        
            const res = await axios.post('/api/v1/homeinfo/upload' , formData ,{
                   
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
              <HomeAddres />
              <HomeSocialMedia />
              <JoditReact  onChange={(content:string) => setCopyrightAm(content)}     defaultValue={copyrightAm} />
              <JoditReact  onChange={(content:string) => setCopyrightRu(content)}     defaultValue={copyrightRu} />
              <JoditReact  onChange={(content:string) => setCopyrightEn(content)}     defaultValue={copyrightEn} />
             <button>Send</button>
            </form>
        </div>
    )
}

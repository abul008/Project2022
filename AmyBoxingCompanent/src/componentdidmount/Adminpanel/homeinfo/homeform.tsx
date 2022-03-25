// import {CaruselFoto} from "./caruselimg";
import {HomeAddres} from "./contact";
import {HomeSocialMedia} from "./socialmedia";
import {Copyright} from "./copyright";
import {useTypedSelector} from "../../../hooks/userTypedSelector";
// import { useActions } from '../../../hooks/useActions';
import { useState } from "react";
// import JoditReact from "jodit-react-ts";
// import 'jodit/build/jodit.min.css';
import axios from "axios";


export const Homeinfo  = ()=>{
    

    const [uploadPercentage, setUploadPercentage] = useState<number>(0);
    const [litleinfoAm , setLitleinfoAm] = useState<string>("");
    const [litleinfoRu , setLitleinfoRu] = useState<string>(""); 
    const [litleinfoEn , setLitleinfoEn] = useState<string>(""); 
    const [copyrightAm , setCopyrightAm] = useState<string>("");
    const [copyrightRu , setCopyrightRu] = useState<string>("");
    const [copyrightEn , setCopyrightEn] = useState<string>("");
    const {data} = useTypedSelector(state => state.home)

  
   
    const caruselsubmit = async(event: React.FormEvent<HTMLFormElement>)=>{
          event.preventDefault();

          const {
            phone_number,
            phone_number2,
            email,
            addres,
            facebook_url,
            instagram_url,
            telegram_url,
          } = data
          
          const homedata = {
            phone_number,
            phone_number2,
            email,
            addres,
            facebook_url,
            instagram_url,
            telegram_url,
            copyrightAm,
            copyrightRu,
            copyrightEn,
            litleinfoAm,
            litleinfoRu,
            litleinfoEn
          }
      
          try{
        
            const res = await axios.post('/api/v1/homeinfo/' , homedata ,{
                   
               headers:{
                   'Content-Type': "application/json",
                   
               }
            })
            setTimeout(() => setUploadPercentage(0), 10000);
           
            window.location.reload();
   
          }catch(error){
             console.log(error)
          }

    }
    

    return(
        <div className="carusel-wrapper">
            <form onSubmit={caruselsubmit}>
              {/* <CaruselFoto /> */}
              <HomeAddres />
              <HomeSocialMedia />
              <Copyright 
               onchange_am={(content:string) => setCopyrightAm(content)}
               onchange_ru={(content:string) => setCopyrightRu(content)}
               onchange_en={(content:string) => setCopyrightEn(content)}
               value_am={copyrightAm}
               value_ru={copyrightRu}
               value_en={copyrightEn}
              />
              <Copyright 
               onchange_am={(content:string) => setLitleinfoAm(content)}
               onchange_ru={(content:string) => setLitleinfoRu(content)}
               onchange_en={(content:string) => setLitleinfoEn(content)}
               value_am={litleinfoAm}
               value_ru={litleinfoRu}
               value_en={litleinfoEn}
              />
              {/* <JoditReact  onChange={(content:string) => setCopyrightAm(content)}     defaultValue={copyrightAm} />
              <JoditReact  onChange={(content:string) => setCopyrightRu(content)}     defaultValue={copyrightRu} />
              <JoditReact  onChange={(content:string) => setCopyrightEn(content)}     defaultValue={copyrightEn} /> */}
             <button>Send</button>
            </form>
        </div>
    )
}

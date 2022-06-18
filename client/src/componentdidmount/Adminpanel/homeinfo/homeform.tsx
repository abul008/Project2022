// import {CaruselFoto} from "./caruselimg";
import {HomeAddres} from "./contact";
import {HomeSocialMedia} from "./socialmedia";
import {useTypedSelector} from "../../../hooks/userTypedSelector";
import  {FormHead ,Form ,ButtonF } from "../formdesign/formdesign";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {Jodit} from "../joditReact/bookJodit";
import axios from "axios";


export const Homeinfo  = () => {
    

    // const [uploadPercentage, setUploadPercentage] = useState<number>(0);
    const [litleinfoAm , setLitleinfoAm] = useState<string>("");
    const [litleinfoRu , setLitleinfoRu] = useState<string>(""); 
    const [litleinfoEn , setLitleinfoEn] = useState<string>(""); 
    const [copyrightAm , setCopyrightAm] = useState<string>("");
    const [copyrightRu , setCopyrightRu] = useState<string>("");
    const [copyrightEn , setCopyrightEn] = useState<string>("");
    const {data} = useTypedSelector(state => state.home)
    const history = useHistory()
  
   
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
        
            await axios.post('/api/v1/homeinfo/' , homedata ,{
                   
               headers:{
                   'Content-Type': "application/json",
                   
               }
            })
            // setTimeout(() => setUploadPercentage(0), 10000);
           
            // window.location.reload();
            await  history.push("/webadmin");
   
          }catch(error){
             console.log(error)
          }

    }
    

    return(
        <FormHead>
          <Form>
          <h3>Ավելացնել Գլխաոր էջի ինֆորմացիա </h3>

            <form onSubmit={caruselsubmit}>
              {/* <CaruselFoto /> */}
              <HomeAddres />
              <HomeSocialMedia />
              <Jodit  onchangeJodit={(content:string) => setCopyrightAm(content)} value={copyrightAm} label={"Am"} />
              <Jodit onchangeJodit={(content:string) => setCopyrightRu(content)} value={copyrightRu} label={"Ru"} />
              <Jodit onchangeJodit={(content:string) => setCopyrightEn(content)} value={copyrightEn} label={"En"} />

              <Jodit onchangeJodit={(content:string) => setLitleinfoAm(content)} value={litleinfoAm} label={"Am"} />
              <Jodit onchangeJodit={(content:string) => setLitleinfoRu(content)} value={litleinfoRu} label={"Ru"} />
              <Jodit onchangeJodit={(content:string) => setLitleinfoEn(content)} value={litleinfoEn} label={"En"} />
  
             <ButtonF type="submit">Send</ButtonF>
            </form>
            </Form>
        </FormHead>
    )
}

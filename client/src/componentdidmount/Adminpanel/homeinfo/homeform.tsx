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
    const [litleinfo_am , setLitleinfo_am] = useState<string>("");
    const [litleinfo_ru , setLitleinfo_ru] = useState<string>(""); 
    const [litleinfo_en , setLitleinfo_en] = useState<string>(""); 
    const [copyright_am , setCopyright_am] = useState<string>("");
    const [copyright_ru , setCopyright_ru] = useState<string>("");
    const [copyright_en , setCopyright_en] = useState<string>("");
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
            copyright_am,
            copyright_ru,
            copyright_en,
            litleinfo_am,
            litleinfo_ru,
            litleinfo_en
          }
      
          try{
        
            await axios.post('/api/v1/post/home/' , homedata )
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
              <Jodit  onchangeJodit={(content:string) => setCopyright_am(content)} value={copyright_am} label={"Am"} />
              <Jodit onchangeJodit={(content:string) => setCopyright_ru(content)} value={copyright_ru} label={"Ru"} />
              <Jodit onchangeJodit={(content:string) => setCopyright_en(content)} value={copyright_en} label={"En"} />

              <Jodit onchangeJodit={(content:string) => setLitleinfo_am(content)} value={litleinfo_am} label={"Am"} />
              <Jodit onchangeJodit={(content:string) => setLitleinfo_ru(content)} value={litleinfo_ru} label={"Ru"} />
              <Jodit onchangeJodit={(content:string) => setLitleinfo_en(content)} value={litleinfo_en} label={"En"} />
  
             <ButtonF type="submit">Send</ButtonF>
            </form>
            </Form>
        </FormHead>
    )
}

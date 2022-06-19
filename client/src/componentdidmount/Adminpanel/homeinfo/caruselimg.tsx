import React,{ useState } from "react";
import "./caruselimg.css";
import {FormHead, Form, ButtonF} from "../formdesign/formdesign"
import axios from "axios";



export const CaruselInfo = () =>{
    const [absolutUrl , setAbsolutUrl] = useState<string>("")
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [file , setFile] = useState<any >()
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setFile(e.target.files)
    }
    

    const carudelinfopost = async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        const formData = new FormData();

        for (let i = 0; i < file.length; i++) {
            formData.append('file', file[i]);   
                  
        }

        formData.append('get_absolute_url', absolutUrl)
          
        try{
        
            const res = await axios.post('/api/v1/singl/carusel' , formData ,{
                   
               headers:{
                   'Content-Type': "multipart/form-data"
               },
            })
             console.log(res.data)
            window.location.reload();
   
           //  setUploadedFile({fileName, filePath}) 
   
          }catch(error){
             console.log(error)
          }
    }



    return(
        < FormHead>
            <Form> 
            <h2>Ավելացնել ինֆորմացիա</h2>
        <form onSubmit={carudelinfopost}>
           <div className="admin-input-cantrol">
               <label>foto : 
                <input 
                type="file"
                placeholder="անուն" 
                onChange={onChange}
                />
                </label>
                <input
                type="text"
                value={absolutUrl}
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setAbsolutUrl(e.target.value)}
                placeholder="հասցե"  
               />
            </div>
            <ButtonF>Ավելացնել</ButtonF>
        </form>
        </Form>
     </FormHead>
     
    )
}
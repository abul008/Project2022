import { useState } from "react";
import axios from "axios";

export const CaruselInfo = () =>{
    const [absolutUrl , setAbsolutUrl] = useState<string>("")
    const [file , setFile] = useState<any>([])

    const onChange = (e: React.ChangeEvent<HTMLInputElement >)=>{
        setFile(e.target.files)
    }
    

    const carudelinfopost = async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        const formData = new FormData();

        for (let i = 0; i < file.length; i++) {
            formData.append('file', file[i]);   
                  
        }

        formData.append('absolute_url', absolutUrl)
          
        try{
        
            const res = await axios.post('/api/v1/homecarusel/upload' , formData ,{
                   
               headers:{
                   'Content-Type': "multipart/form-data"
               },
            })

            window.location.reload();
   
           //  setUploadedFile({fileName, filePath}) 
   
          }catch(error){
             console.log(error)
          }
    }

    return(
        <form onSubmit={carudelinfopost}>
           <div className="admin-input-cantrol">
                <input 
                type="file"
                placeholder="անուն" 
                onChange={onChange}
                />
                <input
                type="text"
                value={absolutUrl}
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setAbsolutUrl(e.target.value)}
                placeholder="հասցե"  
               />
            </div>
            <button>Send</button>
        </form>
     
    )
}
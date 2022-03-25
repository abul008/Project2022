import {useTypedSelector} from "../../../hooks/userTypedSelector";
import { useActions } from '../../../hooks/useActions';
import { useState } from "react";
import axios from "axios";

export const CaruselInfo = () =>{
    const {data} = useTypedSelector(state => state.home)
    const [absolutUrl , setAbsolutUrl] = useState<string>("")
    const [file , setFile] = useState<any>([])

    const {setHomePage} = useActions()

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
                // multiple 
                placeholder="գրքի անուն" 
                // value={data.name_am}
                onChange={onChange}
                // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>  setBookPage({...data,file:e.target.files, filename:e.target.files[0].name})}
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
import axios from "axios"
import { useEffect } from "react"



export const Home:React.FC = ()=>{
  
    useEffect(()=>{

    axios.get('http://localhost:8080/')
    .then(res=>console.log(res.data))
    },[])
    return( 
        <div >Home</div>
    )
}
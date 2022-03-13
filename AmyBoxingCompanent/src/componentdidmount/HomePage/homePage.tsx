import axios from "axios"
import { useEffect, useState } from "react"
import {Carusel} from "../CaruselScreen/carusel";


interface Carusels{
    datacarusel:Caruseldata[]
}

interface Caruseldata{
    get_absolute_url:string,
    fileHreaf:string,
    fileHreafg:string,
}


export const Home:React.FC = ()=>{


    const [carueseldb , setCaruseldb] = useState<Carusels[]>([])

    
  


    useEffect(()=>{
        axios.get("/api/caruselunfo")
        .then(res=>setCaruseldb(res.data))
      },[])



//    console.log(carueseldb)

    const data = [
        {
            photo_url:"https://www.mobilecentre.am/img/slider/cf22e03068d7e95aeb9c_mec.png",
            href:"/hello"
        },
        {
            photo_url:"https://www.mobilecentre.am/img/slider/cf22e03068d7e95aeb9c_mec.png",
            href:"/hello"
        },
        {
            photo_url:"https://www.mobilecentre.am/img/slider/cf22e03068d7e95aeb9c_mec.png",
            href:"/hello"
        },
  ]


    
    return( 
         <div >
            <Carusel   />
         </div>
    )
}
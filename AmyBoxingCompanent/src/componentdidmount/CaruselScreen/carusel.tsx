import React,{useState,useEffect} from "react";
// import FileUpload from "../fileUpload/fileupload";
import axios  from "axios";
import {Link, Redirect} from 'react-router-dom';
import "./carusel.css" ;


interface Carusels{
    fileHreaf: string;
    get_absolute_url:string,
    // datacarusel:Caruseldata[]
}

interface Caruseldata{
    get_absolute_url:string,
    fileHreaf:string,
}

interface Data{
    _id:any,
    get_absolute_url:string,
    fileName:string,
    fileHreaf:string,
    filePath:string,
    fileType:string,
    fileSize:string,
    createdAt:string,
    updatedAt:string,
    href:string
}
export const Carusel:React.FC = (props) =>{
        

const [transfer , settransfer] = useState(0 +`%`) ;
const [animationName ,setAnimationName] = useState("mymove 10s infinite");
const [background ,setBackground] = useState({backgroundone:"white",backgroundtwo:"white",backgroundtree:"white"});
const [activeClass,setActiveclass] = useState<number | string>("")
const [datacarusel ,setDatacarusel] = useState<Carusels[]>([])

const [srccarusel , setSrccarusel] = useState([])

 useEffect(()=>{
   axios.get("/api/caruselunfo")
   .then(res=>setDatacarusel(res.data))
 },[])

 console.log(datacarusel)



    return(
    <div className="CaruselWrapper">
      <div className="caruselSlide">
        <ul className="caruselLinn">
          <ul className="carusel caruseltransform" style={{marginLeft:transfer,animation:animationName}}>
              
           </ul>
             {datacarusel.map((imgD,i)=><li key={i} className="carusel"><a href={imgD.get_absolute_url}><img src={imgD.fileHreaf}/></a> </li>)}
      
        </ul>
        <div className="caruselButton">
                {/* <button  
                style={{background:background.backgroundone}}
                 onClick={()=>{
                     settransfer(0+`%`);
                     setAnimationName("mymove");
                     setBackground({...background,backgroundone:"black",backgroundtwo:"white" ,backgroundtree:"white" });
                                        
                             }}>
                </button>
                <button 
                style={{background:background.backgroundtwo}}
                 onClick={()=>{
                    settransfer(-100+`%`);
                    setAnimationName("mymove")
                    setBackground({...background,backgroundone:"white",backgroundtwo:"black" ,backgroundtree:"white" });
                              }}>
                </button>
                <button  
                style={{background:background.backgroundtree}}
                 onClick={()=>{
                    settransfer(-100+`%`);
                    setAnimationName("mymove")
                    setBackground({...background,backgroundone:"white",backgroundtwo:"white" ,backgroundtree:"black" });
                            }}>
                </button> */}
                {datacarusel.map((imgD,index)=><button 
                className={`btn-carusel ${index === activeClass ? "active" : "" }`}
                 onClick={()=>{
                  setActiveclass(index)
                  settransfer(`-${index}00%`);
                  setAnimationName("mymove");
                }} key={index} ></button>)}

         </div>
      </div>
            {/* <FileUpload/> */}
    </div>
    )

}


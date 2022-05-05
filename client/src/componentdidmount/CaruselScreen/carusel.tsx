import React,{useState} from "react";
import "./carusel.css" ;



interface Carusels{
  dataall:Caruseldata[]
}

interface Caruseldata{
  get_absolute_url:string,
  fileHreaf:string,
}
export const Carusel:React.FC<Carusels> = ({dataall}) =>{
        

const [transfer , settransfer] = useState(0 +`%`) ;
const [animationName ,setAnimationName] = useState("mymove 10s infinite");
const [activeClass,setActiveclass] = useState<number | string>("")




    return(
    <div className="CaruselWrapper">
      <div className="caruselSlide">
        <ul className="caruselLinn">
          <ul className="carusel caruseltransform" style={{marginLeft:transfer,animation:animationName}}>
              
           </ul>
             {dataall.map((imgD,i)=><li key={i} className="carusel"><a href={imgD.get_absolute_url}><img src={imgD.fileHreaf}/></a> </li>)}
      
        </ul>
        <div className="caruselButton">
               
               {dataall.map((imgD,index)=><button 
                className={`btn-carusel ${index === activeClass ? "active" : "" }`}
                 onClick={()=>{
                  setActiveclass(index)
                  settransfer(`-${index}00%`);
                  setAnimationName("mymove");
                }} key={index} ></button>)}

         </div>
      </div>

    </div>
    )

}


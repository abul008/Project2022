import React,{useState} from "react"
import background  from "./props"
import "./changelanguage.css"

export const ChangeLanguage:React.FC   = () =>{
const [navbackground , setNavbackground] = useState< background >({home:"",book:"" , about:"" ,profile:"",changelenguage:""});
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const [accessfield, setAccessfield] = useState<boolean>(false);
// const [changeflag , setChangeflag] = useState<boolean>(false);
const [changelangcantrol, setChangelangcantrol] = useState<boolean>(false);


const lang = localStorage.getItem("lang") || "en";


    return(
      <div className="nav-on-the-flag">  
         <div className="change-language"
           onClick={()=>{
            setChangelangcantrol(!changelangcantrol);
            setAccessfield(false);
            setNavbackground({...navbackground,home:"",book:"",about:"",profile:"",changelenguage:""})
            }} 
         >
           <div style={{display:lang === "am" ? "block" : "none"}}><img src="/svgfolder/flagarm.svg"/></div>
           <div style={{display:lang === "ru" ? "block" : "none"}}><img src="/svgfolder/flagrus.svg"/></div>
           <div style={{display:lang === "en" ? "block" : "none"}}><img src="/svgfolder/flaguse.svg" /></div>
         </div> 
         <div style={{display:changelangcantrol ? "flex" : "none" }} className="change-leng-cantrol">
           <div 
              onClick={()=>{
              localStorage.setItem("lang", "am" )
              window.location.reload()
           }}
       
            className="change-leng-cantrol-img" ><img src="/svgfolder/flagarm.svg"/></div>
                 <div
             onClick={()=>{
             localStorage.setItem("lang", "ru" )   
             window.location.reload()
           }}
            className="change-leng-cantrol-img" ><img src="/svgfolder/flagrus.svg"/></div>
           <div
             onClick={()=>{
             localStorage.setItem("lang", "en" )   
             window.location.reload()
           }}
            className="change-leng-cantrol-img" ><img src="/svgfolder/flaguse.svg"/></div>
         </div> 
      </div>
    )
}


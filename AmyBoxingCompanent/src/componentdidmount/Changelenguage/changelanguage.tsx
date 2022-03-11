import React,{useState} from "react";
import "./changelanguage.css";
import i18next from "i18next";

interface NavBackground {
    home:string,
    book:string ,
    about:string,
    profile:string,
    changelenguage:string
}

export const ChangeLanguage:React.FC   = () =>{
const [navbackground , setNavbackground] = useState<NavBackground>({home:"",book:"" , about:"" ,profile:"",changelenguage:""});
const [accessfield, setAccessfield] = useState<boolean>(false);
const [changeflag , setChangeflag] = useState<boolean>(false);
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
           <div style={{display:lang === "am" ? "block" : "none"}}><img src={require("/media/flag/armenianflag.png")}/></div>
           <div style={{display:lang === "en" ? "block" : "none"}}><img src={require("/media/flag/americanflag.png")}/></div>
         </div> 
         <div style={{display:changelangcantrol ? "flex" : "none" }} className="change-leng-cantrol">
           <div 
              onClick={(e)=>{
              localStorage.setItem("lang", "am" )
              window.location.reload()
           }}
       
            className="change-leng-cantrol-img" ><img src={require("/media/flag/armenianflag.png")}/></div>
           <div
             onClick={(e)=>{
             localStorage.setItem("lang", "en" )   
             window.location.reload()
           }}
            className="change-leng-cantrol-img" ><img src={require("/media/flag/americanflag.png")}/></div>
         </div> 
      </div>
    )
}


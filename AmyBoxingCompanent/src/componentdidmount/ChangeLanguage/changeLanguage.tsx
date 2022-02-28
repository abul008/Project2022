import React,{FC, useState} from "react";
import "./changeLanguage.css";
import i18next from "i18next";



const ChangeLenguage:React.FC = () =>{
const [navbackground , setNavbackground] = useState({home:"",book:"" , about:"" ,profile:"",changelenguage:""});
const [accessfield, setAccessfield] = useState(false);
const [changeflag , setChangeflag] = useState(false);
const [changelangcantrol, setChangelangcantrol] = useState(false);


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
           <div style={{display:lang === "am" ? "block" : "none"}}><img src="/flagleng/armenianflag.png"/></div>
           <div style={{display:lang === "en" ? "block" : "none"}}><img src="/flagleng/americanflag.png"/></div>
           <div style={{display:lang === "ru" ? "block" : "none"}}><img src="/flagleng/russioanflag.png"/></div>
          
         </div> 
         <div style={{display:changelangcantrol ? "flex" : "none" }} className="change-leng-cantrol">
           <div 
              onClick={(e)=>{
              localStorage.setItem("lang", "am" )
              window.location.reload()
           }}
       
            className="change-leng-cantrol-img" ><img src="/flagleng/armenianflag.png"/></div>
           <div
             onClick={(e)=>{
             localStorage.setItem("lang", "en" )   
             window.location.reload()
           }}
            className="change-leng-cantrol-img" ><img src="/flagleng/americanflag.png"/></div>
                       <div
             onClick={(e)=>{
             localStorage.setItem("lang", "ru" )   
             window.location.reload()
           }}
            className="change-leng-cantrol-img" ><img src="/flagleng/russioanflag.png"/></div>
         </div> 
      </div>
    )
}

export default ChangeLenguage;
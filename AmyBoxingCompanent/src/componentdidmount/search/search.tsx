import React,{useEffect, useState ,KeyboardEvent} from "react";
import "./search.css";
import {ChangeLanguage} from "../Changelenguage/changelanguage";
import axios from "axios";


interface Searchprops {
    placeholder:string
}

interface Search{
  name_am:string,
  name_ru:string,
  name_en:string,
  author_am:string,
  author_ru:string,
  author_en:string,
  get_absolute_url:string,
  _id:string
  files:any
}


interface TypeFile{

}
export const Search:React.FC<Searchprops> = (props) =>{
  const [searchBlur , setSearchBlur] = useState(false)
  const [searchData ,setSearchdata] = useState<Search[]>([])
  
   





  const searchsub = (e: React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
  }

  const SarchData = (e:KeyboardEvent<HTMLInputElement>) =>{

    const searchvalue = (e.target as HTMLInputElement).value.replace(/  +/g, ' ')

    
    if((e.target as HTMLInputElement).value.length !== 0){
    axios.get("/api/v1/getkoobinfo/")           
    .then(res=>
      setSearchdata(res.data.filter((info:Search) =>
       (info.name_am).toLocaleLowerCase().includes(searchvalue.toLocaleLowerCase())  || 
       (info.name_ru).toLocaleLowerCase().includes(searchvalue.toLocaleLowerCase())  || 
       (info.name_en).toLocaleLowerCase().includes(searchvalue.toLocaleLowerCase())  || 
       info.author_am.toLocaleLowerCase().includes(searchvalue.toLocaleLowerCase())  ||
       info.author_ru.toLocaleLowerCase().includes(searchvalue.toLocaleLowerCase())  ||
       info.author_en.toLocaleLowerCase().includes(searchvalue.toLocaleLowerCase())
        )
        
        ))
  }else if((e.target as HTMLInputElement).value.length === 0){
    setSearchdata([])
  }
}




  
    return(
      <div  className="search-page" onBlur={()=>{
        setSearchBlur(false)
      }}>
       <form onSubmit={searchsub}  >
          <input
          style={{borderRadius:searchBlur ? "6px 6px 0px 0px" : "6px 6px 6px 6px"}}
          onChange={()=>{
            setSearchBlur(true)
          }}
          onBlur={()=>{console.log('hello')}}
           onFocus={()=>{
               setSearchBlur(true)
          }} placeholder={props.placeholder}
          onKeyUp={SarchData}
          />
        </form>
        <div onFocus={()=>{
               setSearchBlur(true)
          }}  style={{display:searchBlur ? "flex" : "none"}} className="searche-page-product-info-form">
          <ul>
            {
              searchData.map((data,index)=>{
                  return(
                    <li key={index}>
                        <a href={"/book" + data.get_absolute_url + "/" + data._id} >
                          <span><img src={data.files[0] ? data.files[0].fileHreaf : undefined} alt="searchfoto" /></span>
                          {data.author_ru}  
                        </a></li>
                  )
              })
            }
          </ul>
        </div>
        <ChangeLanguage />
      </div>
     
    )
}


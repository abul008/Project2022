import React,{useEffect, useState ,KeyboardEvent} from "react";
import "./search.css";
import {ChangeLanguage} from "../Changelenguage/changelanguage";
import axios from "axios";


interface Searchprops {
    placeholder:string
}

export const Search:React.FC<Searchprops> = (props) =>{
  const [searchBlur , setSearchBlur] = useState(false)
  const [searchData ,setSearchdata] = useState([])


  // useEffect(()=>{
  //   axios.get('/api/v1/getkoobinfo')
  //   .then(res=>setSearchdata(res.data))
  // },[])

  const searchsub = (e: React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
  }

  const SarchData = (e:KeyboardEvent<HTMLInputElement>) =>{
    if((e.target as HTMLInputElement).value.length !== 0){
    axios.get("/api/v1/getkoobinfo")           
    .then(res=>
      setSearchdata(res.data.filter((info:any) =>
       (info.name_am + " " + info.author_am).toLocaleLowerCase().includes((e.target as HTMLInputElement).value.toLocaleLowerCase())  || 
        info.author_am.toLocaleLowerCase().includes((e.target as HTMLInputElement).value.toLocaleLowerCase()))))
  }else if((e.target as HTMLInputElement).value.length === 0){
    setSearchdata([])
  }
}


  
  console.log(searchData)
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
           onBlur={()=>{
              //  setSearchBlur(false)
          }} placeholder={props.placeholder}
          onKeyUp={SarchData}
          />
        </form>
        <div  style={{display:searchBlur ? "flex" : "none"}} className="searche-page-product-info-form">
          <ul>
            {
              searchData.map((data,index)=>{
                  return(
                    <li key={index}><a >{data.author_am}</a></li>
                  )
              })
            }
          </ul>
        </div>
        <ChangeLanguage />
      </div>
     
    )
}


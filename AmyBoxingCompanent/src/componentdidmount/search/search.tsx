import React,{useState} from "react";
import "./search.css";
import {ChangeLanguage} from "../Changelenguage/changelanguage";
// import { BsSearch } from "react-icons/bs";
// import  ChangeLanguage  from "../changeLanguage/changelanguage";

interface Searchprops {
    placeholder:string
}

export const Search:React.FC<Searchprops> = (props) =>{
  const [searchBlur , setSearchBlur] = useState(false)

  const searchsub = (e: React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
  }

  const data = ["hello" ,"erevan" ,"avan" ,"gremre"]
  
  
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
          }} placeholder={props.placeholder} />
          {/* <button><BsSearch/></button> */}
        </form>
        <div  style={{display:searchBlur ? "flex" : "none"}} className="searche-page-product-info-form">
          <ul>
            {
              data.map((data,index)=>{
                  return(
                    <li key={index}><a >{data}</a></li>
                  )
              })
            }
          </ul>
        </div>
        <ChangeLanguage />
      </div>
     
    )
}


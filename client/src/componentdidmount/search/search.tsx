import React,{useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import "./search.css"
import {ChangeLanguage} from "../Changelenguage/changelanguage"
import {BookinformationCard, SearchData} from "../../types/index"
import { changelenguage } from "../helpers/auth"
import {SearchDesign} from "./InputResaultUl"
import {SearchLoader} from "./searchLoader"
import {SvgSearch} from "../svgicon/svg"
import {getChannels} from "../../api/db/index"

interface Searchprops {
    placeholder:string
}

export const Search:React.FC<Searchprops> = (props) => {

const [searchBlur , setSearchBlur] = useState<boolean>(false)
const [searchTerm, setSearchTerm] = useState<string>("");
const [searchResultsData, setSearchResultsData] = useState<SearchData[]>([]);
const [searchloader , setSearchloader] = useState<boolean>(true)
const history = useHistory(); 

useEffect(()=>{
 setSearchloader(false)
  if(searchTerm.length >= 1){
    const handle = setTimeout(()=>{
      getChannels("/api/v1/", "get/book/")           
      .then(res=>{
        setSearchResultsData(res.data.filter((info:BookinformationCard) =>
         (info.name_am).toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())  || 
         (info.name_ru).toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())  || 
         (info.name_en).toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())  || 
         info.author_am.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())  ||
         info.author_ru.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())  ||
         info.author_en.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
          ).map((data:BookinformationCard)=>{
            return{
              SearchName:changelenguage(data,"name"),
              SearchAuthor:changelenguage(data,"author"),
              SearchUrl:data.get_absolute_url,
              SearchId:data._id,
              SearchCaover:changelenguage(data,"cover"),
              SearchPrice:data.price,
              SearchFiles:data.files
            }
          })
          )
          setSearchloader(false)
      })
    },500)
      return () => {
        clearTimeout(handle)
      }
  }else{
    setSearchBlur(false)
  }
},[searchTerm])

const searchsub = (e: React.FormEvent<HTMLFormElement> ) => {

  e.preventDefault()
      history.push(`/search/${searchTerm}`);
}

return(

  <div  
    className="search-page"
    onFocus={ () => {
      setSearchBlur(true)
    }}
    onBlur = { () => {
      setTimeout(()=>{
      setSearchBlur(false) 
      } , 100 )
    }}>

  <form onSubmit={searchsub} >   
    <input
      value={searchTerm}
      style={{borderRadius:searchBlur ? "6px 6px 0px 0px" : "6px 6px 6px 6px" , paddingLeft:searchBlur ? "38px" :"12px"}}
      onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
      setSearchTerm(e.target.value);
      setSearchBlur(true)
      }}
      placeholder={props.placeholder} />

  <button 
    style={{display:searchBlur ? "flex" : "none"}}
    className="Search-on-the-svg" onClick={()=>console.log("hello")} >
    <SvgSearch />
  </button>

  </form>
    <div 
    style={{display:searchBlur  ? "flex" : "none"}}
    className="searche-page-product-info-form" >

  <SearchLoader loaderstyle={{display:searchloader ? "block" : "none"}} />
  <SearchDesign FindFilter={searchResultsData} />

  </div>

  <ChangeLanguage />

  </div> 
)}


import axios from "axios";
import { changelenguage } from "../helpers/auth";
import {SearchPageUl} from "./searchPageUl";
import "./searchpage.css"
import {BookinformationCard} from "../InterFace/bookPageInterface";
import React, { useEffect ,useState} from "react";
import { SearchData } from "../InterFace/searchinterface";



export const Searchresult:React.FC = ({match}:any)=>{
    
  const [searchResultsData, setSearchResultsData] = useState<SearchData[]>([]);

    const searchTerm = match.params.id

    useEffect(()=>{
 
     
        const handle = setTimeout(()=>{
          axios.get("/api/v1/getbookinfo/")           
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
          })
        },500)
          return () => {
            clearTimeout(handle)
          }
 
    },[])



  return(
      <div className="Seaarch-resault-wrapper">
         <SearchPageUl SearchPage={searchResultsData}  />
      </div>
  )
}
import axios from "axios";
import { changelenguage } from "../helpers/auth";
import "./searchpage.css"
import {BookinformationCard , FilesHref} from "../InterFace/bookPageInterface";
import React, { useEffect ,useState} from "react";
import {CardJson} from "../InterFace/card"
import { Card } from "../card/card";




export const Searchresult:React.FC = ({match}:any)=>{
    
  const [searchResultsData, setSearchResultsData] = useState<CardJson[]>([]);

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
                // return{
                //   SearchName:changelenguage(data,"name"),
                //   SearchAuthor:changelenguage(data,"author"),
                //   SearchUrl:data.get_absolute_url,
                //   SearchId:data._id,
                //   SearchCaover:changelenguage(data,"cover"),
                //   SearchPrice:data.price,
                //   SearchFiles:data.files[0] ? data.files[0].fileHreaf : undefined
                // }
                return{
                  cardname_am:data.name_am,
                  cardname_ru:data.name_ru,
                  cardname_en:data.name_en,
                  cardauthor_am:data.author_am ,
                  cardauthor_ru:data.author_ru ,
                  cardauthor_en:data.author_en ,
                  cardprice:data.price,
                  cardlanguage:data.Language_am,
                  cardurl:data.get_absolute_url,
                  cardgetgoti:data.ցategory,
                  id:data._id,
                  cardfile:data.files.map((filterfile:FilesHref)=> filterfile.fileHreaf)
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
         <Card carddata={searchResultsData} />
      </div>
  )
}
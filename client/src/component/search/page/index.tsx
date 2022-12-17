import { useParams } from "react-router-dom"
import { Book, FilesHref } from "../../../custom_types/index"
import React, { useEffect ,useState} from "react"
import {CardJson} from "../../../custom_types/index"
import { Card } from "../../card"
import {getChannels} from "../../../api/db/index"
import "./index.css"

export const Searchresult: React.FC = () => {
const [searchResultsData, setSearchResultsData] = useState<CardJson[]>([]);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const { id } = useParams <{id?: any}>();
const searchTerm = id

useEffect(()=>{
  const handle = setTimeout(()=>{
  getChannels("/api/v1/","get/book/")           
    .then(res => {
      setSearchResultsData(res.data.filter((info: Book) =>
      (info.name_am).toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())  || 
      (info.name_ru).toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())  || 
      (info.name_en).toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())  || 
      info.author_am.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())  ||
      info.author_ru.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())  ||
      info.author_en.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
      ).map(( data: Book) => {
        return {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

return(
  <div className="Seaarch-resault-wrapper">
    <Card carddata={searchResultsData} />
  </div>
  )
}
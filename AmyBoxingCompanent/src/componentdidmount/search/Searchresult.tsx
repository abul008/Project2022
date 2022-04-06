import axios from "axios";
import { changelenguage } from "../helpers/auth";
import React, { useEffect ,useState} from "react";

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

export const Searchresult:React.FC = ({match}:any)=>{
    
  const [searchResultsData, setSearchResultsData] = useState<Search[]>([]);

    // console.log(match.params.id)

    const searchTerm = match.params.id

    useEffect(()=>{
 
     
        const handle = setTimeout(()=>{
          axios.get("/api/v1/getbookinfo/")           
          .then(res=>{
            setSearchResultsData(res.data.filter((info:Search) =>
             (info.name_am).toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())  || 
             (info.name_ru).toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())  || 
             (info.name_en).toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())  || 
             info.author_am.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())  ||
             info.author_ru.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())  ||
             info.author_en.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
              )
              )
          })
        },500)
          return () => {
            clearTimeout(handle)
          }
 
    },[])


    console.log(searchResultsData)
  return(
      <div className="Seaarch-resault-wrapper">
        <ul>
          {
            searchResultsData.map((data,index)=>{
            return(
              <li key={index}><a href="">
                           {changelenguage(data ,"author")}
                {data.author_ru}
                </a></li>
            )
            })
          }
          
        </ul>
      </div>
  )
}
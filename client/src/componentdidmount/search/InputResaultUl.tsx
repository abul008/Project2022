import React from "react";
import "./inputResaultUl.css";
import {SearchData} from "../InterFace/searchinterface";



interface FilterSearch{
    FindFilter:SearchData[]
}


export const SearchDesign:React.FC<FilterSearch> = ({FindFilter}) =>{

   
 
    return(
          <ul>
            {
             FindFilter.map((data,index)=>{
                  return(
                    <li key={index}>
                        <a href={ data.SearchUrl  + data.SearchId} >
                          <span><img src={data.SearchFiles[0] ? data.SearchFiles[0].fileHreaf : undefined} alt="searchfoto" /></span>
                           {data.SearchAuthor}
                        </a></li>
                  )
              })
            }
          </ul>
 
     
    )
}


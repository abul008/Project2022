import {BookinformationCard} from "../InterFace/bookPageInterface";
import {SearchData} from "../InterFace/searchinterface";
import "./searchPageUl.css";

import React, { useEffect ,useState} from "react";

interface SeaarchResault{
    SearchPage:SearchData[]
}

export const SearchPageUl:React.FC<SeaarchResault> = (props)=>{



  return(
      <div className="Seaarch-ul-design-wrapper">
         
        <ul>
          {
            props.SearchPage.map((data,index)=>{
            return(
              <li key={index}><a href="">
                {data.SearchAuthor}
                </a></li>
            )
            })
          }
          
        </ul>
      </div>
  )
}
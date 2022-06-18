import React from "react"
import { useActions } from '../../hooks/useActions'
import { useEffect, useState } from "react"
import { BookinformationCard, FilesHref, CardJson } from "../../types/index"
import { Card } from "../card/card"
import {getChannels} from "../../api/db/index"

export const BookProduct:React.FC = ()=>{

const [bookdata , setBookdata] = useState<CardJson[]>([])
const {setViewLoader} = useActions()
    
    useEffect(()=>{
        setViewLoader(false)
        getChannels('/api/v1/','get/book/')
        .then(res=>{setBookdata(res.data.map((data:BookinformationCard)=>{
            return{
             cardname_am:data.name_am,
             cardname_ru:data.name_ru,
             cardname_en:data.name_en,
             cardauthor_am:data.author_am ,
             cardauthor_ru:data.author_ru ,
             cardauthor_en:data.author_en ,
             cardprice:data.price,
             carddiscount:data.discount,
             cardlanguage:data.Language_am,
             cardurl:data.get_absolute_url,
             cardgetgoti:data.ցategory,
             id:data._id,
             cardfile:data.files.map((filterfile:FilesHref)=> filterfile.fileHreaf)
            }
       }))
       setViewLoader(true)
    })       
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return( 
        <div className="Book-file-wrapper" >
            <Card carddata={bookdata}  />
        </div>
    )
}
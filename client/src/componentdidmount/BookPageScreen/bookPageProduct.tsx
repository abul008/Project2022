import {useTypedSelector} from "../../hooks/userTypedSelector";
import { useActions } from '../../hooks/useActions';
import { useEffect, useState } from "react";
import { BookinformationCard , FilesHref } from "../InterFace/bookPageInterface";
import { CardJson } from "../InterFace/card";
import { Card } from "../card/card";
import axios from "axios";

export const BookProduct:React.FC = ()=>{
   

    const {getBookdata} = useTypedSelector(state => state.book)
    const {fetchTodos} = useActions()
    const [bookdata , setBookdata] = useState<CardJson[]>([])
    const {setViewLoader} = useActions()
    
    useEffect(()=>{
        setViewLoader(false)
        axios.get('/api/v1/getbookinfo')
        .then(res=>{setBookdata(res.data.map((data:BookinformationCard)=>{
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
       }))
       setViewLoader(true)
    })       
    },[])

  
    
    return( 
        <div className="Book-file-wrapper" >
            <Card carddata={bookdata}  />
        </div>
    )
}
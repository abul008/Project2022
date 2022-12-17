import React,{ useState  ,useEffect} from "react";
import {useTypedSelector} from "../../../hooks/userTypedSelector";
import { useActions } from '../../../hooks/useActions';
import {Bookinfoformname} from "./bookinfofromname";
import {Bookauthorname} from "./bookauthorname";
import {Bookinfoformall} from "./bookinforamtionall";
import { Book } from "../../../custom_types/index";
import {BookinfoUrl} from "./bookurl";
import {GeneralInfo} from "./generalinfo";
import  {FormHead ,Form ,ButtonF } from "../formdesign/formdesign";
import {Jodit} from "../joditReact/bookJodit";
import * as api_requests from '../../../api/db/api_requests';
// import Message from "../../proptypes/message";
import {getChannels} from "../../../api/db/index";
import {useParams,useHistory} from "react-router-dom";
import 'jodit/build/jodit.min.css';

export const BookinfoUbdate:React.FC = () => {

const [ coverAm, setCoverAm ] = useState<string>("")
const [ coverRu, setCoverRu ] = useState<string>("")
const [ coverEn, setCoverEn ] = useState<string>("")
// const [message, setMessage] = useState<string>('');
const { data } = useTypedSelector(state => state.book)
const {setBookData } = useActions()
const { id } = useParams<{id?: string}>()

useEffect(()=>{
  getChannels('/api/v1/', '/get/book')
  .then(res=>{
  const bookFilter =  res.data.filter((filter: Book) => filter._id === id)
  setBookData({...bookFilter[0]})
  setCoverAm(bookFilter[0] ? bookFilter[0].cover_am : undefined)  
  setCoverRu(bookFilter[0] ? bookFilter[0].cover_ru : undefined)  
  setCoverEn(bookFilter[0] ? bookFilter[0].cover_en : undefined)
  })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

const history = useHistory()
const cretebookinfo = async (e:React.FormEvent<HTMLFormElement>) => {

  e.preventDefault()
  const newData:any = {
     ...data,
       cover_am: coverAm, 
       cover_ru: coverRu,
       cover_en: coverEn
      }
  api_requests.postNewData(newData)
  }
   
return( 
  <FormHead >
    <Form>
      <h3>Թարմացնել Գրքի ինֆորմացիան </h3>
       {/* {message ? <Message msg={message} /> : null} */}
      <form onSubmit={cretebookinfo}>
        <Bookinfoformname />
        <Bookinfoformall />
        <Bookauthorname />
        <GeneralInfo />
        <BookinfoUrl />
        {/* <Jodit onchangeJodit={(content:string) => setBookData({...data,cover_am:content})}  value={data.cover_am} label="Am"  />
        <Jodit onchangeJodit={(content:string) => setBookData({...data,cover_ru:content})}  value={data.cover_ru} label="Am"  />
        <Jodit onchangeJodit={(content:string) => setBookData({...data,cover_en:content})}  value={data.cover_en} label="Am"  /> */}
        <Jodit onchangeJodit={(content:string) => setCoverAm(content)}  value={coverAm} label="Ru"  />
        <Jodit onchangeJodit={(content:string) => setCoverRu(content)}  value={coverRu} label="Ru"  />
        <Jodit onchangeJodit={(content:string) => setCoverEn(content)}  value={coverEn} label="Ru"  />
        <ButtonF>send</ButtonF>
      </form>
    </Form>
  </FormHead>
    )
}
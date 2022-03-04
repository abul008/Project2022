import { useState } from "react"
 
interface Bookinfo{
    name_am:string,
    name_ru:string,
    name_en:string,
    author_am:string,
    author_ru:string,
    author_en:string,
    Language_am:string,
    Language_ru:string,
    Language_en:string,
    Numberofpages:string,
    Weight:string,
    Publisher:string,
    price:number,
    Cover_am:string,
    Cover_ru:string,
    Cover_en:string,
    date:string,
    file:any,
    filename:any
}

export const addbookinfo:React.FC = ()=>{

    const [bookInformationAdd , setBookInformationAdd] = useState<Bookinfo>({
        name_am:"",
        name_ru:"",
        name_en:"",
        author_am:"",
        author_ru:"",
        author_en:"",
        Language_am:"",
        Language_ru:"",
        Language_en:"",
        Numberofpages:"",
        Weight:"",
        Publisher:"",
        price:0,
        Cover_am:"",
        Cover_ru:"",
        Cover_en:"",
        date:"",
        file:"",
        filename:""

    })
    const cretebookinfo = (e:React.FormEvent<HTMLFormElement>)=>{
       e.preventDefault()

    }
    return( 
        <form onSubmit={cretebookinfo}>
            <div className="admin-input-cantrol">
                <input
                type="text"
                placeholder="գրքի անուն" 
                
                
                />
            </div>
        </form>
    )
}
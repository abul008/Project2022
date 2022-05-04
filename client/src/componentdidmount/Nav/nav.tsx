import {Search} from "../search/search";
import "./nav.css" ;
import i18next from "i18next";
import {Navhref} from "./navhref"


export const Nav:React.FC = ()=>{



  
    return( 
        <div className="nav-wrapper-page">
           <div className="nav-wrapper-page-search-section">
             <Search placeholder={i18next.t('search')}  />  
             <div className="nav-ul_cantrol">
                 <Navhref />  
             </div>             
           </div> 
        </div>
    )
}
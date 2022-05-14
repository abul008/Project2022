import React from "react";
import "./searchLoader.css";





interface Loader{
    loaderstyle:React.CSSProperties
}


export const SearchLoader:React.FC<Loader> = (props) =>{

   
 
    return(
        <div className="loader" style={props.loaderstyle}></div>
    )
}

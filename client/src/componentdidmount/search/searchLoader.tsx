import React,{useEffect, useState } from "react";
import "./searchLoader.css";
import {BookinformationCard} from "../InterFace/bookPageInterface";




interface Loader{
    loaderstyle:React.CSSProperties
}


export const SearchLoader:React.FC<Loader> = (props) =>{

   
 
    return(
        <div className="loader" style={props.loaderstyle}></div>
    )
}

import React from "react";
import "./card.css";






interface CardLanguageType{
    language:string
}

 
export const CardLanguage:React.FC<CardLanguageType> = ({language}) =>{



    return(

        <div className="page-product-card-is-savalibe-flag" 
              style={{
               backgroundImage: language === "Armenian" ? "url(/svgfolder/flagarm.svg)" : undefined ||
               language === "Russian" ? "url(/svgfolder/flagrus.svg)" : undefined ||
               language === "English" ? "url(/svgfolder/flaguse.svg)" : undefined   
              }}
             >
        </div>
           
    )
}


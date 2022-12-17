import React from "react"
import Props from './types/props'
import "../style.css"

export const CardLanguage:React.FC<Props> = ({language}) => {

  return (
    <div className="page-product-card-is-savalibe-flag" 
      style={{
        backgroundImage: language === "Armenian" ? "url(/svgfolder/flagarm.svg)" : undefined ||
        language === "Russian" ? "url(/svgfolder/flagrus.svg)" : undefined ||
        language === "English" ? "url(/svgfolder/flaguse.svg)" : undefined   
      }}>
    </div>       
  )
}


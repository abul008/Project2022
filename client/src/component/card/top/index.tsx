import React from "react"
import Props from './types/props'
import "../style.css"

// eslint-disable-next-line react/display-name
export const CardTop = React.memo<Props>((props) => {

  return (
    <div className="page-product-card-top-cantrol">
      <a className="page-product-card-hrefA" target="blank" href={ props.url  + props.id}>  
        <span className="page-product-cards-linkimg-witdh" style={{backgroundImage:`url(${props.file_url})`}} />  
      </a>    
      <div id="link" className="page-product-card-link-information">
        <a href={"/home/techniquenav/product/"}>
          {props.authorname}
        </a>  
        <span />
      </div>
    </div>    
    )
  }
)

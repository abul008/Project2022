import React, { useState } from 'react'
import {Props} from './types/props'
import './index.css'

export const Carusel:React.FC <Props> = ({ dataall }) => {
        
const [transfer, settransfer] = useState(0 +`%`)
const [animationName, setAnimationName] = useState("mymove 10s infinite")
const [activeClass, setActiveclass] = useState<number | string>("")

return(
  <div className="CaruselWrapper">
    <div className="caruselSlide">
      <ul className="caruselLinn">
        <ul className="carusel caruseltransform" style={{marginLeft:transfer,animation:animationName}} />
        {
        dataall.map( (data, i) => {
          return(
            <li key={i} className="carusel">
              <a href={data.get_absolute_url}><img src={data.fileHreaf}/></a>
            </li>   
          )
          }
        )
        }
      </ul>
      <div className="caruselButton">    
        {dataall.map( (data, index) => 
          <button 
            className={`btn-carusel ${index === activeClass ? "active" : "" }`}
            onClick={ () => {
            setActiveclass(index)
            settransfer(`-${index}00%`)
            setAnimationName("mymove")
          }} key={index} />
          )
          }
      </div>
    </div>
  </div>
  )
}


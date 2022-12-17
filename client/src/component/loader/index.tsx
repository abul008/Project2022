import React, { useEffect } from 'react'
import { useTypedSelector } from '../../hooks/userTypedSelector'
import ReactDom from 'react-dom'
import './index.css'

export const Loadpage: React.FC = () => {

const {loaderpage} = useTypedSelector(state => state.home)   
const [container] = React.useState<HTMLElement>( () => {
  const el = document.createElement('div')
  el.classList.add('root-loader')
    return el
  }
)
  
useEffect( () => {
  document.body.appendChild(container)
    return () => {
      document.body.removeChild(container)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

if (loaderpage) return null

return  ReactDom.createPortal (
  <div id="portals"  className="box-wrapper" >    
    <div className="box">
      <div className="container">
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
      </div>
    </div>
  </div>, container  
  ) 
}



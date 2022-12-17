import React from 'react'
import { Link } from 'react-router-dom'
import Props from './types/props'
import "./style.css"

export const Pagination:React.FC<Props> = ({postsPerPage , totalPosts ,paginate , pageaktiv})=>{
    
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
  }

  return (
    <div className="paginationWrapper">
      <ul >
        {
          pageNumbers.map( (number, index) => {
            return (
              <li  
                style={{display:pageaktiv > index + 2  ? "none" : "block"}}
                key={number} >
                  <Link 
                    style={{
                      display: pageaktiv + 3 > index + 1 ? "block" : "none",
                      background:index + 1  === pageaktiv ? "#35a79c" : " " ,
                      color:index + 1  === pageaktiv ? "#232526" : " " }}
                      to={`${number}`} 
                      onClick={ () => paginate(number)} >
                        {number}
                  </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}


import React from 'react'
import { Link } from 'react-router-dom';
import "./pagination.css";

interface Pagination{
    postsPerPage:number , 
    totalPosts:number ,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    paginate:any,
    pageaktiv:number
}

export const Pagination:React.FC<Pagination> = ({postsPerPage , totalPosts ,paginate , pageaktiv})=>{
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i)
    }

 
   

    return(
        <div className="paginationWrapper">
            <ul >
                {pageNumbers.map((number,index)=>{
                    return(
                    <li  
                    style={{display:pageaktiv > index + 2  ? "none" : "block"}}
                    key={number}  >
                           <Link 
                            style={{
                               display:
                                pageaktiv + 3 > index + 1 ? "block" : "none" ,
                                // ||
                                // pageaktiv > index  ? "none" : "block",
                               background:index + 1  === pageaktiv ? "#35a79c" : " " ,
                               color:index + 1  === pageaktiv ? "#232526" : " " 
                            }}
                           to={`${number}`} 
                           onClick={()=> paginate(number)}
                            >
                            {number}
                           </Link>
                    </li>
                    )
                })}
            </ul>
        </div>
    )
}


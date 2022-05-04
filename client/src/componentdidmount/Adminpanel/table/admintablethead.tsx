
interface AdminTableTheads{
    titleone:string,
    titletwo:string,
    titlwtree:string,
    titlefour:string,
    titlefive:string,
 
}

export const AdminTableThead:React.FC<AdminTableTheads> = ({
    titleone,
    titletwo,
    titlwtree,
    titlefour,
    titlefive,

})=>{


    return( 
     <thead>
        <tr>
             <th>{titleone}</th>
             <th>{titletwo}</th>
             <th>{titlwtree}</th>
             <th>{titlefour}</th>
             <th>{titlefive}</th>
         </tr>
       </thead>
    )
}
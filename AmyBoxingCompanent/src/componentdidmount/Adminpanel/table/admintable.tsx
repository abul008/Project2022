
interface AdminTable{
    titleone:string,
    titletwo:string,
    titlwtree:string,
    titlefour:string,
    titlefive:string,
    infoone:string,
    infotwo:string,
    infotree:string,
    infofour:string,
    infofive:string
}

export const AdminTable:React.FC<AdminTable> = ({
    titleone,
    titletwo,
    titlwtree,
    titlefour,
    titlefive,
    infoone,
    infotwo,
    infotree,
    infofour,
    infofive
})=>{


    return( 
      <div className="admin-table">
       <table>
       <thead>
         <tr>
              <th>{titleone}</th>
              <th>{titletwo}</th>
              <th>{titlwtree}</th>
              <th>{titlefour}</th>
              <th>{titlefive}</th>
          </tr>
        </thead>
          <tbody>
           <tr>
                <td>{infoone}</td>
                <td>{infotwo}</td>
                <td>{infotree}</td>
                <td>{infofour}</td>
                <td>{infofive}</td>
            </tr>
            </tbody>
          </table>
      </div>
    )
}
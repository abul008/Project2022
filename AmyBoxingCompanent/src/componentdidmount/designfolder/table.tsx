import styled from "styled-components" ;

const TableStyle = styled.table `
font-family: Arial, Helvetica, sans-serif;
border-collapse: collapse;
width: 100%;
td,  th {
    border: 1px solid #ddd;
    padding: 8px;
  }
  td{
      /* display: flex; */
      align-items: center;
      justify-content: space-between;
  }
  td svg{
      font-size: 26px;
      cursor: pointer;
  }
  td svg:hover{
      color:green;
  }
  span{
    display: flex;
    align-items: center;
  }
   tr:nth-child(even){background-color: #f2f2f2;}
  
  tr:hover {background-color: #ddd;}
  
  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #04AA6D;
    color: white;
  }
`

export {TableStyle} ;
import styled from "styled-components" ;

export const NavAdminPage = styled.div `
height: 100vh;
width: 20%;
min-width: 240px;
position: fixed;
background: white;
position: fixed;
right: 0;
z-index:3;
top:0;
font-family: sans-serif;
    nav{
       height: 100%;
       min-width: 298px;
    }
    nav ul {
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow: auto;
        box-shadow: rgb(0 0 0 / 16%) 0px 1px 4px;
        background: #232526;
        background: -webkit-linear-gradient(to right, #414345, #232526);
        background: linear-gradient(to right, #414345, #232526);
}
     nav ul::-webkit-scrollbar{
        width: 8px;
        height: 5px;
}
     nav ul::-webkit-scrollbar-thumb {
        background: #77ab85;
        background: linear-gradient(to right, #3e3d3d, #000000);
        border-radius: 16px 0px 0px 16px;
}
    nav ul::-webkit-scrollbar:hover {
        /*box-shadow: 0px 2px 1px 2px #5a5d648a ;*/
        width: 0px;
        height: 8px;
        
}
    nav ul a {
        font-size: 20px;
        color: #35a79c;
        text-decoration: none;
        position: relative;
        cursor: "pointer";
        font-weight: 700;
        displey: flex;
}
    
    nav ul a:before{
        content: "";
        position: absolute;
        background: #ffffff;
        border-radius: 20px 20px 0px 0px;
        width: 0%;
        height: 8px;
        left: 0px;
        transition: 0.3s;
        bottom: 0px;
  }
    nav ul a::after{
        content: "";
        position: absolute;
        background: #ffffff;
        border-radius:0px 0px 20px 20px;
        width: 0%;
        height: 8px;
        left: 0px;
        transition: 0.3s;
        top: 0px;
  }
    nav ul a:hover::after{
        width: 100%;
  }
    nav ul a:hover::before{
        width: 100%;
  }
    nav ul a:hover{
        color: #77ab85;
        background: #000000;
        color: #77ab85;
        color: white;
        background: -webkit-linear-gradient(to bottom, #434343, #000000);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to bottom, #434343, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        background: linear-gradient(to bottom, #3e3d3d, #000000)
  }
    nav ul span{
        
        display: flex;
        justify-content: space-between;
    }
    nav ul span:hover{
        color: #77ab85;
  }
  .active{
      background:black;
      background: linear-gradient(rgb(29, 151, 108), rgb(147, 249, 185));
      color:white
  }`
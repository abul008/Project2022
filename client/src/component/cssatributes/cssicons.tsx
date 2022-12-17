import styled from "styled-components" ;

const ClossIcon = styled.span `

  position: absolute;
  top: 0;
  right: 0;
  display: block;
  cursor: pointer;
  width: 50px;
  height: 50px;
  font-size: 0;
    :hover {
      opacity: 1;
    }
    :before, 
    :after {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 5px;
      height: 20px;
      background-color: black;
      transform: rotate(45deg) translate(-50%, -50%);
      transform-origin: top left;
      content: '';
    }
    :after {
        transform: rotate(-45deg) translate(-50%, -50%);
    }
`
const Discounticon = styled.div`
  padding:8px; 
  position:absolute;
  z-index:1;
  float:left;
  // margin-top:35px;
  left: 20px;
  width:90px;
  -webkit-border-radius:0 4px 0 4px;
  -moz-border-radius:0 4px 0 4px;
  border-radius:0 4px 4px 0;
  // background-color:#E80707; 
  background: #232526;

    :after { 
      right: 100%; 
      border: solid transparent; content: " "; 
      height: 0; 
      width: 0; 
      position: absolute;
      border-color: rgba(136, 183, 213, 0);
      border-right-color: #232526;
      border-width: 20px; 
      top: 50%; 
      margin-top: -20px;
    } 
    :before {
      content: '';
      z-index: 2;
      position: absolute;
      top: 42%;
      right: 100%;
      width: 7px;
      height: 7px;
      opacity: .95;
      background: #ffffff;
      border-radius: 7px;
      -webkit-box-shadow: inset .5px 0 rgba(0, 0, 0, 0.6);
      box-shadow: inset .5px 0 rgba(0, 0, 0, 0.6);
    }
    span {
      color:#ffffff;
      font-size:22px;
      text-align:center;
      font-family:"Raleway",Helvetica;
      font-weight: 700;
      display: flex;
      justify-content: center;
    }
`

export { ClossIcon ,Discounticon }
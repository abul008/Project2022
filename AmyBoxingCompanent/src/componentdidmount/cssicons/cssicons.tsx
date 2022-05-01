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

export {ClossIcon} ;
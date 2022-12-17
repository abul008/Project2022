import styled from "styled-components";


export const FormHead = styled.div`

   display: flex;
   align-items: center;
   justify-content: center;

`

export const Form = styled.div`
    width: 96%;
`;

export const InputSequential = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
.admin-input-cantrol{
    flex-grow:1
}
.admin-input-cantrol input{
    width:90%;
    border-bottom:solid 1px black
}
.admin-input-cantrol select{
    width:90%;
    border:solid 1px black
}

`

export const ButtonF = styled.button`
background: #35a79c;
border: none;
padding: 10px;
cursor: pointer;
display: flex;
width: 100px;
align-items: center;
justify-content: center;
float: right;

`
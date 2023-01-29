import styled from "../../../theme/styled-components";

export const Input = styled('input')`
    min-height : 10px;
    padding : 2px 0;
    width : 60%;
    margin : 5px ;
    background-color : white;
    color : #000000;
    font-weight: 700;
    border : 1px solid grey;
    
    ::placeholder {
        background-color : white;
        color : #000000;
        font-weight: 700;
    }
    
    :disabled {
        background-color: white;
        border: white;
    }
`

export const Container = styled('div')`
    padding-left: 20px;
    display: grid;
    grid-template-columns: 1fr 5fr;
    align-items: center;
`
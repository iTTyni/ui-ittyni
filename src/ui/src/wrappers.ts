/****************************************************
 * web pages wrappers
 ****************************************************/

import {styled} from "../../theme";

export const wrapperWeb = styled('div') <{

}>`
    height : 100%;
    display : flex;
    flex-direction : column;    
    background : ${({ theme }) => theme.color.defaultColor};
`

export const wrapperHeader = styled('div')<{

}>`
    width: 100%;
    z-index: 11;
    display : flex;
    flex-direction : row;  
    background: #FFFFFF;   
    justify-content: space-between;
    align-items: center;
    margin-bottom : 20px;
    box-shadow: 0 3px 6px rgb(0 0 0 / 4%);
`

export const wrapperSubheader = styled('div')<{

}>`
    
`

export const wrapperMain = styled('div')<{

}>`

`

export const wrapperFooter = styled('div')<{

}>`
    width: 100%;
`
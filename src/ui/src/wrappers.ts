/****************************************************
 * web pages wrappers
 ****************************************************/

import {device, styled} from "../../theme";

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
  display: flex;
`

export const wrapperContent = styled('div')<{

}>`
  width: 70%;
  margin: 0 15px;
  height: 90vh;
  display: flex;
  ${device.largeDesktop`
      margin: 15px 15px 15px 15%;
    `}
`

export const wrapperLeftSide = styled('div')<{
  hide?: boolean    
}>`
  display: ${({hide})=> hide? "none" : "block"}
`
export const wrapperRightSide = styled('div')<{
  hide?: boolean
}>`
  display: ${({hide})=> hide? "none" : "block"}
`

export const wrapperFooter = styled('div')<{

}>`
    width: 100%;
`

/****************************************************
 * web pages wrappers
 ****************************************************/

import {device, styled} from "../theme";

export const WrapperWeb = styled('div') <{

}>`
    height : 100%;
    display : flex;
    flex-direction : column;    
    background : ${({ theme }) => theme.color.defaultColor};
`

export const WrapperHeader = styled('div')<{

}>`
    width: 100%;
    z-index: 11;
    display : flex;
    flex-direction : row;  
    background: #FFFFFF;   
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid lightgray;
`

export const WrapperSubheader = styled('div')<{

}>`
    
`

export const WrapperMain = styled('div')<{

}>`
  display: flex;
`

export const WrapperContent = styled('div')<{

}>`
  width: 70%;
  margin: 0 15px;
  height: 90vh;
  display: flex;
  ${device.largeDesktop`
      margin: 15px;
    `}
  ${device.mobile`
    width: 100%;
  `}
`

export const WrapperLeftSide = styled('div')<{
  hide?: boolean    
}>`
  display: ${({hide}:any)=> hide? "none" : "block"};
  width: 250px;
  flex-direction: column;
  border-right: 1px solid lightgray;
  ${device.mobile`
    display: none;
  `}
`
export const WrapperLeftSideHeader = styled('div')<{}>`
  display: flex;
  justifyContent: flex-start;
  paddingBottom: 10px;
  marginBottom: 10px;
  borderBottom: 1px solid #f1f1f1;
  alignItems: center;
`
export const WrapperLeftSideFouter = styled('div')<{}>`
  line-height: 25px;
  position: absolute; 
  bottom: 60px; 
  display: flex; 
  flex-direction: column; 
  width: 240px;
`

export const WrapperRightSide = styled('div')<{
  hide?: boolean
}>`
  display: ${({hide}:any)=> hide? "none" : "block"}
`

export const WrapperFooter = styled('div')<{

}>`
    padding: 15px;
`

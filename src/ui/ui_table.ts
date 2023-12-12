import { styled, IThemeInterface } from '../..';
import { keyframes } from "styled-components";

export const StyledTable = styled('table') <{
    theme: IThemeInterface
}>`
    width: 100%;
    border-spacing: inherit;
`

export const StyledThead = styled('thead') <{
    theme: IThemeInterface
    hide?: boolean
    alignContent?: 'left' | 'center' | 'right'
}>`
    font-size: 12px;
    text-align:${({ alignContent }) => alignContent}

`
export const StyledTbody = styled('tbody') <{
    theme: IThemeInterface
}>`
`

export const StyledRow = styled('tr') <{
    theme: IThemeInterface
    height?: string
    bgColor?: string
    display?: string
}>`
    width: inherit;
    height: ${({ height }) => height ? height : 'auto'};
    background-color: ${({ bgColor }) => bgColor ? bgColor : 'inherit'}};
    display:${({ display }) => display ? display : 'table-row'};
    align-items: center;
`
export const StyledHeadCell = styled('th') <{
    theme: IThemeInterface
    width?: string
}>`
    width: ${({ width }) => width ? width : 'auto'};
    min-width: 100px;
`
export const StyledCell = styled('td') <{
    theme: IThemeInterface
    width?: string
}>`
    width: ${({ width }) => width ? width : 'auto'};
    min-width: 100px;
`
const Gradient = keyframes`
  0% {
      background-position: 200%;
  }

  100% {
      background-position: 0%;
  }
`

export const DataTableContainer = styled.div`
  margin-right: 10px;
`;
// table header
export const DataTableHeader = styled.table`
  display: flex;
  background-color: white;
  border: 0.5px solid #3823a8;
  padding: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.2);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  width: 100%;
`;
export const DataTableTHead = styled.thead`
  display: flex;
  flex: 1;
  padding-right: 10px;
`;
export const DataTableHeaderRow = styled.tr`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: nowrap;
  text-align: left;

  input {
    width: 100%;
    border: none;

    ::placeholder {
      color: #000000;
      font-weight: 700;
    }
  }
`;
// table content
export const DataTableContent = styled.table`
  width: 100%;
`;
export const DataTableTBody = styled.tbody`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-height: 550px;
  overflow-y: scroll;
  overflow-x: hidden;
  -ms-overflow-style: none;
  &::-webkit-scrollbar{display : none}
`;
export const DataTableContentRow = styled('tr')<{loading? : boolean, color?:any, actif?:boolean}>`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: nowrap;
  border-bottom: 1px solid #000000;
  ${({loading})=>
    !loading ? "background : #ffffff"
    :
    `
      background: linear-gradient(39deg, 
        #ffffff 27%, 
        #e6c9c9 48%, 
        #ffffff 71%
      );
      background-size : 200%;
      *{visibility : hidden;}
    `
  }
  animation: ${Gradient} 1s ease-out infinite;

  ${({color, actif})=> color? `${actif?'background : #67d467 !important; font-size : 11px; font-weight: 700;':'background : #ffffff !important'}`: `  `}

  :nth-of-type(even) {
    ${({loading})=>!loading ? "background : #e6c9c9"
      :
      `
        background: linear-gradient(39deg, 
          #e6c9c9 27%, 
          #ffffff 48%, 
          #e6c9c9 71%
        );
        background-size : 200%;
        *{visibility : hidden;}
      `
    }
    
    animation: ${Gradient} 1s ease-out infinite;
  }
  td {
    padding: 3px 0;

    a {
      text-decoration: none;
      color: #000000;
      margin: 0 5px;
    }
  }
`;



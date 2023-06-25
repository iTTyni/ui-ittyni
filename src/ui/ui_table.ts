import { styled, IThemeInterface } from '../..';


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
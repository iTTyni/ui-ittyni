import {styled, IThemeInterface} from '../../theme';

export const StyledCardContainer = styled('div')<{
  theme: IThemeInterface
  width? : string
}>`
  display: flex;
  width : ${({width})=>width? width: 'inherit'};
`
export const StyledCardSection = styled('div')<{
  theme: IThemeInterface
  width?: string
}>`
  background-color: ${({theme})=>theme.color.thirdColor};
  width: ${({width})=>width? width : '100%'}
`

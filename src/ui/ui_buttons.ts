import {styled, IThemeInterface} from '../..';

export const StyledButton = styled('div')<{
  theme: IThemeInterface
  width? : string
}>`
  display: flex;
  width : ${({width})=>width? width: 'inherit'};
`


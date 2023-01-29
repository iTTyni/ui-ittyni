import styled from '../../../theme/styled-components';
import { device } from '../../../theme';

/**
 * main page wrapper
 */
export const Page = styled('div').attrs({className : "pageWrapper"})`    
    height : 100%;
    display : flex;
    flex-direction : column;    
    background : ${({theme})=>theme.colors.defaultColor};
`
/**
 * header wrapper
 */
export const Header = styled('header').attrs({className : "headerWrapper"})`
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
/**
 * Container wrapper
 */
export const Main = styled('main').attrs({className : "containerWrapper"})`
    min-height : ${({theme})=>theme.windowHeight-20-75}px;
    display : flex;
    flex-direction : row;
    margin : 25px 50px;

    ${device.desktop`
        margin : 0 50px;
    `}

    ${device.largeDesktop`
        margin : 0 50px;
    `}

    ${device.mobile`
        flex-direction : column-reverse;
        margin : 0;
    `}

    ${device.tablet`
        flex-direction : column-reverse;
        margin : 0;
    `}
`

export const MainContent = styled('div')`
    flex : 3;
    ${device.mobile`
        flex : 1;
    `}
`

export const MainSide = styled('div')`
    flex : 1;
    ${device.mobile`
        flex : 1;
        display : none;
    `}
    ${device.tablet`
        flex : 1;
        display : none;
    `}
`
// admin side
export const AdminSide = styled('div')`
    width: 250px;
`
// admin main
export const AdminMain = styled('div')`
    padding-left: 12px;
    border-left: 1px solid #dadada;
    width: 100%;
`
/**
 * Footer wrapper
 */
export const Footer = styled('footer').attrs({className : "footerWrapper"})`
    min-height : 20px;
    background : ${({theme})=>theme.colors.defaultColor};
    text-align : center;
    border-top: 1px solid #d4d4d4;
`
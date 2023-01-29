import { device } from "../../../theme";
import styled from "../../../theme/styled-components";

export const ListProcedures = styled('ul')<{}>
`
    li {
        background-color: white;
        /* color: white; */
        display: grid;
        grid-template-rows: auto auto;
        margin: 15px 0;
        /* box-shadow: 0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%); */
        border-bottom: .5px solid gray;
        padding: 5px;
        /* border-radius: 5px; */

        div.header {
            display: grid;
            grid-template-columns: 10% 70% auto;

            div.vialColor {
                div {
                   
                }
            }
            
            div.info {
                div.mnem {
                    display: grid;
                    grid-template-columns: 40% auto;

                    div.head {
                        font-size: 16px;
                        font-family: cursive;
                        font-weight: 600;
                    }
                    div.ico {

                    }
                }
                div.title {
                    font-size: smaller;
                    font-weight: 500;
                    padding: 5px 0;
                }
            }
    
            div.options {
                display : grid;
                grid-template-rows: 60% auto;

                /* price data */
                div.price {
                    margin: 5px 0 0;
                    padding: 2px;
                    color: #0c5cb3;
                    background-color: aliceblue;
                    padding-left: 5px;
                    width: 90%;
                    text-align: center;
                    span {
                        margin-left: 5px;
                        font-size: 22px;
                        font-weight: 700;
                    }
                }
            }
        }

        div.footer {
            display: flex;
            justify-content: flex-end;
            margin-top :10px ;
        }
    }
`
export const ListTests = styled('ul')<{}>
`
    list-style : none;

    li {
        box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
        display: grid;
        grid-template-rows: auto auto auto;
        margin: 20px 5px;

        /** info div */
        div.info {
            display: grid;
            grid-template-columns: 12% 60% auto;
            margin-bottom: 10px;
            div.icon {
                svg {
                    width: 25px;
                    padding: 5px;
                    height: 25px;
                    border: 1px solid gray;
                    margin: 5px;
                    border-radius: 50%;
                }
            }

            div.mnem {
                margin: 15px 0 0;
                font-family: "Clear Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
                font-weight: 700;

                div.ico {
                    margin-top : 10px;
                }
            }

            div.pop {
                display : grid;
                grid-template-rows: 50% auto;

                /* views data */
                div.price {
                    margin: 5px 0 0;
                    padding: 2px;
                    color: white;
                    background-color: #07864B;
                    padding-left: 5px;
                    span {
                        margin-left: 5px;
                        font-size: 22px;
                        font-weight: 700;
                    }
                }

                div.views {
                    width: fit-content;
                    margin-top: 8px;
                    background-color: bisque;
                    padding: 2px;
                    color: blue;
                    font-weight: 700;

                    i { margin-right : 5px; }
                }
            }
        }
        div.descrip {
            margin: 8px 15px;
            font-family: cursive;
            font-size: 12px;
        }

        div.action {
            margin : 15px;
            padding-top: 5px;
            border-top: 1px solid gray;
            padding-top: 5px;
            border-top: 1px solid gray;
        }
    }
`
export const Container = styled('ul')<{itemscope? : boolean, itemtype? : string}>`
    padding : 0;
    list-style-type: none;
    margin : 10px;
`
export const Item = styled.li`
    display: flex;
    background-color: #ffffff;
    margin: 10px;
    padding: 5px;
    min-height : 70px;
    border-radius: 5px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.2);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

    * {
        background : #ffffff;
    }

    ${device.mobile`
        margin : 10px 0;
    `}

    ${device.tablet`

    `}
`
export const ItemAbbr = styled('div')`
    flex: 1 0 0;
    background: beige;
    margin: 0 0px 0 0;
    padding: 25px 0;
    font-size: 12px;
    font-weight: 700;
    text-align: center;
    h3 {
        background: inherit;
    }
`
export const ItemContent = styled('div')`
    flex : 6 0 0;
    display : flex;
    margin-left: 10px;
    flex-direction : column;
`
export const ItemOptions = styled('div')`
    flex : 2 0 0;
    text-align : right;
    display : flex;
    flex-direction : row;
`
export const ItemContentTitle = styled.div`
    flex: 1 0 0;
    text-transform: uppercase;
`
export const ItemContentDescription = styled.div`
    flex : 1 0 0;
`
export const ItemOptionsData = styled.div`
    flex : 1 0 0;
`
export const ItemOptionsFinance = styled.div`
    flex : 1 0 0;
    text-align : right;
    display : flex;
    flex-direction : column;
    span {
        display: inline-block;
        padding: .25em .4em;
        font-weight: 700;
        line-height: 1;
        text-align: center;
        white-space: nowrap;
        vertical-align: baseline;
        border-radius: .25rem;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        color: #fff;
        background-color: #17a2b8;

        h3 {
            background: inherit;
        }
    }
`
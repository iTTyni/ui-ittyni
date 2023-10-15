import { device, styled } from "../.."

export const ContainerList = styled('ul') <{ itemscope?: boolean, itemtype?: string }>`
    padding : 0;
    list-style-type: none;
    margin : 10px;
    max-height : 730px;
        overflow-x: scroll;
        ::-webkit-scrollbar {
            display: none;
        }

    li {
        display: flex;
        flex-wrap : wrap;
        background-color: #ffffff;
        margin: 10px;
        padding: 5px;
        min-height : 30px;
        border-radius: 5px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.2);
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        align-items : center;
        justify-content : flex-start;

        * {
            background : #ffffff;
        }

        ${device.mobile`
            margin : 10px 0;
        `}

        ${device.tablet`

        `}

    }
`
export const Container = styled('ul')<{itemscope? : boolean, itemtype? : string}>`
    padding : 0;
    list-style-type: none;
    margin : 10px;
    li {
        padding: 5px;
        min-height: 30px;
        border: 1px solid;
        width: calc(100% - 40px);
        margin-left: 20px;
        margin-top: 10px;
        background: #fff;
        box-shadow: 0px 2px 0px 0px rgb(6 6 6 / 6%);
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 3fr 3fr 1fr 3fr 1fr 1fr;
        align-items: center;
        :hover {box-shadow: 0px 2px 0px 2px rgb(6 6 6 / 6%);}
    }
`
export const ListItemStyled = styled('li')<{
    backgroundColor?: string,
    display?: any
    margin?: string
    padding?: string
    minHeight?: number
}>`
    ${({display})=>display || 'display: flex'}
    background-color: ${({backgroundColor})=>backgroundColor || '#ffffff'};
    margin: ${({margin})=>margin|| '5px'};
    padding: ${({padding})=>padding|| '5px'};
    min-height : ${({minHeight})=>minHeight || '20px'};
    border-radius: 5px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.2);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    :hover{
        box-shadow: 0px 1px 5px 4px #00ACC1
    }
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
export const ListContainerStyled = styled('ul')<{noDecor: boolean, pd?:string, mg?:string}>`
    list-style-type: ${({noDecor})=>noDecor?'none':'auto'};
    ${({pd})=>pd&&`margin: ${pd}`}
    ${({mg})=>mg&&`margin: ${mg}`}
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    &>li {
        a {
            display: grid;
            grid-template-columns: 35px 85% auto;
            width: 400px;
            align-items: center;
            height: 55px;
            border: 1px solid #e7e7e7;
            margin-bottom: 8px;
            padding: 5px;
        }
        div {
            display: flex;
            flex-direction: column;
        }
        svg {
            // border-radius: 7em;
            // border: 1px solid #e1e1e1;
            // background: #e1e1e1;
            color : #e1e1e1;
        }
        i {
            cursor : pointer;
            color : #000000;

            :hover { color : #4285f4 }
        }
    }
`
export const ListInfo = styled('ul')
`
    list-style: none;
    padding: 0px;
    margin: 10px;
    li {
        display: flex;
        flex-flow: column wrap;
        background-color: rgb(255, 255, 255);
        margin: 10px;
        padding: 5px;
        min-height: 20px;
        border-radius: 5px;
        box-shadow: rgb(0 0 0 / 12%) 0px 1px 2px, rgb(0 0 0 / 20%) 0px 1px 2px;
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) 0s;

        .head {
            margin: 0px;
            font-size: 12px;
            font-weight: 700;
            text-align: left;
            display: flex;
            color: gray;
            height: 20px;
        }
    }
`
// dropdown list styles
export const DropdownS = styled('div')
`
    position: absolute;
    width: 160px;
    left: -150px;
    background: white;
    padding: 15px;
    border: 1px solid rgb(241, 244, 246);
    .header{}
    .body{
        ul {
            list-style: none;
               
        }
    }
    .footer{}
`
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

export const LabList = styled('div') <{ hideMenu: boolean }>
`
  position : absolute;
  max-height: 200px;
  min-width: 200px;
  overflow-y: scroll;
  z-index: 9999;
  background-color: white;
  left: 140px;
  border: 2px solid;
  display : ${({ hideMenu }: any) => hideMenu ? 'none' : 'block'};

    ul > li {
      width: 250px;
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid #D9E1E4;
      padding: 0 12px;
      vertical-align: top;
      overflow: hidden;
      cursor: pointer;
      transition: margin-top 0.5s, height 0.5s;

      :hover {background : #eaeaea;}
    }
`
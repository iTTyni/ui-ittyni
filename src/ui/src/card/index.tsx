import styled from "../../../theme/styled-components";

export const Procedure = styled('div') <{

}>`
    .article {
        display: flex;
        flex-direction: row;
        width : 80%;
        .info {
            flex : 3;
            .pres {
                display : flex;
                .logo {
                    padding: 15px;
                    border: 1px solid gray;
                    margin-right: 10px;
                    background: #5757ad;
                    color: white;
                }
            }
            .actions {
                margin-top : 25px;
                display : flex;
            }
        }
    }
    .menu {
        flex : 1;
        font-size: 18px;
        font-weight: 700;
        display: flex;
        flex-direction: column;
        color : #818181;
        h5 {

        }        
    }
`

export const TestOverview = styled('div')<{

}>`
    margin-top: 20px;
    .header {
        font-size : 1.5em;
    }
    .text {
        margin-top: 20px;
    }
`
export const TestIndication = styled('div')<{

}>`
    margin-top: 50px;
    .header {
        font-size : 1.5em;
    }
    .text {
        margin-top: 20px;
    }
`

export const TestMenu = styled('ul')
<{
    active : boolean
}>`
    list-style : none;
    background-color: white;
    .header {
        margin-bottom: 10px;
        display : flex;
        .ico {
            img {
                border-radius : 50%;
            }
        }
        .username {
            font-size: 16px;
            color: gray;
        }
    }
    li {
        ul {
            list-style: none;
            padding-left: 15px;
            border-left: 1px solid gray;
            margin-left: 10px;

            li {
                margin-bottom: 5px;
                font-size: 1em;
                cursor : pointer;
                span {
                    ${({active})=>active ? 
                        `
                            padding: 5px 0;
                            margin-top: 20px;
                            font-size: 20px;
                            color: blue;
                            background-color: aliceblue;
                        ` 
                        : 
                        `
                            
                        `
                    }
                }
            }
        }
    }
`
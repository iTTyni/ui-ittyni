import styled from "../../../theme/styled-components"
import { Link } from "react-router-dom"

export const tabnav = styled(Link)`
    display: flex;
    width: 100%;
    height: 2.25rem;
    padding: .3125rem .75rem;
    justify-content: center;
    align-items: center;
    flex: 1 1 100%;
    border-top-left-radius: .25rem;
    border-top-right-radius: .25rem;
    background-color: #0770e3;
    color: #fff;
    font-weight: 700;
    text-align: center;
    text-decoration: none;
    box-shadow: inset 0 0 0 1px #0770e3;
`
import * as React from 'react'
import { DropdownMenuStyle } from '../../../'
// @TODO: 
// dropdown list manage click outside 


export const DropdownMenu: React.FC<{title?: string, footer?: any, setOpen?: any, children?: React.ReactNode}>= ({title, children, footer})=>{


    return(
        <DropdownMenuStyle>
            <label>{title}</label>
            <li>Menu 1</li>
            <li>{children}</li>
            <li>{footer}</li>
        </DropdownMenuStyle>
    )
}
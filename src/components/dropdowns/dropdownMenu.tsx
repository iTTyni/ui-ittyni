import * as React from 'react'
import { DropdownMenuStyle } from '../../../'

export const DropdownMenu: React.FC<{title?: string, footer?: any, setOpen?: any}>= ({title, footer})=>{


    return(
        <DropdownMenuStyle>
            <label>{title}</label>
            <li>Menu 1</li>
        </DropdownMenuStyle>
    )
}
import React from "react"
import {Bubble} from '../../../../'

export const ButtonComponent : React.FC<{
    children : any
    onClick : (e:any)=>void
    selected : boolean
}> = ({children,  selected, onClick })=>
{
    return(
        <Bubble isSelected={selected} onClick={onClick}>
            {children}
        </Bubble>
    )
}
export const SelectedButtonComponent : React.FC<{
    children : any
}> = ({children})=>
{
    return(
        <Bubble isSelected={true}>
            {children}
        </Bubble>
    )
}
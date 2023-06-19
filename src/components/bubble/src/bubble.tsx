import * as React from 'react';
import { StyledBubble } from '../../../../';


export const Bubble: React.FC<{
    color?: string
    bgColor?: string
    children: React.ReactNode
    selectedBgColor?: string
    isSelected?: boolean
    isDisabled?: boolean
    bordered?: boolean
    onClick?: VoidFunction
}> = ({ color, bgColor, children, selectedBgColor, isSelected, onClick, isDisabled, bordered }) => {
    return (
        <div style={{ position: "relative", margin: "5px", maxWidth: '180px', width:"fit-content" }}>
            <StyledBubble
                color={color} bgColor={bgColor} selected={isSelected}
                selectedBgColor={selectedBgColor} onClick={onClick}
                bordered={bordered}
            >
                {children}
            </StyledBubble>
            {isSelected && !isDisabled &&
                <i className="checked fas fa-check-circle" 
                    style={{ position: "absolute", right: "-3px", top: "-12px", color: "green", zIndex: 9 }} 
                />
            }
        </div>

    )
}


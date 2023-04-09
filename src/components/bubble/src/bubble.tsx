import * as React from 'react';
import { StyledBubble } from '../../../..';


export const Bubble: React.FC<{
    color?: string
    bgColor?: string
    text: string
    selectedBgColor: string
    isSelected: boolean
    isDisabled: boolean
    onClick: () => void
}> = ({ color, bgColor, text, selectedBgColor, isSelected, onClick, isDisabled }) => {
    return (
        <div style={{ position: "relative" }}>
            <StyledBubble
                color={color} bgColor={bgColor} selected={isSelected}
                selectedBgColor={selectedBgColor} onClick={onClick}
            >
                {text}
            </StyledBubble>
            {isSelected && !isDisabled &&
                <i className="checked fas fa-check-circle" style={{ position: "absolute", right: "-3px", top: "-12px", color: "green", zIndex: 9 }} />
            }
        </div>

    )
}


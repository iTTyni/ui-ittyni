import * as React from 'react';
import { DropdownListStyled } from '../../../..'

export const DropdownList: React.FC<any> = ({ header, children, footer, setOpen }) => {

    const ref: any = React.useRef<HTMLDivElement | null>();

    React.useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (ref?.current && !ref.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
    }, [ref]);
    return (
        <DropdownListStyled ref={ref}>
            <div className="header"><h5>{header}</h5></div>
            <div className="body">
                <ul>
                    {children}
                </ul>
            </div>
            <div className="footer" style={{ borderTop: '1px solid #f1f4f6', margin: '15px 0 0', padding: '15px 0 0 0' }}>
                {footer}
            </div>
        </DropdownListStyled>
    );
};

export const DropdownListWithInput: React.FC<any> = ({ label, children, header, width }) => {

    return (
        <div style={{ display: "flex", width: width }}>
            <label style={{flexBasis: 1}}>{label}</label>
            <div style={{ position: 'relative', flexBasis: 2}}>
                <input type="text" style={{width: 'inherit', minWidth: '200px'}}/>
                <DropdownList header={header}>
                    {children}
                </DropdownList>
            </div>
        </div>
    )
}
import * as React from 'react';
import { DropdownListStyled } from '../../..'

export const DropdownList: React.FC<{
    header?: any
    children?: any
    footer?: any
    setClose?: any
    hideDropdown?: boolean
    customStyles?: {
        width: string
    }
}> = ({ 
    customStyles, hideDropdown,
    header, children, footer, setClose 
}) => {

    const ref: any = React.useRef<HTMLDivElement | null>();

    React.useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (ref?.current && !ref.current.contains(event.target)) {
                setClose(true);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
    }, [ref]);
    return (
        <DropdownListStyled ref={ref} {...customStyles} style={{display: hideDropdown?'none': 'block'}}>
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

export const DropdownListWithInput: React.FC<{
    header?: any
    label?: string
    children?: any
    footer?: any
    setOpen?: any
    customStyles?: {
        width: string
    }
    inputConfig?: {
        onChange: VoidFunction
        onFocus: VoidFunction
    }
}> = ({ label, children, header, customStyles, inputConfig }) => {
    const [hide, setHide] = React.useState<boolean>(true);
    return (
        <div style={{ display: "flex", width: customStyles?customStyles.width : "100%"}}>
            <label style={{width: '25%'}}>{label} : </label>
            <div style={{ position: 'relative', width: '75%'}}>
                <input 
                    type="text" style={{width: '100%', minWidth: '200px'}}
                    onChange={inputConfig?.onChange}
                    onFocus={()=>setHide(false)}
                />
                <DropdownList header={header} customStyles={{width: '100%'}} hideDropdown={hide} setClose={setHide}>
                    {children}
                </DropdownList>
            </div>
        </div>
    )
}
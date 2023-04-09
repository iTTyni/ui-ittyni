import * as React from 'react';
import {DropdownS} from '../../../..'

export const DropdownList: React.FC<any> = ({header, children, footer, setOpen }) => {

    const ref:any = React.useRef<HTMLDivElement | null>();

    React.useEffect(() => {
        const handleClickOutside = (event:any) => {
          if (ref&&ref.current&&!ref.current.contains(event.target)) {
            setOpen(false);
          }
        };
        document.addEventListener("mousedown", handleClickOutside);
      }, [ref]);
    return (
        <DropdownS ref={ref}>
            <div className="header"><h5>{header}</h5></div>
            <div className="body">
                <ul>
                    {children}
                </ul>
            </div>
            <div className="footer" style={{ borderTop: '1px solid #f1f4f6', margin: '15px 0 0', padding: '15px 0 0 0' }}>
                {footer}
            </div>
        </DropdownS>
    );
};

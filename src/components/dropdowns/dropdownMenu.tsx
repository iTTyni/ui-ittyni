import * as React from 'react';
import {
  DropdownContainerStyled,
  IconStyled,
  DropdownMenuStyle,
  DropdownMenuStyled,
  MenuItemStyled,
  MenuFooterStyled,
  DisconnectButtonStyled,
} from '../../../';

export const DropdownMenu: React.FC<{
  title?: string;
  footer?: any;
  setOpen?: any;
  children?: any;
}> = ({ title, children, footer }) => {
  return (
    <DropdownMenuStyle>
      <label>{title}</label>
      <li>Menu 1</li>
      <li>{children}</li>
    </DropdownMenuStyle>
  );
};

export const DropdownMenuContainer: React.FC<any> = ({links, icon, footer}) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownContainerStyled>
      <IconStyled onClick={toggleMenu}>{icon}</IconStyled>
      <DropdownMenuStyled isOpen={isOpen}>
        {links.map((l:any)=><MenuItemStyled to={l.link}>{l.label}</MenuItemStyled>)}
        {footer && <MenuFooterStyled>{footer}</MenuFooterStyled>}
      </DropdownMenuStyled>
    </DropdownContainerStyled>
  );
};

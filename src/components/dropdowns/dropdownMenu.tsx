import * as React from 'react'
import { DropdownContainerStyled, IconStyled, DropdownMenuStyle, DropdownMenuStyled, MenuItemStyled, MenuFooterStyled, DisconnectButtonStyled } from '../../../'

export const DropdownMenu: React.FC<{ title?: string, footer?: any, setOpen?: any }> = ({ title, footer }) => {


  return (
    <DropdownMenuStyle>
      <label>{title}</label>
      <li>Menu 1</li>
    </DropdownMenuStyle>
  )
}

export const DropdownMenuContainer = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  const handleDisconnect = () => {
    console.log('user logged out')
  }

  return (
    <DropdownContainerStyled>
      <IconStyled onClick={toggleMenu}>☰</IconStyled>
      <DropdownMenuStyled isOpen={isOpen}>
        <MenuItemStyled href='/admin/khmammed'>Account</MenuItemStyled>
        <MenuItemStyled href='/admin/khmammed'>Account</MenuItemStyled>
        <MenuItemStyled href='/admin/khmammed'>Account</MenuItemStyled>
        <MenuItemStyled href='/admin/khmammed'>Account</MenuItemStyled>
        <MenuFooterStyled>
          <DisconnectButtonStyled onClick={handleDisconnect}>
            Disconnect
          </DisconnectButtonStyled>
        </MenuFooterStyled>
      </DropdownMenuStyled>
    </DropdownContainerStyled>
  )
}

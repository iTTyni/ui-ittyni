import * as React from 'react';
import styled from 'styled-components';


export interface MenuItemProps {
  icon: any;
  text: string;
}

// Menu section container
const MenuSectionContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  border-bottom: 0.5px solid #c1c1c1;
  padding-bottom: 10px;
`;

const MenuItem = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  color: #333;
  font-size: 14px;
  border-radius: 4px;
  position: relative;
  &:hover {
    background-color: #f0f0f0;
  }
  &:hover span {
    display: block;
  }
`;

const MenuIcon = styled("span")`
  height: 25px;
  i { font-size: 28px; color: black; }
`;

const MenuText = styled.span`
  display: none;
  position: absolute;
  left: 60px;
  white-space: nowrap;
  background-color: #333;
  color: #fff;
  padding: 5px 10px;
  border-radius: 3px;
  font-size: 12px;
  z-index: 10;
`;

interface MenuSectionProps {
  title: string;
  items: MenuItemProps[];
}

const MenuSection: React.FC<MenuSectionProps> = ({ items }) => {
  return (
    <MenuSectionContainer>
      {items.map((item, index) => (
        <MenuItem key={index}>
          <MenuIcon>{item.icon}</MenuIcon>
          <MenuText>{item.text}</MenuText>
        </MenuItem>
      ))}
    </MenuSectionContainer>
  );
};

export default MenuSection;

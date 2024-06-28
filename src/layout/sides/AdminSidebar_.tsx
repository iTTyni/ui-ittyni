import * as React from 'react';
import styled from 'styled-components';
import MenuSection, { MenuItemProps } from './components/MenuSection';

// Sidebar container
const SidebarContainer = styled.div`
  width: 50px;
  background-color: #fff;
  border-right: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  padding: 50px 0 0;
  height: 98vh;
  position: fixed;
`;

// User info section
const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const UserAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const UserName = styled.div`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 5px;
  display: none;
`;

const UserRole = styled.div`
  font-size: 14px;
  color: #666;
  display: none;
`;

const Footer = styled.div`
  margin-top: auto;
  padding-top: 10px;
  border-top: 0.5px solid #c1c1c1;
`;

// Define props for the Sidebar component
interface SidebarProps {
    user: any
    coreMenuItems: MenuItemProps[],
    extensionsMenuItems: MenuItemProps[]
    footerMenuItems: MenuItemProps[]
}

// Application component
const AdminSidebar: React.FC<SidebarProps> = ({ user, coreMenuItems, extensionsMenuItems, footerMenuItems}) => {
  return (
    <SidebarContainer>
      <UserInfo>
        <UserAvatar src={user?.picture} alt="User Avatar" />
        <UserName>{user?.username}</UserName>
        <UserRole>{user?.role}</UserRole>
      </UserInfo>
      <MenuSection title="Main" items={coreMenuItems} />
      <MenuSection title="Shipment" items={extensionsMenuItems} />
      {/* <MenuSection title="Others" items={othersMenuItems} /> */}
      <Footer>
        <MenuSection title="Footer" items={footerMenuItems} />
      </Footer>
    </SidebarContainer>
  );
};

export default AdminSidebar;

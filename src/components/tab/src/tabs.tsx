// src/admin/TabsComponent.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #e0e0e0;
`;

const TabButton = styled.button<{ active: boolean }>`
  background: none;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  color: ${(props) => (props.active ? '#007bff' : '#333')};
  border-bottom: ${(props) => (props.active ? '2px solid #007bff' : 'none')};
  outline: none;

  &:hover {
    color: #007bff;
  }
`;

interface Tab {
  text: string;
  link: string;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabClick: (tab: string) => void;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onTabClick }) => {
  return (
    <TabsContainer>
      {tabs.map((tab) => (
        <TabButton
          key={tab.link}
          active={activeTab === tab.text}
          onClick={() => onTabClick(tab.text)}
        >
          <Link to={tab.link}>{tab.text}</Link>
        </TabButton>
      ))}
    </TabsContainer>
  );
};

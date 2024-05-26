// src/Header.tsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 20px;
`;

const Breadcrumb = styled.nav`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 0.875rem;
  padding: 10px;
  border-bottom: 1px solid #c1c1c1;
  margin: 0 -25px;
`;

const BreadcrumbItem = styled.span`
  & + &::before {
    content: '/';
    margin: 0 5px;
    color: #6c757d;
  }
`;

const BreadcrumbLink = styled(Link)`
  text-decoration: none;
  color: #007bff;

  &:hover {
    text-decoration: underline;
  }
`;

const Tabs = styled.div`
  display: flex;
  border-bottom: 1px solid #e0e0e0;
`;

const Tab = styled.button<{ active: boolean }>`
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

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  outline: none;
`;

const Select = styled.select`
  margin-left: 10px;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  outline: none;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin-left: 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #0056b3;
  }
`;

export const MainHeader: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Open');

  const location = useLocation();

  const getBreadcrumbs = () => {
    const pathnames = location.pathname.split('/').filter((x) => x);
    return pathnames.map((value, index) => {
      const url = `/${pathnames.slice(0, index + 1).join('/')}`;
      const title = value.charAt(0).toUpperCase() + value.slice(1);
      return (
        <BreadcrumbItem key={url}>
          <BreadcrumbLink to={url}>{title}</BreadcrumbLink>
        </BreadcrumbItem>
      );
    });
  };
  return (
    <HeaderContainer>
      <Breadcrumb>{getBreadcrumbs()}</Breadcrumb>
      <Tabs>
        <Tab active={activeTab === 'Open'} onClick={() => setActiveTab('Open')}>
          Open
        </Tab>
        <Tab
          active={activeTab === 'Closed'}
          onClick={() => setActiveTab('Closed')}
        >
          Closed
        </Tab>
        <Tab active={activeTab === 'All'} onClick={() => setActiveTab('All')}>
          All
        </Tab>
        <Tab
          active={activeTab === 'Lab Procedure Management'}
          onClick={() => setActiveTab('Lab Procedure Management')}
        >
          Lab Procedure Management
        </Tab>
      </Tabs>
      <FilterContainer>
        <SearchInput type="text" placeholder="Search or filter results..." />
        <Select>
          <option value="createdDate">Created date</option>
          <option value="updatedDate">Updated date</option>
        </Select>
        <Button>New issue</Button>
      </FilterContainer>
    </HeaderContainer>
  );
};

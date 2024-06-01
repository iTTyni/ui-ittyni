// src/admin/MainHeader.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { Filter, Tabs } from '../../../';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 20px;
`;

export const MainHeader: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Open');
  const [searchText, setSearchText] = useState('');
  const [selectedOption, setSelectedOption] = useState('createdDate');

  const tabs = [
    { text: 'All', link: '/admin/Test11/nabm/listnabm' },
  ];

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleButtonClick = () => {
    console.log('New issue button clicked');
  };

  const selectOptions = [
    { value: 'createdDate', label: 'Created date' },
    { value: 'updatedDate', label: 'Updated date' },
  ];

  return (
    <HeaderContainer>
      <Tabs tabs={tabs} activeTab={activeTab} onTabClick={setActiveTab} />
      <Filter
        searchPlaceholder="Search or filter results..."
        selectOptions={selectOptions}
        buttonText="New issue"
        onSearchChange={handleSearchChange}
        onSelectChange={handleSelectChange}
        onButtonClick={handleButtonClick}
      />
    </HeaderContainer>
  );
};

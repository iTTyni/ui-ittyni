// src/admin/FilterComponent.tsx
import React from 'react';
import styled from 'styled-components';

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

interface FilterProps {
  searchPlaceholder: string;
  selectOptions: { value: string; label: string }[];
  buttonText: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onButtonClick: () => void;
}

export const Filter: React.FC<FilterProps> = ({
  searchPlaceholder,
  selectOptions,
  buttonText,
  onSearchChange,
  onSelectChange,
  onButtonClick,
}) => {
  return (
    <FilterContainer>
      <SearchInput
        type="text"
        placeholder={searchPlaceholder}
        onChange={onSearchChange}
      />
      <Select onChange={onSelectChange}>
        {selectOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
      <Button onClick={onButtonClick}>{buttonText}</Button>
    </FilterContainer>
  );
};
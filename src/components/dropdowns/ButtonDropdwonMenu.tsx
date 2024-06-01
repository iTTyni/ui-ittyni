import React, { useState } from 'react';
import styled from 'styled-components';

interface DropdownButtonProps {
  selected: boolean;
}

interface DropdownContentProps {
  show: boolean;
}

const Container = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button<DropdownButtonProps>`
  background-color: ${(props) => (props.selected ? '#007bff' : '#fff')};
  color: ${(props) => (props.selected ? '#fff' : '#000')};
  border: 1px solid ${(props) => (props.selected ? '#007bff' : '#d1d5da')};
  border-radius: 6px;
  padding: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:after {
    content: "▾";
    margin-left: 5px;
  }
`;

export const DropdownContent = styled.div<DropdownContentProps>`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: absolute;
  background-color: white;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  padding: 10px;
  z-index: 1;
  border-radius: 6px;
  border: 1px solid #d1d5da;
`;

const DefaultDropdownItem = styled.div`
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    background-color: #f6f8fa;
  }

  &.section-title {
    font-weight: bold;
    margin-top: 5px;
  }
`;

interface DropdownItemProps {
  section?: string;
  item: string;
  onSelect: (section: string, item: string) => void;
  className?: string;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ section = '', item, onSelect, className }) => {
  return (
    <DefaultDropdownItem onClick={() => onSelect(section, item)} className={className}>
      {item}
    </DefaultDropdownItem>
  );
};

interface DropdownMenuProps {
  items: { section?: string; label: string }[];
  withSections?: boolean;
}

export const ButtonDropdownMenu: React.FC<DropdownMenuProps> = ({ items, withSections = false }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string>('+');

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSelectItem = (section: string, item: string) => {
    setSelectedItem(`${section ? `${section}: ` : ''}${item}`);
    setShowDropdown(false);
  };

  return (
    <Container>
      <DropdownButton onClick={toggleDropdown} selected={selectedItem !== '+'}>
        {selectedItem}
      </DropdownButton>
      <DropdownContent show={showDropdown}>
        {items.map((dropdownItem, index) => (
          <React.Fragment key={index}>
            {withSections && dropdownItem.section && (
              <DropdownItem
                section={dropdownItem.section}
                item={dropdownItem.section}
                onSelect={() => {}}
                className="section-title"
              />
            )}
            <DropdownItem
              section={dropdownItem.section || ''}
              item={dropdownItem.label}
              onSelect={handleSelectItem}
            />
          </React.Fragment>
        ))}
      </DropdownContent>
    </Container>
  );
};

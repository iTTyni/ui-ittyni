import React, { useState } from 'react';
import {styled} from '../../theme';
import useOnClickOutside from '../../hooks/useOnClickOutside';

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
`;

const DropdownContent = styled.div<DropdownContentProps>`
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
  font-size: 12px; /* Set font size to 12 */

  &:hover {
    background-color: #f6f8fa;
  }

  &.section-title {
    font-weight: 700;
    margin-top: 5px;
    color: black; /* Color set to black */
  }
`;

interface DropdownItemProps {
  section: string;
  label: string;
  value: string;
  onSelect: (label: string, value: string) => void;
  className?: string;
}

const DropdownItem: React.FC<DropdownItemProps> = ({
  label,
  value,
  onSelect,
  className,
}) => {
  return (
    <DefaultDropdownItem
      onClick={() => onSelect(label, value)}
      className={className}
    >
      {label}
    </DefaultDropdownItem>
  );
};

interface DropdownMenuProps {
  items: { section: string; items: { label: string; value: string }[] }[];
  initialValue?: string; // Changed to only a value string
  setParentState: (
    selectedItem: { label: string; value: string } | null
  ) => void; // added setParentState
}

export const ButtonDropdownMenu: React.FC<DropdownMenuProps> = ({
  items,
  initialValue,
  setParentState,
}) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<{
    label: string;
    value: string;
  } | null>(null);

  const ref = React.useRef(null);
  useOnClickOutside(ref, (e: Event) => setShowDropdown(false));
  React.useEffect(() => {
    if (initialValue) {
      const selected = findItemByValue(initialValue);
      if (selected) {
        setSelectedItem(selected);
        setParentState(selected);
      }
    }
  }, [initialValue]);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSelectItem = (label: string, value: string) => {
    const newItem = { label, value };
    setSelectedItem(newItem);
    setShowDropdown(false);
    setParentState(newItem); // Update parent state
  };

  const getSectionLabel = (value: string) => {
    for (const item of items) {
      const foundItem = item.items.find((i) => i.value === value);
      if (foundItem) {
        return item.section;
      }
    }
    return '';
  };

  const findItemByValue = (value: string) => {
    for (const item of items) {
      const foundItem = item.items.find((i) => i.value === value);
      if (foundItem) {
        return { label: foundItem.label, value: foundItem.value };
      }
    }
    return null;
  };

  return (
    <Container>
      <DropdownButton onClick={toggleDropdown} selected={selectedItem !== null}>
        {selectedItem
          ? `${getSectionLabel(selectedItem.value)} : ${selectedItem.label} `
          : 'Select'}
      </DropdownButton>
      <DropdownContent show={showDropdown} ref={ref}>
        {items.map((sectionItem, index) => (
          <React.Fragment key={index}>
            <div className="section-title">{sectionItem.section}</div>
            {sectionItem.items.map((item, itemIndex) => (
              <DropdownItem
                key={itemIndex}
                section={sectionItem.section}
                label={item.label}
                value={item.value}
                onSelect={handleSelectItem}
                className="menu-item" // Apply class for menu items
              />
            ))}
          </React.Fragment>
        ))}
      </DropdownContent>
    </Container>
  );
};
// Datalist.js
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

export const DataListContainer = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background-color: #f2f2f2;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #dddddd;
`;

export const TableHeader = styled.th`
  padding: 8px;
  text-align: left;
  cursor: pointer;
  position: relative;
`;

export const TableCell = styled.td`
  padding: 8px;
  text-align: left;
`;

export const Icon = styled.div`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;

export const NameCell = styled.div`
  display: flex;
  align-items: center;
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const FilterInput = styled.input`
  width: 100%;
  padding: 4px;
  box-sizing: border-box;
`;

export const CloseIcon = styled.span`
  position: absolute;
  right: 4px;
  cursor: pointer;
  font-size: 14px;
`;

const SortIcon = styled.span`
  font-weight: 700;
  float: right;
  margin-left: 8px;
  font-size: 16px;
  display: inline-block;
`;

interface DataItem {
  [key: string]: any;
}

interface DatalistProps {
  data: DataItem[];
  extName?: string;
  onSelect:(d: any)=> void;
}

const Datalist: React.FC<DatalistProps> = ({ data, extName, onSelect }) => {
  const { t } = useTranslation();
  const [filteredData, setFilteredData] = useState(data);
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [sortConfig, setSortConfig] =
    useState<{ key: string; direction: 'ascending' | 'descending' } | null>(
      null
    );
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const headers = data.length > 0 ? Object.keys(data[0]) : [];

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    const newFilters = { ...filters, [key]: e.target.value };
    setFilters(newFilters);

    const filtered = data.filter((item) =>
      Object.keys(newFilters).every((k) =>
        item[k]?.toString().toLowerCase().includes(newFilters[k].toLowerCase())
      )
    );

    setFilteredData(filtered);
  };

  const handleSort = (key: string) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }

    const sortedData = [...filteredData].sort((a, b) => {
      if (a[key]?.toLowerCase() < b[key]?.toLowerCase()) {
        return direction === 'ascending' ? -1 : 1;
      }
      if (a[key]?.toLowerCase() > b[key]?.toLowerCase()) {
        return direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });

    setFilteredData(sortedData);
    setSortConfig({ key, direction });
  };

  const handleHeaderClick = (key: string) => {
    if (activeFilter === key) {
      setActiveFilter(null);
    } else {
      setActiveFilter(key);
    }
  };

  const clearFilter = (key: string) => {
    const newFilters = { ...filters, [key]: '' };
    setFilters(newFilters);
    setActiveFilter(null);
    setFilteredData(data);
  };

  const getSortIcon = (key: string) => {
    if (!sortConfig || sortConfig.key !== key) return '↕';
    return sortConfig.direction === 'ascending' ? '↑' : '↓';
  };

  React.useEffect(() => {
    if (data) {
      setFilteredData(data);
    }
  }, [data]);

  return (
    <DataListContainer>
      <Table>
        <TableHead>
          <TableRow>
            {headers.map((header, index) => (
              <TableHeader key={index} onClick={() => handleSort(header)}>
                {activeFilter === header ? (
                  <FilterContainer>
                    <FilterInput
                      type="text"
                      value={filters[header] || ''}
                      onChange={(e) => handleFilterChange(e, header)}
                      autoFocus
                    />
                    <CloseIcon onClick={() => clearFilter(header)}>×</CloseIcon>
                  </FilterContainer>
                ) : (
                  <>
                    <span onClick={() => handleHeaderClick(header)}>
                      {t(`${extName}.${header}`)}
                    </span>
                    <SortIcon>{getSortIcon(header)}</SortIcon>
                  </>
                )}
              </TableHeader>
            ))}
          </TableRow>
        </TableHead>
        <tbody>
          {filteredData.map((item, index) => (
            <TableRow key={index} onClick={()=>onSelect(item)}>
              {headers.map((header, index) => (
                <TableCell key={index}>{item[header]}</TableCell>
              ))}
            </TableRow>
          ))}
        </tbody>
      </Table>
    </DataListContainer>
  );
};

export default Datalist;

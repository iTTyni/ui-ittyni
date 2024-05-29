// src/admin/BreadcrumbsComponent.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const BreadcrumbContainer = styled.nav`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 0.875rem;
  padding: 10px;
  border-bottom: 1px solid #c1c1c1;
  margin: 0 -15px;
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

interface BreadcrumbsProps {}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = () => {
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

  return <BreadcrumbContainer>{getBreadcrumbs()}</BreadcrumbContainer>;
};
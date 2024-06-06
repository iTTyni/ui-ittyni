import { Link } from 'react-router-dom';
import { styled } from '../..';

export const DropdownMenuStyle = styled('ul')<{ref?:any, showMenu?: boolean}>`
  display: ${({showMenu})=> showMenu ? 'block' : 'none'};
  width: 100%;
  top: 60px;
  z-index: 99;
  list-style: none;
  position: absolute;
  padding: 0;
  margin: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-height: 200px;
  overflow-y: auto;

  li {
    padding: 8px 16px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: #f5f5f5;
    }
  }

  li:not(:last-child) {
    border-bottom: 1px solid #eee;
  }
`;

export const DropdownListStyled = styled('div')<{
  width?: string;
}>`
  position: absolute;
  max-height: 200px;
  min-width: 200px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  z-index: 9999;
  background-color: white;
  border: 1px solid;
  display: ${({ hideMenu }: any) => (hideMenu ? 'none' : 'block')};
  width: ${({ width }: any) => (width ? width : '100%')};
  div {
    ul {
      margin: 0;
      padding: 0;
      list-style-type: none;
      li {
        width: inherit;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #d9e1e4;
        padding: 0 12px;
        vertical-align: top;
        overflow: hidden;
        cursor: pointer;
        transition: margin-top 0.5s, height 0.5s;
        display: flex;
        :hover {
          background: #eaeaea;
        }
      }
    }
  }
`;
export const DropdownContainerStyled = styled('div')`
  position: relative;
  display: inline-block;
`;
export const IconStyled = styled('div')`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const DropdownMenuStyled = styled('div')<{ isOpen: boolean }>`
  display: ${({ isOpen }: any) => (isOpen ? 'block' : 'none')};
  position: absolute;
  top: 50px;
  right: 0;
  background-color: white;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 8px;
  overflow: hidden;
`;
export const MenuItemStyled = styled(Link)`
  display: block;
  padding: 12px 16px;
  color: black;
  text-decoration: none;
  &:hover {
    background-color: #f1f1f1;
  }
`;
export const MenuFooterStyled = styled('div')`
  padding: 12px 16px;
  background-color: #f9f9f9;
  text-align: center;
`;
export const DisconnectButtonStyled = styled('button')`
  background-color: #ff4d4f;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #ff7875;
  }
`;

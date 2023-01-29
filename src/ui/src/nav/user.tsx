import { device } from "../../../theme";
import styled from "../../../theme/styled-components";

export const UserNav = styled.div`
  display : flex;
  flex: 5;
  text-align: right;
`;
export const Logo = styled.div`
  flex: 1;
  padding: 20px;
  font-size: 25px;
  font-weight: 700;
`;

export const SearchBox = styled.div.attrs({ className: "searchBox" })`
  flex : 5;
  padding : 15px 15px 0 0;
  ${device.mobile`
    position: absolute;
    width: 98%;
    top: 68px;
    padding : 0;
  `}
`;

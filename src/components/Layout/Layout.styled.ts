import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const PageHeader = styled.header`
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 10px 0px;
  border-bottom: 1px solid #000;
  margin-bottom: 20px;

  @media (min-width: 768px) {
  }

  @media (min-width: 1440px) {
  }
`;

export const HeaderNavItem = styled(NavLink)`
  &.active {
    font-weight: 700;
  }
`;

import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
display: flex;
gap:32px;
justify-content: center`

export const NavItem = styled(NavLink)`
color: #ede2f9;
text-decoration: none;
  border: none;
  font-size: 25px;
  font-weight: 300;
  letter-spacing: 0.08em;
  padding: 4px;
  transition: all 250ms ease; 

  &.active {
   border-radius: 5px;
   background-color: #ede2f9;
   color:#5736A3;
  }

  &:hover, &:focus {
    border-radius: 5px;
   background-color: #ede2f9;
   color:#5736A3;
  }
`
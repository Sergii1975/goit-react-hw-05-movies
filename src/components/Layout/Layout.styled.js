import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
display: flex;
align-items: center;  
padding: 20px 30px;
margin-bottom: 20px;
box-shadow: 0 20px 16px -16px rgba(0, 0, 0, 0.6);
`;

export const HeaderNav = styled.nav`
display: flex;
gap: 30px;
`;

export const Link = styled(NavLink)`
 padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #b8795e;
  }
`;
export const Logo = styled.p`
  font-weight: 700;
  margin: 0;
  text-transform: uppercase;
`;
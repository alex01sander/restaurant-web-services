// src/components/Menu/Menu.styled.js
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';

export const MenuContainer = styled.nav`

  color: #fff;
  display: flex;

  padding: 10px 20px;
  margin-top: 150px
`;

export const MenuList = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const MenuItem = styled.li`
  margin-right: 20px;
`;

export const MenuLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  /* font-weight: bold; */
  transition: color 0.3s ease;

  &:hover {
    color: #ffc107;
  }
`;

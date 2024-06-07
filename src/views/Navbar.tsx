import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navbar: React.FC = () => {
  return (
    <NavBarOptions>
      <RouteLink to="/">Home</RouteLink>
      <RouteLink to="/about">About</RouteLink>
      <RouteLink to="/login">Login</RouteLink>
    </NavBarOptions>
  );
};

const NavBarOptions = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 40px;
`;

const RouteLink = styled(Link)`
  margin-bottom: 5px;

  font-weight: 600;

  &:hover {
    color: green;
  }
`;

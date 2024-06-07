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
  margin-top: 10px;
  margin-left: 40px;
  margin-bottom: 10px;
`;

const RouteLink = styled(Link)`
  margin-right: 50px;

  font-weight: 600;

  &:hover {
    color: green;
  }
`;

import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";
import MenuButton from "../MenuButton";

const StyledMenuIcon = styled.div`
  @media (min-width: 600px) {
    display: none;
  }
`;

const MenuIcon = ({openLoginForm})  => (
  <StyledMenuIcon>
    <MenuButton onClick={openLoginForm} />
  </StyledMenuIcon>
);

MenuIcon.propTypes = {
  openLoginForm: PropTypes.func.isRequired
};

export default MenuIcon;
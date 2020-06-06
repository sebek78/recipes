import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import TextButton from "../../../../components/TextButton";
import Button from "../../../../components/Button";

const StyledMenuButtons = styled.div`
  display: none;
  width: 300px;
  @media (min-width: 600px) {
    display: flex;
    justify-content: space-between;
  }
`;

const MenuButtons = ({ openLoginForm, openRegisterForm }) => (
  <StyledMenuButtons>
    <Button label="Logowanie" handleClick={openLoginForm} />
    <TextButton label="Rejestracja" handleClick={openRegisterForm} />
  </StyledMenuButtons>
);

MenuButtons.propTypes = {
  openLoginForm: PropTypes.func.isRequired,
  openRegisterForm: PropTypes.func.isRequired,
};

export default MenuButtons;

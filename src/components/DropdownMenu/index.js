import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { COLORS } from "../../utils/theme";
import LinkButton from "./../LinkButton";

const DropdownMenuContainer = styled.nav`
  position: absolute;
  top: 78px;
  right: 5vw;
  background-color: white;
  z-index: 2;
  padding: 8px 8px 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid ${COLORS.primaryDark};
  width: 90vw;
  @media (min-width: 360px) {
    width: 160px;
    border: 2px solid ${COLORS.primaryDark};
    top: 52px;
    right: 5vw;
  }
`;

const DropdownMenu = ({ showLoader, logoutUser, toggleMenuOpen }) => {
  const handleClick = () => {
    showLoader();
    logoutUser();
    toggleMenuOpen();
  };

  return (
    <DropdownMenuContainer>
      <LinkButton
        label="Ustawienia"
        to="/settings"
        handleClick={toggleMenuOpen}
      />
      <LinkButton label="Wyloguj" to="/" handleClick={handleClick} />
    </DropdownMenuContainer>
  );
};

DropdownMenu.propTypes = {
  showLoader: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  toggleMenuOpen: PropTypes.func.isRequired,
};

export default DropdownMenu;

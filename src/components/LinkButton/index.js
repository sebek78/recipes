import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { COLORS, FONTS } from "../../utils/theme";
import { Link } from "react-router-dom";

const StyledButton = styled.button`
  padding: 0;
  margin: 4px;
  min-width: 88px;
  max-width: 160px;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  padding: 6px 8px 6px 8px;
  color: ${COLORS.primary};
  font-size: ${FONTS.medium};
  font-weight: bold;
  line-height: 28px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 1px;
`;

const LinkButton = ({ label, to, handleClick }) => (
  <StyledButton type="button" onClick={handleClick}>
    <StyledLink to={to}>{label}</StyledLink>
  </StyledButton>
);

LinkButton.propTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  to: PropTypes.string.isRequired,
};

export default LinkButton;

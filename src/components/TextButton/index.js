import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { COLORS, FONTS } from "../../utils/theme";

const StyledButton = styled.button`
  padding: 6px 8px 6px 8px;
  margin: 4px;
  min-width: 88px;
  max-width: 160px;
  font-size: ${FONTS.medium};
  font-weight: bold;
  line-height: 28px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: none;
  outline: none;
  background-color: transparent;
  color: ${COLORS.primary};
  cursor: pointer;
`;

const TextButton = ({ label, handleClick }) => (
  <StyledButton type="button" onClick={handleClick}>
    {label}
  </StyledButton>
);

TextButton.propTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default TextButton;

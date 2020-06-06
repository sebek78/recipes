import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { COLORS, FONTS } from "../../utils/theme";

const StyledButton = styled.button`
  box-sizing: border-box;
  padding: 6px 12px 6px 12px;
  margin: 8px;
  min-width: 88px;
  max-width: 160px;
  border-radius: 4px;
  font-size: ${FONTS.medium};
  line-height: 28px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 1px;
  border: none;
  outline: none;
  background-color: ${COLORS.primary};
  color: white;
`;

const Button = ({ label, handleClick, submit }) => (
  <StyledButton type={submit ? "submit" : "button"} onClick={handleClick}>
    {label}
  </StyledButton>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  submit: PropTypes.bool,
};

export default Button;

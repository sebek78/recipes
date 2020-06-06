import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { COLORS, FONTS } from "../../../utils/theme";

const StyledInputText = styled.div`
  box-sizing: border-box;
  padding: 6px 0;
  margin: 4px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const StyledLabel = styled.label`
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${COLORS.primaryDark};
  font-size: ${FONTS.medium};
  font-weight: bold;
`;

const StyledInput = styled.input`
  padding: 6px 12px 6px 12px;
  margin: 4px 0 4px 10px;
  border: 0;
  border-bottom: 2px solid ${COLORS.primaryDark};
  background-color: ${COLORS.bgColor};
  font-size: ${FONTS.medium};
  font-family: "Nunito", sans-serif;
  width: 198px;
  &:focus {
    outline: 2px solid ${COLORS.secondaryLight};
    background-color: ${COLORS.bgColor};
  }
`;

const InputText = ({ label, value = "", handleChange, password }) => (
  <StyledInputText>
    <StyledLabel htmlFor={label}>{label}</StyledLabel>
    <StyledInput
      type={password ? "password" : "text"}
      id={label}
      onChange={handleChange}
      required
      aria-required="true"
      value={value}
    />
  </StyledInputText>
);

InputText.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  password: PropTypes.bool,
};

export default InputText;

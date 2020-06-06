import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { COLORS, FONTS } from "../../../utils/theme";

const StyledBox = styled.p`
  padding: 6px 12px 6px 12px;
  margin: 4px;
  font-size: ${FONTS.medium};
  font-weight: bold;
  background-color: ${COLORS.secondaryLight};
  color: black;
`;

const ErrorBox = ({ text }) => <StyledBox>{text}</StyledBox>;

ErrorBox.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ErrorBox;

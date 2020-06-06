import React from "react";
import logo from "../../../../img/favicon.png";
import styled from "styled-components";
import { COLORS, FONTS } from "../../../../utils/theme";

const StyledLogo = styled.div`
  height: 64px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: ${FONTS.bigger};
  font-weight: bold;
  padding-right: 4px;
  line-height: 1;
  color: ${COLORS.primaryDark};
`;

const Logo = () => (
  <StyledLogo>
    <img src={logo} />
    <p>
      Rubinowe
      <br />
      przepisy
    </p>
  </StyledLogo>
);

export default Logo;

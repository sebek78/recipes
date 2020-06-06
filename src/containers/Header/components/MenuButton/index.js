import styled from "styled-components";
import { COLORS } from "../../../../utils/theme";

const MenuButton = styled.button`
  padding: 0;
  margin: 4px;
  width: 44px;
  height: 44px;
  border-radius: 4px;
  border-style: solid;
  border-color: ${COLORS.primary};
  border-width: 20px 8px;
  outline: none;
  background-color: white;
  position: relative;
  &:before,
  &:after {
    position: absolute;
    left: 0px;
    content: "";
    height: 4px;
    width: 28px;
    background-color: white;
  }
  &:before {
    top: -8px;
  }
  &:after {
    top: 8px;
  }
`;

export default MenuButton;

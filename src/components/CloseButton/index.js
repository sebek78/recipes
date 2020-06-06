import styled from "styled-components";
import { COLORS } from "../../utils/theme";

const CloseButton = styled.button`
  margin: 4px;
  border-radius: 4px;
  border: none;
  outline: none;
  background-color: ${COLORS.primary};
  position: relative;
  width: 32px;
  height: 32px;
  &:before,
  &:after {
    position: absolute;
    left: 4px;
    top: 14px;
    content: "";
    height: 4px;
    width: 24px;
    background-color: white;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

export default CloseButton;

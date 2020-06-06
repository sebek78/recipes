import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import RegisterUser from "../RegisterForm";
import LoginForm from "../LoginForm";
import CloseButton from "../../../../components/CloseButton";
import { COLORS } from "../../../../utils/theme";

const FormContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${COLORS.bgColorAlpha};
  z-index: 2;
  padding: 40px 8px 8px;
  border-bottom: 2px solid ${COLORS.primaryDark};
  width: 100vw;
  @media (min-width: 320px) {
    width: 320px;
    border: 2px solid ${COLORS.primaryDark};
    top: 5vw;
    right: 5vw;
  }
`;

const CloseButtonWrapper = styled.div`
  position: absolute;
  right: 4px;
  top: 4px;
`;

const MenuForms = ({ setLoggedIn, setStatus, onClose, toggleForms, view }) => {
  return (
    <FormContainer>
      <CloseButtonWrapper>
        <CloseButton onClick={onClose} />
      </CloseButtonWrapper>
      {view.registerForm && <RegisterUser toggleForms={toggleForms} />}
      {view.loginForm && (
        <LoginForm
          setLoggedIn={setLoggedIn}
          setStatus={setStatus}
          toggleForms={toggleForms}
        />
      )}
    </FormContainer>
  );
};

MenuForms.propTypes = {
  setLoggedIn: PropTypes.func.isRequired,
  setStatus: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  toggleForms: PropTypes.func.isRequired,
  view: PropTypes.shape({
    menuButton: PropTypes.bool,
    loginForm: PropTypes.bool.isRequired,
    registerForm: PropTypes.bool.isRequired,
    menuForms: PropTypes.bool,
    userBox: PropTypes.bool,
  }),
};

export default MenuForms;

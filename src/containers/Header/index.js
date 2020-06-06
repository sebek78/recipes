import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Logo from "./components/Logo";
import UserBox from "./components/UserBox";
import MenuForms from "./components/MenuForms";
import MenuIcon from "./components/MenuIcon";
import MenuButtons from "./components/MenuButtons";
import styled from "styled-components";
import { COLORS } from "../../utils/theme";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${COLORS.primaryDark};
`;

const Header = ({ status, setStatus }) => {
  const [loggedIn, setLoggedIn] = useState(status.authenticated);

  const [view, setView] = useState({
    menuButton: true,
    loginForm: true,
    registerForm: false,
    menuForms: false,
    userBox: false,
  });

  useEffect(() => {
    setLoggedIn(status.authenticated);
    if (loggedIn) {
      setView({ ...view, menuForms: false, userBox: true });
    } else {
      setView({ ...view, menuButton: true, userBox: false });
    }
  }, [status]);

  const openLoginForm = (e) => {
    e.preventDefault();
    setView({ ...view, menuForms: true, menuButton: false });
  };

  const openRegisterForm = (e) => {
    e.preventDefault();
    setView({
      ...view,
      menuForms: true,
      menuButton: false,
      registerForm: true,
      loginForm: false,
    });
  };
  const closeMenuForms = () => {
    setView({ ...view, menuForms: false, menuButton: true });
  };

  const toggleForms = (e) => {
    e.preventDefault();
    setView({
      ...view,
      loginForm: !view.loginForm,
      registerForm: !view.registerForm,
    });
  };

  return (
    <StyledHeader>
      <Logo />
      {view.menuButton && (
        <>
          <MenuIcon openLoginForm={openLoginForm} />
          <MenuButtons
            openRegisterForm={openRegisterForm}
            openLoginForm={openLoginForm}
          />
        </>
      )}
      {view.menuForms && (
        <MenuForms
          setLoggedIn={setLoggedIn}
          setStatus={setStatus}
          onClose={closeMenuForms}
          toggleForms={toggleForms}
          view={view}
        />
      )}
      {view.userBox && (
        <UserBox setLoggedIn={setLoggedIn} setStatus={setStatus} />
      )}
    </StyledHeader>
  );
};

Header.propTypes = {
  status: PropTypes.shape({
    authenticated: PropTypes.bool.isRequired,
    username: PropTypes.string,
  }).isRequired,
  setStatus: PropTypes.func.isRequired,
};

export default Header;

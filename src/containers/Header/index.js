import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Logo from "./components/Logo";
import UserBox from "./components/UserBox";
import MenuForms from "./components/MenuForms";
import MenuIcon from "./components/MenuIcon";
import MenuButtons from "./components/MenuButtons";
import styled from "styled-components";
import { COLORS } from "../../utils/theme";
import { useView } from "./header-hooks";
import Loader from "../../components/Loader";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${COLORS.primaryDark};
`;

const Header = ({ status, setStatus, isRequesting }) => {
  const [loggedIn, setLoggedIn] = useState(status.authenticated);

  const {
    view,
    openLoginForm,
    closeMenuForms,
    openRegisterForm,
    toggleForms,
    showUserBox,
    hideUserBox,
    showLoader,
    hideLoader,
  } = useView();

  useEffect(() => {
    setLoggedIn(status.authenticated);
    loggedIn ? showUserBox() : hideUserBox();
  }, [status]);

  return (
    <StyledHeader>
      <Logo />
      {isRequesting ? (
        <Loader />
      ) : (
        <>
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
              showLoader={showLoader}
              hideLoader={hideLoader}
            />
          )}
          {view.userBox && (
            <UserBox
              setLoggedIn={setLoggedIn}
              setStatus={setStatus}
              showLoader={showLoader}
              hideLoader={hideLoader}
            />
          )}
        </>
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
  isRequesting: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    isRequesting: state.userReducer.isRequesting,
  };
};

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Header);

import React, { useEffect } from "react";
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

const Header = ({ isRequesting, authenticated, register }) => {
  const {
    view,
    openLoginForm,
    closeMenuForms,
    openRegisterForm,
    toggleForms,
    showLoader,
    hideLoader,
  } = useView();

  useEffect(() => {
    if (authenticated) closeMenuForms();
  }, [authenticated, register]);

  return (
    <StyledHeader>
      <Logo />
      {isRequesting ? (
        <Loader />
      ) : (
        <>
          {!authenticated && (
            <>
              <MenuIcon openLoginForm={openLoginForm} />
              <MenuButtons
                openRegisterForm={openRegisterForm}
                openLoginForm={openLoginForm}
              />
            </>
          )}
          {view.menuForms && !authenticated && (
            <MenuForms
              onClose={closeMenuForms}
              toggleForms={toggleForms}
              view={view}
              showLoader={showLoader}
              hideLoader={hideLoader}
            />
          )}
          {authenticated && <UserBox showLoader={showLoader} />}
        </>
      )}
    </StyledHeader>
  );
};

Header.propTypes = {
  isRequesting: PropTypes.bool.isRequired,
  authenticated: PropTypes.bool.isRequired,
  register: PropTypes.bool,
};

const mapStateToProps = ({ userReducer }) => ({
  isRequesting: userReducer.isRequesting,
  authenticated: userReducer.authenticated,
  regiseter: userReducer.register,
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Header);

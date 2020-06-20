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

const Header = ({ isRequesting, authenticated }) => {
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
    authenticated ? showUserBox() : hideUserBox();
  }, [authenticated]);

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
              onClose={closeMenuForms}
              toggleForms={toggleForms}
              view={view}
              showLoader={showLoader}
              hideLoader={hideLoader}
            />
          )}
          {view.userBox && <UserBox showLoader={showLoader} />}
        </>
      )}
    </StyledHeader>
  );
};

Header.propTypes = {
  isRequesting: PropTypes.bool.isRequired,
  authenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ userReducer }) => ({
  isRequesting: userReducer.isRequesting,
  authenticated: userReducer.authenticated,
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Header);

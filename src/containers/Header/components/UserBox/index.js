import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextButton from "../../../../components/TextButton";
import { logoutUser } from "../../actions";
import DropdownMenu from "../../../../components/DropdownMenu";

const UserBox = ({ showLoader, logoutUser, username }) => {
  const [isMenuOpen, toggleMenuOpen] = useState(false);

  return (
    <>
      <TextButton
        label={username}
        handleClick={() => toggleMenuOpen(!isMenuOpen)}
      />
      {isMenuOpen && (
        <DropdownMenu
          toggleMenuOpen={() => toggleMenuOpen(!isMenuOpen)}
          logoutUser={logoutUser}
          showLoader={showLoader}
        />
      )}
    </>
  );
};

UserBox.propTypes = {
  showLoader: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
};

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserBox);

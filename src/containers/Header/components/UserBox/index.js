import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextButton from "../../../../components/TextButton";
import { logoutUser } from "../../actions";
import DropdownMenu from "../../../../components/DropdownMenu";

const UserBox = ({ showLoader, logoutUser }) => {
  const [isMenuOpen, toggleMenuOpen] = useState(false);

  return (
    <>
      <TextButton
        label="TEST USER"
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
};

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserBox);

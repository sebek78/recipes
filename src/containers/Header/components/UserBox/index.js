import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextButton from "../../../../components/TextButton";
import { logoutUser } from "../../actions";

const UserBox = ({ showLoader, logoutUser }) => {
  const handleClick = () => {
    showLoader();
    logoutUser();
  };

  return <TextButton label="Wyloguj" handleClick={handleClick} />;
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

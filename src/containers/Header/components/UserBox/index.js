import React from "react";
import PropTypes from "prop-types";
import api from "./../../../../utils/api";
import TextButton from "../../../../components/TextButton";

const UserBox = ({ setLoggedIn, setStatus, showLoader, hideLoader }) => {
  const handleClick = () => {
    showLoader();
    api.post("/logout").then((data) => {
      hideLoader();
      if (!data.authenticated) {
        setLoggedIn(false);
        setStatus({
          authenticated: false,
          username: null,
        });
      }
    });
  };

  return <TextButton label="Wyloguj" handleClick={handleClick} />;
};

UserBox.propTypes = {
  setLoggedIn: PropTypes.func.isRequired,
  setStatus: PropTypes.func.isRequired,
  showLoader: PropTypes.func.isRequired,
  hideLoader: PropTypes.func.isRequired,
};

export default UserBox;

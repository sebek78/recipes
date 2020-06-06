import React from "react";
import PropTypes from "prop-types";
import api from "./../../../../utils/api";
import TextButton from "../../../../components/TextButton";

const UserBox = ({ setLoggedIn, setStatus }) => {
  const handleClick = () => {
    api.post("/logout").then((data) => {
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
};

export default UserBox;

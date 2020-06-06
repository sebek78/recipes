import React, { useState } from "react";
import PropTypes from "prop-types";
import api from "./../../../../utils/api";
import styled from "styled-components";
import InputText from "../../../../components/formComponents/InputText";
import Button from "../../../../components/Button";
import MenuFormButtons from "../../../../components/formComponents/MenuFormButtons";
import TextButton from "../../../../components/TextButton";
import ErrorBox from "../../../../components/formComponents/ErrorBox";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginForm = ({ setLoggedIn, setStatus, toggleForms }) => {
  const [formData, setFormData] = useState({
    login: "",
    password: "",
    error: "",
  });

  const handleChangeLogin = (e) =>
    setFormData({ ...formData, login: e.target.value });
  const handleChangePassword = (e) =>
    setFormData({ ...formData, password: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ ...formData, error: "" });
    api.post("/login", formData).then((data) => {
      if (data.authenticated) {
        setLoggedIn(true);
        setStatus({
          authenticated: data.authenticated,
          username: data.username,
        });
      } else {
        setFormData({ ...formData, error: data.message });
      }
    });
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <InputText
        label="Login"
        value={formData.login}
        handleChange={handleChangeLogin}
      />
      <InputText
        label="Hasło"
        value={formData.password}
        handleChange={handleChangePassword}
        password
      />
      {formData.error.length !== 0 && <ErrorBox text={formData.error} />}
      <MenuFormButtons>
        <TextButton label="Rejestracja" handleClick={toggleForms} />
        <Button label="Zaloguj" handleClick={handleSubmit} submit />
      </MenuFormButtons>
    </StyledForm>
  );
};

LoginForm.propTypes = {
  setLoggedIn: PropTypes.func.isRequired,
  setStatus: PropTypes.func.isRequired,
  toggleForms: PropTypes.func.isRequired,
};

export default LoginForm;

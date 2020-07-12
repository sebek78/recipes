import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";
import InputText from "../../../../components/formComponents/InputText";
import Button from "../../../../components/Button";
import MenuFormButtons from "../../../../components/formComponents/MenuFormButtons";
import TextButton from "../../../../components/TextButton";
import ErrorBox from "../../../../components/formComponents/ErrorBox";
import { loginUser } from "../../actions";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginForm = ({ toggleForms, showLoader, loginUser, message }) => {
  const [formData, setFormData] = useState({
    login: "",
    password: "",
    error: "",
  });

  useEffect(() => {
    if (message) setFormData({ ...formData, error: message });
  }, [message]);

  const handleChangeLogin = (e) =>
    setFormData({ ...formData, login: e.target.value });
  const handleChangePassword = (e) =>
    setFormData({ ...formData, password: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ ...formData, error: "" });
    showLoader();
    loginUser(formData);
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
  toggleForms: PropTypes.func.isRequired,
  showLoader: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
  message: PropTypes.string,
};

const mapStateToProps = ({ userReducer }) => ({
  message: userReducer.message,
});

const mapDispatchToProps = (dispatch) => ({
  loginUser: (data) => dispatch(loginUser(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

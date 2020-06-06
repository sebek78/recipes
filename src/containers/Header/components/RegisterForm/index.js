import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../../../../components/Button";
import MenuFormButtons from "../../../../components/formComponents/MenuFormButtons";
import api from "../../../../utils/api";
import InputText from "../../../../components/formComponents/InputText";
import TextButton from "../../../../components/TextButton";
import ErrorBox from "../../../../components/formComponents/ErrorBox";

const RegisterUser = ({ toggleForms }) => {
  const [formData, setFormData] = useState({
    login: "",
    password: "",
    password2: "",
    error: "",
  });

  const handleChangeLogin = (e) =>
    setFormData({ ...formData, login: e.target.value });
  const handleChangePassword = (e) =>
    setFormData({ ...formData, password: e.target.value });
  const handleChangePassword2 = (e) =>
    setFormData({ ...formData, password2: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ ...formData, error: "" });
    api.post("/register", formData).then((data) => {
      console.log(data);
      if (data.register) {
        // setLoggedIn(true);
        // setStatus({
        //   authenticated: data.authenticated,
        //   username: data.username,
        // });
        setFormData({ ...formData, error: data.message });
      } else {
        setFormData({ ...formData, error: data.message });
      }
    });
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
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
      <InputText
        label="Powtórz hasło"
        value={formData.password2}
        handleChange={handleChangePassword2}
        password
      />
      {formData.error.length !== 0 && <ErrorBox text={formData.error} />}
      <MenuFormButtons>
        <TextButton label="Logowanie" handleClick={toggleForms} />
        <Button label="Zarejestruj" handleClick={handleSubmit} submit />
      </MenuFormButtons>
    </form>
  );
};

RegisterUser.propTypes = {
  toggleForms: PropTypes.func.isRequired,
};

export default RegisterUser;

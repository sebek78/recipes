import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Button from "../../../../components/Button";
import MenuFormButtons from "../../../../components/formComponents/MenuFormButtons";
import InputText from "../../../../components/formComponents/InputText";
import TextButton from "../../../../components/TextButton";
import ErrorBox from "../../../../components/formComponents/ErrorBox";
import { registerUser } from "../../actions";
import { useView } from "../../header-hooks";

const RegisterUser = ({
  toggleForms,
  showLoader,
  hideLoader,
  registerUser,
  isRequesting,
  register,
  message,
}) => {
  const [formData, setFormData] = useState({
    login: "",
    password: "",
    password2: "",
    error: "",
  });

  const { closeMenuForms } = useView();

  useEffect(() => {
    isRequesting ? showLoader() : hideLoader();
    if (register !== null) setFormData({ ...formData, error: message });
    if (register) closeMenuForms();
    if (message === null) setFormData({ ...formData, error: "" });
  }, [isRequesting, register]);

  const handleChangeLogin = (e) =>
    setFormData({ ...formData, login: e.target.value });
  const handleChangePassword = (e) =>
    setFormData({ ...formData, password: e.target.value });
  const handleChangePassword2 = (e) =>
    setFormData({ ...formData, password2: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ ...formData, error: "" });
    registerUser(formData);
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
  showLoader: PropTypes.func.isRequired,
  hideLoader: PropTypes.func.isRequired,
  registerUser: PropTypes.func.isRequired,
  register: PropTypes.bool,
  isRequesting: PropTypes.bool.isRequired,
  message: PropTypes.string,
};

const mapStateToProps = ({ userReducer }) => ({
  message: userReducer.message,
  isRequesting: userReducer.isRequesting,
  register: userReducer.register,
});

const mapDispatchToProps = (dispatch) => ({
  registerUser: (data) => dispatch(registerUser(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterUser);

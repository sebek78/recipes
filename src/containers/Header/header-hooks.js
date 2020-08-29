import { useState } from "react";

export const useView = () => {
  const [view, setView] = useState({
    menuButton: true,
    menuForms: false,
    loginForm: false,
    registerForm: false,
    loader: false,
  });

  const openLoginForm = (e) => {
    e.preventDefault();
    setView({
      ...view,
      menuButton: false,
      menuForms: true,
      loginForm: true,
      registerForm: false,
    });
  };

  const openRegisterForm = (e) => {
    e.preventDefault();
    setView({
      ...view,
      menuButton: false,
      menuForms: true,
      loginForm: false,
      registerForm: true,
    });
  };
  const closeMenuForms = () => {
    setView({
      ...view,
      menuButton: true,
      menuForms: false,
      registerForm: false,
      loginForm: false,
    });
  };

  const toggleForms = (e) => {
    e.preventDefault();
    setView({
      ...view,
      loginForm: !view.loginForm,
      registerForm: !view.registerForm,
    });
  };

  const showLoader = () => setView({ ...view, loader: true });
  const hideLoader = () => setView({ ...view, loader: false });

  return {
    view,
    openLoginForm,
    closeMenuForms,
    openRegisterForm,
    toggleForms,
    showLoader,
    hideLoader,
  };
};

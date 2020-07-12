import { useState } from "react";

export const useView = () => {
  const [view, setView] = useState({
    menuButton: true,
    loginForm: true,
    registerForm: false,
    menuForms: false,
  });

  const openLoginForm = (e) => {
    e.preventDefault();
    setView({ ...view, menuForms: true, menuButton: false });
  };

  const openRegisterForm = (e) => {
    e.preventDefault();
    setView({
      ...view,
      menuForms: true,
      menuButton: false,
      registerForm: true,
      loginForm: false,
      loader: false,
    });
  };
  const closeMenuForms = () => {
    setView({ ...view, menuForms: false, menuButton: true });
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

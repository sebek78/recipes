import React from "react";
import { useLocation } from "react-router-dom";

const PageNotFound = () => {
  let location = useLocation();

  return <>Błąd 404: Nie znaleziony strony na {location.pathname}</>;
};

export default PageNotFound;

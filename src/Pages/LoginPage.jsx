import React from "react";
import useScreenType from "../hooks/useScreenType";
import LoginContainerDesktop from "../Containers/LoginContainer/LoginContainerDesktop";
import LoginContainerMobile from "../Containers/LoginContainer/LoginContainerMobile";

const LoginPage = () => {
  const screen = useScreenType();
  if (screen === "desktop") {
    return <LoginContainerDesktop />;
  } else {
    return <LoginContainerMobile />;
  }
};

export default LoginPage;

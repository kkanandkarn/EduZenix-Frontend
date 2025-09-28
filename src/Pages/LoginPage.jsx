import React, { useEffect, useState } from "react";
import useScreenType from "../hooks/useScreenType";
import LoginContainerDesktop from "../Containers/LoginContainer/LoginContainerDesktop";
import LoginContainerMobile from "../Containers/LoginContainer/LoginContainerMobile";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const authData = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    otp: "",
    password: "",
    authType: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    otp: "",
    password: "",
    authType: "",
  });

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      dispatch(login({ theme }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };
  const handleAuthType = (authType) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      authType: authType,
    }));
  };

  const handleSubmit = () => {
    navigate("/dashboard");
  };

  const screen = useScreenType();
  if (screen === "desktop") {
    return (
      <LoginContainerDesktop
        authData={authData}
        formData={formData}
        setFormData={setFormData}
        errors={errors}
        setErrors={setErrors}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    );
  } else {
    return (
      <LoginContainerMobile
        authData={authData}
        formData={formData}
        setFormData={setFormData}
        errors={errors}
        setErrors={setErrors}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    );
  }
};

export default LoginPage;

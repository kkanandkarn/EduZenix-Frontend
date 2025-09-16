import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useScreenType from "../../hooks/useScreenType";
import ImagePortrait1 from "../../assets/images/login-landscape-1.png";
import ImagePortrait2 from "../../assets/images/login-landscape-2.png";
import { login } from "../../store/authSlice";
import InputBox from "../../Components/Ui/InputBox/InputBox";
import Button from "../../Components/Ui/Button/Button";
import Logo from "../../assets/images/logo.png";
import { LuMoon, LuSun } from "react-icons/lu";

const LoginContainerMobile = ({
  authData,
  formData,
  setFormData,
  errors,
  setErrors,
  handleChange,
  handleSubmit,
}) => {
  const dispatch = useDispatch();

  const handleAuthType = (authType) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      authType: authType,
    }));
  };

  // Theme handling
  useEffect(() => {
    if (authData.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [authData]);

  const handleThemeChange = () => {
    const newTheme = authData.theme === "dark" ? "light" : "dark";
    dispatch(login({ theme: newTheme }));
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200 dark:bg-primary p-4 w-full">
      <div className="bg-white dark:bg-secondry min-h-40 w-full rounded-lg shadow-2xl overflow-y-auto custom-scrollbar  gap-2 items-center justify-center p-4 relative">
        {authData.theme === "dark" ? (
          <button
            className="absolute top-5 right-5 text-xl text-gray-300 border border-sky-600 p-2 rounded-lg cursor-pointer"
            onClick={handleThemeChange}
          >
            <LuMoon />
          </button>
        ) : (
          <button
            className="absolute top-5 right-5 text-xl text-slate-700 border border-slate-600 p-2 rounded-lg cursor-pointer"
            onClick={handleThemeChange}
          >
            <LuSun />
          </button>
        )}
        <div className="w-full flex items-center justify-center">
          {" "}
          <img src={Logo} alt={"Logo"} className="w-20 h-20 " />
        </div>
        <div className="w-full mb-8 flex items-center justify-center">
          {" "}
          <h1 className="text-sky-400 text-2xl my-2 font-bold font-poppins">
            Login
          </h1>
        </div>

        <InputBox
          error={errors.email}
          required={true}
          label={"Enter Email"}
          autoComplete="off"
          value={formData.email}
          name="email"
          onChange={handleChange}
          type="text"
          placeholder="Enter your email"
        />
        {/* Auth type buttons */}
        {formData.authType === "" && (
          <div className="flex flex-col items-center justify-center gap-4">
            <Button
              label={"Login with password"}
              variant="secondry"
              onClick={() => handleAuthType("password")}
            />
            <Button
              label={"Login with OTP"}
              variant="primary"
              onClick={() => handleAuthType("otp")}
            />
          </div>
        )}

        {formData.authType === "otp" && (
          <InputBox
            error={errors.otp}
            required={true}
            label={"Enter OTP"}
            autoComplete="off"
            value={formData.otp}
            name="otp"
            onChange={handleChange}
            type="number"
            placeholder="Enter OTP"
          />
        )}
        {formData.authType === "password" && (
          <InputBox
            error={errors.password}
            required={true}
            label={"Enter Password"}
            autoComplete="off"
            value={formData.password}
            name="password"
            onChange={handleChange}
            type="number"
            placeholder="Enter Password"
          />
        )}

        {(formData.authType === "otp" || formData.authType === "password") && (
          <div className="w-full flex items-center justify-center">
            <Button
              label={"Login"}
              additionalClass={"w-1/2"}
              onClick={handleSubmit}
            />
          </div>
        )}

        {/* Text boxes for OR*/}
        <div className="w-full h-8 mt-4 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center w-[40%]">
            <div className="h-1/2 border-b border-slate-700 dark:border-gray-400 w-full"></div>
          </div>
          <div className="w-[20%] flex items-center justify-center">
            <h1 className="text-slate-700 dark:text-gray-300 font-bold font-poppins">
              OR
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center w-[40%]">
            <div className="h-1/2 border-b border-slate-700 dark:border-gray-400 w-full"></div>
          </div>
        </div>

        {/* Google Signup Button */}
        <div className="w-full flex items-center justify-center">
          <button className="bg-red-500 cursor-pointer  ease-in-out duration-500 px-4 py-2 text-white font-poppins rounded-lg mt-4">
            Sign In with Google
          </button>
        </div>
        <div className="flex items-center justify-center gap-2 font-poppins mt-4">
          <p className="text-slate-700 dark:text-white">
            Don't have an account ?{" "}
          </p>
          <button className="text-sky-400 cursor-pointer hover:underline">
            Sign Up Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginContainerMobile;

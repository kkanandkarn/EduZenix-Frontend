import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useScreenType from "../../hooks/useScreenType";
import ImagePortrait1 from "../../assets/images/login-portrait-1.png";
import ImagePortrait2 from "../../assets/images/login-portrait-2.png";
import { login } from "../../store/authSlice";
import InputBox from "../../Components/Ui/InputBox/InputBox";
import Button from "../../Components/Ui/Button/Button";
import Logo from "../../assets/images/logo.png";
import { LuMoon, LuSun } from "react-icons/lu";

const LoginContainerDesktop = () => {
  const authData = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const images = [ImagePortrait1, ImagePortrait2];
  const screen = useScreenType();
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

  const [index, setIndex] = useState(0);

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
  };

  // Slider logic
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 9000); //9s total cycle

    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <div className="flex h-screen bg-gray-200 dark:bg-primary">
      {/* Image Slider */}
      <div className="relative w-1/2 h-full  overflow-hidden">
        <div
          className="flex h-full transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`slide-${i}`}
              className="w-full h-full object-cover object-center flex-shrink-0"
            />
          ))}
        </div>
        <div className="absolute bottom-5  left-[40%] flex items-center justify-center gap-4">
          <div
            className={`${
              index === 0 ? "w-8 bg-gray-300" : "w-4"
            } h-4 rounded-full border border-gray-300 ease-in-out duration-500`}
          ></div>
          <div
            className={`${
              index === 1 ? "w-8 bg-gray-300" : "w-4"
            } h-4 rounded-full border border-gray-300 ease-in-out duration-500`}
          ></div>
        </div>
      </div>

      {/* Login form*/}
      <div className="w-1/2 h-full flex flex-col items-center justify-center relative">
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

        <div className="w-3/5 flex flex-col gap-2 items-center justify-center bg-white dark:bg-secondry rounded-lg p-6">
          <img src={Logo} alt={"Logo"} className="w-20 h-20 " />
          <h1 className="text-sky-400 text-2xl my-2 font-bold font-poppins">
            Login
          </h1>
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
            <div className="flex items-center justify-center gap-4">
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
              type="password"
              placeholder="Enter Password"
            />
          )}

          {(formData.authType === "otp" ||
            formData.authType === "password") && (
            <div className="w-full flex items-center justify-center">
              <Button label={"Login"} additionalClass={"w-1/2"} />
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
          <div>
            <button className="bg-red-500 cursor-pointer  ease-in-out duration-500 px-4 py-2 text-white font-poppins rounded-lg mt-4">
              Sign In with Google
            </button>
          </div>
          <div className="flex items-center justify-center gap-2 font-poppins mt-2">
            <p className="text-slate-700 dark:text-white">
              Don't have an account ?{" "}
            </p>
            <button className="text-sky-400 cursor-pointer hover:underline">
              Sign Up Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginContainerDesktop;

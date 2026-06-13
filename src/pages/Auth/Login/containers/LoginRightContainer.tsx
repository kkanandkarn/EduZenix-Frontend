import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Button, Divider, Stack } from "@mui/material";
import masterLogo from "../../../../assets/images/sofzenix-logo.png";
import LoginIcon from "@mui/icons-material/Login";
import { Input, AppButton, notifier } from "../../../../components";
import type { LoginFormData, LoginType } from "../type";
import { useNavigate, useSearchParams } from "react-router-dom";
import { MAX_OTP_COUNT, OTP_TIMER } from "../../../../utils/constant";
import LoginTypeButtons from "./LoginTypeButtons";

const LoginRightContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [loginType, setLoginType] = useState<LoginType>(
    (searchParams.get("loginType") as LoginType) ?? "password",
  );

  const [state, setState] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const handleLoginTypeChange = (type: LoginType) => {
    setLoginType(type);

    const params = new URLSearchParams(searchParams);
    params.set("loginType", type);
    setSearchParams(params);
  };

  const [otp, setOtp] = useState<string>("");
  const [otpSent, setOtpSent] = useState<boolean>(false);
  const [otpTimer, setOtpTimer] = useState<number>(0);
  const [sendOtpCount, setSendOtpCount] = useState<number>(0);
  const timerRef = useRef<number | undefined>(undefined);
  const otpEndTimeRef = useRef<number>(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((p) => ({ ...p, [name]: value }));
    setErrors((p) => ({ ...p, [name]: "" }));
  };

  const startOtpTimer = () => {
    clearInterval(timerRef.current);

    otpEndTimeRef.current = Date.now() + OTP_TIMER * 1000;

    const tick = () => {
      const remaining = Math.max(
        0,
        Math.ceil((otpEndTimeRef?.current - Date.now()) / 1000),
      );

      setOtpTimer(remaining);

      if (remaining === 0) {
        clearInterval(timerRef.current);
      }
    };

    tick(); // immediate first render
    timerRef.current = setInterval(tick, 1000);
  };

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);
  const handleSendOtp = async () => {
    if (sendOtpCount >= MAX_OTP_COUNT) {
      notifier.error("Maximum OTP attempts reached.");
      return;
    }

    setOtpSent(true);
    setSendOtpCount(0);
    setSendOtpCount((c) => c + 1);
    startOtpTimer();
  };
  const handleResendOtp = async () => {
    if (otpTimer > 0) return;

    if (sendOtpCount >= MAX_OTP_COUNT) {
      notifier.error("Maximum OTP attempts reached.");
      return;
    }

    setSendOtpCount((c) => c + 1);
    startOtpTimer();
    notifier.success("OTP Resent Successfully.");
  };

  const handleVerifyOtp = async () => {
    notifier.success("OTP Verified Successfully.");
    navigate("/dashboard");
  };
  const handleSubmit = async () => {
    // let error = false;
    // if (!state.email) {
    //   setErrors((p) => ({ ...p, email: "Email is required" }));
    //   error = true;
    // }
    // if (!state.password) {
    //   setErrors((p) => ({ ...p, password: "Password is required" }));
    //   error = true;
    // }
    // if (error) return;
    navigate("/dashboard");
  };

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "50%" }}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Welcome Back
        </Typography>
        <Typography color="text.secondary">
          Access your management dashboard
        </Typography>

        <Box sx={{ mt: 2 }}>
          <LoginTypeButtons
            loginType={loginType}
            setLoginType={handleLoginTypeChange}
          />
        </Box>

        <Stack spacing={1} sx={{ mt: 4 }}>
          <Input
            type={"text"}
            label="Email"
            name="email"
            value={state.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="e.g. john.doe@example.com"
            autoFocus={true}
            required={true}
            disabled={otpSent}
          />
          {loginType === "otp" && !otpSent && (
            <AppButton label="Send OTP" onClick={handleSendOtp} />
          )}
          {loginType === "otp" && otpSent && (
            <>
              <Input type="otp" otp={otp} length={4} onChange={setOtp} />

              <div className="text-sm pb-4 flex justify-center items-center">
                {otpTimer > 0 ? (
                  <span className="text-gray-500">
                    Resend OTP in {otpTimer}s
                  </span>
                ) : (
                  <button
                    className="text-sky-500 cursor-pointer"
                    onClick={handleResendOtp}
                  >
                    Resend OTP
                  </button>
                )}
              </div>

              <AppButton
                startIcon={<LoginIcon />}
                label="Verify OTP & Login"
                onClick={handleVerifyOtp}
                disabled={otp.length !== 4}
              />

              {/* <Button
              label="Verify OTP & Login"
              iconPrfix={<LuLogIn size={18} />}
              onClick={handleVerifyOtp}
              additionalClass="w-full"
              disabled={state.otp.length !== 4}
            /> */}
            </>
          )}

          {loginType === "password" && (
            <>
              <Input
                type="password"
                value={state.password}
                name="password"
                error={errors.password}
                label="Password"
                onChange={handleChange}
                placeholder={"Johndoe@1234"}
                required
              />

              <AppButton
                startIcon={<LoginIcon />}
                label="Login"
                onClick={handleSubmit}
              />
            </>
          )}
        </Stack>

        <Box sx={{ display: "flex", alignItems: "center", my: 3 }}>
          <Divider sx={{ flex: 1 }} />
          <Typography variant="body2" sx={{ mx: 2 }}>
            OR
          </Typography>
          <Divider sx={{ flex: 1 }} />
        </Box>

        <Button
          variant="outlined"
          fullWidth
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            textTransform: "none",
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#EA4335"
              d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.05 17.74 9.5 24 9.5z"
            />
            <path
              fill="#4285F4"
              d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
            />
            <path
              fill="#FBBC05"
              d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
            />
            <path
              fill="#34A853"
              d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-3.55-13.46-8.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
            />
            <path fill="none" d="M0 0h48v48H0z" />
          </svg>
          Continue with Google
        </Button>

        <Stack
          component="div"
          direction="row"
          spacing={1}
          sx={{
            width: "100%",
            mt: 4,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="body2">Powered By</Typography>
          <Box
            component="img"
            src={masterLogo}
            alt="logo"
            sx={{ width: 100, height: 35 }}
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default LoginRightContainer;

import { Box, Typography } from "@mui/material";
import { useState, type SetStateAction } from "react";
import { APP_NAME } from "../../../../utils/constant";
import { getApiErrorMessage } from "../../../../utils/helper";
import { AppAlert, AppButton, Input } from "../../../../components";
import { useVerifyMfaSetupMutation } from "../../../../store/services/mfaApi";
import { useSelector } from "react-redux";
import type { RootState } from "../../../../store";
import { useNavigate } from "react-router-dom";

const CODE_LENGTH = 6;

const MfaVerification = () => {
  const [code, setCode] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [verifyMfa, { isLoading }] = useVerifyMfaSetupMutation();
  const navigate = useNavigate();
  const authData = useSelector((state: RootState) => state.auth.authData);
  // OTP input passes updater functions as well as plain strings
  const handleCodeChange = (otp: SetStateAction<string>) => {
    setError("");
    setCode(otp);
  };
  const handleVerify = async () => {
    if (code.trim().length !== CODE_LENGTH) {
      setError(`Please enter the ${CODE_LENGTH}-digit code`);
      return;
    }
    try {
      await verifyMfa({ code }).unwrap();
      navigate("/dashboard");
    } catch (err) {
      setError(
        getApiErrorMessage(err, "something went wrong. please try again later"),
      );
    }
  };
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: "70%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          MFA Required
        </Typography>
        <Typography color="text.secondary">
          Open your authenticator app and enter the 6-digit code shown for{" "}
          {APP_NAME}
        </Typography>
        <Box
          sx={{
            mt: 4,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Input
            type="otp"
            otp={code}
            length={CODE_LENGTH}
            onChange={handleCodeChange}
          />
        </Box>
      </Box>

      <Box
        sx={{
          mt: 4,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AppButton
          label={
            isLoading
              ? "Verifying..."
              : authData?.mfaCompleted
                ? "Verify MFA Code"
                : "Verify & Complete Setup"
          }
          sx={{ width: "70%" }}
          disabled={isLoading}
          onClick={handleVerify}
        />
      </Box>
      {error && (
        <Box
          sx={{
            mt: 2,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AppAlert variant="outlined" message={error} severity="error" />
        </Box>
      )}
    </Box>
  );
};

export default MfaVerification;

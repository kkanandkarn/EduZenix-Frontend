import { Box, Paper, Typography } from "@mui/material";
import React, { type Dispatch, type SetStateAction } from "react";
import {
  GOOGLE_AUTHENTICATOR_LOGO,
  MS_AUTHENTICATOR_LOGO,
  TWILIO_AUTHENTICATOR_LOGO,
} from "../../../../utils/constant";
import type { MfaStep } from "../type";
import { AppButton } from "../../../../components";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface Props {
  setStep: Dispatch<SetStateAction<MfaStep>>;
}
const MfaApps = ({ setStep }: Props) => {
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
          Set up MFA
        </Typography>
        <Typography color="text.secondary">
          MFA is required to keep your account secure.
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "semibold", fontSize: "1rem" }}
          >
            Download an authenticator app
          </Typography>
          <Box
            sx={{
              mt: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Paper
              elevation={0}
              sx={{
                width: "100%",
                border: "1px solid var(--gray-300)",
                py: 0.5,
                px: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                gap: 2,
              }}
            >
              <Box sx={{ width: "10%" }}>
                <Box
                  component="img"
                  src={MS_AUTHENTICATOR_LOGO}
                  sx={{ width: 35 }}
                />
              </Box>
              <Box sx={{ width: "90%" }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "semibold",
                    fontSize: "1rem",
                    color: "var(--gray-600)",
                  }}
                >
                  Microsoft Authenticator
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "semibold",
                    fontSize: "0.9rem",
                    color: "var(--gray-400)",
                  }}
                >
                  IOS & Android
                </Typography>
              </Box>
            </Paper>
            <Paper
              elevation={0}
              sx={{
                width: "100%",
                border: "1px solid var(--gray-300)",
                py: 0.5,
                px: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                gap: 2,
              }}
            >
              <Box
                component="img"
                src={GOOGLE_AUTHENTICATOR_LOGO}
                sx={{ width: 35 }}
              />
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "semibold",
                    fontSize: "1rem",
                    color: "var(--gray-600)",
                  }}
                >
                  Google Authenticator
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "semibold",
                    fontSize: "0.9rem",
                    color: "var(--gray-400)",
                  }}
                >
                  IOS & Android
                </Typography>
              </Box>
            </Paper>
            <Paper
              elevation={0}
              sx={{
                width: "100%",
                border: "1px solid var(--gray-300)",
                py: 0.5,
                px: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                gap: 2,
              }}
            >
              <Box
                component="img"
                src={TWILIO_AUTHENTICATOR_LOGO}
                sx={{ width: 35 }}
              />
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "semibold",
                    fontSize: "1rem",
                    color: "var(--gray-600)",
                  }}
                >
                  Twilio Authy
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "semibold",
                    fontSize: "0.9rem",
                    color: "var(--gray-400)",
                  }}
                >
                  IOS & Android
                </Typography>
              </Box>
            </Paper>
          </Box>
        </Box>
        <Box sx={{ mt: 4, width: "100%" }}>
          <AppButton
            label="I have an authenticator app"
            endIcon={<ArrowForwardIcon />}
            sx={{ width: "100%" }}
            onClick={() => setStep("mfaSetup")}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default MfaApps;

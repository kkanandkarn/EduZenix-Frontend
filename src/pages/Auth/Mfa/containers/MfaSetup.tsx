import { Box, Divider, Paper, Typography } from "@mui/material";
import { useInitiateMfaSetupQuery } from "../../../../store/services/mfaApi";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { AppButton } from "../../../../components";
import MfaSetupSkeleton from "./MfaSetupSkeleton";
import { type Dispatch, type SetStateAction } from "react";

import type { MfaStep } from "../type";

interface Props {
  setStep: Dispatch<SetStateAction<MfaStep>>;
}
const MfaSetup = ({ setStep }: Props) => {
  const { isLoading, data } = useInitiateMfaSetupQuery();

  if (isLoading) return <MfaSetupSkeleton />;

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
          Scan QR code
        </Typography>
        <Typography color="text.secondary">
          Open your authenticator app and scan this code
        </Typography>
      </Box>
      <Box
        sx={{
          mt: 2,
          width: "70%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={0}
          sx={{
            width: "100%",
            p: 2,
            border: "1px solid var(--gray-200)",
            borderRadius: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src={data?.data.qrCode}
            alt="QR Code"
            sx={{ width: 200, height: 200 }}
          />
          <Typography color="text.secondary" sx={{ fontSize: 12 }}>
            Scan with your authenticator app
          </Typography>
          <Divider sx={{ alignSelf: "stretch", my: 1.5 }} />
          <Typography color="text.secondary" sx={{ fontSize: 12 }}>
            Can't scan? Enter this key manually:
          </Typography>
          {data?.data.secret && (
            <Box
              sx={{
                mt: 1,
                width: "100%",
                py: 1,
                px: 2,
                border: "1px solid var(--gray-200)",
                borderRadius: 2,
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "monospace",
                  fontWeight: "bold",
                  fontSize: 16,
                  letterSpacing: 4,
                  wordBreak: "break-all",
                }}
              >
                {data.data.secret.match(/.{1,4}/g)?.join(" ")}
              </Typography>
            </Box>
          )}
        </Paper>
      </Box>
      <Box
        sx={{
          mt: 2,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AppButton
          label="I've added account"
          sx={{ width: "70%" }}
          endIcon={<ArrowRightAltIcon />}
          onClick={() => setStep("mfaVerification")}
        />
      </Box>
    </Box>
  );
};

export default MfaSetup;

import { Box } from "@mui/material";
import React, { useState } from "react";
import { AppButton, Input } from "../../../../../../components";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";

const SendOnboardingEmailContainer = () => {
  const [email, setEmail] = useState<string>("");
  return (
    <Box
      sx={{
        bgcolor: "var(--gray-100)",
        borderRadius: "14px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 3,
        px: 4,
        gap: 2,
      }}
    >
      <Box sx={{ width: "80%" }}>
        <Input
          type="outline"
          label="Email"
          name="email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          placeholder="admin@instituion.edu"
          fullWidth={true}
          StartIcon={EmailIcon}
          bgColor="white"
        />
      </Box>
      <Box sx={{ width: "20%" }}>
        <AppButton label="Send Email" startIcon={<SendIcon />} />
      </Box>
    </Box>
  );
};

export default SendOnboardingEmailContainer;

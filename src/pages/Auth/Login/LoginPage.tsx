import React from "react";

import { Grid } from "@mui/material";
import { LoginLeftContainer, LoginRightContainer } from "./containers";

const LoginPage: React.FC = () => {
  return (
    <Grid
      sx={{
        display: "flex",
        height: "100vh",
        width: "100%",
      }}
    >
      <Grid sx={{ width: "50%" }}>
        <LoginLeftContainer />
      </Grid>
      <Grid sx={{ width: "50%" }}>
        <LoginRightContainer />
      </Grid>
    </Grid>
  );
};

export default LoginPage;

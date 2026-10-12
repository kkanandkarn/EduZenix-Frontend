import { Grid } from "@mui/material";
import React from "react";
import { LoginLeftContainer } from "./containers";

const MfaPage = () => {
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
      <Grid sx={{ width: "50%" }}>{/* <LoginRightContainer /> */}</Grid>
    </Grid>
  );
};

export default MfaPage;

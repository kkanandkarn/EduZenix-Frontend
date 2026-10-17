import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../../store";
import type { MfaStep } from "../type";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import MfaSetup from "./MfaSetup";
import MfaApps from "./MfaApps";
import MfaVerification from "./MfaVerification";

const MfaContainer = () => {
  const authData = useSelector((state: RootState) => state.auth.authData);
  const [step, setStep] = useState<MfaStep>("mfaApps");
  const navigate = useNavigate();

  useEffect(() => {
    const requireMfa = authData?.role.requireMfa || authData?.requireMfa;
    const mfaCompleted = authData?.mfaCompleted;
    if (!requireMfa) navigate("/dashboard");

    if (mfaCompleted) setStep("mfaVerification");
  }, [authData]);

  switch (step) {
    case "mfaApps":
      return <MfaApps setStep={setStep} />;
    case "mfaSetup":
      return <MfaSetup setStep={setStep} />;
    case "mfaVerification":
      return <MfaVerification />;
  }
};

export default MfaContainer;

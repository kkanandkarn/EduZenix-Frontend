import React from "react";
import { generateBreadcrumbs } from "../../features/Breadcrumbs/breadcrumbs";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const BreadCrumbs = () => {
  const breadcrumbs = generateBreadcrumbs();
  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
    >
      {breadcrumbs}
    </Breadcrumbs>
  );
};

export default BreadCrumbs;

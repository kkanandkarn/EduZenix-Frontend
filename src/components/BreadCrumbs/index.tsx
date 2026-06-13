import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useBreadcrumbs } from "../../hooks/useBreadcrumbs";

const BreadCrumbs = () => {
  const breadcrumbs = useBreadcrumbs();
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

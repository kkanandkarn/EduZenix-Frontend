import { Chip } from "@mui/material";
import { toTitleCase } from "../../../../utils/helper";

interface Props {
  packageStatus: string;
}

const PackageStatusChip = ({ packageStatus }: Props) => {
  const getStatusStyle = (status: string) => {
    const normalized = status.toLowerCase();

    switch (normalized) {
      case "active":
        return {
          bgcolor: "var(--green-200)",
          color: "success.main",
        };

      case "inactive":
      case "hold":
      case "suspended":
      case "expired":
        return {
          bgcolor: "var(--red-200)",
          color: "error.main",
        };

      case "freetrial":
        return {
          bgcolor: "var(--yellow-200)",
          color: "warning.main",
        };

      default:
        return {
          bgcolor: "grey.200",
          color: "grey.600",
        };
    }
  };
  return (
    <Chip
      label={toTitleCase(packageStatus)}
      size="small"
      sx={{
        borderRadius: "999px",
        fontSize: 11,
        ...getStatusStyle(packageStatus),
      }}
    />
  );
};

export default PackageStatusChip;

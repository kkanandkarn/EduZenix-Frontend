import { Box, Typography } from "@mui/material";
import type { UniversityDetails } from "../../types";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import LocationCityOutlinedIcon from "@mui/icons-material/LocationCityOutlined";
import DomainOutlinedIcon from "@mui/icons-material/DomainOutlined";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationPinIcon from "@mui/icons-material/LocationPin";

import { DetailsChip } from "../../../containers";
import UniversityDetailsAuthor from "./UniversityDetailsAuthor";

interface Props {
  data: UniversityDetails;
}

const UniversityDetailsDialogContent = ({ data }: Props) => {
  const administrativeDetails = [
    {
      label: "State",
      value: data.state,
      icon: MapOutlinedIcon,
    },
    {
      label: "District",
      value: data.district,
      icon: LocationCityOutlinedIcon,
    },
    {
      label: "Location",
      value: data.location,
      icon: DomainOutlinedIcon,
    },
  ];
  const contactDetails = [
    {
      label: "Phone",
      value: data.contact,
      icon: LocalPhoneIcon,
    },
    {
      label: "Email",
      value: data.email,
      icon: EmailIcon,
    },
    {
      label: "Address",
      value: data.address,
      icon: LocationPinIcon,
    },
  ];
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          px: 4,
          py: 1,
        }}
      >
        <Box sx={{ width: "50%" }}>
          <Box
            sx={{
              borderLeft: "4px solid var(--blue-600)",
              px: 2,
            }}
          >
            <Typography variant="body1" sx={{ color: "var(--slate-600)" }}>
              Administrative Details
            </Typography>
          </Box>
          <Box sx={{ gap: 2 }}>
            {administrativeDetails?.map((details) => (
              <Box sx={{ mt: 3 }} key={details.value}>
                <DetailsChip
                  icon={details.icon}
                  label={details.label}
                  value={details.value}
                />
              </Box>
            ))}
          </Box>
        </Box>
        <Box sx={{ width: "50%" }}>
          <Box
            sx={{
              borderLeft: "4px solid var(--blue-600)",
              px: 2,
            }}
          >
            <Typography variant="body1" sx={{ color: "var(--slate-600)" }}>
              Contact Information
            </Typography>
          </Box>
          <Box sx={{ gap: 2 }}>
            {contactDetails?.map((details) => (
              <Box sx={{ mt: 3 }} key={details.value}>
                <DetailsChip
                  icon={details.icon}
                  label={details.label}
                  value={details.value}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box sx={{ mt: 4, px: 4 }}>
        {data.author && <UniversityDetailsAuthor author={data.author} />}
      </Box>
    </>
  );
};

export default UniversityDetailsDialogContent;

import { Box, Typography } from "@mui/material";
import type { SchoolDetails } from "../../types";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import LocationCityOutlinedIcon from "@mui/icons-material/LocationCityOutlined";
import DomainOutlinedIcon from "@mui/icons-material/DomainOutlined";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationPinIcon from "@mui/icons-material/LocationPin";

import { DetailsChip } from "../../../containers";
import SchoolDetailsAuthor from "./SchoolDetailsAuthor";

import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import NaturePeopleOutlinedIcon from "@mui/icons-material/NaturePeopleOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";

interface Props {
  data: SchoolDetails;
}

const SchoolDetailsDialogContent = ({ data }: Props) => {
  // LGD Stands for local government body
  const administrativeDetails = [
    {
      label: "State",
      value: data.stateName,
      icon: MapOutlinedIcon,
    },
    {
      label: "District",
      value: data.districtName,
      icon: LocationCityOutlinedIcon,
    },
    {
      label: "Block",
      value: data.lgdblockName,
      icon: GridViewOutlinedIcon,
    },
    {
      label: "Cluster (Sankul)",
      value: data.clusterName,
      icon: HubOutlinedIcon,
    },
    {
      label: "Village",
      value: data.villageName,
      icon: CottageOutlinedIcon,
    },
    {
      label: "Panchayat",
      value: data.lgdvillpanchayatName,
      icon: AccountBalanceOutlinedIcon,
    },
    {
      label: "Location",
      value: data.schLocDesc,
      icon: NaturePeopleOutlinedIcon,
    },

    {
      label: "School Management",
      value: data.schMgmtDesc,
      icon: DomainOutlinedIcon,
    },
    {
      label: "School Category",
      value: data.schCatDesc,
      icon: SchoolOutlinedIcon,
    },
    {
      label: "School Type",
      value: data.schTypeDesc,
      icon: PeopleAltOutlinedIcon,
    },
  ];
  const contactDetails = [
    {
      label: "Phone",
      value: data.phone,
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
        {data.author && <SchoolDetailsAuthor author={data.author} />}
      </Box>
    </>
  );
};

export default SchoolDetailsDialogContent;

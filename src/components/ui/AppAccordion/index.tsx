import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
interface Props {
  id: number | string;
  label: string;
  children: React.ReactNode;
}

const AppAccordion = ({ id, label, children }: Props) => {
  return (
    <Accordion
      elevation={0}
      disableGutters // ← prevents layout shift on expand
      square // ← removes rounded corners so borders align flush
      sx={{
        width: "100%",
        "&:before": { display: "none" }, // ← removes MUI's default divider pseudo-element
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${id}-panel1-content`}
        id={`${id}-panel1-header`}
      >
        <Typography component="span">{label}</Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

export default AppAccordion;

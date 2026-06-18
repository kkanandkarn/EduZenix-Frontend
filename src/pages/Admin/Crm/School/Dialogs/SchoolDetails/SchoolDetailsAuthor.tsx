import { Box, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import type { SchoolAuthorDetails } from "../../types";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

interface Props {
  author: SchoolAuthorDetails;
}
const CollegeDetailsAuthor = ({ author }: Props) => {
  return (
    <Box sx={{ bgcolor: "var(--gray-100)", p: 2, borderRadius: "8px" }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <PersonIcon sx={{ fontSize: "14px", color: "var(--slate-600)" }} />
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography variant="body2" sx={{ color: "var(--slate-600)" }}>
              Created By:
            </Typography>
            <Typography variant="body2" sx={{ color: "var(--slate-900)" }}>
              {author.createdBy}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <AccessTimeIcon
            sx={{ fontSize: "14px", color: "var(--slate-600)" }}
          />
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography variant="body2" sx={{ color: "var(--slate-600)" }}>
              Last Updated:
            </Typography>
            <Typography variant="body2" sx={{ color: "var(--slate-900)" }}>
              {author.updatedAt}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
        <InfoOutlinedIcon
          sx={{ fontSize: "14px", color: "var(--slate-600)" }}
        />
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="body2" sx={{ color: "var(--slate-600)" }}>
            Internal Remarks:
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "var(--slate-900)", fontStyle: "italic" }}
          >
            "{author.remarks}"
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CollegeDetailsAuthor;

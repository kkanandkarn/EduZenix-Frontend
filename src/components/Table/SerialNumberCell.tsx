import { Box, Typography } from "@mui/material";

interface SerialNumberCellProps {
  rowIndex: number;
  pageNo: number;
  pageSize: number;
}

const SerialNumberCell = ({
  rowIndex,
  pageNo,
  pageSize,
}: SerialNumberCellProps) => {
  const serialNumber = (pageNo - 1) * pageSize + rowIndex + 1;

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography sx={{ fontWeight: 500, color: "var(--color-slate-600)" }}>
        {serialNumber}
      </Typography>
    </Box>
  );
};
export default SerialNumberCell;

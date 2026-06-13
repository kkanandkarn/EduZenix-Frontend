import * as React from "react";
import { styled, type SxProps, type Theme } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import type { DialogProps } from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import type { TransitionProps } from "@mui/material/transitions";
import { Box } from "@mui/material";

const BootstrapDialog = styled(Dialog)<DialogProps>(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

// ✅ Removed `any` — use ReactElement without type args (defaults to valid types)
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface AppDialogProps {
  open: boolean;
  handleClose: () => void;
  title?: React.ReactNode;
  content?: React.ReactNode;
  actions?: React.ReactNode;
  sx?: SxProps<Theme>;
  titleBgColor?: string;
  contentBgColor?: string;
  actionsBgColor?: string;
}

export default function AppDialog({
  open,
  handleClose,
  title,
  content,
  actions,
  sx,
  titleBgColor,
  contentBgColor,
  actionsBgColor,
}: Readonly<AppDialogProps>) {
  return (
    <BootstrapDialog
      // ✅ Only set aria-labelledby when the title element will actually be rendered
      aria-labelledby={title ? "customized-dialog-title" : undefined}
      onClose={handleClose}
      open={open}
      slotProps={{ paper: { sx } }}
      slots={{ transition: Transition }}
    >
      {title ? (
        <Box sx={{ bgcolor: titleBgColor ?? "inherit" }}>
          <Box sx={{ px: 3 }}>
            <DialogTitle
              sx={{ m: 0, px: 2, py: 3 }}
              id="customized-dialog-title"
            >
              {title}
            </DialogTitle>
          </Box>

          {/* ✅ Close button co-located with title so it only renders when title exists */}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={(theme) => ({
              position: "absolute",
              right: 10,
              top: 20,
              color: theme.palette.grey[500],
            })}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      ) : null}

      {/* ✅ Removed `dividers` — manual Dividers above/below already handle separation */}
      {content && (
        <DialogContent sx={{ bgcolor: contentBgColor ?? "inherit" }}>
          {content}
        </DialogContent>
      )}

      {actions && (
        <Box sx={{ bgcolor: actionsBgColor ?? "", py: 1 }}>
          <DialogActions>{actions}</DialogActions>
        </Box>
      )}
    </BootstrapDialog>
  );
}

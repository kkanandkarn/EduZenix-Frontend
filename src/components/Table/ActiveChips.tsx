import { Box, Button, Chip, Typography } from "@mui/material";
import type { AppliedFilter } from "./filterUtils";
import {
  activeChipSx,
  chipsRowSx,
  clearAllButtonSx,
  chipsLabelSx,
} from "./tableStyles";

interface Props {
  filters: AppliedFilter[];
  /** Description of the live sort, e.g. "Name (A–Z)". Empty when unsorted. */
  sortLabel?: string;
  onRemoveFilter?: (key: string) => void;
  onClearSort: () => void;
  onClearAll: () => void;
}

/**
 * Summary of what is currently narrowing the table. Each chip drops its own
 * filter or the sort; the trailing button clears everything at once.
 */
const ActiveChips = ({
  filters,
  sortLabel,
  onRemoveFilter,
  onClearSort,
  onClearAll,
}: Props) => {
  return (
    <Box sx={chipsRowSx}>
      <Typography sx={chipsLabelSx}>Applied</Typography>

      {filters.map((filter) => (
        <Chip
          key={filter.key}
          size="small"
          sx={activeChipSx}
          // Without a remove handler the page cannot clear a single filter.
          onDelete={
            onRemoveFilter ? () => onRemoveFilter(filter.key) : undefined
          }
          label={
            <>
              <Box component="span" sx={{ color: "var(--slate-500)" }}>
                {filter.label}:
              </Box>{" "}
              {filter.value}
            </>
          }
        />
      ))}

      {sortLabel && (
        <Chip
          size="small"
          sx={activeChipSx}
          onDelete={onClearSort}
          label={
            <>
              <Box component="span" sx={{ color: "var(--slate-500)" }}>
                Sort:
              </Box>{" "}
              {sortLabel}
            </>
          }
        />
      )}

      <Button variant="text" onClick={onClearAll} sx={clearAllButtonSx}>
        Clear all
      </Button>
    </Box>
  );
};

export default ActiveChips;

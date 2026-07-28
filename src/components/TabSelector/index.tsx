import { Box, Button, Stack, Typography } from "@mui/material";
interface TabOption<T extends string> {
  value: T;
  label: string;
}

interface Props<TName extends string, TValue extends string> {
  name: TName;
  label?: string;
  options: readonly TabOption<TValue>[];
  value: TValue;
  handleChange: (name: TName, value: TValue) => void;
}

const TabSelector = <TName extends string, TValue extends string>({
  name,
  label,
  options,
  value,
  handleChange,
}: Props<TName, TValue>) => {
  const OUTER_PAD = 8;

  const COUNT = options.length;
  const GAP = 4;
  const selectedIndex = options.findIndex((t) => t.value === value);

  return (
    <Stack spacing={1} sx={{ pb: 2 }}>
      {label && <Typography variant="body1">{label}</Typography>}

      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          gap: `${GAP}px`,
          bgcolor: "grey.200",
          width: "100%",
          p: `${OUTER_PAD}px`,
          borderRadius: 2,
          boxSizing: "border-box",
        }}
      >
        {/* Animated Sliding Background */}
        <Box
          sx={{
            position: "absolute",
            top: `${OUTER_PAD}px`,
            left: `${OUTER_PAD}px`,
            height: `calc(100% - ${OUTER_PAD * 2}px)`,
            // Each pill = (100% - 2*pad - (n-1)*gap) / n
            width: `calc((100% - ${OUTER_PAD * 2 + GAP * (COUNT - 1)}px) / ${COUNT})`,
            bgcolor: "white",
            borderRadius: 1.5,
            transition: "transform 0.3s ease-in-out",
            // Each step = pill width + gap
            transform:
              selectedIndex >= 0
                ? `translateX(calc(${selectedIndex} * (100% + ${GAP}px)))`
                : "translateX(0)",
          }}
        />

        {options.map((option) => (
          <Button
            key={option.value}
            onClick={() => handleChange(name, option.value)}
            disableRipple
            sx={{
              position: "relative",
              zIndex: 10,
              flex: 1,
              py: 1,
              minWidth: 0,
              fontWeight: "bold",
              fontSize: "0.75rem",
              letterSpacing: "0.05em",
              borderRadius: 1.5,
              textTransform: "none",
              color: value === option.value ? "primary.main" : "grey.600",
              "&:hover": { bgcolor: "transparent" },
            }}
          >
            {option.label}
          </Button>
        ))}
      </Box>
    </Stack>
  );
};

export default TabSelector;

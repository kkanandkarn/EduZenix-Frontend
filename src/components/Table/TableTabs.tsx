import { Box, Tab, Tabs } from "@mui/material";
import { TAB_COUNT_COLORS } from "./constants";
import { tabSx, tabsRowSx, tabsSx } from "./tableStyles";
import type { TableTab } from "./types";

interface Props {
  tabs: TableTab[];
  value: string;
  onChange: (value: string) => void;
}

/** Status tabs pinned to the top of the table card, each with its own count. */
const TableTabs = ({ tabs, value, onChange }: Props) => {
  return (
    <Box sx={tabsRowSx}>
      <Tabs
        value={value}
        onChange={(_, newValue: string) => onChange(newValue)}
        variant="scrollable"
        scrollButtons="auto"
        sx={tabsSx}
      >
        {tabs.map((tab) => {
          const pill = TAB_COUNT_COLORS[tab.color ?? "default"];

          return (
            <Tab
              key={tab.value}
              value={tab.value}
              disableRipple
              sx={tabSx}
              label={
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 0.75 }}
                  component="span"
                >
                  {tab.label}

                  {tab.count !== undefined && (
                    <Box
                      component="span"
                      sx={{
                        px: 0.75,
                        py: 0.125,
                        minWidth: 20,
                        textAlign: "center",
                        backgroundColor: pill.bg,
                        color: pill.color,
                        borderRadius: "999px",
                        fontSize: "0.6875rem",
                        fontWeight: 600,
                        lineHeight: 1.6,
                      }}
                    >
                      {tab.count}
                    </Box>
                  )}
                </Box>
              }
            />
          );
        })}
      </Tabs>
    </Box>
  );
};

export default TableTabs;

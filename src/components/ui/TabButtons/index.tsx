import { Box, Tab, Tabs } from "@mui/material";
import type { TabsProps } from "../type";

const TabButtons = ({ value, tabs, onChange }: TabsProps) => {
  return (
    <Tabs value={value} onChange={onChange}>
      {tabs.map((tab, index) => (
        <Tab
          key={tab.value}
          value={tab.value}
          wrapped
          label={
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <span>{tab.label}</span>

              {tab.count !== undefined && (
                <Box
                  component="span"
                  sx={{
                    px: 1,
                    py: 0.25,
                    minWidth: 24,
                    textAlign: "center",
                    bgcolor: "var(--blue-100)",
                    borderRadius: "999px",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    lineHeight: 1.5,
                  }}
                >
                  {tab.count}
                </Box>
              )}
            </Box>
          }
          sx={{
            mr: index < tabs.length - 1 ? 1 : 0,
          }}
        />
      ))}
    </Tabs>
  );
};

export default TabButtons;

import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import type { TabsProps } from "../type";

const LoginTypeTabs = ({ value, tabs, onChange }: TabsProps) => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "#e5e7eb", // gray-200
        borderRadius: "10px",
        padding: "4px",
      }}
    >
      <Tabs
        value={value}
        onChange={onChange}
        slotProps={{
          indicator: {
            style: {
              height: "100%",
              borderRadius: "8px",
              backgroundColor: "#fff",
              transition: "all 0.3s ease",
            },
          },
        }}
        sx={{
          minHeight: "auto",
          "& .MuiTabs-flexContainer": {
            position: "relative",
            zIndex: 1,
          },
        }}
      >
        {tabs.map((tab) => (
          <Tab
            key={tab.value}
            value={tab.value}
            label={tab.label}
            disableRipple
            sx={{
              flex: 1,
              minHeight: "40px",
              fontWeight: 600,
              textTransform: "none",
              color: "#6b7280", // gray-500
              zIndex: 2,
              transition: "color 0.3s",

              "&.Mui-selected": {
                color: "#0ea5e9", // sky-500
              },
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default LoginTypeTabs;

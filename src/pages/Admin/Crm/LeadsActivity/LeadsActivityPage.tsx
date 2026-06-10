import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import {
  BreadCrumbs,
  TableTopBar,
  FilterRenderer,
} from "../../../../components";
import {
  LeadsProfile,
  LeadActivityMetricsCard,
  LeadsActivityTable,
} from "./containers";

import type { LeadActivityFilters, TableFilters, TableState } from "./types";

const LeadsActvityPage = () => {
  const initialFilters: LeadActivityFilters = {
    institutionType: "",
    state: "",
    district: "",
    status: "",
    rating: 0,
    date: null,
  };
  const [state, setState] = useState<TableState>({
    search: "",
    sortColumn: "",
    sortOrder: "asc",
    pageNo: 1,
    pageSize: 10,
  });
  const [filters, setFilters] = useState<LeadActivityFilters>(initialFilters);
  const columnFilters: TableFilters[] = [
    {
      key: "tenantType",
      dataType: "SingleSelect",
      label: "Institution Type",
      options: [
        {
          value: 1,
          label: "University",
        },
        {
          value: 2,
          label: "College",
        },
        {
          value: 3,
          label: "School",
        },
        {
          value: 4,
          label: "Other Institutions",
        },
      ],
    },

    {
      key: "rating",
      dataType: "SingleSelect",
      label: "Ratings",
      options: [
        {
          value: 1,
          label: "1",
        },
        {
          value: 2,
          label: "2",
        },
        {
          value: 3,
          label: "3",
        },
        {
          value: 4,
          label: "4",
        },
        {
          value: 5,
          label: "5",
        },
      ],
    },
    {
      key: "status",
      dataType: "SingleSelect",
      label: "Status",
      options: [
        {
          value: 1,
          label: "Converted",
        },
        {
          value: 2,
          label: "Under Negotiation",
        },
        {
          value: 3,
          label: "Revisit",
        },
      ],
    },
  ];

  const handleChange = (name: keyof TableState, value: string | number) => {
    setState((p: TableState) => ({ ...p, [name]: value }));
  };

  const handleApplyFilter = () => {
    console.log("APPLIED FILTERS: ", filters);
  };
  const handleResetFilters = () => {
    setFilters(initialFilters);
  };

  return (
    <Box sx={{ paddingY: 2, paddingX: 4 }}>
      {" "}
      <BreadCrumbs />
      <Box sx={{ marginY: 2 }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: "semibold", color: "var(--slate-800)" }}
        >
          Lead Activity
        </Typography>
        <Typography className="text-slate-600">
          Track and analyze Consultant performance, follow-ups, and conversion
          behavior.
        </Typography>
      </Box>
      <LeadsProfile />
      <LeadActivityMetricsCard />
      <TableTopBar
        search={state.search}
        setSearch={(value) => handleChange("search", value)}
        filterComponent={
          <FilterRenderer
            columnFilters={columnFilters}
            appliedFilters={filters}
            setAppliedFilters={setFilters}
          />
        }
        handleApplyFilter={handleApplyFilter}
        handleResetFilters={handleResetFilters}
      />
      <LeadsActivityTable tableState={state} handleChange={handleChange} />
    </Box>
  );
};

export default LeadsActvityPage;

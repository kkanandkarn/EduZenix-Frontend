import { Box } from "@mui/material";
import { useState } from "react";
import { TopBar } from "../../../../components";
import type { SortColumn } from "../../../../components";
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

  const sortColumns: SortColumn[] = [
    { key: "tenantName", label: "Institution Name" },
    { key: "tenantType", label: "Institution Type" },
    { key: "ratings", label: "Ratings" },
    { key: "status", label: "Status" },
    { key: "date", label: "Date" },
  ];

  const handleChange = (name: keyof TableState, value: string | number) => {
    setState((p: TableState) => ({ ...p, [name]: value }));
  };

  const handleApplyFilter = (applied: object) => {
    setFilters(applied as typeof initialFilters);
    console.log("APPLIED FILTERS: ", applied);
  };
  const handleResetFilters = () => {
    setFilters(initialFilters);
  };
  const handleRemoveFilter = (key: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: initialFilters[key as keyof typeof initialFilters],
    }));
  };

  return (
    <>
      <TopBar
        title="Lead Activity"
        description="Track and analyze Consultant performance, follow-ups, and conversion behavior."
        back={{ name: "Lead Distribution", route: "/leads" }}
      />
      <Box sx={{ paddingY: 2, paddingX: 4 }}>
        <LeadsProfile />
        <LeadActivityMetricsCard />
        <Box sx={{ mt: 3 }}>
          <LeadsActivityTable
            tableState={state}
            handleChange={handleChange}
            toolbar={{
              showSearch: true,
              searchPlaceholder: "Search by institution name etc",
              sortColumns,
              appliedFilters: filters,
              columnFilters,
              onRemoveFilter: handleRemoveFilter,
              handleApplyFilter,
              handleResetFilters,
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default LeadsActvityPage;

import { Box } from "@mui/material";
import { useState } from "react";
import { TopBar } from "../../../../components";
import type { SortColumn, TableTab } from "../../../../components";
import type {
  TableFilters,
  TableState,
  UniversityFilters,
  SearchColumn,
} from "./types";

import { UniversityStats, UniversityTable } from "./containers";

const CrmUniversityPage = () => {
  const initialFilters: UniversityFilters = {
    state: null,
    district: null,
    establishedYear: null,
    location: null,
  };
  const [state, setState] = useState<TableState>({
    search: "",
    searchColumn: "name",
    sortColumn: "",
    sortOrder: "asc",
    pageNo: 1,
    pageSize: 10,
  });
  const [filters, setFilters] = useState(initialFilters);
  const searchColumns: SearchColumn[] = [
    { key: "name", label: "Name", default: true },
    { key: "email", label: "Email" },
    { key: "phone", label: "Phone" },
  ];
  const [status, setStatus] = useState<string>("pending");

  const columnFilters: TableFilters[] = [
    {
      key: "state",
      dataType: "MultiSelect",
      label: "State",
      options: [
        {
          value: 1,
          label: "Bihar",
        },
        {
          value: 2,
          label: "Delhi",
        },
        {
          value: 3,
          label: "Haryana",
        },
        {
          value: 4,
          label: "Madhya Pradesh",
        },
        {
          value: 5,
          label: "Haryana",
        },
      ],
    },
    {
      key: "district",
      dataType: "MultiSelect",
      label: "City",
      options: [
        {
          value: 1,
          label: "Aara",
        },
        {
          value: 2,
          label: "Darbhanga",
        },
        {
          value: 3,
          label: "Hajipur",
        },
        {
          value: 4,
          label: "Madhubani",
        },
        {
          value: 5,
          label: "Patna",
        },
      ],
    },
    {
      key: "establishedYear",
      dataType: "NumericRange",
      label: "Established Year",
    },
    {
      key: "location",
      dataType: "SingleSelect",
      label: "Location",
      options: [
        {
          value: 1,
          label: "Urban",
        },
        {
          value: 2,
          label: "Rural",
        },
      ],
    },
  ];

  const tabs: TableTab[] = [
    {
      value: "pending",
      label: "Pending",
      count: 1250,
      color: "warning",
    },
    {
      value: "requestedToAdmin",
      label: "Requested to Admin",
      count: 10,
      color: "info",
    },
    {
      value: "approved",
      label: "Approved",
      count: 20,
      color: "success",
    },
    {
      value: "rejected",
      label: "Rejected",
      count: 30,
      color: "error",
    },
  ];
  const sortColumns: SortColumn[] = [
    { key: "name", label: "Name" },
    { key: "state", label: "State" },
    { key: "district", label: "City" },
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
        title="University Management"
        description="Manage and track university accreditation status"
      />
      <Box sx={{ paddingY: 2, paddingX: 4 }}>
        <UniversityStats />
        <Box sx={{ mt: 3 }}>
          <UniversityTable
            tableState={state}
            handleChange={handleChange}
            toolbar={{
              tabs,
              activeTab: status,
              onTabChange: setStatus,
              searchColumns,
              searchPlaceholder: "Search by name, email, phone etc",
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

export default CrmUniversityPage;

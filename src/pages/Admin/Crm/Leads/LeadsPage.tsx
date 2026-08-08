import { Box } from "@mui/material";
import { useState } from "react";
import { TopBar } from "../../../../components";
import type { SortColumn } from "../../../../components";
import type { LeadsFilters, TableFilters, TableState } from "./types";
import { LeadsTable, LeadDistributionMetricsCard } from "./containers";
import type { SearchColumn } from "../../../../components/ui/type";

const LeadsPage = () => {
  const initialFilters: LeadsFilters = {
    consultantRole: [],
    assignedLeads: null,
    pendingLeads: null,
    completedLeads: null,
  };
  const [state, setState] = useState<TableState>({
    search: "",
    searchColumn: "consultantName",
    sortColumn: "",
    sortOrder: "asc",
    pageNo: 1,
    pageSize: 10,
  });
  const [filters, setFilters] = useState(initialFilters);

  const searchColumns: SearchColumn[] = [
    { key: "consultantName", label: "Name", default: true },
    { key: "consultantEmail", label: "Email" },
    { key: "consultantPhone", label: "Phone" },
  ];
  const sortColumns: SortColumn[] = [
    { key: "consultant", label: "Consultant" },
    { key: "assignedLeads", label: "Assigned" },
    { key: "completedLeads", label: "Completed" },
    { key: "pendingLeads", label: "Pending" },
  ];
  const columnFilters: TableFilters[] = [
    {
      key: "consultantRole",
      dataType: "MultiSelect",
      label: "Role",
      options: [
        {
          value: 1,
          label: "Senior Counselor",
        },
        {
          value: 2,
          label: "Junior Counselor",
        },
        {
          value: 3,
          label: "Regional Manager",
        },
        {
          value: 4,
          label: "Sales Associate",
        },
        {
          value: 5,
          label: "Sales Executive",
        },
      ],
    },
    { key: "assignedLeads", dataType: "NumericRange", label: "Assigned Leads" },
    { key: "pendingLeads", dataType: "NumericRange", label: "Pending Leads" },
    {
      key: "completedLeads",
      dataType: "NumericRange",
      label: "Completed Leads",
    },
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
        title="Lead Distribution"
        description="Manage and monitor Consultant performance and lead conversion pipeline."
      />
      <Box sx={{ paddingY: 2, paddingX: 4 }}>
        <LeadDistributionMetricsCard />
        <Box sx={{ mt: 3 }}>
          <LeadsTable
            tableState={state}
            handleChange={handleChange}
            toolbar={{
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

export default LeadsPage;

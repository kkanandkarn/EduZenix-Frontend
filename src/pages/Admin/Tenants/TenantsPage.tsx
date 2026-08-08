import { Box } from "@mui/material";
import { useState } from "react";
import { AppButton, TopBar } from "../../../components";
import type { SortColumn } from "../../../components";
import { TenantsMetricsCard, TenantsTable } from "./containers";
import type {
  SearchColumn,
  TableFilters,
  TableState,
  TenantsFilters,
} from "./types";
import HandshakeIcon from "@mui/icons-material/Handshake";
import { useNavigate } from "react-router-dom";

const TenantsPage = () => {
  const navigate = useNavigate();
  const initialFilters: TenantsFilters = {
    status: null,
    expireDate: null,
    type: null,
  };
  const [state, setState] = useState<TableState>({
    search: "",
    searchColumn: "name",
    sortColumn: "",
    sortOrder: "asc",
    pageNo: 1,
    pageSize: 10,
  });
  const [filters, setFilters] = useState<TenantsFilters>(initialFilters);

  const searchColumns: SearchColumn[] = [
    { key: "name", label: "Name", default: true },
    { key: "poc", label: "POC" },
    { key: "email", label: "Email" },
    { key: "phone", label: "Phone" },
  ];
  const columnFilters: TableFilters[] = [
    {
      key: "type",
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
          label: "Other Insitution",
        },
      ],
    },
    {
      key: "packageStatus",
      dataType: "SingleSelect",
      label: "status",
      options: [
        {
          value: 1,
          label: "Active",
        },
        {
          value: 2,
          label: "Hold",
        },
        {
          value: 3,
          label: "Suspended",
        },
        {
          value: 4,
          label: "Expired",
        },
      ],
    },
    {
      key: "expireDate",
      dataType: "DateRange",
      label: "Expired At",
    },
  ];
  const sortColumns: SortColumn[] = [
    { key: "name", label: "Name" },
    { key: "poc", label: "POC" },
    { key: "packageStatus", label: "Status" },
    { key: "expireDate", label: "Expired At" },
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
        title="Tenant partners"
        description=" Manage and monitor tenant's subscriptions across the ecosystem"
        actions={
          <AppButton
            label="Add New Tenant"
            startIcon={<HandshakeIcon />}
            onClick={() => navigate("/tenants/add")}
          />
        }
      />
      <Box sx={{ paddingY: 2, paddingX: 4 }}>
        <TenantsMetricsCard />
        <Box sx={{ mt: 3 }}>
          <TenantsTable
            tableState={state}
            handleChange={handleChange}
            toolbar={{
              searchColumns,
              searchPlaceholder: "Search by name, POC, email etc",
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

export default TenantsPage;

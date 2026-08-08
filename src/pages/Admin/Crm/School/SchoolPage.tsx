import { useState } from "react";
import type {
  SchoolsFilter,
  SearchColumn,
  TableFilters,
  TableState,
} from "./types";
import { Box } from "@mui/material";
import { TopBar } from "../../../../components";
import type { SortColumn, TableTab } from "../../../../components";
import { SchoolsTable, SchoolStats } from "./containers";

const SchoolPage = () => {
  const initialFilters: SchoolsFilter = {
    stateName: null,
    districtName: null,
    blockName: null,
    villageName: null,
    schMgmtDesc: null,
    schCatDesc: null,
    schLocDesc: null,
    schTypeDesc: null,
    schMgmtDescSt: null,
    lgdvillName: null,
    lgdvillpanchayatName: null,
    lgdblockName: null,
  };
  const [state, setState] = useState<TableState>({
    search: "",
    searchColumn: "name",
    sortColumn: "",
    sortOrder: "asc",
    pageNo: 1,
    pageSize: 10,
  });
  const [filters, setFilters] = useState<SchoolsFilter>(initialFilters);

  const searchColumns: SearchColumn[] = [
    { key: "name", label: "Name", default: true },
    { key: "email", label: "Email" },
    { key: "phone", label: "Phone" },
  ];
  const [status, setStatus] = useState<string>("pending");

  const columnFilters: TableFilters[] = [
    {
      key: "stateName",
      dataType: "MultiSelect",
      label: "State",
      options: [
        {
          value: "BIHAR",
          label: "BIHAR",
        },
        // Add more states as they appear in your data
      ],
    },
    {
      key: "districtName",
      dataType: "MultiSelect",
      label: "District",
      options: [
        {
          value: "MADHUBANI",
          label: "MADHUBANI",
        },
        // Add more districts as they appear in your data
      ],
    },
    {
      key: "blockName",
      dataType: "MultiSelect",
      label: "Block",
      options: [
        {
          value: "PANDAUL",
          label: "PANDAUL",
        },
        {
          value: "LADANIA",
          label: "LADANIA",
        },
        {
          value: "KHUTAUNA",
          label: "KHUTAUNA",
        },
        {
          value: "RAJNAGAR",
          label: "RAJNAGAR",
        },
        {
          value: "PHULPARAS",
          label: "PHULPARAS",
        },
        {
          value: "LAUKAHI",
          label: "LAUKAHI",
        },
      ],
    },
    {
      key: "villageName",
      dataType: "MultiSelect",
      label: "Village",
      options: [
        {
          value: "SAKRI",
          label: "SAKRI",
        },
        {
          value: "MAHTHA",
          label: "MAHTHA",
        },
        {
          value: "JHANJHPATTI ASHA",
          label: "JHANJHPATTI ASHA",
        },
        {
          value: "BIJAYEE",
          label: "BIJAYEE",
        },
        {
          value: "CHICHRI BUJURG",
          label: "CHICHRI BUJURG",
        },
        {
          value: "NAKTI",
          label: "NAKTI",
        },
        {
          value: "PHULPARAS",
          label: "PHULPARAS",
        },
        {
          value: "LAUKAHI",
          label: "LAUKAHI",
        },
        {
          value: "KARMEGH",
          label: "KARMEGH",
        },
      ],
    },
    {
      key: "schMgmtDesc",
      dataType: "MultiSelect",
      label: "School Management",
      options: [
        {
          value: "Private Unaided (Recognized)",
          label: "Private Unaided (Recognized)",
        },
        // Add more management types as they appear in your data
      ],
    },
    {
      key: "schCatDesc",
      dataType: "MultiSelect",
      label: "School Category",
      options: [
        {
          value: "Primary with Upper Primary",
          label: "Primary with Upper Primary",
        },
        {
          value: "Pr. with Up.Pr. Sec. and H.Sec.",
          label: "Pr. with Up.Pr. Sec. and H.Sec.",
        },
        // Add more categories as they appear in your data
      ],
    },
    {
      key: "schLocDesc",
      dataType: "SingleSelect",
      label: "Location",
      options: [
        {
          value: "Rural",
          label: "Rural",
        },
        {
          value: "Urban",
          label: "Urban",
        },
      ],
    },
    {
      key: "schTypeDesc",
      dataType: "MultiSelect",
      label: "School Type",
      options: [
        {
          value: "3-Co-educational",
          label: "Co-educational",
        },
        // Add more school types as they appear in your data
      ],
    },
    {
      key: "schMgmtDescSt",
      dataType: "MultiSelect",
      label: "Management (Short)",
      options: [
        {
          value: "Pvt. Unaided (Recognized)",
          label: "Pvt. Unaided (Recognized)",
        },
        // Add more management types as they appear in your data
      ],
    },
    {
      key: "lgdvillName",
      dataType: "MultiSelect",
      label: "LGD Village Name",
      options: [
        {
          value: "Sakuri",
          label: "Sakuri",
        },
        {
          value: "Mahtha",
          label: "Mahtha",
        },
        {
          value: "Jhanjhpatti Asa",
          label: "Jhanjhpatti Asa",
        },
        {
          value: "Bijai",
          label: "Bijai",
        },
        {
          value: "Nakati",
          label: "Nakati",
        },
        {
          value: "Laukahi",
          label: "Laukahi",
        },
        {
          value: "Karmegh",
          label: "Karmegh",
        },
      ],
    },
    {
      key: "lgdvillpanchayatName",
      dataType: "MultiSelect",
      label: "LGD Panchayat Name",
      options: [
        {
          value: "Sakri East",
          label: "Sakri East",
        },
        {
          value: "Mahtha",
          label: "Mahtha",
        },
        {
          value: "Jhanjhpatti Asha",
          label: "Jhanjhpatti Asha",
        },
        {
          value: "Salempur",
          label: "Salempur",
        },
        {
          value: "Singion",
          label: "Singion",
        },
        {
          value: "Laukahi",
          label: "Laukahi",
        },
        {
          value: "Lalmaniya",
          label: "Lalmaniya",
        },
      ],
    },
    {
      key: "lgdblockName",
      dataType: "MultiSelect",
      label: "LGD Block Name",
      options: [
        {
          value: "Pandaul",
          label: "Pandaul",
        },
        {
          value: "Ladania",
          label: "Ladania",
        },
        {
          value: "Laukaha (Khutauna)",
          label: "Laukaha (Khutauna)",
        },
        {
          value: "Rajnagar",
          label: "Rajnagar",
        },
        {
          value: "Laukahi",
          label: "Laukahi",
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
    { key: "schoolName", label: "Name" },
    { key: "stateName", label: "State" },
    { key: "districtName", label: "City" },
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
        title="School Management"
        description="Manage and track School accreditation status"
      />
      <Box sx={{ paddingY: 2, paddingX: 4 }}>
        <SchoolStats />
        <Box sx={{ mt: 3 }}>
          <SchoolsTable
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

export default SchoolPage;

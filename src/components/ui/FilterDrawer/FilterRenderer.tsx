import { Box } from "@mui/material";
import React from "react";
import AppAccordion from "../AppAccordion";
import MultiSelect from "../Input/MultiSelect";
import type { FilterRange, TableFilters } from "../../../types";
import Input from "../Input";
import SingleSelect from "../Input/SingleSelect";

// FilterRenderer.tsx
type StringKeyOf<T> = keyof T & string;

interface Props<T extends { [K in keyof T]: unknown }> {
  columnFilters: TableFilters[];
  appliedFilters: T;
  setAppliedFilters: React.Dispatch<React.SetStateAction<T>>;
}
const FilterRenderer = <T extends { [K in keyof T]: unknown }>({
  columnFilters,
  appliedFilters,
  setAppliedFilters,
}: Props<T>) => {
  const handleSingleSelectChange = (key: StringKeyOf<T>, value: string) => {
    setAppliedFilters((prev) => ({ ...prev, [key]: value }));
  };
  const handleMultiSelectChange =
    (key: StringKeyOf<T>) => (values: number[]) => {
      // ← was string[]
      setAppliedFilters((prev) => ({ ...prev, [key]: values }));
    };

  const handleNumberRangeChange =
    (key: StringKeyOf<T>, bound: "gte" | "lte") =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value;
      const num = raw === "" ? undefined : Number(raw);
      setAppliedFilters((prev) => ({
        ...prev,
        [key]: {
          ...((prev[key] as FilterRange) ?? {}),
          [bound]: num,
        },
      }));
    };

  const handleDateRangeChange =
    (key: StringKeyOf<T>, bound: "gte" | "lte") =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value;
      const value = raw === "" ? undefined : raw;
      setAppliedFilters((prev) => ({
        ...prev,
        [key]: {
          ...((prev[key] as FilterRange) ?? {}),
          [bound]: value,
        },
      }));
    };

  const renderChildren = (filter: TableFilters): React.ReactNode => {
    if (filter.dataType === "SingleSelect") {
      return (
        <Box>
          <SingleSelect
            type="SingleSelect"
            options={filter.options ?? []}
            value={
              (appliedFilters[filter.key as StringKeyOf<T>] as string) ?? ""
            }
            label={filter.label}
            placeholder={`Select ${filter.label}`}
            onChange={(value) =>
              handleSingleSelectChange(filter.key as StringKeyOf<T>, value)
            }
          />
        </Box>
      );
    }
    if (filter.dataType === "MultiSelect") {
      return (
        <Box>
          <MultiSelect
            options={filter.options ?? []}
            values={
              (appliedFilters[filter.key as StringKeyOf<T>] as number[]) ?? [] // ← was string[]
            }
            label={filter.label}
            onChange={handleMultiSelectChange(filter.key as StringKeyOf<T>)}
          />
        </Box>
      );
    }

    if (filter.dataType === "NumericRange") {
      const range =
        (appliedFilters[filter.key as StringKeyOf<T>] as FilterRange) ?? {};
      return (
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Input
            type="number"
            label="From"
            variant="outlined"
            placeholder="e.g. 10"
            name={`${filter.key}-gte`}
            value={range.gte ?? ""}
            onChange={handleNumberRangeChange(
              filter.key as StringKeyOf<T>,
              "gte",
            )}
          />
          <Input
            type="number"
            label="To"
            variant="outlined"
            placeholder="e.g. 100"
            name={`${filter.key}-lte`}
            value={range.lte ?? ""}
            onChange={handleNumberRangeChange(
              filter.key as StringKeyOf<T>,
              "lte",
            )}
          />
        </Box>
      );
    }
    if (filter.dataType === "DateRange") {
      const range =
        (appliedFilters[filter.key as StringKeyOf<T>] as FilterRange) ?? {};
      return (
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Input
            type="date"
            label="From"
            variant="outlined"
            placeholder="e.g. 10"
            name={`${filter.key}-gte`}
            value={range.gte ?? ""}
            onChange={handleDateRangeChange(
              filter.key as StringKeyOf<T>,
              "gte",
            )}
          />
          <Input
            type="date"
            label="To"
            variant="outlined"
            placeholder="e.g. 100"
            name={`${filter.key}-lte`}
            value={range.lte ?? ""}
            onChange={handleDateRangeChange(
              filter.key as StringKeyOf<T>,
              "lte",
            )}
          />
        </Box>
      );
    }

    return null;
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        borderBottom: "1px solid var(--slate-200)",
      }}
    >
      {columnFilters.map((filter, index) => (
        <Box
          key={filter.key}
          sx={{
            width: "100%",
            borderTop: index === 0 ? "none" : "1px solid var(--slate-200)",
          }}
        >
          <AppAccordion
            id={index}
            label={filter.label}
            children={renderChildren(filter)}
          />
        </Box>
      ))}
    </Box>
  );
};

export default FilterRenderer;

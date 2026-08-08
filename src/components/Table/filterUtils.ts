import type { FilterRange, TableFilters } from "../../types";
import { formatDate } from "../../utils/helper";

/**
 * A filter value counts as applied once the user has actually narrowed something:
 * empty strings, nulls, empty arrays and cleared ranges do not.
 */
const isApplied = (value: unknown): boolean => {
  if (value === null || value === undefined || value === "" || value === false) {
    return false;
  }
  if (typeof value === "number") {
    return value !== 0;
  }
  if (Array.isArray(value)) {
    return value.length > 0;
  }
  if (value instanceof Date) {
    return true;
  }
  if (typeof value === "object") {
    // Ranges arrive as { gte, lte } and keep their keys after being cleared.
    return Object.values(value).some(isApplied);
  }
  return true;
};

/** How many of a page's filter values are currently narrowing the table. */
export const countAppliedFilters = (filters?: object): number =>
  filters ? Object.values(filters).filter(isApplied).length : 0;

/** One applied filter, ready to render as a chip. */
export interface AppliedFilter {
  key: string;
  label: string;
  /** Human readable value, e.g. "Bihar, Delhi" or "1990 – 2000". */
  value: string;
}

const optionLabel = (filter: TableFilters, value: string | number): string => {
  const option = filter.options?.find((item) => item.value === value);
  return option?.label ?? String(value);
};

const describeRange = (range: FilterRange, isDate: boolean): string => {
  const format = (bound?: string) => {
    if (bound === undefined || bound === "") return "";
    return isDate ? formatDate(bound) : String(bound);
  };
  const from = format(range.gte);
  const to = format(range.lte);

  if (from && to) return `${from} – ${to}`;
  if (from) return `≥ ${from}`;
  return `≤ ${to}`;
};

const describeValue = (filter: TableFilters, value: unknown): string => {
  if (Array.isArray(value)) {
    const labels = (value as (string | number)[]).map((item) =>
      optionLabel(filter, item),
    );
    return labels.length > 2
      ? `${labels.slice(0, 2).join(", ")} +${labels.length - 2}`
      : labels.join(", ");
  }
  if (filter.dataType === "NumericRange" || filter.dataType === "DateRange") {
    return describeRange(
      value as FilterRange,
      filter.dataType === "DateRange",
    );
  }
  return optionLabel(filter, value as string | number);
};

/**
 * Turns a page's filter state into chip descriptions, using `columnFilters` for
 * the field labels and for mapping option ids back to their labels.
 */
export const describeAppliedFilters = (
  columnFilters?: TableFilters[],
  filters?: object,
): AppliedFilter[] => {
  if (!columnFilters || !filters) return [];

  const values = filters as Record<string, unknown>;

  return columnFilters
    .filter((filter) => isApplied(values[filter.key]))
    .map((filter) => ({
      key: filter.key,
      label: filter.label,
      value: describeValue(filter, values[filter.key]),
    }));
};

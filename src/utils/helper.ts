import type { ApiError } from "../types";
import { SERVER_ERROR } from "./status-codes";

export const formatDate = (isoString: string): string => {
  const date = new Date(isoString);
  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  });
};

// Converts a Postgres ISO timestamp to IST time formatted as "02:21 PM"
export const formatTime = (isoString: string): string => {
  const date = new Date(isoString);
  return date.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
  });
};
export const formatDateTime = (isoString: string): string => {
  return `${formatDate(isoString)} ${formatTime(isoString)}`;
};
export const toTitleCase = (text: string): string => {
  return text
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (char) => char.toUpperCase())
    .trim();
};
export function getApiErrorMessage(error: unknown, fallback: string): string {
  if (typeof error !== "object" || error === null || !("data" in error))
    return fallback;

  const { status, data } = error as ApiError;

  if (typeof status !== "number" || status >= SERVER_ERROR) return fallback;

  const message = data?.message;
  return typeof message === "string" && message.trim() ? message : fallback;
}

import React, { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import type { TextInputProps } from "../../type";
import dayjs, { type Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const DateInput = (props: TextInputProps) => {
  const parseValue = (iso: string) => (iso ? dayjs(iso) : null);
  const [selectedDate, setSelectedDate] = useState(parseValue(props.value));

  const handleChange = (newValue: Dayjs | null) => {
    setSelectedDate(newValue);
    if (props.onChange) {
      const isoString = newValue?.isValid() ? newValue.toISOString() : "";

      // Synthesize a ChangeEvent to satisfy the TextInputProps contract
      const syntheticEvent = {
        target: { value: isoString, name: props.name },
        currentTarget: { value: isoString, name: props.name },
      } as React.ChangeEvent<HTMLInputElement>;

      props.onChange(syntheticEvent);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={props.label}
        value={selectedDate}
        onChange={handleChange}
      />
    </LocalizationProvider>
  );
};

export default DateInput;

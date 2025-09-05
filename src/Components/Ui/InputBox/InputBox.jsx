import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import MobileInputBox from "./MobileInputBox";
import { LuCheck, LuCheckCheck } from "react-icons/lu";

const InputBox = ({
  error,
  required = false,
  label,
  autoComplete = "off",
  autoFocus = false,
  value,
  name,
  onChange,
  type = "text",
  ref,
  disabled = false,
  placeholder,
  options = [],
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownLabel, setDropdownLabel] = useState("");
  const [dropdownValue, setDropdownValue] = useState("");
  const [checked, setChecked] = useState(false);
  const dropdownRef = useRef(null);
  const handleDropDown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const handleDropdownValue = (label, value) => {
    console.log("ONCHANGE: ", onChange);
    console.log("type of onchange: ", typeof onChange);
    onChange(value);
    setDropdownLabel(label);
    setDropdownOpen(false);
    setDropdownValue(value);
  };
  const handleCheckboxValue = () => {
    setChecked(!checked);
    onChange(!checked);
  };

  useEffect(() => {
    if (options.length) {
      let findLabel = options.find((v) => v.value === value);
      console.log("FIND LABEL: ", findLabel);
      setDropdownLabel(findLabel ? findLabel.label : `Choose ${label}`);
    }
  }, [options]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (type === "text" || type === "password") {
    return (
      <div className="h-28 w-full px-2 flex flex-col gap-2">
        <label className="text-sm text-left font-poppins block mb-1 text-white">
          {label} {required && "*"}
        </label>
        <input
          type={type}
          placeholder={placeholder}
          className={`w-full font-poppins px-4 py-3  border text-white ${
            error?.length ? "border-red-400" : "border-white/20"
          } rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6a5af9] ${
            disabled ? "bg-gray-900 " : "bg-transparent"
          }`}
          autoFocus={autoFocus}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          ref={ref}
          disabled={disabled}
        />
        {error?.length > 0 && <p className="text-red-400 text-sm">{error}</p>}
      </div>
    );
  }
  if (type === "number") {
    const handleNumberChange = (e) => {
      const val = e.target.value;
      // Allow only digits (and empty string for backspace/delete)
      if (/^\d*$/.test(val)) {
        onChange(e);
      }
    };
    return (
      <div className="h-28 w-full px-2 flex flex-col gap-2">
        <label className="text-sm text-left font-poppins block mb-1 text-white">
          {label} {required && "*"}
        </label>
        <input
          type="text"
          placeholder={placeholder}
          className={`w-full font-poppins px-4 py-3  border text-white ${
            error?.length ? "border-red-400" : "border-white/20"
          } rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6a5af9] ${
            disabled ? "bg-gray-900 " : "bg-transparent"
          }`}
          autoFocus={autoFocus}
          name={name}
          value={value}
          onChange={handleNumberChange}
          required={required}
          ref={ref}
          disabled={disabled}
        />
        {error?.length > 0 && <p className="text-red-400 text-sm">{error}</p>}
      </div>
    );
  }
  if (type === "textarea") {
    return (
      <div className="h-44  w-full px-2 flex flex-col gap-2 ">
        <label className="text-sm text-left font-poppins block mb-1 text-white">
          {label} {required && "*"}
        </label>
        <textarea
          type={type}
          placeholder={placeholder}
          className={`w-full px-4 py-3 font-poppins  border text-white ${
            error?.length ? "border-red-400" : "border-white/20"
          } rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6a5af9] ${
            disabled ? "bg-gray-900 " : "bg-transparent"
          }`}
          autoFocus={autoFocus}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          ref={ref}
          disabled={disabled}
          rows={4}
        />
        {error?.length > 0 && <p className="text-red-400 text-sm">{error}</p>}
      </div>
    );
  }
  if (type === "mobileNumber") {
    const handleMobileChange = (e) => {
      const val = e.target.value;

      // Allow only digits and restrict to max 10
      if (/^\d*$/.test(val) && val.length <= 10) {
        onChange(e);
      }
    };

    return (
      <MobileInputBox
        error={error}
        required={required}
        label={label}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        value={value}
        name={name}
        onChange={handleMobileChange}
        type={type}
        ref={ref}
        disabled={disabled}
        placeholder={placeholder}
      />
    );
  }
  if (type === "checkbox") {
    return (
      <div className="h-14 w-full px-2 flex flex-col gap-2">
        <div className="flex items-center justify-start gap-2">
          <button
            className={`h-5 w-5 rounded-md transition-colors duration-200
            ${
              error?.length
                ? "border-red-400 text-red-400"
                : checked
                ? "bg-blue-600 border-blue-600 text-white"
                : "border-gray-400 text-transparent"
            }  
            border-2 flex items-center justify-center cursor-pointer
          `}
            onClick={handleCheckboxValue}
          >
            {checked && <LuCheck className="w-3 h-3" />}
          </button>
          <p
            className={`text-sm ${
              error?.length ? "text-red-400" : "text-white"
            }`}
          >
            {label ?? ""}
          </p>
        </div>

        {error?.length > 0 && <p className="text-red-400 text-sm">{error}</p>}
      </div>
    );
  }

  if (type === "dropdown") {
    return (
      <div
        className="h-28 w-full px-2 flex flex-col gap-2 relative"
        ref={dropdownRef}
      >
        <label className="text-sm block mb-1 text-gray-300">
          {label} {required && "*"}
        </label>

        {/* Dropdown Button */}
        <button
          className={`w-full px-4 py-3 border relative ${
            error.length ? "border-red-400" : "border-white/20"
          } rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6a5af9] bg-transparent ${
            disabled ? "cursor-not-allowed" : "cursor-pointer"
          } flex items-center justify-between`}
          disabled={disabled}
          onClick={handleDropDown}
        >
          <p className="text-gray-400 truncate">
            {dropdownLabel ?? `Choose ${label}`}
          </p>
          <div className="text-gray-300">
            {dropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown size={15} />}
          </div>
        </button>

        {/* Dropdown List */}
        {dropdownOpen && (
          <div className="absolute top-22 left-0 w-full max-h-60 overflow-y-auto rounded-lg bg-gray-700 shadow-lg">
            {options.length > 0 ? (
              options.map((option, index) => (
                <button
                  key={index}
                  className="flex justify-center items-start flex-col w-full text-left px-4 py-2 text-white hover:bg-gray-600 cursor-pointer"
                  disabled={disabled}
                  onClick={() =>
                    handleDropdownValue(option.label, option.value)
                  }
                >
                  <div className="flex items-center gap-2 w-full">
                    {/* Reserve space for check icon */}
                    <div className="w-4 flex justify-center">
                      {dropdownValue === option.value && (
                        <LuCheckCheck className="text-green-500" />
                      )}
                    </div>

                    {/* Label stays fixed/aligned */}
                    <span className="text-sm">{option.label}</span>
                  </div>
                </button>
              ))
            ) : (
              <p className="px-4 py-2 text-gray-400">No options available</p>
            )}
          </div>
        )}
      </div>
    );
  }
  if (type === "document") {
    <div className="h-28 w-full px-2 flex flex-col gap-2">
      <label className="text-sm text-left font-poppins block mb-1 text-white">
        {label} {required && "*"}
      </label>
      <button
        type={type}
        placeholder={placeholder}
        className={`w-full font-poppins px-4 py-3  border text-white ${
          error?.length ? "border-red-400" : "border-white/20"
        } rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6a5af9] ${
          disabled ? "bg-gray-900 " : "bg-transparent"
        }`}
        autoFocus={autoFocus}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        ref={ref}
        disabled={disabled}
      />
      {error?.length > 0 && <p className="text-red-400 text-sm">{error}</p>}
    </div>;
  }
};

export default InputBox;

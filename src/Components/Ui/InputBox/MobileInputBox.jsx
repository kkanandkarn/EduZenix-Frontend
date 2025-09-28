import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { countryCodes } from "../../../utils/countryCodes";
import "./styles.css";

const MobileInputBox = ({
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
}) => {
  const [activeCountry, setActiveCountry] = useState({
    countryCode: "in",
    phoneCode: "91",
  });
  const [modalOpen, setModalOpen] = useState(false);
  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleActiveCountryCode = (countryData) => {
    setActiveCountry({
      countryCode: countryData.countryCode,
      phoneCode: countryData.phoneCode,
    });
    handleModal();
  };

  return (
    <div className="h-28 w-full px-2 flex flex-col gap-2 relative">
      <label className="text-sm font-poppins block mb-1 text-white">
        {label} {required && "*"}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full pl-28 pr-2 py-3 font-poppins  border text-white ${
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
      <button
        className="absolute top-9 px-1 left-4 py-2 w-24 text-white border-r border-r-white/20 flex items-center justify-center gap-2 cursor-pointer"
        onClick={handleModal}
      >
        <img
          src={`https://flagcdn.com/16x12/${activeCountry.countryCode}.png`}
          alt="flag"
        />{" "}
        <p>+{activeCountry.phoneCode}</p>{" "}
        <div>{modalOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>
      </button>

      {modalOpen && (
        <div className="absolute top-20 w-28 max-h-28 overflow-y-scroll custom-scrollbar left-1 rounded-lg text-white bg-secondry flex flex-col items-start">
          {countryCodes.map((countryData, index) => (
            <button
              className={` text-white py-2 ${index === 0 ? "" : "border-t"} ${
                index === countryCodes.length - 1 ? "" : "border-b"
              } border-gray-600 w-full hover:bg-primary bg-secondry flex items-center justify-center gap-2 cursor-pointer ease-in-out duration-300`}
              onClick={() => handleActiveCountryCode(countryData)}
            >
              <img
                src={`https://flagcdn.com/16x12/${countryData.countryCode}.png`}
                alt="flag"
              />{" "}
              <p>+{countryData.phoneCode}</p>{" "}
            </button>
          ))}
        </div>
      )}

      {error?.length > 0 && <p className="text-red-400 text-sm">{error}</p>}
    </div>
  );
};

export default MobileInputBox;

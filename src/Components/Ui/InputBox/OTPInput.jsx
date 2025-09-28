import React, { useRef, useState } from "react";

const OTPInput = ({ length = 4, handleChange }) => {
  const inputRef = useRef(Array(length).fill(null));
  const [OTP, setOTP] = useState(Array(length).fill(""));

  const handleTextChange = (input, index) => {
    const newPin = [...OTP];
    newPin[index] = input;
    setOTP(newPin);
    handleChange(newPin.join(""));

    // Auto focus next input
    if (input.length === 1 && index < length - 1) {
      inputRef.current[index + 1]?.focus();
    }

    // Auto focus previous input when deleting
    if (input.length === 0 && index > 0) {
      inputRef.current[index - 1]?.focus();
    }

    // When all digits are filled
  };

  return (
    <div className="flex items-center justify-center gap-1 xl:gap-5">
      {Array.from({ length }, (_, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          value={OTP[index]}
          onChange={(e) => handleTextChange(e.target.value, index)}
          ref={(ref) => (inputRef.current[index] = ref)}
          className="border border-slate-500 focus:border-blue-600 p-2 h-14 w-14 xl:h-20 xl:w-20 text-white outline-none text-center rounded-md"
          style={{ marginRight: index === length - 1 ? "0" : "10px" }}
        />
      ))}
    </div>
  );
};

export default OTPInput;

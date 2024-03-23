import React, { useEffect, useRef, useState } from "react";

const OtpInput = ({ length = 4, checkOtp = () => {} }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleOtpInputChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === length) {
      checkOtp(combinedOtp);
    }

    //move pointer to next adjacent input
    if (value && index < length - 1) {
      for (let i = index + 1; i < length; i++) {
        if (inputRefs.current[i] && !inputRefs.current[i].value) {
          inputRefs.current[i].focus();
          break;
        }
      }
    }
  };

  const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1, 1);

    //get cursor to empty input box
    if (!otp[index] && otp.indexOf("") > -1) {
      inputRefs.current[otp.indexOf("")].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div>
      {otp.map((value, index) => {
        return (
          <input
            key={`otpInput_${index}`}
            type="text"
            value={value}
            ref={(input) => (inputRefs.current[index] = input)}
            onChange={(e) => handleOtpInputChange(e, index)}
            onClick={() => handleClick(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className="otpInput"
          />
        );
      })}
    </div>
  );
};

export default OtpInput;

import React, { useState } from "react";
import OtpInput from "../OtpInput/OtpInput";
import useRedirectTo from "../../hooks/useRedirectTo";

export const OtpForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState("");
  const { redirectTo } = useRedirectTo();

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleBthClick = (e) => {
    e.preventDefault();

    const regex = /[^0-9]/g;
    if (phoneNumber.length !== 10 || regex.test(phoneNumber)) {
      alert("Inavlid Number");
      return;
    }
    setShowOtp(true);
  };

  const onOtpSubmit = () => {
    alert(`OTP entered successfully!! ${otp}`);
    setTimeout(() => {
      redirectTo("/test");
    }, 3000);
  };

  return (
    <div>
      {showOtp ? (
        <div>
          <p>Enter OTP sent to {phoneNumber}</p>
          <OtpInput checkOtp={(newOtp) => setOtp(newOtp)} length={4} />
          <button disabled={!otp} onClick={onOtpSubmit}>
            Validate OTP
          </button>
        </div>
      ) : (
        <form onSubmit={handleBthClick}>
          <input
            type="text"
            value={phoneNumber}
            onChange={handlePhoneNumber}
            placeholder="Enter Phone Number"
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

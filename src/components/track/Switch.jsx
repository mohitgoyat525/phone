"use client";
import React, { useState } from "react";

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <div className="flex items-center space-x-3">
      <button
        onClick={handleToggle}
        className={`w-12 h-6 flex items-center rounded-full p-1 duration-300 ${
          isOn ? "bg-[#057AFF]" : "bg-gray-200"
        }`}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ${
            isOn ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
};

export default ToggleSwitch;

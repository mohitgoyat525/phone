"use client";
import React, { useState } from "react";

const AudioSlider = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="bg-[#00092C] w-full max-w-[430px] px-4 py-4 mx-auto">
      {/* Slider */}
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full h-2 bg-[#1a203d] rounded-lg appearance-none cursor-pointer accent-white"
        style={{
          background: `linear-gradient(to right, white ${value}%, #1a203d ${value}%)`,
        }}
      />

      {/* Time Labels */}
      <div className="flex justify-between text-white text-sm mt-1">
        <span>7:30</span>
        <span>12:00</span>
      </div>
    </div>
  );
};

export default AudioSlider;

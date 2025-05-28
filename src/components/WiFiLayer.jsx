"use client";
import React, { useEffect, useState } from "react";
import clsx from "clsx";

const LAYERS_COUNT = 20;

const WiFiLayers = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prev) => (prev + 1) % LAYERS_COUNT);
    }, 200); // Adjust delay as needed (in ms)

    return () => clearInterval(interval);
  }, []);

  const borderColor = (index) =>
    index <= visibleIndex
      ? "border-[#5DFEFE]"
      : "border-[rgba(255,255,204,0.2)]";

  const bgColor = (index) =>
    index === 0 && visibleIndex >= 0
      ? "bg-[#5DFEFE]"
      : "bg-[rgba(255,255,204,0.2)]";

  const ring = (index, size, children) => (
    <div
      className={clsx(
        "flex justify-center items-center flex-col rounded-full border-7",
        borderColor(index),
        "transition-all duration-500 ease-in-out",
        index === visibleIndex && "animate-ping-slow",
        size
      )}
    >
      {children}
    </div>
  );

  // Build nested layers
  const buildLayers = () => {
    let content = (
      <div
        className={clsx(
          "w-4 h-4 rounded-full mb-2",
          bgColor(0),
          "transition-colors duration-500 ease-in-out",
          visibleIndex === 0 && "animate-ping-slow"
        )}
      />
    );

    const sizes = [
      "w-[2rem] h-[2rem]",
      "w-[3.5rem] h-[3.5rem]",
      "w-[4rem] h-[4rem]",
      "w-[5rem] h-[5rem]",
      "w-[6rem] h-[6rem]",
      "w-[7rem] h-[7rem]",
      "w-[8rem] h-[8rem]",
      "w-[9rem] h-[9rem]",
      "w-[10rem] h-[10rem]",
      "w-[12rem] h-[12rem]",
      "w-[14rem] h-[14rem]",
      "w-[16rem] h-[16rem]",
      "w-[18rem] h-[18rem]",
      "w-[19rem] h-[20rem]",
      "w-[21rem] h-[22rem]",
      "w-[23rem] h-[24rem]",
      "w-[25rem] h-[26rem]",
      "w-[27rem] h-[28rem]",
      "w-[29rem] h-[30rem]",
    ];

    for (let i = 1; i < LAYERS_COUNT; i++) {
      content = ring(i, sizes[i - 1] || "w-[1rem] h-[1rem]", content);
    }

    return content;
  };

  return (
    <div
      className="absolute left-[53%] -translate-x-1/2 top-18 rotate-180 overflow-hidden h-[165px]"
      style={{ clipPath: "polygon(50% 100%, 0 -18%, 101% 0)" }}
    >
      {buildLayers()}
    </div>
  );
};

export default WiFiLayers;

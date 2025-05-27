"use client";
import React from "react";
import clsx from "clsx";

const WiFiLayers = ({
  visibleFirst,
  visibleSecond,
  visibleThird,
  visibleFourth,
  visibleFifth,
  visibleSixth,
  visibleSeventh,
  visibleEighth,
  visibleNinth,
  visibleTenth,
  visibleEleventh,
  visibleTwelfth,
  visibleThirteenth,
  visibleFourteenth,
  visibleFifteenth,
  visibleSixteenth,
  visibleSeventeenth,
  visibleEighteenth,
  visibleNineteenth,
  visibleTwentieth,
}) => {
  const borderColor = (visible) =>
    visible ? "border-[#5DFEFE]" : "border-[rgba(255,255,204,0.2)]";

  const bgColor = (visible) =>
    visible ? "bg-[#5DFEFE]" : "bg-[rgba(255,255,204,0.2)]";

  const ring = (visible, size, children) => (
    <div
      className={clsx(
        "flex justify-center items-center flex-col rounded-full border-8",
        borderColor(visible),
        "transition-all duration-500 ease-in-out",
        visible && "animate-ping-slow",
        size
      )}
    >
      {children}
    </div>
  );

  return (
    <div
      className="absolute left-[53%] -translate-x-1/2 top-18 rotate-180 overflow-hidden h-[153px]"
      style={{ clipPath: "polygon(50% 100%, 0 -15%, 101% 0)" }}
    >
      {ring(
        visibleTwentieth,
        "w-[28rem] h-[28rem]",
        ring(
          visibleNineteenth,
          "w-[26rem] h-[26rem]",
          ring(
            visibleEighteenth,
            "w-[24rem] h-[24rem]",
            ring(
              visibleSeventeenth,
              "w-[22rem] h-[22rem]",
              ring(
                visibleSixteenth,
                "w-[20rem] h-[20rem]",
                ring(
                  visibleFifteenth,
                  "w-[18rem] h-[18rem]",
                  ring(
                    visibleFourteenth,
                    "w-[16rem] h-[16rem]",
                    ring(
                      visibleThirteenth,
                      "w-[14rem] h-[14rem]",
                      ring(
                        visibleTwelfth,
                        "w-[12rem] h-[12rem]",
                        ring(
                          visibleEleventh,
                          "w-[10rem] h-[10rem]",
                          ring(
                            visibleTenth,
                            "w-[9rem] h-[9rem]",
                            ring(
                              visibleNinth,
                              "w-[8rem] h-[8rem]",
                              ring(
                                visibleEighth,
                                "w-[7rem] h-[7rem]",
                                ring(
                                  visibleSeventh,
                                  "w-[6rem] h-[6rem]",
                                  ring(
                                    visibleSixth,
                                    "w-[5rem] h-[5rem]",
                                    ring(
                                      visibleFifth,
                                      "w-[4rem] h-[4rem]",
                                      ring(
                                        visibleFourth,
                                        "w-[3.5rem] h-[3.5rem]",
                                        ring(
                                          visibleThird,
                                          "w-[3rem] h-[3rem]",
                                          ring(
                                            visibleSecond,
                                            "w-[2.5rem] h-[2.5rem]",
                                            <div
                                              className={clsx(
                                                "w-4 h-4 rounded-full mb-3",
                                                bgColor(visibleFirst),
                                                "transition-colors duration-500 ease-in-out",
                                                visibleFirst &&
                                                  "animate-ping-slow"
                                              )}
                                            />
                                          )
                                        )
                                      )
                                    )
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      )}
    </div>
  );
};

export default WiFiLayers;

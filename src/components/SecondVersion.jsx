"use client";
import React, { useEffect, useState } from "react";
import { Back, Title } from "./common/Icons";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import AudioSlider from "./AudioSider";

const SecondVersion = () => {
  const [visibleFirst, setVisibleFirst] = useState(false);
  const [visibleSecond, setVisibleSecond] = useState(false);
  const [visibleThird, setVisibleThird] = useState(false);
  const [visibleFourth, setVisibleFourth] = useState(false);

  useEffect(() => {
    let step = 3;
    const stepsCount = 4;
    const intervalDuration = 300;
    const interval = setInterval(() => {
      setVisibleFirst(false);
      setVisibleSecond(false);
      setVisibleThird(false);
      setVisibleFourth(false);

      if (step === 0) setVisibleFirst(true);
      else if (step === 1) setVisibleSecond(true);
      else if (step === 2) setVisibleThird(true);
      else if (step === 3) setVisibleFourth(true);

      step = (step - 1 + stepsCount) % stepsCount;
    }, intervalDuration);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="bg-[#00092C] w-full max-w-[375px] mx-auto">
        <div className="flex justify-between px-4 pt-10">
          <div className="flex justify-between w-full">
            <Back />
          </div>
          <div className="flex w-full justify-center">
            <Title />
          </div>
          <div className="w-full"></div>
        </div>

        <div className="px-4 pt-10 ">
          <div className="relative">
            <img className="w-full" src="/images/png/main.png" alt="main" />
            <div
              className="absolute left-[53%] -translate-x-1/2 top-18 rotate-[180deg] h-[70px]"
              style={{
                overflow: "hidden",
                clipPath: "polygon(50% 100%, 0 0, 100% 0)",
              }}
            >
              <div
                style={{
                  ...lineBaseStyle,
                  width: "8rem",
                  height: "8rem",
                  borderColor: visibleFirst
                    ? "#5DFEFE"
                    : "rgba(255, 255, 204, 0.2)",
                  transition: "border-color 0.5s ease-in-out",
                  margin: "auto",
                }}
              >
                <div
                  style={{
                    ...lineBaseStyle,
                    width: "6rem",
                    height: "6rem",
                    borderColor: visibleSecond
                      ? "#5DFEFE"
                      : "rgba(255, 255, 204, 0.2)",
                    transition: "border-color 0.5s ease-in-out",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      ...lineBaseStyle,
                      width: "4rem",
                      height: "4rem",
                      borderColor: visibleThird
                        ? "#5DFEFE"
                        : "rgba(255, 255, 204, 0.2)",
                      transition: "border-color 0.5s ease-in-out",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      style={{
                        width: 15,
                        height: 15,
                        backgroundColor: visibleFourth
                          ? "#5DFEFE"
                          : "rgba(255, 255, 204, 0.2)",
                        borderRadius: "50%",
                        transition: "background-color 0.5s ease-in-out",
                        marginBottom: 12,
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-white px-4 my-10">
          <Marquee speed={20} gradient={false}>
            <span className="whitespace-nowrap px-4 text-[28px]">
              री-कोड वॉटर डिवाइस की मदद से लत से मुक्त हो जाएँ — लत एक आजीवन
              कारावास की तरह लग सकती है, लेकिन इसके बारे में कुछ करने का निर्णय
              लेने से ही आप पहले ही मुक्ति की ओर पहला कदम उठा चुके हैं। री-कोड
              वॉटर आपको उस यात्रा को पूरा करने में हर कदम पर मदद कर सकता है। मन
              व्यसनी व्यवहार में एक प्रमुख भूमिका निभाता है और Re-code Water मन
              के उस हिस्से तक पहुँचने के लिए सबसे अच्छी री-कोड वॉटर तकनीकों का
              उपयोग करते हैं जो लत को बनाए रखता है। यह आपको वह करने में सक्षम
              बनाता है जो आप पहले भी कर चुके हैं - अपने दिमाग में "प्रोग्राम" को
              बदलने के लिए। आखिरकार, जब आप लत विकसित करना शुरू करते हैं तो आपने
              प्रोग्राम बदल दिया था, और अब आप इसे फिर से बदलकर मुक्त हो सकते
              हैं!
            </span>
          </Marquee>

          <h1 className="text-[28px] font-semibold leading-[100%] text-white text-center pt-[28px] pb-5">
            Re-Coding...
          </h1>

          <AudioSlider src="/images/png/audio.mp3" totalDuration={720} />
        </div>

        <Image
          src="/images/png/nav-bar-img.png"
          alt="navbar"
          width={375}
          height={88}
          className="w-full max-w-[375px] pointer-events-none"
          unoptimized
        />
      </div>
    </div>
  );
};

const lineBaseStyle = {
  border: "0.5rem solid black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  borderRadius: "50%",
  boxSizing: "border-box",
};

export default SecondVersion;

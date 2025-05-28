"use client";
import React, { useEffect, useState } from "react";
import { Back, Title } from "./common/Icons";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import AudioSlider from "./AudioSider";
import WiFiLayers from "./WiFiLayer";

const Third = () => {
  return (
    <div>
      <div className="bg-[#00092C] w-full max-w-[375px] mx-auto">
        <div className="flex justify-between px-4 pt-10">
          <div className="flex justify-between w-full">
            <Back />
          </div>
          <div className="w-full"></div>
        </div>
        <div className="flex w-full justify-center mt-5">
          <Title />
        </div>

        <div className="px-4 pt-10">
          <div className="relative">
            <img className="w-full" src="/images/png/main.png" alt="main" />
            <div className="max-w-[155px] overflow-hidden relative h-[290px] w-[500px] mt-[-336px] mx-auto flex flex-col justify-center ms-[104px]">
              <WiFiLayers />
            </div>
          </div>
        </div>
        <div className="h-[50px]"></div>
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
          <h1 className="text-[28px] font-semibold leading-[100%] text-white text-center pt-[28px] pb-5 flex justify-center items-center gap-1">
            Re-Coding
            <div className="flex gap-1">
              <span className="dot">.</span>
              <span className="dot dot2">.</span>
              <span className="dot dot3">.</span>
            </div>
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

export default Third;

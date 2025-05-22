"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import AudioSlider from "./AudioSider";
import { CombineIcon, NextIcon, PlayIcon, PrevIcon, ShuffleIcon } from "./common/Icons";
import Image from "next/image";
const Mobile = () => {
    return (
      <div className="bg-[#00092C] w-full max-w-[375px] mx-auto">
        <div className=" text-white px-4 mb-10">
          <Marquee speed={50} gradient={false}>
            <span className="whitespace-nowrap px-4 ">
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
          <h1 className="text-[28px] font-semibold leading-[100%] text-white text-center pt-[28px] pb-10">
            Healing Frequencies
          </h1>
          <AudioSlider />

          <div className="flex items-center justify-between max-w-[289px] mx-auto">
            <span>
              <ShuffleIcon />
            </span>
            <span>
              <PrevIcon />
            </span>
            <span>
              {" "}
              <PlayIcon />{" "}
            </span>
            <span>
              {" "}
              <NextIcon />{" "}
            </span>
            <span>
              {" "}
              <CombineIcon />{" "}
            </span>
          </div>
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
    );
};

export default Mobile;

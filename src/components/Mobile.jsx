"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import AudioSlider from "./AudioSider";
import {
  Back,
  CombineIcon,
  NextIcon,
  PlayIcon,
  PrevIcon,
  ShuffleIcon,
  Title,
} from "./common/Icons";
import { useRef, useState } from "react";
const Mobile = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = (useRef < HTMLAudioElement) | (null > null);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };
  return (
    <div className="bg-[#00092C] w-full max-w-[375px] mx-auto">
      <div className="flex justify-between px-4 pt-10">
        <div className="flex justify-between w-full">
          <Back />
        </div>
        <div className="flex w-full justify-center">
          <div>
            <Title />
          </div>
        </div>
        <div className="w-full"></div>
      </div>
      <div className="px-4 pt-10">
        <div className="relative ">
          <img className="w-full" src="/images/png/main.png" alt="pot" />
          <div className="max-w-[100px] rounded-xl absolute left-0 bottom-0 overflow-hidden">
            <div className="relative ">
              <img className="w-full" src="/images/png/pot.png" alt="pot" />

              <div className="max-w-[100px] rotate-[-90deg] absolute top-10">
                <Marquee speed={2} gradient={false}>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <img
                      key={index}
                      className="w-full max-w-[85px]"
                      src="/images/png/wave-2.png"
                      alt="wave"
                    />
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-white px-4 my-10">
        <Marquee speed={20} gradient={false}>
          <span className="whitespace-nowrap px-4 text-[28px]">
            री-कोड वॉटर डिवाइस की मदद से लत से मुक्त हो जाएँ — लत एक आजीवन
            कारावास की तरह लग सकती है, लेकिन इसके बारे में कुछ करने का निर्णय
            लेने से ही आप पहले ही मुक्ति की ओर पहला कदम उठा चुके हैं। री-कोड
            वॉटर आपको उस यात्रा को पूरा करने में हर कदम पर मदद कर सकता है। मन
            व्यसनी व्यवहार में एक प्रमुख भूमिका निभाता है और Re-code Water मन के
            उस हिस्से तक पहुँचने के लिए सबसे अच्छी री-कोड वॉटर तकनीकों का उपयोग
            करते हैं जो लत को बनाए रखता है। यह आपको वह करने में सक्षम बनाता है
            जो आप पहले भी कर चुके हैं - अपने दिमाग में "प्रोग्राम" को बदलने के
            लिए। आखिरकार, जब आप लत विकसित करना शुरू करते हैं तो आपने प्रोग्राम
            बदल दिया था, और अब आप इसे फिर से बदलकर मुक्त हो सकते हैं!
          </span>
        </Marquee>
        <h1 className="text-[28px] font-semibold leading-[100%] text-white text-center pt-[28px] pb-5">
          Re-Coding...
        </h1>

        {/* AUDIO ELEMENT */}
        <audio src="/audio/sample.mp3" preload="auto" />
        <div className="flex items-center justify-center max-w-[289px] mx-auto">
          <span className="cursor-pointer">
            <PlayIcon />
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

import Image from "next/image";
import React from "react";
import { BtnIcon, CenterText, ClockIcon, HeaderText } from "../common/Icons";
import ToggleSwitch from "./Switch";
import Link from "next/link";

const Track = () => {
  return (
    <div className="min-h-screen bg-white w-full max-w-[375px] mx-auto flex flex-col">
      <div className="grow">
        <div className="relative">
          <span className="absolute left-4 top-5">
            <HeaderText />
          </span>
          <Image
            src="/images/png/main-img.png"
            alt="navbar"
            width={375}
            height={88}
            className="w-full max-w-[375px] pointer-events-none bg-white"
            unoptimized
          />
          <h3 className="text-xl font-bold absolute text-white left-4 bottom-5">
            Addication Frequency
          </h3>
        </div>
        <div className="px-5 pt-5">
          <div className="flex gap-5 items-center py-3">
            <ClockIcon />
            <div className="">
              <h3 className="text-xl font-bold">Daily Reminder</h3>
              <p className="text-sm font-normal pt-2">
                Get notified for personalised program
              </p>
            </div>
            <ToggleSwitch />
          </div>
          <Link
            href="/"
            className="w-full bg-[#057AFF] rounded-full py-3 px-5 text-center flex flex-col justify-center items-center mt-3"
          >
            <BtnIcon />
          </Link>
        </div>
      </div>

      <Image
        src="/images/png/light-footer.png"
        alt="navbar"
        width={375}
        height={88}
        className="w-full max-w-[375px] pointer-events-none bg-white"
        unoptimized
      />
    </div>
  );
};

export default Track;

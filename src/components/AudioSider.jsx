"use client";
import React, { useState, useRef, useEffect } from "react";
import { PlayIcon } from "./common/Icons";

const PauseIcon = () => (
  <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
  </svg>
);

const AudioSlider = ({ src, totalDuration = 720, isPlaying, setIsPlaying }) => {
  const audioRef = useRef(null);
  const [value, setValue] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      setCurrentTime(audio.currentTime);
      setValue((audio.currentTime / audio.duration) * 100);
    };

    const onEnded = () => {
      setIsPlaying(false);
      setValue(0);
      setCurrentTime(0);
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("ended", onEnded);
    };
  }, [setIsPlaying]);

  const onChange = (e) => {
    const audio = audioRef.current;
    const newValue = Number(e.target.value);
    setValue(newValue);

    if (audio && audio.duration) {
      audio.currentTime = (audio.duration * newValue) / 100;
      setCurrentTime(audio.currentTime);
    }
  };

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return "0:00";
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s < 10 ? "0" + s : s}`;
  };

  return (
    <div className="bg-[#00092C] w-full max-w-[430px] px-4 py-4 mx-auto flex flex-col items-center">
      <audio ref={audioRef} src={src} preload="metadata" />
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={onChange}
        className="w-full h-2 bg-[#1a203d] rounded-lg appearance-none pointer-events-none accent-white"
        style={{
          background: `linear-gradient(to right, white ${value}%, #1a203d ${value}%)`,
        }}
      />
      <div className="flex justify-between text-white text-sm w-full mt-1 mb-3 px-1">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(audioRef.current?.duration || totalDuration)}</span>
      </div>
      <button
        className="cursor-pointer"
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause audio" : "Play audio"}
      >
        <PlayIcon isPlaying={isPlaying} />
      </button>
    </div>
  );
};

export default AudioSlider;

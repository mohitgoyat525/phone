"use client";
import React, { useState, useRef, useEffect } from "react";

// Simple PlayIcon and PauseIcon for demo:
const PlayIcon = () => (
  <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const PauseIcon = () => (
  <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
  </svg>
);

const AudioSlider = ({ src, totalDuration = 720 }) => {
  const audioRef = useRef(null);
  const [value, setValue] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Update slider as audio plays
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
  }, []);

  // Seek audio when slider changes
  const onChange = (e) => {
    const audio = audioRef.current;
    const newValue = Number(e.target.value);
    setValue(newValue);

    if (audio && audio.duration) {
      audio.currentTime = (audio.duration * newValue) / 100;
      setCurrentTime(audio.currentTime);
    }
  };

  // Play/pause toggle
  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Format seconds to mm:ss
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
        className="w-full h-2 bg-[#1a203d] rounded-lg appearance-none cursor-pointer accent-white"
        style={{
          background: `linear-gradient(to right, white ${value}%, #1a203d ${value}%)`,
        }}
      />

      <div className="flex justify-between text-white text-sm w-full mt-1 mb-3 px-1">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(audioRef.current?.duration || totalDuration)}</span>
      </div>

      <button
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause audio" : "Play audio"}
        className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition"
      >
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </button>
    </div>
  );
};

export default AudioSlider;

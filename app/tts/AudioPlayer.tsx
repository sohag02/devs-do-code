"use client";

import WaveSurfer from "wavesurfer.js";
import { useEffect, useRef, useState } from "react";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

export default function AudioPlayer({ base64Audio }: { base64Audio: string }) {
  const waveformRef = useRef<HTMLDivElement>(null);
  const [waveSurfer, setWaveSurfer] = useState<WaveSurfer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!waveformRef.current) return;

    const wavesurfer = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: "#4B5563",
      progressColor: "#ffffff",
      cursorColor: "#9CA3AF",
      barWidth: 2,
      barGap: 1,
      height: 60,
      normalize: true,
      interact: true,
    });

    setWaveSurfer(wavesurfer);

    wavesurfer.on("ready", () => {
      setDuration(wavesurfer.getDuration());
    });

    wavesurfer.on("audioprocess", () => {
      setCurrentTime(wavesurfer.getCurrentTime());
    });

    wavesurfer.on("seeking", () => {
      setCurrentTime(wavesurfer.getCurrentTime());
    });

    wavesurfer.on("finish", () => {
      setIsPlaying(false);
    });

    return () => wavesurfer.destroy();
  }, []);

  useEffect(() => {
    if (!waveSurfer) return;
    waveSurfer.load(`data:audio/mp3;base64,${base64Audio}`);
  }, [waveSurfer, base64Audio]);

  useEffect(() => {
    if (base64Audio) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [base64Audio]);

  const togglePlay = () => {
    if (waveSurfer) {
      waveSurfer.playPause();
      setIsPlaying(waveSurfer.isPlaying());
    }
  };

  const skipBackward = () => {
    if (waveSurfer) {
      waveSurfer.skip(-5);
    }
  };

  const skipForward = () => {
    if (waveSurfer) {
      waveSurfer.skip(5);
    }
  };

  const toggleMute = () => {
    if (waveSurfer) {
      waveSurfer.setMuted(!isMuted);
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (newVolume: number[]) => {
    if (waveSurfer) {
      waveSurfer.setVolume(newVolume[0]);
      setVolume(newVolume[0]);
      setIsMuted(newVolume[0] === 0);
    }
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  const handleDownload = () => {
    const base64String = `${base64Audio}`;
    const filename = "audio.mp3";

    const byteCharacters = atob(base64String);
    const byteNumbers = new Array(byteCharacters.length)
      .fill(0)
      .map((_, i) => byteCharacters.charCodeAt(i));
    const byteArray = new Uint8Array(byteNumbers);

    const blob = new Blob([byteArray], { type: "audio/mp3" });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className={`transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full opacity-0"
      }`}
    >
      <div className="w-full border-t border-gray-700 bg-[#1A1A1A] backdrop-blur-sm shadow-xl text-white p-4">
        <div className=" mx-auto">
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <Button
                onClick={skipBackward}
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white"
              >
                <SkipBack />
              </Button>
              <Button
                onClick={togglePlay}
                variant="outline"
                size="icon"
                className="rounded-full bg-white text-gray-900 hover:bg-gray-200"
              >
                {isPlaying ? (
                  <Pause className="h-6 w-6" />
                ) : (
                  <Play className="h-6 w-6" />
                )}
              </Button>
              <Button
                onClick={skipForward}
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white"
              >
                <SkipForward />
              </Button>
            </div>
            <div className="flex-grow">
              <div ref={waveformRef} className="w-full h-16"></div>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <div className="text-sm text-gray-400 whitespace-nowrap">
                <span>{formatTime(currentTime)}</span>
                <span> / </span>
                <span>{formatTime(duration)}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  onClick={toggleMute}
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white"
                >
                  {isMuted ? <VolumeX /> : <Volume2 />}
                </Button>
                <Slider
                  className="w-24 hover:cursor-pointer"
                  value={[volume]}
                  max={1}
                  step={0.01}
                  onValueChange={handleVolumeChange}
                />
              </div>
              <Button
                onClick={handleDownload}
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white"
              >
                <Download />
              </Button>
            </div>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
            <div className="flex items-center space-x-4">
              <Button
                onClick={skipBackward}
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white"
              >
                <SkipBack />
              </Button>
              <Button
                onClick={togglePlay}
                variant="outline"
                size="icon"
                className="rounded-full bg-white text-gray-900 hover:bg-gray-200"
              >
                {isPlaying ? (
                  <Pause className="h-6 w-6" />
                ) : (
                  <Play className="h-6 w-6" />
                )}
              </Button>
              <Button
                onClick={skipForward}
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white"
              >
                <SkipForward />
              </Button>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-400 whitespace-nowrap">
                <span>{formatTime(currentTime)}</span>
                <span> / </span>
                <span>{formatTime(duration)}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  onClick={toggleMute}
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white"
                >
                  {isMuted ? <VolumeX /> : <Volume2 />}
                </Button>
                <Slider
                  className="w-24 hover:cursor-pointer"
                  value={[volume]}
                  max={1}
                  step={0.01}
                  onValueChange={handleVolumeChange}
                />
              </div>
              <Button
                onClick={handleDownload}
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white"
              >
                <Download />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

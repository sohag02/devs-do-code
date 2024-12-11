import React from 'react';
import { Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function LoadingScreen() {
  const { theme } = useTheme();

  const bgColor = theme === 'dark' ? 'bg-[#1A1A1A]' : 'bg-white';
  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-900';

  return (
    <div className={`h-screen w-screen flex items-center justify-center ${bgColor} ${textColor}`}>
      <div className="text-center animate-fade-in">
        <div className="relative inline-block">
          <div className="absolute inset-0 rounded-full bg-[#545454] opacity-30 animate-pulse-slow"></div>
          <div className="absolute inset-0 rounded-full bg-[#545454] opacity-50 animate-ping"></div>
          <div className="relative w-24 h-24 rounded-full bg-[#545454] flex items-center justify-center text-white">
            <Sparkles className="w-12 h-12 animate-spin-slow" />
          </div>
        </div>
        <h1 className="mt-6 text-2xl font-semibold">Loading...</h1>
        <p className="mt-2 text-sm">Please wait while we prepare everything for you.</p>
      </div>
    </div>
  );
}
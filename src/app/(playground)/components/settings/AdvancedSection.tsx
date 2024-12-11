import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useSettings } from '../../context/SettingsContext';

export function AdvancedSection() {
  const { theme } = useTheme();
  const { temperature, setTemperature, topP, setTopP, topK, setTopK } = useSettings();

  const textColor = theme === 'dark' ? 'text-gray-200' : 'text-gray-800';

  const renderSlider = (
    label: string,
    value: number,
    setValue: React.Dispatch<React.SetStateAction<number>>
  ) => {
    return (
      <div className="mb-8">
        <div className="flex justify-between mb-4">
          <label className={`block font-medium ${textColor}`}>{label}</label>
          <span className={`text-sm ${textColor}`}>{value.toFixed(2)}</span>
        </div>
        <div className="relative">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={value}
            onChange={(e) => setValue(parseFloat(e.target.value))}
            className="w-full h-3 appearance-none cursor-pointer futuristic-slider"
          />
          {/* Gradient track background */}
          <div className="absolute top-0 left-0 right-0 bottom-0 rounded-full pointer-events-none futuristic-slider-track"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-4">
      {renderSlider('Temperature', temperature, setTemperature)}
      {renderSlider('Top P', topP, setTopP)}
      {renderSlider('Top K', topK, setTopK)}
    </div>
  );
}
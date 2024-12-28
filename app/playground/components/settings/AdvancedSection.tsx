import React from 'react';
import useSettingsStore from "@/context/useSettingsStore";
import { Slider } from '@nextui-org/slider';

export function AdvancedSection() {
  const { temperature, topP, topK, updateSettings } = useSettingsStore();

  const setTemperature = (value: number) => {
    updateSettings({ temperature: value });
  };

  const setTopP = (value: number) => {
    updateSettings({ topP: value });
  };

  const setTopK = (value: number) => {
    updateSettings({ topK: value });
  };

  const renderSlider = (
    label: string,
    value: number,
    setValue: (value: number) => void
  ) => {
    return (
      <div className="mb-8 text-white">
        <div className="relative">
          <Slider
            className="max-w-md"
            color="foreground"
            value={value}
            label={label}
            maxValue={1}
            minValue={0}
            showSteps={true}
            size="md"
            step={0.1}
            onChange={(value) => setValue(value as number)}
            classNames={{
              filler: "bg-white",
              thumb: [
                "transition-size",
                "bg-[#1A1A1A] hover:cursor-grab",
                "data-[dragging=true]:w-5 data-[dragging=true]:h-5 data-[dragging=true]:after:h-6 data-[dragging=true]:after:w-6",
              ],
              step: "bg-[#878785] data-[in-range=true]:bg-[#616161]",
            }}
          />
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
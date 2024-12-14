import React from 'react';
import { useSettings } from '../../context/SettingsContext';
import { Slider } from '@nextui-org/slider';

export function AdvancedSection() {
  const { temperature, setTemperature, topP, setTopP, topK, setTopK } = useSettings();

  const renderSlider = (
    label: string,
    value: number,
    setValue: (value: number) => void
  ) => {
    return (
      <div className="mb-8">
        <div className="relative">
          <Slider
            className="max-w-md"
            color="foreground"
            value={value}
            label={label}
            maxValue={1}
            minValue={0}
            showSteps={true}
            size="lg"
            step={0.1}
            onChange={(value) => setValue(value as number)}
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
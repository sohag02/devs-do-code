import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { VoiceProviderCard } from './VoiceProviderCard';
import { VoiceList } from './VoiceList';
import { useVoice } from '../../context/VoiceContext';
import { voiceProviders } from '../../data/voiceProviders';
import { ChevronLeft } from 'lucide-react';

export function VoiceSelector() {
  const { theme } = useTheme();
  const {
    selectedVoiceProviderId,
    selectedVoiceId,
    selectedVoiceProvider,
    selectedVoice,
    setSelectedVoiceProviderId,
    setSelectedVoiceId,
  } = useVoice();

  // If provider is already selected, default to viewing voices
  const [viewingProviders, setViewingProviders] = useState(!selectedVoiceProviderId);

  const textColor = theme === 'dark' ? 'text-gray-200' : 'text-gray-800';
  const borderColor = theme === 'dark' ? 'border-gray-700' : 'border-gray-200';

  useEffect(() => {
    // If voice provider is selected, show voices
    if (selectedVoiceProviderId) {
      setViewingProviders(false);
    } else {
      setViewingProviders(true);
    }
  }, [selectedVoiceProviderId]);

  return (
    <div className="w-full h-full flex flex-col">
      <div className={`w-full p-4 flex items-center justify-between border-b ${borderColor}`}>
        <div className="flex items-center gap-3">
          {selectedVoiceProvider && !viewingProviders && (
            <div className={`w-8 h-8 rounded-full overflow-hidden flex-shrink-0`}>
              <img
                src={selectedVoiceProvider.logoUrl}
                alt={selectedVoiceProvider.name}
                className="w-full h-full object-contain"
              />
            </div>
          )}
          <div className="text-left">
            <h3 className={`font-medium ${textColor}`}>Voice Selection</h3>
            <p className="text-sm text-gray-500">
              {selectedVoice && !viewingProviders
                ? `${selectedVoice.name} by ${selectedVoiceProvider.name}`
                : 'Choose your voice'}
            </p>
          </div>
        </div>
        {!viewingProviders && (
          <button
            onClick={() => {
              setViewingProviders(true);
            }}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <ChevronLeft className={`w-5 h-5 ${textColor}`} />
          </button>
        )}
      </div>

      <div className="overflow-auto transition-all duration-200 flex-1">
        <div className="p-4">
          {viewingProviders ? (
            <>
              <div className="grid grid-cols-1 gap-4 mb-6">
                {voiceProviders.map((provider) => (
                  <VoiceProviderCard
                    key={provider.id}
                    provider={provider}
                    onSelect={() => {
                      setSelectedVoiceProviderId(provider.id);
                      // Do not reset selectedVoiceId here
                      setViewingProviders(false);
                    }}
                  />
                ))}
              </div>
            </>
          ) : (
            <>
              <VoiceList providerId={selectedVoiceProviderId} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
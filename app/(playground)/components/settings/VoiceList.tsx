import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { voices } from '../../data/voices';
import { useVoice } from '../../context/VoiceContext';

interface VoiceListProps {
  providerId: string;
}

export function VoiceList({ providerId }: VoiceListProps) {
  const { theme } = useTheme();
  const { selectedVoiceId, setSelectedVoiceId } = useVoice();

  const providerVoices = voices.filter((voice) => voice.providerId === providerId);
  const textColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-700';
  const borderColor = theme === 'dark' ? 'border-gray-700' : 'border-gray-200';
  const bgColor = theme === 'dark' ? 'bg-gray-800' : 'bg-white';

  return (
    <div className="space-y-2">
      {providerVoices.map((voice) => (
        <button
          key={voice.id}
          onClick={() => setSelectedVoiceId(voice.id)}
          className={`w-full p-3 ${bgColor} border ${borderColor} rounded-xl
                    transition-all duration-200
                    ${
                      selectedVoiceId === voice.id
                        ? 'border-indigo-500 ring-2 ring-indigo-500 ring-opacity-25'
                        : 'hover:border-indigo-300 dark:hover:border-indigo-400'
                    }
                    hover:shadow-md`}
        >
          <div className="flex items-start gap-3">
            <div
              className={`w-8 h-8 rounded-lg
                      bg-gradient-to-br from-indigo-500 to-purple-600
                      flex items-center justify-center text-white`}
            >
              <span className="font-bold text-sm">{voice.icon}</span>
            </div>

            <div className="flex-1 text-left">
              <h4 className={`font-medium text-sm ${textColor}`}>{voice.name}</h4>
              <p className="text-xs text-gray-500 mt-1 line-clamp-2">{voice.description}</p>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
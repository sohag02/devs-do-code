import React from 'react';
import { CheckCircle2, ExternalLink } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useVoice } from '../../context/VoiceContext';
import type { VoiceProvider } from '../../types/voiceProvider';

interface VoiceProviderCardProps {
  provider: VoiceProvider;
  onSelect: () => void;
}

export function VoiceProviderCard({ provider, onSelect }: VoiceProviderCardProps) {
  const { theme } = useTheme();
  const { setSelectedVoiceProviderId, setSelectedVoiceId } = useVoice();
  const [isHovered, setIsHovered] = React.useState(false);

  const bgColor = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
  const borderColor = theme === 'dark' ? 'border-gray-700' : 'border-gray-200';
  const textColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-700';

  const handleSelect = () => {
    setSelectedVoiceProviderId(provider.id);
    setSelectedVoiceId(''); // Reset selected voice when provider changes
    onSelect();
  };

  return (
    <button
      onClick={handleSelect}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`w-full p-3 ${bgColor} border ${borderColor} rounded-xl
        transition-all duration-200 group
        hover:border-indigo-300 dark:hover:border-indigo-400
        hover:shadow-lg hover:-translate-y-0.5`}
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0
          bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800
          flex items-center justify-center">
          <img
            src={provider.logoUrl}
            alt={provider.name}
            className="w-6 h-6 object-contain"
          />
        </div>

        <div className="flex-1 text-left">
          <div className="flex items-center gap-2">
            <h3 className={`font-medium text-sm ${textColor}`}>{provider.name}</h3>
            {provider.verified && (
              <CheckCircle2 className="w-4 h-4 text-green-500" />
            )}
          </div>

          <p className="text-xs text-gray-500 mt-1 line-clamp-2">{provider.description}</p>
        </div>

        <ExternalLink
          className={`w-4 h-4 transition-colors duration-200
            ${isHovered ? 'text-indigo-500' : 'text-gray-400'}
            flex-shrink-0`}
        />
      </div>
    </button>
  );
}
import React from 'react';
import { CheckCircle2, ExternalLink } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useModel } from '../../context/ModelContext';
import type { Provider } from '../../types/provider';

interface ProviderCardProps {
  provider: Provider;
  onSelect: () => void;
}

export function ProviderCard({ provider, onSelect }: ProviderCardProps) {
  const { theme } = useTheme();
  const { setSelectedProviderId, setSelectedModelId } = useModel();
  const [isHovered, setIsHovered] = React.useState(false);

  const bgColor = theme === 'dark' ? 'bg-[#242424]' : 'bg-white';
  const borderColor = theme === 'dark' ? 'border-gray-600' : 'border-gray-200';
  const textColor = theme === 'dark' ? 'text-gray-200' : 'text-gray-700';

  const handleSelect = () => {
    setSelectedProviderId(provider.id);
    setSelectedModelId(''); // Reset selected model when provider changes
    onSelect();
  };

  return (
    <button
      onClick={handleSelect}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`w-full p-3 ${bgColor} border ${borderColor} rounded-xl
        transition-all duration-200 group
        hover:border-indigo-400
        hover:shadow-lg hover:-translate-y-0.5`}
    >
      <div className="flex items-start gap-3">
        <div
          className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0
            bg-gradient-to-br from-gray-700 to-gray-800
            flex items-center justify-center"
        >
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

          <p className="text-xs text-gray-400 mt-1 line-clamp-2">{provider.description}</p>

          <div className="flex flex-wrap items-center gap-1 mt-2">
            {provider.features.map((feature, index) => (
              <div
                key={index}
                className={`flex items-center text-xs px-2 py-0.5 rounded-full
                  ${theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-indigo-100 text-indigo-700'}`}
              >
                {React.createElement(feature.icon, {
                  className: `w-3 h-3 mr-1 ${
                    theme === 'dark' ? 'text-indigo-400' : 'text-indigo-500'
                  }`,
                })}
                {feature.label}
              </div>
            ))}
          </div>
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
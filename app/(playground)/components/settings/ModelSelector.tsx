import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { ProviderCard } from './ProviderCard';
import { ModelList } from './ModelList';
import { useModel } from '../../context/ModelContext';
import { providers } from '../../data/providers';
import { ChevronLeft } from 'lucide-react';

export function ModelSelector() {
  const { theme } = useTheme();
  const {
    selectedProviderId,
    selectedModelId,
    selectedProvider,
    selectedModel,
    setSelectedProviderId,
    setSelectedModelId,
  } = useModel();

  // If provider is already selected, default to viewing models
  const [viewingProviders, setViewingProviders] = useState(!selectedProviderId);

  const textColor = theme === 'dark' ? 'text-gray-200' : 'text-gray-800';
  const borderColor = theme === 'dark' ? 'border-gray-700' : 'border-gray-200';

  useEffect(() => {
    // If provider is selected, show models
    if (selectedProviderId) {
      setViewingProviders(false);
    } else {
      setViewingProviders(true);
    }
  }, [selectedProviderId]);

  return (
    <div className="w-full h-full flex flex-col">
      <div className={`w-full p-4 flex items-center justify-between border-b ${borderColor}`}>
        <div className="flex items-center gap-3">
          {selectedProvider && !viewingProviders && (
            <div className={`w-8 h-8 rounded-full overflow-hidden flex-shrink-0`}>
              <img
                src={selectedProvider.logoUrl}
                alt={selectedProvider.name}
                className="w-full h-full object-contain"
              />
            </div>
          )}
          <div className="text-left">
            <h3 className={`font-medium ${textColor}`}>Model Selection</h3>
            <p className="text-sm text-gray-500">
              {selectedModel && !viewingProviders
                ? `${selectedModel.name} by ${selectedProvider.name}`
                : 'Choose your AI model'}
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
                {providers.map((provider) => (
                  <ProviderCard
                    key={provider.id}
                    provider={provider}
                    onSelect={() => {
                      setSelectedProviderId(provider.id);
                      // Do not reset selectedModelId here
                      setViewingProviders(false);
                    }}
                  />
                ))}
                <ProviderCard
                  provider={
                    {
                      id: '100',
                      name: 'Others',
                      description: 'All other available models',
                      logoUrl: '/others.png',
                      verified: false,
                      features: [],
                    }
                  }
                  onSelect={() => {
                    setSelectedProviderId('others');
                    // Do not reset selectedModelId here
                    setViewingProviders(false);
                  }}
                />
              </div>
            </>
          ) : (
            <>
              <ModelList providerId={selectedProviderId} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
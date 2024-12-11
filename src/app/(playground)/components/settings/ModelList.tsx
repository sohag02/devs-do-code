import React from 'react';
import { Zap, Clock, Sparkles } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { models } from '../../data/models';
import { useModel } from '../../context/ModelContext';

interface ModelListProps {
  providerId: string;
}

export function ModelList({ providerId }: ModelListProps) {
  const { theme } = useTheme();
  const { selectedModelId, setSelectedModelId } = useModel();

  const providerModels = providerId === 'others'
    ? models.filter((model) => !['openai', 'google', 'mistral', 'anthropic'].includes(model.providerId))
    : models.filter((model) => model.providerId === providerId);

  const textColor = theme === 'dark' ? 'text-gray-200' : 'text-gray-700';
  const borderColor = theme === 'dark' ? 'border-gray-600' : 'border-gray-200';
  const bgColor = theme === 'dark' ? 'bg-[#242424]' : 'bg-white';

  return (
    <div className="space-y-2">
      {providerModels.map((model) => (
        <button
          key={model.id}
          onClick={() => setSelectedModelId(model.id)}
          className={`w-full p-3 ${bgColor} border ${borderColor} rounded-xl
                      transition-all duration-200
                      ${
                        selectedModelId === model.id
                          ? 'border-indigo-500 ring-2 ring-indigo-500 ring-opacity-25'
                          : 'hover:border-indigo-400'
                      }
                      hover:shadow-md`}
        >
          <div className="flex items-start gap-3">
            <div
              className={`w-8 h-8 rounded-lg
                        bg-gradient-to-br from-indigo-500 to-purple-600
                        flex items-center justify-center text-white`}
            >
              <span className="font-bold text-sm">{model.icon}</span>
            </div>

            <div className="flex-1 text-left">
              <h4 className={`font-medium text-sm ${textColor}`}>{model.name}</h4>
              <p className="text-xs text-gray-400 mt-1 line-clamp-2">{model.description}</p>

              <div className="flex flex-wrap items-center gap-1 mt-2">
                <div
                  className={`flex items-center text-xs px-2 py-0.5 rounded-full
                              ${
                                theme === 'dark'
                                  ? 'bg-gray-700 text-gray-300'
                                  : 'bg-indigo-100 text-indigo-700'
                              }`}
                >
                  <Zap
                    className={`w-3 h-3 mr-1 ${
                      theme === 'dark' ? 'text-yellow-500' : 'text-yellow-500'
                    }`}
                  />
                  {model.performance}
                </div>
                <div
                  className={`flex items-center text-xs px-2 py-0.5 rounded-full
                              ${
                                theme === 'dark'
                                  ? 'bg-gray-700 text-gray-300'
                                  : 'bg-indigo-100 text-indigo-700'
                              }`}
                >
                  <Clock
                    className={`w-3 h-3 mr-1 ${
                      theme === 'dark' ? 'text-blue-400' : 'text-blue-500'
                    }`}
                  />
                  {model.speed}
                </div>
                <div
                  className={`flex items-center text-xs px-2 py-0.5 rounded-full
                              ${
                                theme === 'dark'
                                  ? 'bg-gray-700 text-gray-300'
                                  : 'bg-indigo-100 text-indigo-700'
                              }`}
                >
                  <Sparkles
                    className={`w-3 h-3 mr-1 ${
                      theme === 'dark' ? 'text-purple-400' : 'text-purple-500'
                    }`}
                  />
                  {model.features}
                </div>
              </div>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
import { useTheme } from '../../context/ThemeContext';
import { Smile, Activity, Briefcase, Edit3, CheckCircle } from 'lucide-react';
import { useSettings } from '../../context/SettingsContext';

export function BehaviorSection() {
  const { theme } = useTheme();
  const {
    selectedPersonalityId,
    setSelectedPersonalityId,
    customPrompt,
    setCustomPrompt,
  } = useSettings();

  const personalities = [
    { id: 'Happy', label: 'Happy', icon: Smile },
    { id: 'Funny', label: 'Funny', icon: Activity },
    { id: 'Professional', label: 'Professional', icon: Briefcase },
    { id: 'Custom', label: 'Custom', icon: Edit3 },
  ];

  const instructions: { [key: string]: string } = {
    Happy: 'Respond in a joyful and positive manner.',
    Funny: 'Include humor and wit in your responses.',
    Professional: 'Maintain a formal and professional tone.',
    Custom: customPrompt || 'Enter your custom instructions here...',
  };

  const isCustom = selectedPersonalityId === 'Custom';

  const textColor = theme === 'dark' ? 'text-gray-200' : 'text-gray-800';
  const bgColor = theme === 'dark' ? 'bg-gray-900' : 'bg-white';
  const borderColor = theme === 'dark' ? 'border-gray-700' : 'border-gray-200';
  const selectedBorderColor = 'border-indigo-500';

  return (
    <div className="flex flex-col">
      {/* Left Subsection */}
      <div className="w-full p-2">
        <div className="grid grid-cols-2 gap-2">
          {personalities.map((personality) => (
            <button
              key={personality.id}
              className={`w-full p-2 rounded-lg shadow-sm transition-all duration-300 flex items-center gap-1
                border ${
                  selectedPersonalityId === personality.id
                    ? selectedBorderColor
                    : borderColor
                } hover:shadow-md hover:-translate-y-0.5 ${bgColor} ${textColor}`}
              onClick={() => setSelectedPersonalityId(personality.id)}
            >
              <div
                className={`rounded-full p-1 ${
                  selectedPersonalityId === personality.id
                    ? 'bg-indigo-500 text-white'
                    : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                }`}
              >
                <personality.icon className="w-4 h-4" />
              </div>
              <span className="text-xs font-medium flex-1 whitespace-nowrap">
                {personality.label}
              </span>
              {selectedPersonalityId === personality.id && (
                <CheckCircle className="w-4 h-4 text-indigo-500" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Right Subsection */}
      <div className="w-full p-2">
        <div className="flex flex-col h-full">
          <div className="flex-1">
            <p className={`text-sm ${textColor} mb-2 font-medium`}>Instructions:</p>
            {isCustom ? (
              <textarea
                value={customPrompt}
                onChange={(e) => setCustomPrompt(e.target.value)}
                placeholder="Enter your custom instructions..."
                className={`w-full min-h-[3rem] max-h-[20rem] p-3 ${bgColor} ${textColor} border ${borderColor} rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-y overflow-auto`}
                rows={3}
              />
            ) : (
              <div
                className={`p-3 ${bgColor} ${textColor} border ${borderColor} rounded-lg text-sm`}
              >
                {instructions[selectedPersonalityId]}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
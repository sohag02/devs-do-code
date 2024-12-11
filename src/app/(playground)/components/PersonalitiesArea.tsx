'use client';
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Flame, Heart, User } from 'lucide-react';

interface PersonalitiesAreaProps {
  leftMenuOpen: boolean;
  rightMenuOpen: boolean;
}

interface Personality {
  id: string;
  name: string;
  description: string;
  icon: JSX.Element;
}

export function PersonalitiesArea({ leftMenuOpen, rightMenuOpen }: PersonalitiesAreaProps) {
  const { theme } = useTheme();
  const personalities: Personality[] = [
    {
      id: 'girlfriend',
      name: 'My Girlfriend',
      description: 'A loving and caring companion.',
      icon: <Heart className="w-6 h-6 text-pink-500" />,
    },
    {
      id: 'best-friend',
      name: 'My Best Friend',
      description: 'Your supportive and fun best friend.',
      icon: <User className="w-6 h-6 text-blue-500" />,
    },
    {
      id: 'boyfriend',
      name: 'My Boyfriend',
      description: 'A charming and attentive partner.',
      icon: <Heart className="w-6 h-6 text-red-500" />,
    },
    {
      id: 'savita-bhabhi',
      name: 'Savita Bhabhi',
      description: 'A confident and experienced woman.',
      icon: <Flame className="w-6 h-6 text-orange-500" />,
    },
    {
      id: 'submissive-girl',
      name: 'A Submissive Girl',
      description: 'Shy and eager to please.',
      icon: <User className="w-6 h-6 text-purple-500" />,
    },
  ];

  const bgColor = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
  const textColor = theme === 'dark' ? 'text-gray-200' : 'text-gray-800';
  const borderColor = theme === 'dark' ? 'border-gray-700' : 'border-gray-200';

  return (
    <main
      className={`flex-1 ${bgColor} transition-all duration-300 ease-in-out flex flex-col
        ${leftMenuOpen ? 'ml-64' : 'ml-16'}
        ${rightMenuOpen ? 'mr-96' : 'mr-16'}`}
    >
      <div className="flex-1 overflow-y-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {personalities.map((personality) => (
            <div
              key={personality.id}
              className={`p-4 border ${borderColor} rounded-lg shadow-md hover:shadow-lg transition-shadow`}
            >
              <div className="flex items-center mb-4">
                <div className="mr-3">{personality.icon}</div>
                <h3 className={`font-semibold ${textColor}`}>{personality.name}</h3>
              </div>
              <p className="text-sm text-gray-500 mb-2">{personality.description}</p>
              <span
                className="inline-block bg-red-500 text-white text-xs px-2 py-1 rounded-full"
              >
                Uncensored
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
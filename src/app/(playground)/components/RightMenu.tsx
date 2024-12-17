import React from 'react';
import { ChevronRight, ChevronLeft, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '../context/ThemeContext';

interface RightMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function RightMenu({ isOpen, onToggle }: RightMenuProps) {
  const { theme } = useTheme();
  const bgColor = theme === 'dark' ? 'bg-[#1A1A1A]' : 'bg-white';
  const textColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-700';
  const borderColor = theme === 'dark' ? 'border-gray-800' : 'border-gray-200';

  return (
    <div
      className={`${bgColor} border-l ${borderColor} h-screen transition-all duration-300 ease-in-out ${
        isOpen ? 'w-64' : 'w-16'
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <Button variant="ghost" size="icon" onClick={onToggle}>
          {isOpen ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
        </Button>
        {isOpen && <h1 className={`text-lg font-bold ${textColor}`}>Settings</h1>}
      </div>

      {/* Content */}
      {isOpen && (
        <div className="p-4">
          <Button variant="ghost" className="w-full flex items-center gap-2">
            <Settings className="h-5 w-5" />
            <span>Preferences</span>
          </Button>
        </div>
      )}
    </div>
  );
}
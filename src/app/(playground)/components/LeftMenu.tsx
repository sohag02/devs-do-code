'use client';
import React, { useState } from 'react';
import {
  MessageSquarePlus,
  Image,
  Users,
  Wrench,
  Instagram,
  Twitter,
  MessageCircle,
  Send,
  Bot,
  ChevronDown,
  ChevronUp,
  Flame,
  Heart,
  Smile,
  User as UserIcon,
  CheckCircle,
  CircleAlert,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useSettings } from '../context/SettingsContext';
import UserCard from './UserCard';

interface LeftMenuProps {
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onNewChat?: () => void;
  onShowPhotos?: () => void;
}

interface Personality {
  id: string;
  name: string;
  description: string;
  icon: React.ReactElement;
  tag: string;
}

export function LeftMenu({
  isOpen,
  onMouseEnter,
  onMouseLeave,
  onNewChat,
  onShowPhotos,
}: LeftMenuProps) {
  const { theme } = useTheme();
  const { selectedPersonalityId, setSelectedPersonalityId } = useSettings() as {
    selectedPersonalityId: string;
    setSelectedPersonalityId: React.Dispatch<React.SetStateAction<string>>;
  };
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [showUnavailableMessage, setShowUnavailableMessage] = useState(false);

  const handleSectionClick = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const menuItems = [
    {
      icon: MessageSquarePlus,
      label: 'Start a New Chat',
      onClick: onNewChat,
    },
    {
      icon: Image,
      label: 'Photos',
      onClick: onShowPhotos,
    },
    {
      icon: Users,
      label: 'Personalities',
      onClick: () => handleSectionClick('Personalities'),
    },
    {
      icon: Wrench,
      label: 'Tools',
      onClick: () => {
        // Handle the Tools section click
        setShowUnavailableMessage(true);
        // Hide the message after 3 seconds
        setTimeout(() => setShowUnavailableMessage(false), 3000);
      },
    },
  ];

  const socialIcons = [
    {
      icon: Instagram,
      href: 'https://www.instagram.com/sree.shades_/?utm_source=ig_web_button_share_sheet',
    },
    { icon: Twitter, href: 'https://x.com/Anand_Sreejan' },
    { icon: MessageCircle, href: 'https://github.com/SreejanPersonal' },
    { icon: Send, href: 'https://t.me/DevsDoCode' },
  ];

  const personalities: Personality[] = [
    {
      id: 'girlfriend',
      name: 'My Girlfriend',
      description: 'A loving and caring companion.',
      icon: <Heart className="w-5 h-5 text-pink-500" />,
      tag: 'Uncensored',
    },
    {
      id: 'best-friend',
      name: 'My Best Friend',
      description: 'Your supportive and fun best friend.',
      icon: <UserIcon className="w-5 h-5 text-blue-500" />,
      tag: 'Friendly',
    },
    {
      id: 'boyfriend',
      name: 'My Boyfriend',
      description: 'A charming and attentive partner.',
      icon: <Heart className="w-5 h-5 text-red-500" />,
      tag: 'Uncensored',
    },
    {
      id: 'savita-bhabhi',
      name: 'Savita Bhabhi',
      description: 'A confident and experienced woman.',
      icon: <Flame className="w-5 h-5 text-orange-500" />,
      tag: 'Uncensored',
    },
    {
      id: 'submissive-girl',
      name: 'A Submissive Girl',
      description: 'Shy and eager to please.',
      icon: <Smile className="w-5 h-5 text-purple-500" />,
      tag: 'Affectionate',
    },
  ];

  const bgColor = theme === 'dark' ? 'bg-[#2C2C2C]' : 'bg-white';
  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const borderColor = theme === 'dark' ? 'border-gray-700' : 'border-gray-200';
  const hoverBg = theme === 'dark' ? 'hover:bg-[#242424]' : 'hover:bg-gray-50';
  const iconColor = theme === 'dark' ? 'text-white' : 'text-gray-600';
  const iconHoverColor = theme === 'dark' ? 'hover:text-gray-300' : 'hover:text-gray-700';

  const expandedSectionBgColor = theme === 'dark' ? 'bg-[#2C2C2C]' : 'bg-white';
  const expandedSectionTextColor = theme === 'dark' ? 'text-white' : 'text-gray-900';

  // For shaking animation
  const [shake, setShake] = useState(false);

  const handleToolsClick = () => {
    setShake(true);
    if (menuItems[3].onClick) {
      menuItems[3].onClick();
    }
    // Stop shaking after animation duration (e.g., 500ms)
    setTimeout(() => setShake(false), 500);
  };

  // Handle personality selection
  const handlePersonalitySelect = (id: string) => {
    setSelectedPersonalityId(selectedPersonalityId === id ? '' : id);
  };

  return (
    <div
      className={`fixed left-0 top-0 h-full ${bgColor} shadow-lg z-10 transition-[width] duration-300 ease-in-out
                ${isOpen ? 'w-56' : 'w-14'}`}
    >
      <div
        className="flex flex-col h-full"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className={`p-3 border-b ${borderColor} flex items-center gap-2`}>
          <Bot className={`w-7 h-7 ${iconColor} shrink-0`} />
          <span
            className={`font-semibold text-base transition-opacity duration-300 ${textColor} ${
              isOpen ? 'opacity-100' : 'opacity-0'
            }`}
          >
            ChatBot
          </span>
        </div>

        <div className="flex-1 py-1 overflow-y-auto">
          {menuItems.map((item, index) => (
            <div key={index}>
              <button
                className={`relative w-full h-10 flex items-center ${
                  !isOpen ? 'justify-center' : 'px-3'
                } ${hoverBg} transition-colors ${
                  item.label === 'Tools' && shake ? 'animate-shake' : ''
                }`}
                onClick={item.label === 'Tools' ? handleToolsClick : item.onClick}
              >
                <item.icon className={`w-5 h-5 ${iconColor} shrink-0`} />
                <span
                  className={`ml-2 ${textColor} transition-opacity duration-300 ${
                    isOpen ? 'opacity-100' : 'opacity-0 w-0'
                  }`}
                >
                  {item.label}
                </span>
                {/* Expand/Collapse Icon */}
                {item.label === 'Personalities' && isOpen && (
                  <span className="ml-auto">
                    {expandedSection === 'Personalities' ? (
                      <ChevronUp className={`w-4 h-4 ${iconColor}`} />
                    ) : (
                      <ChevronDown className={`w-4 h-4 ${iconColor}`} />
                    )}
                  </span>
                )}
              </button>

              {/* Expanded Section */}
              {item.label === 'Personalities' &&
                expandedSection === 'Personalities' &&
                isOpen && (
                  <div
                    className={`px-3 pb-3 ${expandedSectionBgColor} ${expandedSectionTextColor}`}
                  >
                    <div className="mt-1 space-y-2">
                      {personalities.map((personality) => (
                        <button
                          key={personality.id}
                          className={`w-full p-2 rounded-xl shadow-md transition-all duration-300 flex items-center gap-1
                                      border ${
                                        selectedPersonalityId === personality.id
                                          ? `border-indigo-500`
                                          : `${borderColor}`
                                      } hover:shadow-lg hover:-translate-y-0.5 ${bgColor} ${textColor}`}
                          onClick={() => handlePersonalitySelect(personality.id)}
                        >
                          <div className="w-7 h-7">{personality.icon}</div>
                          <div className="flex-1 text-left">
                            <h4 className={`font-medium text-sm ${textColor}`}>
                              {personality.name}
                            </h4>
                            <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                              {personality.description}
                            </p>
                            <span
                              className={`inline-block mt-1 text-xs px-2 py-0.5 rounded-full ${
                                personality.tag === 'Uncensored'
                                  ? 'bg-red-500 text-white'
                                  : 'bg-green-500 text-white'
                              }`}
                            >
                              {personality.tag}
                            </span>
                          </div>
                          {selectedPersonalityId === personality.id && (
                            <CheckCircle className="w-4 h-4 text-indigo-500" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
            </div>
          ))}
        </div>

        <div className={`p-3 border-t ${borderColor}`}>
          <div
            className={`flex items-center ${isOpen ? 'justify-between' : 'justify-center'}`}
          >
            <UserCard isOpen={isOpen} />
          </div>
        </div>
        
        <div className={`p-3 border-t ${borderColor}`}>
          {isOpen && (
            <div className="flex gap-2 ml-auto">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${iconColor} ${iconHoverColor} transition-colors`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          )}
        </div>

      </div>

      {/* Unavailable message */}
      {showUnavailableMessage && (
        <div
          className={`absolute bottom-14 left-0 right-0 mx-3 p-2 bg-red-500 text-white rounded-lg text-center shadow-lg
                    transition-opacity duration-300 text-sm ${isOpen ? '' : 'flex items-center justify-center'}`}
        >
          {isOpen ? (
            'This section is currently not available.'
          ) : (
            <CircleAlert className="w-4 h-4" />
          )}
        </div>
      )}
    </div>
  );
}
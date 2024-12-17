import React from 'react';
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
  ArrowRight,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useSettings } from '../context/SettingsContext';
import UserCard from './UserCard';
import { useRouter } from 'next/navigation';
import { generateChatId } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface Personality {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  tag: string;
}

interface LeftMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function LeftMenu({ isOpen, onToggle }: LeftMenuProps) {
  const { theme } = useTheme();
  const { selectedPersonalityId, setSelectedPersonalityId } = useSettings() as {
    selectedPersonalityId: string;
    setSelectedPersonalityId: React.Dispatch<React.SetStateAction<string>>;
  };
  const [expandedSection, setExpandedSection] = React.useState<string | null>(null);
  const [showUnavailableMessage, setShowUnavailableMessage] = React.useState(false);
  const [localIsOpen, setLocalIsOpen] = React.useState(false);
  const [hoveredItem, setHoveredItem] = React.useState<string | null>(null);

  const handleSectionClick = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const router = useRouter();

  const handleNewChat = () => {
    const newChatId = generateChatId();
    router.push(`/playground/${newChatId}`);
  };

  const menuItems = [
    {
      id: 'new-chat',
      icon: MessageSquarePlus,
      label: 'Start a New Chat',
      onClick: handleNewChat,
    },
    {
      id: 'photos',
      icon: Image,
      label: 'Photos',
      onClick: () => {
        router.push('/playground/image');
      },
    },
    {
      id: 'docs',
      icon: Bot,
      label: 'Documentation',
      onClick: () => {
        router.push('/docs');
      },
    },
    {
      id: 'personalities',
      icon: Users,
      label: 'Personalities',
      onClick: () => handleSectionClick('Personalities'),
    },
    {
      id: 'tools',
      icon: Wrench,
      label: 'Tools',
      onClick: () => {
        setShowUnavailableMessage(true);
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

  const bgColor = theme === 'dark' ? 'bg-[#1A1A1A]' : 'bg-white';
  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const borderColor = theme === 'dark' ? 'border-gray-800' : 'border-gray-200';
  const hoverBg = theme === 'dark' ? 'hover:bg-[#242424]' : 'hover:bg-gray-50';
  const iconColor = theme === 'dark' ? 'text-white' : 'text-gray-600';
  const iconHoverColor = theme === 'dark' ? 'hover:text-gray-300' : 'hover:text-gray-700';

  const handlePersonalitySelect = (id: string) => {
    setSelectedPersonalityId(selectedPersonalityId === id ? '' : id);
  };

  return (
    <motion.div
      className={`left-0 top-0 h-full ${bgColor} shadow-lg z-10 border-r ${borderColor}`}
      animate={{ width: isOpen ? 224 : 56 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div
        className="flex flex-col h-full"
        onMouseEnter={() => setLocalIsOpen(true)}
        onMouseLeave={() => setLocalIsOpen(false)}
      >
        <motion.div 
          className={`p-3 border-b ${borderColor} flex items-center gap-2`}
          initial={false}
          animate={{ opacity: 1 }}
        >
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.3 }}
          >
            <Bot className={`w-7 h-7 ${iconColor} shrink-0`} />
          </motion.div>
          <motion.span
            className={`font-semibold text-base ${textColor}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
            transition={{ duration: 0.2 }}
          >
            ChatBot
          </motion.span>
        </motion.div>

        <div className="flex-1 py-1 overflow-y-auto">
          {menuItems.map((item) => (
            <motion.button
              key={item.id}
              className={`relative w-full h-10 flex items-center ${hoverBg} transition-colors px-3 gap-3`}
              onClick={item.onClick}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="shrink-0"
                whileHover={{ scale: 1.1 }}
                animate={{ rotate: expandedSection === 'Personalities' && item.id === 'personalities' ? 360 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <item.icon className={`w-5 h-5 ${iconColor}`} />
              </motion.div>
              <AnimatePresence>
                {isOpen && (
                  <motion.span
                    className={`text-sm ${textColor}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
              {hoveredItem === item.id && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </motion.button>
          ))}

          <AnimatePresence>
            {expandedSection === 'Personalities' && isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                {personalities.map((personality) => (
                  <motion.button
                    key={personality.id}
                    className={`w-full p-2 ${hoverBg} transition-colors flex items-start gap-2`}
                    onClick={() => handlePersonalitySelect(personality.id)}
                    whileHover={{ x: 4, backgroundColor: theme === 'dark' ? '#242424' : '#f3f4f6' }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="shrink-0 mt-1">{personality.icon}</div>
                    <div className="flex-1 text-left">
                      <p className={`text-sm font-medium ${textColor}`}>{personality.name}</p>
                      <p className="text-xs text-gray-500">{personality.description}</p>
                      <span className="inline-block text-[10px] px-1.5 py-0.5 rounded-full bg-red-500/10 text-red-500 mt-1">
                        {personality.tag}
                      </span>
                    </div>
                    {selectedPersonalityId === personality.id && (
                      <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-1" />
                    )}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {showUnavailableMessage && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg text-sm flex items-center gap-2"
            >
              <CircleAlert className="w-4 h-4" />
              Coming soon!
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div 
          className={`mt-auto p-3 border-t ${borderColor} flex justify-center gap-3`}
          initial={false}
          animate={{ opacity: 1 }}
        >
          {socialIcons.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${iconColor} ${iconHoverColor} transition-colors`}
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
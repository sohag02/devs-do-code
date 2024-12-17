import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ExternalLink, ArrowRight } from 'lucide-react';
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
  const glowColor = theme === 'dark' ? 'shadow-indigo-500/20' : 'shadow-indigo-500/30';

  const handleSelect = () => {
    setSelectedProviderId(provider.id);
    setSelectedModelId('');
    onSelect();
  };

  return (
    <motion.button
      onClick={handleSelect}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`w-full p-4 ${bgColor} border ${borderColor} rounded-xl
        transition-all duration-300
        hover:border-indigo-400 relative
        hover:shadow-lg hover:shadow-indigo-500/20
        group`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ 
        y: -4,
        scale: 1.02,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Glow effect */}
      <motion.div
        className={`absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 
          transition-opacity duration-300 ${glowColor}`}
        animate={{ opacity: isHovered ? 1 : 0 }}
      />

      <div className="flex items-start gap-4 relative z-10">
        <motion.div
          className={`w-12 h-12 rounded-xl overflow-hidden flex-shrink-0
            bg-gradient-to-br from-indigo-500 to-purple-600
            flex items-center justify-center p-2
            group-hover:shadow-lg ${glowColor}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.img
            src={provider.logoUrl}
            alt={provider.name}
            className="w-full h-full object-contain"
            initial={{ filter: 'grayscale(100%)' }}
            animate={{ filter: isHovered ? 'grayscale(0%)' : 'grayscale(100%)' }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <div className="flex-1 text-left">
          <div className="flex items-center gap-2">
            <h3 className={`font-medium text-sm ${textColor} group-hover:text-indigo-400 transition-colors`}>
              {provider.name}
            </h3>
            {provider.verified && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <CheckCircle2 className="w-4 h-4 text-green-500" />
              </motion.div>
            )}
          </div>

          <p className="text-xs text-gray-400 mt-1 line-clamp-2 group-hover:text-gray-300 transition-colors">
            {provider.description}
          </p>

          <motion.div 
            className="flex flex-wrap items-center gap-2 mt-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {provider.features.map((feature, index) => (
              <motion.div
                key={index}
                className={`flex items-center text-xs px-2 py-1 rounded-full
                  ${theme === 'dark' 
                    ? 'bg-gray-700 text-gray-300 group-hover:bg-indigo-900/40 group-hover:text-indigo-300' 
                    : 'bg-indigo-50 text-indigo-700 group-hover:bg-indigo-100'
                  } transition-colors`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {React.createElement(feature.icon, {
                  className: `w-3 h-3 mr-1 ${
                    theme === 'dark' ? 'text-indigo-400' : 'text-indigo-500'
                  }`,
                })}
                {feature.label}
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="flex-shrink-0 self-center"
          animate={{ 
            x: isHovered ? 5 : 0,
            opacity: isHovered ? 1 : 0.5
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <ArrowRight className={`w-5 h-5 transition-colors duration-200
            ${isHovered ? 'text-indigo-400' : 'text-gray-400'}`}
          />
        </motion.div>
      </div>
    </motion.button>
  );
}
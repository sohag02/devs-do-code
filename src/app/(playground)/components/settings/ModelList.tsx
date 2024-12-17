import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Clock, Sparkles, Search, Star } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { models } from '../../data/models';
import { useModel } from '../../context/ModelContext';

interface ModelListProps {
  providerId: string;
}

export function ModelList({ providerId }: ModelListProps) {
  const { theme } = useTheme();
  const { selectedModelId, setSelectedModelId } = useModel();
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const providerModels = providerId === 'others'
    ? models.filter((model) => !['openai', 'google', 'mistral', 'anthropic'].includes(model.providerId))
    : models.filter((model) => model.providerId === providerId);

  const filteredModels = providerModels.filter(model =>
    model.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    model.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const textColor = theme === 'dark' ? 'text-gray-200' : 'text-gray-700';
  const borderColor = theme === 'dark' ? 'border-gray-600' : 'border-gray-200';
  const bgColor = theme === 'dark' ? 'bg-[#242424]' : 'bg-white';
  const inputBg = theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50';
  const glowColor = theme === 'dark' ? 'shadow-indigo-500/20' : 'shadow-indigo-500/30';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      className="space-y-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Search Bar */}
      <motion.div 
        className="px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className={`relative rounded-lg ${inputBg} transition-colors`}>
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search models..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full pl-10 pr-4 py-2 rounded-lg ${inputBg} border ${borderColor} 
              focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${textColor}`}
          />
        </div>
      </motion.div>

      {/* Models List */}
      <motion.div className="space-y-3 px-4" variants={containerVariants}>
        <AnimatePresence mode="wait">
          {filteredModels.map((model) => (
            <motion.button
              key={model.id}
              onClick={() => setSelectedModelId(model.id)}
              onMouseEnter={() => setHoveredId(model.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`w-full p-4 ${bgColor} border ${borderColor} rounded-xl
                relative overflow-hidden group
                transition-all duration-300
                ${selectedModelId === model.id
                  ? 'border-indigo-500 ring-2 ring-indigo-500/20'
                  : 'hover:border-indigo-400'
                }
                hover:shadow-lg ${glowColor}`}
              variants={itemVariants}
              whileHover={{ 
                y: -4,
                transition: { type: "spring", stiffness: 300, damping: 25 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Glow Effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 
                  transition-opacity duration-300 rounded-xl`}
                animate={{ opacity: hoveredId === model.id || selectedModelId === model.id ? 1 : 0 }}
              />

              <div className="flex items-start gap-4 relative z-10">
                <motion.div
                  className={`w-10 h-10 rounded-xl
                    bg-gradient-to-br from-indigo-500 to-purple-600
                    flex items-center justify-center text-white
                    group-hover:shadow-lg ${glowColor}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="font-bold text-sm">{model.icon}</span>
                </motion.div>

                <div className="flex-1 text-left">
                  <div className="flex items-center gap-2">
                    <h4 className={`font-medium text-sm ${textColor} group-hover:text-indigo-400 transition-colors`}>
                      {model.name}
                    </h4>
                    {model.isNew && (
                      <motion.span
                        className="px-2 py-0.5 rounded-full text-xs bg-green-500/10 text-green-500"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        New
                      </motion.span>
                    )}
                  </div>
                  
                  <p className="text-xs text-gray-400 mt-1 line-clamp-2 group-hover:text-gray-300 transition-colors">
                    {model.description}
                  </p>

                  <motion.div 
                    className="flex flex-wrap items-center gap-2 mt-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <motion.div
                      className={`flex items-center text-xs px-2 py-1 rounded-full
                        ${theme === 'dark'
                          ? 'bg-yellow-500/10 text-yellow-400'
                          : 'bg-yellow-50 text-yellow-600'
                        } transition-colors`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Zap className="w-3 h-3 mr-1" />
                      {model.performance}
                    </motion.div>

                    <motion.div
                      className={`flex items-center text-xs px-2 py-1 rounded-full
                        ${theme === 'dark'
                          ? 'bg-blue-500/10 text-blue-400'
                          : 'bg-blue-50 text-blue-600'
                        } transition-colors`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Clock className="w-3 h-3 mr-1" />
                      {model.speed}
                    </motion.div>

                    <motion.div
                      className={`flex items-center text-xs px-2 py-1 rounded-full
                        ${theme === 'dark'
                          ? 'bg-purple-500/10 text-purple-400'
                          : 'bg-purple-50 text-purple-600'
                        } transition-colors`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Star className="w-3 h-3 mr-1" />
                      {model.features}
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
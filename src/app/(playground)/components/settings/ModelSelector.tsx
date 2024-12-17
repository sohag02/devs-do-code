import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { ProviderCard } from './ProviderCard';
import { ModelList } from './ModelList';
import { useModel } from '../../context/ModelContext';
import { providers } from '../../data/providers';
import { ChevronLeft, Sparkles, Search } from 'lucide-react';

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

  const [viewingProviders, setViewingProviders] = useState(!selectedProviderId);
  const [searchQuery, setSearchQuery] = useState('');

  const textColor = theme === 'dark' ? 'text-gray-200' : 'text-gray-800';
  const borderColor = theme === 'dark' ? 'border-gray-700' : 'border-gray-200';
  const bgHover = theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100';
  const inputBg = theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50';

  useEffect(() => {
    if (selectedProviderId) {
      setViewingProviders(false);
    } else {
      setViewingProviders(true);
    }
  }, [selectedProviderId]);

  const filteredProviders = providers.filter(provider =>
    provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    provider.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.div 
      className="w-full h-full flex flex-col"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
    >
      <motion.div 
        className={`w-full p-4 flex items-center justify-between border-b ${borderColor}`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-3">
          {selectedProvider && !viewingProviders ? (
            <motion.div 
              className={`w-8 h-8 rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-br from-indigo-500 to-purple-600 p-1`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <img
                src={selectedProvider.logoUrl}
                alt={selectedProvider.name}
                className="w-full h-full object-contain rounded-full"
              />
            </motion.div>
          ) : (
            <motion.div
              className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles className="w-4 h-4 text-white" />
            </motion.div>
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
          <motion.button
            onClick={() => setViewingProviders(true)}
            className={`p-2 rounded-full ${bgHover} transition-colors`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className={`w-5 h-5 ${textColor}`} />
          </motion.button>
        )}
      </motion.div>

      <div className="overflow-auto transition-all duration-200 flex-1">
        <AnimatePresence mode="wait">
          {viewingProviders ? (
            <motion.div
              key="providers"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="p-4"
            >
              <motion.div 
                className="mb-4"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className={`relative rounded-lg ${inputBg} transition-colors`}>
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search providers..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={`w-full pl-10 pr-4 py-2 rounded-lg ${inputBg} border ${borderColor} focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${textColor}`}
                  />
                </div>
              </motion.div>

              <motion.div 
                className="grid grid-cols-1 gap-4 mb-6"
                variants={containerVariants}
              >
                {filteredProviders.map((provider, index) => (
                  <motion.div
                    key={provider.id}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ProviderCard
                      provider={provider}
                      onSelect={() => {
                        setSelectedProviderId(provider.id);
                        setViewingProviders(false);
                      }}
                    />
                  </motion.div>
                ))}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  <ProviderCard
                    provider={{
                      id: '100',
                      name: 'Others',
                      description: 'All other available models',
                      logoUrl: '/others.png',
                      verified: false,
                      features: [],
                    }}
                    onSelect={() => {
                      setSelectedProviderId('others');
                      setViewingProviders(false);
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          ) : (
            <ModelList providerId={selectedProviderId} />
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
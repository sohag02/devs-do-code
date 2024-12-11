import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { Provider } from '../types/provider';
import type { Model } from '../types/model';
import { providers } from '../data/providers';
import { models } from '../data/models';

interface ModelContextType {
  selectedProviderId: string;
  selectedModelId: string;
  setSelectedProviderId: (id: string) => void;
  setSelectedModelId: (id: string) => void;
  selectedProvider: Provider;
  selectedModel: Model;
}

const defaultProviderId = 'openai';
const defaultModelId = 'gpt-4-turbo';

const ModelContext = createContext<ModelContextType | undefined>(undefined);

export function ModelProvider({ children }: { children: ReactNode }) {
  const [selectedProviderId, setSelectedProviderId] = useState(defaultProviderId);
  const [selectedModelId, setSelectedModelId] = useState(defaultModelId);

  useEffect(() => {
    // Load from localStorage
    const storedProviderId = localStorage.getItem('selectedProviderId');
    const storedModelId = localStorage.getItem('selectedModelId');
    if (storedProviderId) {
      setSelectedProviderId(storedProviderId);
    }
    if (storedModelId) {
      setSelectedModelId(storedModelId);
    }
  }, []);

  useEffect(() => {
    // Save to localStorage
    localStorage.setItem('selectedProviderId', selectedProviderId);
  }, [selectedProviderId]);

  useEffect(() => {
    // Save to localStorage
    localStorage.setItem('selectedModelId', selectedModelId);
  }, [selectedModelId]);

  const selectedProvider =
    providers.find((p) => p.id === selectedProviderId) ?? providers[0];
  const selectedModel =
    models.find((m) => m.id === selectedModelId) ?? models[0];

  return (
    <ModelContext.Provider
      value={{
        selectedProviderId,
        selectedModelId,
        setSelectedProviderId,
        setSelectedModelId,
        selectedProvider,
        selectedModel,
      }}
    >
      {children}
    </ModelContext.Provider>
  );
}

export function useModel() {
  const context = useContext(ModelContext);
  if (!context) {
    throw new Error('useModel must be used within a ModelProvider');
  }
  return context;
}
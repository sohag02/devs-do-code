import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { VoiceProvider } from '../types/voiceProvider';
import type { Voice } from '../types/voice';
import { voiceProviders } from '../data/voiceProviders';
import { voices } from '../data/voices';

interface VoiceContextType {
  selectedVoiceProviderId: string;
  selectedVoiceId: string;
  setSelectedVoiceProviderId: (id: string) => void;
  setSelectedVoiceId: (id: string) => void;
  selectedVoiceProvider: VoiceProvider;
  selectedVoice: Voice;
}

const defaultVoiceProviderId = 'openai-voices';
const defaultVoiceId = 'alloy';

const VoiceContext = createContext<VoiceContextType | undefined>(undefined);

export function VoiceProviderContext({ children }: { children: ReactNode }) {
  const [selectedVoiceProviderId, setSelectedVoiceProviderId] = useState(defaultVoiceProviderId);
  const [selectedVoiceId, setSelectedVoiceId] = useState(defaultVoiceId);

  useEffect(() => {
    const storedVoiceProviderId = localStorage.getItem('selectedVoiceProviderId');
    const storedVoiceId = localStorage.getItem('selectedVoiceId');
    if (storedVoiceProviderId) {
      setSelectedVoiceProviderId(storedVoiceProviderId);
    }
    if (storedVoiceId) {
      setSelectedVoiceId(storedVoiceId);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('selectedVoiceProviderId', selectedVoiceProviderId);
  }, [selectedVoiceProviderId]);

  useEffect(() => {
    localStorage.setItem('selectedVoiceId', selectedVoiceId);
  }, [selectedVoiceId]);

  const selectedVoiceProvider =
    voiceProviders.find((p) => p.id === selectedVoiceProviderId) ?? voiceProviders[0];
  const selectedVoice =
    voices.find((v) => v.id === selectedVoiceId) ?? voices[0];

  return (
    <VoiceContext.Provider
      value={{
        selectedVoiceProviderId,
        selectedVoiceId,
        setSelectedVoiceProviderId,
        setSelectedVoiceId,
        selectedVoiceProvider,
        selectedVoice,
      }}
    >
      {children}
    </VoiceContext.Provider>
  );
}

export function useVoice() {
  const context = useContext(VoiceContext);
  if (!context) {
    throw new Error('useVoice must be used within a VoiceProviderContext');
  }
  return context;
}
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface SettingsContextType {
  temperature: number;
  setTemperature: (value: number) => void;
  topP: number;
  setTopP: (value: number) => void;
  topK: number;
  setTopK: (value: number) => void;
  selectedPersonalityId: string;
  setSelectedPersonalityId: (id: string) => void;
  customPrompt: string;
  setCustomPrompt: (prompt: string) => void;
}

const defaultTemperature = 0.5;
const defaultTopP = 0.5;
const defaultTopK = 0.5;
const defaultPersonalityId = 'Happy';
const defaultCustomPrompt = '';

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [temperature, setTemperature] = useState(defaultTemperature);
  const [topP, setTopP] = useState(defaultTopP);
  const [topK, setTopK] = useState(defaultTopK);
  const [selectedPersonalityId, setSelectedPersonalityId] = useState(defaultPersonalityId);
  const [customPrompt, setCustomPrompt] = useState(defaultCustomPrompt);

  useEffect(() => {
    // Load settings from localStorage
    const storedTemperature = localStorage.getItem('temperature');
    const storedTopP = localStorage.getItem('topP');
    const storedTopK = localStorage.getItem('topK');
    const storedPersonalityId = localStorage.getItem('selectedPersonalityId');
    const storedCustomPrompt = localStorage.getItem('customPrompt');
    if (storedTemperature !== null) {
      setTemperature(parseFloat(storedTemperature));
    }
    if (storedTopP !== null) {
      setTopP(parseFloat(storedTopP));
    }
    if (storedTopK !== null) {
      setTopK(parseFloat(storedTopK));
    }
    if (storedPersonalityId !== null) {
      setSelectedPersonalityId(storedPersonalityId);
    }
    if (storedCustomPrompt !== null) {
      setCustomPrompt(storedCustomPrompt);
    }
  }, []);

  useEffect(() => {
    // Save settings to localStorage
    localStorage.setItem('temperature', temperature.toString());
  }, [temperature]);

  useEffect(() => {
    localStorage.setItem('topP', topP.toString());
  }, [topP]);

  useEffect(() => {
    localStorage.setItem('topK', topK.toString());
  }, [topK]);

  useEffect(() => {
    localStorage.setItem('selectedPersonalityId', selectedPersonalityId);
  }, [selectedPersonalityId]);

  useEffect(() => {
    localStorage.setItem('customPrompt', customPrompt);
  }, [customPrompt]);

  return (
    <SettingsContext.Provider
      value={{
        temperature,
        setTemperature,
        topP,
        setTopP,
        topK,
        setTopK,
        selectedPersonalityId,
        setSelectedPersonalityId,
        customPrompt,
        setCustomPrompt,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
}
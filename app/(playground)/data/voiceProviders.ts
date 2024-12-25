import type { VoiceProvider } from '../types/voiceProvider';

export const voiceProviders: VoiceProvider[] = [
  {
    id: 'openai-voices',
    name: 'OpenAI Voices',
    description: 'High-quality voices from OpenAI',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg',
    verified: true,
  },
  {
    id: 'deepgram',
    name: 'Deepgram',
    description: 'Voice solutions with AI',
    logoUrl: 'https://www.deepgram.com/assets/logos/svg/deepgram-logo.svg',
    verified: true,
  },
  // Add more providers as needed
];
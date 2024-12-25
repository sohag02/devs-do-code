import { Brain, Zap, Shield, Sparkles } from 'lucide-react';
import type { Provider } from '../types/provider';

export const providers: Provider[] = [
  {
    id: 'openai',
    name: 'OpenAI',
    description: 'Leading AI research lab, creators of ChatGPT and GPT-4',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg',
    verified: true,
    features: [
      { icon: Brain, label: 'Advanced Reasoning' },
      { icon: Zap, label: 'Fast Response' },
      { icon: Shield, label: 'Enterprise Ready' }
    ]
  },
  {
    id: 'anthropic',
    name: 'Anthropic',
    description: 'Advanced AI systems with focus on safety and ethics',
    logoUrl: 'https://www.anthropic.com/favicon.ico',
    verified: true,
    features: [
      { icon: Shield, label: 'Constitutional AI' },
      { icon: Brain, label: 'Deep Analysis' },
      { icon: Sparkles, label: 'Creative Tasks' }
    ]
  },
  {
    id: 'google',
    name: 'Google AI',
    description: 'Cutting-edge AI models powered by Google Research',
    logoUrl: 'https://www.gstatic.com/lamda/images/favicon_v1_150160cddff7f294ce30.svg',
    verified: true,
    features: [
      { icon: Brain, label: 'Multi-modal' },
      { icon: Zap, label: 'Real-time' },
      { icon: Shield, label: 'Enterprise' }
    ]
  },
  {
    id: 'mistral',
    name: 'Mistral AI',
    description: 'Open-source focused AI models with state-of-the-art performance',
    logoUrl: 'https://mistral.ai/images/logo.svg',
    verified: true,
    features: [
      { icon: Sparkles, label: 'Efficient' },
      { icon: Brain, label: 'Customizable' },
      { icon: Shield, label: 'Open Source' }
    ]
  }
];
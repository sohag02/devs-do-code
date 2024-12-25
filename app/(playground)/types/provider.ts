import { LucideIcon } from 'lucide-react';

export interface Provider {
  id: string;
  name: string;
  description: string;
  logoUrl: string;
  verified: boolean;
  features: {
    icon: LucideIcon;
    label: string;
  }[];
}
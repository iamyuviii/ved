import {
  Activity,
  BadgeIndianRupee,
  Box,
  Heart,
  LineChart,
  MessageCircleHeart,
  MoonStar,
  Mountain,
  Navigation,
  Shield,
  Sparkles,
  UserRound,
  Waves,
  Wind
} from 'lucide-react';
import type { FlowType, PracticeCard } from './types';

export const preferences = [
  { id: 'meditation' as FlowType, label: 'Meditation', description: 'Saans, stillness aur mindful guidance.', icon: Wind },
  { id: 'mantra' as FlowType, label: 'Mantra Chant', description: 'Apna mantra chunein aur seedha jaap shuru karein.', icon: Sparkles },
  { id: 'samadhan' as FlowType, label: 'Problem Ka Mantra Samadhan', description: 'Dil ki baat chunein, mantra-based samadhan paayein.', icon: MessageCircleHeart }
];

export const practices: Record<FlowType, PracticeCard[]> = {
  mantra: [
    { id: 'shivaya', label: 'Om Namah Shivaya', description: 'Mann ko shaant aur andar se sthir banaye.', icon: MoonStar, theme: { dark: '#561712', accent: '#F4541A' } },
    { id: 'hanumate', label: 'Om Shri Hanumate Namah', description: 'Himmat, focus aur confidence badhaye.', icon: Mountain, theme: { dark: '#6C210D', accent: '#E76C16' } },
    { id: 'ram', label: 'Jai Shri Ram', description: 'Dharma, discipline aur positive energy jagaye.', icon: Navigation, theme: { dark: '#71340C', accent: '#F39418' } },
    { id: 'durga', label: 'Jai Maa Durga', description: 'Shakti de aur negativity se raksha kare.', icon: Shield, theme: { dark: '#64112A', accent: '#D63B37' } }
  ],
  meditation: [
    { id: 'vagus', label: 'Vagus Breathing', description: 'Visual rhythm ke saath nervous system ko calm karein.', icon: Waves, theme: { dark: '#173D46', accent: '#36A6A0' } },
    { id: 'guided', label: 'Guided Meditation', description: 'Ek gentle guide ke saath step-by-step breathe karein.', icon: UserRound, theme: { dark: '#3D235C', accent: '#8F5CC4' } },
    { id: 'affirmation', label: 'Affirmation & Prompts', description: 'Positive prompts ko dekhein, bolein aur feel karein.', icon: Sparkles, theme: { dark: '#712748', accent: '#D56588' } },
    { id: 'box', label: 'Box Breathing', description: 'Growing box ko follow karke breathing balance karein.', icon: Box, theme: { dark: '#173967', accent: '#488BD5' } }
  ],
  samadhan: [
    { id: 'love', label: 'Love', description: 'Rishton aur emotions mein clarity ke liye.', icon: Heart, mantra: 'Om Namah Shivaya', theme: { dark: '#711F39', accent: '#DF5571' } },
    { id: 'career', label: 'Career', description: 'Direction, focus aur growth ke liye.', icon: LineChart, mantra: 'Om Shri Hanumate Namah', theme: { dark: '#263D46', accent: '#519B7D' } },
    { id: 'money', label: 'Money', description: 'Abundance aur disciplined action ke liye.', icon: BadgeIndianRupee, mantra: 'Jai Maa Durga', theme: { dark: '#5E3A12', accent: '#D39B2C' } },
    { id: 'general', label: 'General', description: 'Jab mann par bojh ho aur raasta saaf na dikhe.', icon: Activity, mantra: 'Jai Shri Ram', theme: { dark: '#45315F', accent: '#8E6DBA' } }
  ]
};

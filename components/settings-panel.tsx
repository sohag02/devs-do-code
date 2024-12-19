'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Settings, ChevronRight, Brain, User2, Sparkles, MessageSquare, Plus, PlayCircle, Briefcase } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface Section {
  id: string
  isExpanded: boolean
}

export function SettingsPanel() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [activeTab, setActiveTab] = useState<'model' | 'smartprompt'>('model')
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const [selectedModel, setSelectedModel] = useState('gpt4-mini')
  const [selectedVoice, setSelectedVoice] = useState('jessica')
  const [selectedPersonality, setSelectedPersonality] = useState('normal')

  const sections = [
    {
      id: 'profiles',
      title: 'Profiles',
      icon: User2,
      description: 'Save and switch between your different settings profiles',
      content: (
        <div className="space-y-4 text-center text-sm text-gray-400 p-4">
          <p>
            No AI profiles available. Create a profile to save your current
            configuration, including selected models, personality settings, tools, and
            other preferences. Profiles help you quickly switch between different AI
            configurations for various tasks.
          </p>
          <Button className="w-full" variant="outline">
            <Plus className="w-4 h-4 mr-2" />
            Create New Profile
          </Button>
        </div>
      )
    },
    {
      id: 'model',
      title: 'Model',
      icon: Brain,
      description: 'Select between models from OpenAI, Anthropic, Google, and Mistral',
      content: (
        <div className="space-y-2 p-2">
          {[
            { id: 'openai', name: 'OpenAI', icon: Brain },
            { id: 'gpt4-mini', name: 'GPT-4o Mini', icon: Brain, description: "OpenAI's intelligent small model for fast, lightweight tasks" },
            { id: 'anthropic', name: 'Anthropic', icon: User2 },
            { id: 'google', name: 'Google', icon: Brain },
            { id: 'meta', name: 'Meta', icon: Brain },
            { id: 'mistral', name: 'Mistral', icon: Brain }
          ].map((model) => (
            <button
              key={model.id}
              onClick={() => setSelectedModel(model.id)}
              className={cn(
                "w-full flex items-center gap-3 p-3 rounded-lg transition-colors",
                selectedModel === model.id 
                  ? 'bg-blue-500/20 border border-blue-500/50' 
                  : 'hover:bg-[#2A2A2A]'
              )}
            >
              <model.icon className="w-4 h-4" />
              <span>{model.name}</span>
              {model.description && selectedModel === model.id && (
                <div className="ml-2 text-xs text-gray-400">
                  {model.description}
                </div>
              )}
            </button>
          ))}
          <div className="flex items-center justify-between p-3 mt-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>Upgrade to pro</span>
            </div>
            <Button variant="ghost" size="icon">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )
    },
    {
      id: 'voice',
      title: 'Voice',
      icon: MessageSquare,
      description: 'Select a voice for feynChat',
      content: (
        <div className="p-4 space-y-4">
          <div className="space-y-2">
            {['Jessica', 'Lily', 'Matilda', 'River', 'Rohan', 'Brian', 'Callum', 'Chris'].map((voice) => (
              <button
                key={voice}
                onClick={() => setSelectedVoice(voice.toLowerCase())}
                className={cn(
                  "w-full text-left p-3 rounded-lg transition-colors",
                  selectedVoice === voice.toLowerCase() 
                    ? 'bg-[#2A2A2A]' 
                    : 'hover:bg-[#2A2A2A]'
                )}
              >
                {voice}
              </button>
            ))}
          </div>
          {selectedVoice === 'jessica' && (
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                {[
                  { label: 'American', color: 'bg-yellow-500' },
                  { label: 'Young', color: 'bg-orange-500' },
                  { label: 'Female', color: 'bg-pink-500' },
                  { label: 'Expressive', color: 'bg-green-500' },
                  { label: 'Conversational', color: 'bg-cyan-500' }
                ].map((tag) => (
                  <span
                    key={tag.label}
                    className={`px-3 py-1 rounded-full text-xs ${tag.color}`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
              <Button variant="outline" className="w-full">
                <PlayCircle className="w-4 h-4 mr-2" />
                Play Sample
              </Button>
            </div>
          )}
        </div>
      )
    },
    {
      id: 'behaviour',
      title: 'Behaviour',
      icon: Briefcase,
      description: 'Give feynChat a personality or set of instructions',
      content: (
        <div className="p-4 space-y-4">
          <div className="space-y-1">
            <h4 className="text-sm font-medium">Personality Mode</h4>
            <div className="space-y-2">
              {[
                { id: 'normal', label: 'Normal' },
                { id: 'fun', label: 'Fun' },
                { id: 'professional', label: 'Professional' },
                { id: 'corpobot', label: 'Corpobot' },
                { id: 'custom', label: 'Custom' }
              ].map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => setSelectedPersonality(mode.id)}
                  className={cn(
                    "w-full text-left p-3 rounded-lg transition-colors",
                    selectedPersonality === mode.id 
                      ? 'bg-[#2A2A2A]' 
                      : 'hover:bg-[#2A2A2A]'
                  )}
                >
                  {mode.label}
                </button>
              ))}
            </div>
          </div>
          {selectedPersonality === 'normal' && (
            <div className="p-3 bg-[#2A2A2A] rounded-lg">
              <h4 className="font-medium mb-2">Instructions</h4>
              <p className="text-sm text-gray-400">You are a helpful AI assistant.</p>
            </div>
          )}
        </div>
      )
    }
  ]

  return (
    <div 
      className="fixed top-0 right-0 h-screen"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <motion.div
        className="h-full bg-[#1A1A1A] border-l border-[#2A2A2A] overflow-hidden"
        initial={{ width: 48 }}
        animate={{ width: isExpanded ? 400 : 48 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex flex-col h-full w-[400px]">
          {/* Header */}
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Settings className="w-5 h-5" />
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isExpanded ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  Chat Settings
                </motion.span>
              </h2>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isExpanded ? 1 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-1 bg-[#2A2A2A] rounded-full p-1"
              >
                <Button 
                  variant="ghost" 
                  className={`rounded-full px-4 ${activeTab === 'model' ? 'bg-[#3A3A3A]' : ''}`}
                  onClick={() => setActiveTab('model')}
                >
                  <Brain className="w-4 h-4 mr-2" />
                  Model
                </Button>
                <Button 
                  variant="ghost" 
                  className={`rounded-full px-4 ${activeTab === 'smartprompt' ? 'bg-[#3A3A3A]' : ''}`}
                  onClick={() => setActiveTab('smartprompt')}
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  SmartPrompt
                </Button>
              </motion.div>
            </div>

            {/* Sections */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isExpanded ? 1 : 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              {sections.map((section) => (
                <div key={section.id} className="space-y-2">
                  <button
                    onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
                    className="w-full flex items-center justify-between hover:bg-[#2A2A2A] p-3 rounded-lg transition-colors"
                  >
                    <div className="space-y-1 text-left">
                      <div className="flex items-center gap-2">
                        <section.icon className="w-5 h-5" />
                        <h3 className="text-lg font-medium">{section.title}</h3>
                      </div>
                      <p className="text-sm text-gray-400">
                        {section.description}
                      </p>
                    </div>
                    <ChevronRight 
                      className={cn(
                        "w-5 h-5 text-gray-400 transition-transform",
                        expandedSection === section.id && "rotate-90"
                      )} 
                    />
                  </button>
                  {expandedSection === section.id && (
                    <div className="border-t border-[#2A2A2A]">
                      {section.content}
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}


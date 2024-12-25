"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'

type ModelType = 'Chat' | 'Code' | 'Image Generation' | 'Music Generation' | 'Video' | 'Voice' | 'Embedding' | 'Language' | 'Genomic Models' | '3D Generation'

interface Model {
  name: string
  company: string
  icon: string
  type: ModelType
  context?: string
  href: string
}

const models: Model[] = [
  {
    name: 'MiniMax Music',
    company: 'Hailuo AI',
    icon: 'https://cdn.prod.website-files.com/65b8f370a600366bc7cf9b20/6765610d916ab150d86b65e0_130440902.png',
    type: 'Music Generation',
    href: '/models/minimax-music-api'
  },
  {
    name: 'Gemini 2.0 Flash Experimental',
    company: 'Google',
    icon: 'https://cdn.prod.website-files.com/65b8f370a600366bc7cf9b20/6686b29274048ab40a60cfb1_Screenshot%202024-07-04%20at%205.26.02%E2%80%AFPM.webp',
    type: 'Chat',
    context: '1M',
    href: '/models/gemini-2-0-flash-experimental'
  },
  {
    name: 'Meta Llama 3.3 70B Instruct Turbo',
    company: 'Meta',
    icon: 'https://cdn.prod.website-files.com/65b8f370a600366bc7cf9b20/673b6e7458bcae74d02266fd_6683f56803b428b9ea56a67d_6683c6bb875f1845806550e9_Group%201799369455d.webp',
    type: 'Chat',
    context: '128K',
    href: '/models/meta-llama-3-3-70b-instruct-turbo-api'
  },
  {
    name: 'Kling AI (text-to-video)',
    company: 'Kuaishou Technology',
    icon: 'https://cdn.prod.website-files.com/65b8f370a600366bc7cf9b20/6718d0e02f90eca5abe33eed_ddd.png',
    type: 'Video',
    context: '8K',
    href: '/models/kling-ai-text-to-video-api'
  },
  {
    name: 'Kling AI (image-to-video)',
    company: 'Kuaishou Technology',
    icon: 'https://cdn.prod.website-files.com/65b8f370a600366bc7cf9b20/6718d0e02f90eca5abe33eed_ddd.png',
    type: 'Video',
    context: '8K',
    href: '/models/kling-ai-image-to-video'
  },
  {
    name: 'Stable Audio',
    company: 'Stability AI',
    icon: 'https://cdn.prod.website-files.com/65b8f370a600366bc7cf9b20/661c29727f7f8e7bc1101b83_Group%201000007692.webp',
    type: 'Music Generation',
    href: '/models/stable-audio'
  },
  {
    name: 'WizardLM 2-8 (22B)',
    company: 'Microsoft',
    icon: 'https://cdn.prod.website-files.com/65b8f370a600366bc7cf9b20/673c5422a8e608dd15e0b2e5_660e6820d4fcb05bdc8fddc4_microsoft-p-500.webp',
    type: 'Language',
    context: '64K',
    href: '/models/wizardlm-2-8-22b'
  },
  {
    name: 'Gemma 2 (27b)',
    company: 'Google',
    icon: 'https://cdn.prod.website-files.com/65b8f370a600366bc7cf9b20/673c4e84b847336af9a7fdd9_660e675c17555ac0f5cafca0_google-p-500.webp',
    type: 'Chat',
    context: '8K',
    href: '/models/gemma-2-27b'
  },
  {
    name: 'Llama Guard 3 (8B)',
    company: 'Meta',
    icon: 'https://cdn.prod.website-files.com/65b8f370a600366bc7cf9b20/673b6e7458bcae74d02266fd_6683f56803b428b9ea56a67d_6683c6bb875f1845806550e9_Group%201799369455d.webp',
    type: 'Language',
    href: '/models/llama-guard-3-8b'
  }
]

export function ModelsSection() {
  const [selectedTypes, setSelectedTypes] = useState<ModelType[]>([])
  const [searchQuery, setSearchQuery] = useState('')

  const filteredModels = models.filter(model => {
    const matchesSearch = model.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         model.company.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = selectedTypes.length === 0 || selectedTypes.includes(model.type)
    return matchesSearch && matchesType
  })

  const allModelTypes: ModelType[] = [
    'Chat', 'Code', 'Image Generation', 'Music Generation', 'Video',
    'Voice', 'Embedding', 'Language', 'Genomic Models', '3D Generation'
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-sm uppercase tracking-wider text-gray-400 mb-2">MODELS</div>
          <h2 className="text-4xl font-bold text-white mb-8">200+ AI Models</h2>
          
          {/* Search and Filter Form */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col space-y-6">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              
              <div className="flex flex-wrap gap-3">
                {allModelTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => {
                      setSelectedTypes(prev => 
                        prev.includes(type) 
                          ? prev.filter(t => t !== type)
                          : [...prev, type]
                      )
                    }}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      selectedTypes.includes(type)
                        ? 'bg-white text-black'
                        : 'bg-gray-900 text-gray-400 hover:bg-gray-800'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Models Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredModels.map((model, index) => (
              <motion.a
                key={model.name}
                href={model.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="block bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={model.icon}
                    alt={model.name}
                    className="w-12 h-12 object-contain"
                  />
                  <div className="ml-4">
                    <h3 className="text-white font-medium">{model.name}</h3>
                    <p className="text-gray-400 text-sm">{model.company}</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm text-gray-500">Model type</div>
                    <div className="text-gray-300">{model.type}</div>
                  </div>
                  {model.context && (
                    <div>
                      <div className="text-sm text-gray-500">Context</div>
                      <div className="text-gray-300">{model.context}</div>
                    </div>
                  )}
                  <div className="text-white">
                    <svg width="12" height="13" viewBox="0 0 12 13" fill="none">
                      <path d="M9.38042 7.66703H0.770465C0.552167 7.66703 0.369181 7.59119 0.221509 7.4395C0.0738363 7.28781 0 7.09986 0 6.87563C0 6.6514 0.0738363 6.46344 0.221509 6.31175C0.369181 6.16007 0.552167 6.08423 0.770465 6.08423H9.38042L5.60514 2.20637C5.45104 2.04809 5.37721 1.86343 5.38363 1.65239C5.39005 1.44135 5.4703 1.25669 5.6244 1.09841C5.77849 0.953317 5.95827 0.877474 6.16372 0.870879C6.36918 0.864284 6.54896 0.940127 6.70305 1.09841L11.7881 6.32165C11.8652 6.40079 11.9197 6.48652 11.9518 6.57885C11.9839 6.67118 12 6.77011 12 6.87563C12 6.98115 11.9839 7.08007 11.9518 7.1724C11.9197 7.26473 11.8652 7.35047 11.7881 7.42961L6.70305 12.6528C6.5618 12.7979 6.38523 12.8705 6.17335 12.8705C5.96148 12.8705 5.77849 12.7979 5.6244 12.6528C5.4703 12.4946 5.39326 12.3066 5.39326 12.089C5.39326 11.8713 5.4703 11.6834 5.6244 11.5251L9.38042 7.66703Z" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Load More Button */}
          <div className="mt-12">
            <a href="/models" className="inline-block px-8 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors">
              Explore All
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

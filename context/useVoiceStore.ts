import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ModelState {
  voiceId: string
  setVoiceID: (modelId: string) => void
}

const useModelStore = create<ModelState>()(
  persist(
    (set) => ({
      voiceId: 'aura-luna-en',
      setVoiceID: (voiceId: string) => set({ voiceId }),
    }),
    {
      name: 'voice-storage',
    }
  )
)

export default useModelStore

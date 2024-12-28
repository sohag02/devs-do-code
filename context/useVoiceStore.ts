import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface VoiceState {
  voiceId: string
  setVoiceID: (modelId: string) => void
}

const useVoiceStore = create<VoiceState>()(
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

export default useVoiceStore

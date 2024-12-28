import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ModelState {
  modelId: string
  provider: string
  setModelId: (modelId: string) => void
  setProvider: (provider: string) => void
}

const useModelStore = create<ModelState>()(
  persist(
    (set) => ({
      modelId: 'gpt-3.5-turbo',
      provider: 'GPT Models',
      setModelId: (modelId: string) => set({ modelId }),
      setProvider: (provider: string) => set({ provider }),
    }),
    {
      name: 'ai-model-storage',
    }
  )
)

export default useModelStore

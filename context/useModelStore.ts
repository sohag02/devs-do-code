import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ModelState {
  modelId: string
  modelName: string
  provider: string
  setModelId: (modelId: string) => void
  setModelName: (modelName: string) => void
  setProvider: (provider: string) => void
}

const useModelStore = create<ModelState>()(
  persist(
    (set) => ({
      modelId: 'gpt-3.5-turbo',
      provider: 'GPT Models',
      modelName: 'GPT-3.5-Turbo',
      setModelId: (modelId: string) => set({ modelId }),
      setModelName: (modelName: string) => set({ modelName }),
      setProvider: (provider: string) => set({ provider }),
    }),
    {
      name: 'ai-model-storage',
    }
  )
)

export default useModelStore

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface SettingsState {
  temperature: number
  topP: number
  topK: number
  customInstructions: string
  updateSettings: (settings: Partial<SettingsState>) => void
}

const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      temperature: 0.7,
      topP: 0.9,
      topK: 40,
      customInstructions: '',
      updateSettings: (newSettings) => set((state) => ({ ...state, ...newSettings })),
    }),
    {
      name: 'settings-storage',
    }
  )
)

export default useSettingsStore


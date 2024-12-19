import dynamic from 'next/dynamic'

// Import client components dynamically
const Sidebar = dynamic(() => import('@/components/sidebar').then(mod => mod.Sidebar), {
  ssr: false
})
const ChatInterface = dynamic(() => import('@/components/chat-interface').then(mod => mod.ChatInterface), {
  ssr: false
})
const SettingsPanel = dynamic(() => import('@/components/settings-panel').then(mod => mod.SettingsPanel), {
  ssr: false
})

export default function Home() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1">
        <ChatInterface />
      </main>
      <SettingsPanel />
    </div>
  )
}

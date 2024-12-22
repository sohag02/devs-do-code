'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, Code2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Import client components dynamically
const ChatInterface = dynamic(() => import('@/components/chat-interface').then(mod => mod.ChatInterface), {
  ssr: false
})
const Sidebar = dynamic(() => import('@/components/sidebar').then(mod => mod.Sidebar), {
  ssr: false
})
const SettingsPanel = dynamic(() => import('@/components/settings-panel').then(mod => mod.SettingsPanel), {
  ssr: false
})

export default function Playground() {
  const router = useRouter()
  const { data: session, status } = useSession()
  const [code, setCode] = useState('')
  const [output, setOutput] = useState('')

  if (status === 'loading') {
    return (
      <div className="h-screen flex items-center justify-center bg-[#121212]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading...</p>
        </div>
      </div>
    )
  }

  // if (!session) {
  //   return (
  //     <div className="h-screen flex items-center justify-center bg-[#121212]">
  //       <div className="text-center max-w-md mx-auto px-4">
  //         <h2 className="text-2xl font-bold mb-4">Sign in Required</h2>
  //         <p className="text-gray-400 mb-8">
  //           Please sign in to access the playground and start experimenting with our AI models.
  //         </p>
  //         <Button 
  //           onClick={() => router.push('/auth/signin')}
  //           className="bg-blue-600 hover:bg-blue-700"
  //         >
  //           Sign In
  //         </Button>
  //       </div>
  //     </div>
  //   )
  // }

  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 bg-[#121212]">
        <Tabs defaultValue="chat" className="h-full">
          <div className="border-b border-[#2A2A2A] px-6 py-2">
            <TabsList className="bg-[#2A2A2A]">
              <TabsTrigger value="chat" className="data-[state=active]:bg-[#3A3A3A]">
                <MessageSquare className="h-4 w-4 mr-2" />
                Chat
              </TabsTrigger>
              <TabsTrigger value="code" className="data-[state=active]:bg-[#3A3A3A]">
                <Code2 className="h-4 w-4 mr-2" />
                Code Editor
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="chat" className="h-[calc(100%-3rem)]">
            <ChatInterface />
          </TabsContent>

          <TabsContent value="code" className="p-6 h-[calc(100%-3rem)]">
            <div className="grid grid-cols-2 gap-6 h-full">
              <div className="bg-[#2A2A2A] rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold text-white">Code Editor</h2>
                  <Button
                    onClick={() => {
                      try {
                        const result = eval(code)
                        setOutput(String(result))
                      } catch (error) {
                        setOutput(String(error))
                      }
                    }}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Run
                  </Button>
                </div>
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full h-[calc(100%-4rem)] bg-[#1A1A1A] text-white p-4 rounded font-mono resize-none focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Write your code here..."
                />
              </div>
              
              <div className="bg-[#2A2A2A] rounded-lg p-4">
                <h2 className="text-lg font-semibold mb-4 text-white">Output</h2>
                <pre className="w-full h-[calc(100%-4rem)] bg-[#1A1A1A] text-white p-4 rounded font-mono overflow-auto">
                  {output || 'Output will appear here...'}
                </pre>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <SettingsPanel />
    </div>
  )
}

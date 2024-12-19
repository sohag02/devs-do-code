'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

export default function Playground() {
  const { data: session, status } = useSession()
  const [code, setCode] = useState('')
  const [output, setOutput] = useState('')

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  if (!session) {
    redirect('/auth/signin')
  }

  return (
    <div className="flex-1 p-6 bg-[#1A1A1A] text-white">
      <h1 className="text-2xl font-bold mb-6">Playground</h1>
      
      <div className="grid grid-cols-2 gap-6 h-[calc(100vh-8rem)]">
        <div className="bg-[#2A2A2A] rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Code Editor</h2>
            <button
              onClick={() => {
                try {
                  const result = eval(code)
                  setOutput(String(result))
                } catch (error) {
                  setOutput(String(error))
                }
              }}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
            >
              Run
            </button>
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-[calc(100%-4rem)] bg-[#1A1A1A] text-white p-4 rounded font-mono resize-none focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="Write your code here..."
          />
        </div>
        
        <div className="bg-[#2A2A2A] rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-4">Output</h2>
          <pre className="w-full h-[calc(100%-3rem)] bg-[#1A1A1A] text-white p-4 rounded font-mono overflow-auto">
            {output}
          </pre>
        </div>
      </div>
    </div>
  )
}

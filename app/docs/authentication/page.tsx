import { GeistMono } from 'geist/font/mono'

export default function AuthenticationPage() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold mb-8">Authentication</h1>
      
      <p className="text-gray-300 text-lg mb-8">
        Devs Do Code uses API keys to authenticate requests. You can view and manage your API keys in your dashboard.
        Your API keys carry many privileges, so be sure to keep them secure!
      </p>

      <div className="bg-[#2A2A2A] rounded-xl p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">API Key Best Practices</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Keep your API keys secure and never share them</li>
          <li>Don't commit API keys to version control</li>
          <li>Use environment variables to store API keys</li>
          <li>Rotate your API keys periodically</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold mb-4">Authentication Methods</h2>
      
      <h3 className="text-xl font-bold mb-4">Bearer Token</h3>
      <p className="text-gray-300 mb-4">
        Pass your API key in the Authorization header using Bearer token authentication:
      </p>
      
      <div className={`${GeistMono.className} bg-[#1A1A1A] p-4 rounded-lg mb-8`}>
        <pre><code>{`Authorization: Bearer your-api-key`}</code></pre>
      </div>

      <h3 className="text-xl font-bold mb-4">Query Parameter</h3>
      <p className="text-gray-300 mb-4">
        Alternatively, you can pass your API key as a query parameter:
      </p>
      
      <div className={`${GeistMono.className} bg-[#1A1A1A] p-4 rounded-lg mb-8`}>
        <pre><code>{`https://api.devsdocode.com/v1/chat?api_key=your-api-key`}</code></pre>
      </div>

      <div className="bg-amber-950/30 border border-amber-500/20 rounded-xl p-6 mb-8">
        <h3 className="text-amber-500 text-lg font-semibold mb-2">⚠️ Security Notice</h3>
        <p className="text-amber-200/80">
          We recommend using the Bearer token method over query parameters as it's more secure.
          Query parameters may be logged in server logs or appear in browser history.
        </p>
      </div>

      <h2 className="text-2xl font-bold mb-4">Code Examples</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">JavaScript/TypeScript</h3>
          <div className={`${GeistMono.className} bg-[#1A1A1A] p-4 rounded-lg`}>
            <pre><code>{`import { DevsDoCode } from '@devs-do-code/sdk';

const ddc = new DevsDoCode('your-api-key');
// The SDK will automatically handle authentication for you

// Or using fetch directly:
const response = await fetch('https://api.devsdocode.com/v1/chat', {
  headers: {
    'Authorization': 'Bearer your-api-key',
    'Content-Type': 'application/json',
  },
  // ... rest of your request
});`}</code></pre>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Python</h3>
          <div className={`${GeistMono.className} bg-[#1A1A1A] p-4 rounded-lg`}>
            <pre><code>{`from devsdocode import DevsDoCode

ddc = DevsDoCode('your-api-key')
# The SDK will automatically handle authentication for you

# Or using requests:
import requests

headers = {
    'Authorization': 'Bearer your-api-key',
    'Content-Type': 'application/json',
}

response = requests.post('https://api.devsdocode.com/v1/chat', 
    headers=headers,
    json={'prompt': 'Hello!'}
)`}</code></pre>
          </div>
        </div>
      </div>
    </div>
  )
}

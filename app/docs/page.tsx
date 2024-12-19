import { GeistMono } from 'geist/font/mono'

export default function DocsPage() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold mb-8">Introduction</h1>
      
      <p className="text-gray-300 text-lg mb-8">
        Welcome to the Devs Do Code documentation. Our platform provides powerful AI-powered coding assistance
        through a simple and intuitive API. Whether you're building a code editor, a learning platform,
        or integrating AI assistance into your development workflow, we've got you covered.
      </p>

      <div className="bg-[#2A2A2A] rounded-xl p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Quick Installation</h2>
        <div className={`${GeistMono.className} bg-[#1A1A1A] p-4 rounded-lg`}>
          <code>npm install @devs-do-code/sdk</code>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4">Features</h2>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-[#2A2A2A] p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Code Generation</h3>
          <p className="text-gray-400">
            Generate high-quality code snippets and entire components with natural language prompts.
          </p>
        </div>
        
        <div className="bg-[#2A2A2A] p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Code Analysis</h3>
          <p className="text-gray-400">
            Get instant feedback and suggestions to improve your code quality and performance.
          </p>
        </div>
        
        <div className="bg-[#2A2A2A] p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Interactive Chat</h3>
          <p className="text-gray-400">
            Engage in natural conversations about your code with our AI assistant.
          </p>
        </div>
        
        <div className="bg-[#2A2A2A] p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Real-time Collaboration</h3>
          <p className="text-gray-400">
            Work together with your team using shared contexts and conversations.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
      
      <p className="text-gray-300 mb-4">
        To start using Devs Do Code, you'll need to:
      </p>
      
      <ol className="list-decimal list-inside space-y-2 text-gray-300 mb-8">
        <li>Sign up for an account</li>
        <li>Get your API key from the dashboard</li>
        <li>Install our SDK</li>
        <li>Make your first API call</li>
      </ol>

      <div className="bg-[#2A2A2A] rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-4">Basic Example</h3>
        <div className={`${GeistMono.className} bg-[#1A1A1A] p-4 rounded-lg`}>
          <pre><code>{`import { DevsDoCode } from '@devs-do-code/sdk';

const ddc = new DevsDoCode('your-api-key');

// Generate code from a prompt
const response = await ddc.generateCode({
  prompt: 'Create a React button component',
  language: 'typescript',
});

console.log(response.code);`}</code></pre>
        </div>
      </div>
    </div>
  )
}

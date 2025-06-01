# DevsDo.Code – The Universal LLM Platform

DevsDo.Code is an open-source platform that brings together the world's leading Large Language Models (LLMs) and generative AI tools into a single, seamless interface. Effortlessly chat, compare, and build with models from OpenAI, Anthropic, Google, Meta, and more—all in one place. Anyone can self-host and run their own instance.

## 🌟 Key Features

- **AI Playground:** Chat with and compare responses from 200+ AI models, including GPT-4, Claude, Gemini, Llama, and more.
- **Unified API:** Integrate multiple LLM providers with a single, simple API. Switch providers by changing an endpoint.
- **Text, Image, and Audio:** Generate text, images (DALL·E), and speech (TTS/Whisper) with state-of-the-art models.
- **Infinite Scalability:** Low-latency, high-availability infrastructure. No rate limits for your AI applications.
- **Enterprise Security:** Bank-grade encryption, SOC 2 compliance, and advanced security features.
- **Simple Integration:** Drop-in SDKs and REST APIs for Node.js, Python, and more.
- **No Vendor Lock-in:** Easily switch between providers and models as your needs evolve.

## 🤖 Supported LLM Providers & Models

- **OpenAI:** GPT-4o, GPT-4, GPT-3.5, DALL·E, Whisper, TTS
- **Anthropic:** Claude family
- **Google:** Gemini, Gemma
- **Meta:** Llama, Llama Guard
- **Microsoft:** WizardLM
- **Stability AI:** Stable Audio
- **Kuaishou:** Kling AI (text-to-video, image-to-video)
- **Hailuo AI:** MiniMax Music
- **And many more...**

## 🚀 Quickstart

1. **Clone the repo & install dependencies:**
   ```bash
   git clone https://github.com/your-org/devs-do-code.git
   cd devs-do-code
   npm install
   # or yarn / pnpm / bun
   ```
2. **Run the development server:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Get an API Key:**

   - Create an API key from your self-hosted dashboard after running the app locally.

4. **Make your first API call:**
   ```js
   import OpenAI from "openai";
   const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
   const completion = await openai.chat.completions.create({
     model: "gpt-4o",
     messages: [{ role: "user", content: "Hello!" }],
   });
   console.log(completion.choices[0].message);
   ```

## 📚 Documentation

- Quickstart Guide: See `/docs/quickstart`
- API Reference: See `/docs`
- Model List: See `/models`
- Text Generation: See `/docs/text-generation`
- Image Generation: See `/docs/image-generation`
- Text-to-Speech: See `/docs/text-to-speech`
- Speech-to-Text: See `/docs/speech-to-text`

## 🛡️ Security & Compliance

- End-to-end encryption
- SOC 2 compliance
- Zero data retention options

## 🖥️ Self-Hosting

Anyone can host their own instance of DevsDo.Code. Simply follow the quickstart instructions above to get started.

---

DevsDo.Code – Build with the best of AI, without limits.

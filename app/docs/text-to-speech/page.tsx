'use client'

import { motion } from 'framer-motion'
import { CodeBlock } from '@/components/ui/code-block'
import { fadeIn } from '@/utils/animations'

const jsCode = `import fs from "fs";
import path from "path";
import OpenAI from "openai";

const openai = new OpenAI();
const speechFile = path.resolve("./speech.mp3");

const mp3 = await openai.audio.speech.create({
  model: "tts-1",
  voice: "alloy",
  input: "Today is a wonderful day to build something people love!",
});

const buffer = Buffer.from(await mp3.arrayBuffer());
await fs.promises.writeFile(speechFile, buffer);`

const pythonCode = `from pathlib import Path
from openai import OpenAI

client = OpenAI()
speech_file_path = Path(__file__).parent / "speech.mp3"
response = client.audio.speech.create(
    model="tts-1",
    voice="alloy",
    input="Today is a wonderful day to build something people love!",
)
response.stream_to_file(speech_file_path)`

const curlCode = `curl https://api.openai.com/v1/audio/speech \\
  -H "Authorization: Bearer $OPENAI_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "tts-1",
    "input": "Today is a wonderful day to build something people love!",
    "voice": "alloy"
  }' \\
  --output speech.mp3`

const streamingCode = `from openai import OpenAI

client = OpenAI()

response = client.audio.speech.create(
    model="tts-1",
    voice="alloy",
    input="Hello world! This is a streaming test.",
)

response.stream_to_file("output.mp3")`

export default function TextToSpeechPage() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[40rem] -left-[40rem] w-[120rem] h-[120rem] opacity-30 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-emerald-500/30 blur-3xl" />
        <div className="absolute -bottom-[40rem] -right-[40rem] w-[120rem] h-[120rem] opacity-30 bg-gradient-to-r from-rose-500/30 via-purple-500/30 to-blue-500/30 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto py-12 px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="space-y-12"
        >
          <motion.div variants={fadeIn("up", 0.2)} className="space-y-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Text to Speech
            </h1>
            <p className="text-xl text-gray-400">
              Learn how to turn text into lifelike spoken audio.
            </p>
          </motion.div>

          <motion.section variants={fadeIn("up", 0.3)} className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Overview</h2>
            <p className="text-gray-300">
              The Audio API provides a speech endpoint based on our TTS (text-to-speech) model. It comes with 6 built-in voices and can be used to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Narrate a written blog post</li>
              <li>Produce spoken audio in multiple languages</li>
              <li>Give real time audio output using streaming</li>
            </ul>
          </motion.section>

          <motion.section variants={fadeIn("up", 0.4)} className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Quickstart</h2>
            <p className="text-gray-300">
              The speech endpoint takes in three key inputs: the model, the text that should be turned into audio, and the voice to be used for the audio generation.
            </p>
            <div className="space-y-4">
              <CodeBlock
                title="Generate spoken audio from input text"
                languages={[
                  { label: "JavaScript", code: jsCode },
                  { label: "Python", code: pythonCode },
                  { label: "cURL", code: curlCode }
                ]}
              />
            </div>
          </motion.section>

          <motion.section variants={fadeIn("up", 0.5)} className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Voice Options</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {['alloy', 'echo', 'fable', 'onyx', 'nova', 'shimmer'].map((voice) => (
                <div key={voice} className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <h3 className="text-lg font-semibold text-white capitalize mb-2">{voice}</h3>
                  <p className="text-gray-400">
                    A unique voice optimized for natural-sounding speech in English.
                  </p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section variants={fadeIn("up", 0.6)} className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Streaming Real Time Audio</h2>
            <p className="text-gray-300">
              The Speech API provides support for real time audio streaming using chunk transfer encoding. 
              This means that the audio is able to be played before the full file has been generated.
            </p>
            <CodeBlock
              title="Streaming example"
              languages={[
                { label: "Python", code: streamingCode }
              ]}
            />
          </motion.section>

          <motion.section variants={fadeIn("up", 0.7)} className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Supported Formats</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                { format: 'MP3', desc: 'Default format, widely supported' },
                { format: 'Opus', desc: 'For internet streaming, low latency' },
                { format: 'AAC', desc: 'Preferred by YouTube, Android, iOS' },
                { format: 'FLAC', desc: 'Lossless audio compression' },
                { format: 'WAV', desc: 'Uncompressed audio, low latency' },
                { format: 'PCM', desc: '24kHz 16-bit signed raw samples' }
              ].map(({ format, desc }) => (
                <div key={format} className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                  <h3 className="font-semibold text-white mb-1">{format}</h3>
                  <p className="text-sm text-gray-400">{desc}</p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section variants={fadeIn("up", 0.8)} className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">FAQ</h2>
            <div className="space-y-6">
              {[
                {
                  q: 'How can I control the emotional range of the generated audio?',
                  a: 'There is no direct mechanism to control the emotional output. Factors like capitalization or grammar may influence the output but results may vary.'
                },
                {
                  q: 'Can I create a custom copy of my own voice?',
                  a: 'No, this is not currently supported.'
                },
                {
                  q: 'Do I own the outputted audio files?',
                  a: 'Yes, like with all outputs from our API, the person who created them owns the output. You must inform end users that they are hearing AI-generated audio.'
                }
              ].map(({ q, a }, i) => (
                <div key={i} className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-2">{q}</h3>
                  <p className="text-gray-400">{a}</p>
                </div>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  )
}

'use client'

import { motion } from 'framer-motion'
import { CodeBlock } from '@/components/ui/code-block'
import { fadeIn } from '@/utils/animations'

const transcriptionJsCode = `import fs from "fs";
import OpenAI from "openai";

const openai = new OpenAI();

const transcription = await openai.audio.transcriptions.create({
  file: fs.createReadStream("/path/to/file/audio.mp3"),
  model: "whisper-1",
});

console.log(transcription.text);`

const transcriptionPythonCode = `from openai import OpenAI
client = OpenAI()

audio_file= open("/path/to/file/audio.mp3", "rb")
transcription = client.audio.transcriptions.create(
    model="whisper-1", 
    file=audio_file
)

print(transcription.text)`

const transcriptionCurlCode = `curl --request POST \\
  --url https://api.openai.com/v1/audio/transcriptions \\
  --header "Authorization: Bearer $OPENAI_API_KEY" \\
  --header 'Content-Type: multipart/form-data' \\
  --form file=@/path/to/file/audio.mp3 \\
  --form model=whisper-1`

const translationJsCode = `import fs from "fs";
import OpenAI from "openai";

const openai = new OpenAI();

const transcription = await openai.audio.translations.create({
  file: fs.createReadStream("/path/to/file/german.mp3"),
  model: "whisper-1",
});

console.log(transcription.text);`

const translationPythonCode = `from openai import OpenAI
client = OpenAI()

audio_file = open("/path/to/file/german.mp3", "rb")
transcription = client.audio.translations.create(
    model="whisper-1", 
    file=audio_file,
)

print(transcription.text)`

const translationCurlCode = `curl --request POST \\
  --url https://api.openai.com/v1/audio/translations \\
  --header "Authorization: Bearer $OPENAI_API_KEY" \\
  --header 'Content-Type: multipart/form-data' \\
  --form file=@/path/to/file/german.mp3 \\
  --form model=whisper-1`

const timestampCode = `import fs from "fs";
import OpenAI from "openai";

const openai = new OpenAI();

const transcription = await openai.audio.transcriptions.create({
  file: fs.createReadStream("audio.mp3"),
  model: "whisper-1",
  response_format: "verbose_json",
  timestamp_granularities: ["word"]
});

console.log(transcription.words);`

const longInputCode = `from pydub import AudioSegment

song = AudioSegment.from_mp3("good_morning.mp3")

# PyDub handles time in milliseconds
ten_minutes = 10 * 60 * 1000

first_10_minutes = song[:ten_minutes]

first_10_minutes.export("good_morning_10.mp3", format="mp3")`

const promptingCode = `import fs from "fs";
import OpenAI from "openai";

const openai = new OpenAI();

const transcription = await openai.audio.transcriptions.create({
  file: fs.createReadStream("/path/to/file/speech.mp3"),
  model: "whisper-1",
  response_format: "text",
  prompt:"ZyntriQix, Digique Plus, CynapseFive, VortiQore V8, EchoNix Array",
});

console.log(transcription.text);`

export default function SpeechToTextPage() {
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
              Speech to Text
            </h1>
            <p className="text-xl text-gray-400">
              Learn how to turn audio into text.
            </p>
          </motion.div>

          <motion.section variants={fadeIn("up", 0.3)} className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Overview</h2>
            <p className="text-gray-300">
              The Audio API provides two speech to text endpoints, transcriptions and translations, based on our state-of-the-art Whisper model.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-3">Transcriptions</h3>
                <p className="text-gray-400">
                  Transcribe audio into whatever language the audio is in.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-3">Translations</h3>
                <p className="text-gray-400">
                  Translate and transcribe the audio into English.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section variants={fadeIn("up", 0.4)} className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Transcriptions</h2>
            <p className="text-gray-300">
              The transcriptions API takes as input the audio file you want to transcribe and the desired output file format.
            </p>
            <CodeBlock
              title="Transcribe audio"
              languages={[
                { label: "JavaScript", code: transcriptionJsCode },
                { label: "Python", code: transcriptionPythonCode },
                { label: "cURL", code: transcriptionCurlCode }
              ]}
            />
          </motion.section>

          <motion.section variants={fadeIn("up", 0.5)} className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Translations</h2>
            <p className="text-gray-300">
              The translations API takes audio in any supported language and transcribes it into English.
            </p>
            <CodeBlock
              title="Translate audio"
              languages={[
                { label: "JavaScript", code: translationJsCode },
                { label: "Python", code: translationPythonCode },
                { label: "cURL", code: translationCurlCode }
              ]}
            />
          </motion.section>

          <motion.section variants={fadeIn("up", 0.6)} className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Timestamps</h2>
            <p className="text-gray-300">
              Get structured and timestamped output at the segment or word level for precise transcripts and video edits.
            </p>
            <CodeBlock
              title="Timestamp options"
              languages={[
                { label: "JavaScript", code: timestampCode }
              ]}
            />
          </motion.section>

          <motion.section variants={fadeIn("up", 0.7)} className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Longer Inputs</h2>
            <p className="text-gray-300">
              For files larger than 25 MB, you'll need to split them into smaller chunks.
            </p>
            <CodeBlock
              title="Splitting audio files"
              languages={[
                { label: "Python", code: longInputCode }
              ]}
            />
          </motion.section>

          <motion.section variants={fadeIn("up", 0.8)} className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Prompting</h2>
            <p className="text-gray-300">
              Use prompts to improve transcription quality and handle specific words or acronyms.
            </p>
            <CodeBlock
              title="Using prompts"
              languages={[
                { label: "JavaScript", code: promptingCode }
              ]}
            />
          </motion.section>

          <motion.section variants={fadeIn("up", 0.9)} className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Supported Languages</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                "English", "Spanish", "French", "German", "Italian", "Portuguese", 
                "Dutch", "Russian", "Japanese", "Chinese", "Korean", "Arabic",
                "Hindi", "Turkish", "Vietnamese", "Polish", "Ukrainian", "Greek"
              ].map((lang) => (
                <div key={lang} className="p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                  <p className="text-gray-300">{lang}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-400 mt-4">
              And many more languages supported through the Whisper model.
            </p>
          </motion.section>
        </motion.div>
      </div>
    </div>
  )
}

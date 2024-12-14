import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from 'lucide-react'

export default function Page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturesSection />
      <PreBuiltAssistants />
    </div>
  );
}



export function FeaturesSection() {
  return (
    <div>
      <section className="w-full bg-background transition-colors duration-300">
        <div className="w-full max-w-6xl mx-auto py-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8 hover:scale-105 hover:shadow-xl transition-all">
              <Card className="w-full aspect-square relative overflow-hidden">
                <Image
                  src="/placeholder.svg?height=512&width=512"
                  alt="MultiChat AI Interface"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-2xl"
                />
              </Card>
            </div>

            <div className="space-y-12">
              <div>
                <h2 className="text-4xl font-bold tracking-tight text-foreground mb-8">
                  Access Top LLMs
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-x-3">
                    <Check className="h-6 w-6 flex-none text-emerald-500" />
                    <div>
                      <h3 className="font-semibold text-foreground">Premium models.</h3>
                      <p className="text-muted-foreground">
                        Gain access to all Premium llms like GPT-4, Claude-3, Gemini 1.5 Pro, Command R+, Mistral Large, Perplexity.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-x-3">
                    <Check className="h-6 w-6 flex-none text-emerald-500" />
                    <div>
                      <h3 className="font-semibold text-foreground">Open Source LLMs.</h3>
                      <p className="text-muted-foreground">
                        Access open source LLMs like Llama-3, Mixtral-8×7b, Qwen 110b, WizardLM-2
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-x-3">
                    <Check className="h-6 w-6 flex-none text-emerald-500" />
                    <div>
                      <h3 className="font-semibold text-foreground">Uncensored LLMs.</h3>
                      <p className="text-muted-foreground">
                        Access uncensored LLMs like Dolphin mixtral, Nous Hermes for roleplay and nsfw ai chat.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export function PreBuiltAssistants() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-50 via-purple-100 to-white dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 opacity-80 backdrop-blur-3xl" />
      </div>

      <div className="w-full max-w-6xl mx-auto py-16 relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Pre-Built Assistants
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                MultiChat AI offers pre-built assistants designed using perfectly crafted Prompts in combination with most suitable LLM.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-x-3">
                <Check className="h-6 w-6 flex-none text-emerald-500" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    NSFW AI Chat.
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Unblocked AI Chat, Unfiltered AI Chat, NSFW AI Chat
                  </p>
                </div>
              </div>

              <div className="flex gap-x-3">
                <Check className="h-6 w-6 flex-none text-emerald-500" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Roleplay AI Chat.
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    roleplay ai chat bot unblocked, roleplay ai chat bot unfiltered, nsfw ai roleplay chat
                  </p>
                </div>
              </div>

              <div className="flex gap-x-3">
                <Check className="h-6 w-6 flex-none text-emerald-500" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    NSFW Character AI Chat.
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    NSFW Character AI Chat, Character AI with no filter, Character AI without filter
                  </p>
                </div>
              </div>

              <div className="flex gap-x-3">
                <Check className="h-6 w-6 flex-none text-emerald-500" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Sex AI Chatbot.
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Sexting AI Chat, Sex AI Chat, Sex Chatbot, Sex AI Chat Bot Unblocked
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Button 
                size="lg"
                className="bg-emerald-400 hover:bg-emerald-500 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white"
              >
                Get Started
              </Button>
              <p className="text-gray-600 dark:text-gray-400">
                Get started with our free tier.
              </p>
            </div>
          </div>

          <div className="relative hover:scale-105 transition-all">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="MultiChat AI Interface"
              width={800}
              height={600}
              className="rounded-lg shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}


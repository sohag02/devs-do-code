"use client"

import { useEffect, useRef } from 'react'
import { motion, useAnimationControls } from 'framer-motion'

interface Testimonial {
  content: string
  author: {
    name: string
    title?: string
    handle?: string
    image: string
  }
  source: {
    url: string
    platform: 'twitter' | 'producthunt' | 'youtube'
  }
}

const testimonials: Testimonial[] = [
  {
    content: "Introducing NinjaChat AI: Access over 9 AI apps on one platform, all for one price. Featuring GPT-4, Claude 3, Mixtral, PDF analysis, image generation, and music composition.",
    author: {
      name: "Hasan Toor ✪",
      title: "AI Educator & Writer",
      image: "https://pbs.twimg.com/profile_images/1784104474384199680/L9gTYdUz_400x400.jpg"
    },
    source: {
      url: "https://x.com/hasantoxr/status/1811000181367918887",
      platform: "twitter"
    }
  },
  {
    content: "This is a new one for me. Looks promising.",
    author: {
      name: "Farhan",
      handle: "@mhdfarhan",
      image: "https://pbs.twimg.com/profile_images/1685658187825811457/h9QgcNrM_400x400.jpg"
    },
    source: {
      url: "https://x.com/hasantoxr/status/1811000181367918887",
      platform: "twitter"
    }
  },
  {
    content: "So many LLMs at one place! Definitely a good deal.",
    author: {
      name: "Kanika",
      handle: "@KanikaBK",
      image: "https://pbs.twimg.com/profile_images/1769261588807344128/KonwHRlC_400x400.jpg"
    },
    source: {
      url: "https://x.com/hasantoxr/status/1811000181367918887",
      platform: "twitter"
    }
  },
  {
    content: "Chat with pdf, image generation, chatting with multiple LLMs under this price wow... I would love to have yt chat with this",
    author: {
      name: "Rinshin Jalal",
      image: "https://ph-avatars.imgix.net/4313614/original.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=36&h=36&fit=crop&dpr=2"
    },
    source: {
      url: "https://www.producthunt.com/posts/ninjachat-ai",
      platform: "producthunt"
    }
  },
  {
    content: "NinjaChat.ai sounds like a Swiss army knife for productivity and creativity! I love the idea of being able to compare responses from different AI models in one place.",
    author: {
      name: "My3 Murthy",
      image: "https://ph-avatars.imgix.net/3638890/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=120&h=120&fit=crop"
    },
    source: {
      url: "https://www.producthunt.com/posts/ninjachat-ai",
      platform: "producthunt"
    }
  },
  {
    content: "Amazing platform 💯 The sync chats-toggle switch and Gemini 1.5 Pro handling ridiculous amounts of context tokens without lag/errors are standout features.",
    author: {
      name: "Willem van Dahl",
      image: "https://ph-avatars.imgix.net/3391691/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=120&h=120&fit=crop"
    },
    source: {
      url: "https://www.producthunt.com/posts/ninjachat-ai",
      platform: "producthunt"
    }
  }
]

export function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const controls = useAnimationControls()

  useEffect(() => {
    const startAnimation = async () => {
      while (true) {
        await controls.start({
          x: [0, -2000],
          transition: {
            duration: 30,
            ease: "linear"
          }
        })
        await controls.set({ x: 0 })
      }
    }

    startAnimation()
  }, [controls])

  return (
    <section className="py-24 overflow-hidden bg-black">
      <div className="container mx-auto px-4 mb-12">
        <h2 
          className="text-center font-medium leading-none tracking-tighter text-4xl md:text-6xl pb-4 bg-gradient-to-r from-[#467ef0] to-[#246dff] text-transparent bg-clip-text"
        >
          What Our Users Are Saying
        </h2>
        <p className="text-center pb-8 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          People love us because Devs Do Code saves people money and time.
        </p>
      </div>

      <div ref={containerRef} className="relative w-full overflow-hidden">
        <motion.div 
          animate={controls}
          className="flex gap-4 w-fit"
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="w-[350px] flex-shrink-0"
            >
              <a
                href={testimonial.source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="h-full flex flex-col justify-between gap-2 rounded-lg p-3 bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all duration-300 border border-white/10">
                  <div className="text-sm font-normal leading-relaxed line-clamp-3 text-gray-300">
                    {testimonial.content}
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <img
                      src={testimonial.author.image}
                      className="h-6 w-6 rounded-full ring-1 ring-white/20"
                      alt={testimonial.author.name}
                    />
                    <div>
                      <p className="font-semibold text-white text-xs">
                        {testimonial.author.name}
                      </p>
                      {(testimonial.author.title || testimonial.author.handle) && (
                        <p className="text-xs font-normal text-gray-400">
                          {testimonial.author.title || testimonial.author.handle}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

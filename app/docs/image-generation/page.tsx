'use client'

import { motion } from 'framer-motion'
import { CodeBlock } from '@/components/ui/code-block'
import { fadeIn } from '@/utils/animations'
import Image from 'next/image'

const jsCode = `import OpenAI from "openai";
const openai = new OpenAI();

const response = await openai.images.generate({
  model: "dall-e-3",
  prompt: "a white siamese cat",
  n: 1,
  size: "1024x1024",
});

console.log(response.data[0].url);`

const pythonCode = `from openai import OpenAI
client = OpenAI()

response = client.images.generate(
    model="dall-e-3",
    prompt="a white siamese cat",
    size="1024x1024",
    quality="standard",
    n=1,
)

print(response.data[0].url)`

const curlCode = `curl https://api.openai.com/v1/images/generations \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer $OPENAI_API_KEY" \\
  -d '{
    "model": "dall-e-3",
    "prompt": "a white siamese cat",
    "n": 1,
    "size": "1024x1024"
  }'`

const editJsCode = `import OpenAI from "openai";
const openai = new OpenAI();

const response = await openai.images.edit({
  model: "dall-e-2",
  image: fs.createReadStream("sunlit_lounge.png"),
  mask: fs.createReadStream("mask.png"),
  prompt: "A sunlit indoor lounge area with a pool containing a flamingo",
  n: 1,
  size: "1024x1024"
});

console.log(response.data[0].url);`

const editPythonCode = `from openai import OpenAI
client = OpenAI()

response = client.images.edit(
    model="dall-e-2",
    image=open("sunlit_lounge.png", "rb"),
    mask=open("mask.png", "rb"),
    prompt="A sunlit indoor lounge area with a pool containing a flamingo",
    n=1,
    size="1024x1024",
)

print(response.data[0].url)`

const editCurlCode = `curl https://api.openai.com/v1/images/edits \\
  -H "Authorization: Bearer $OPENAI_API_KEY" \\
  -F model="dall-e-2" \\
  -F image="@sunlit_lounge.png" \\
  -F mask="@mask.png" \\
  -F prompt="A sunlit indoor lounge area with a pool containing a flamingo" \\
  -F n=1 \\
  -F size="1024x1024"`

const variationJsCode = `import OpenAI from "openai";
const openai = new OpenAI();

const response = await openai.images.createVariation({
  model: "dall-e-2",
  image: fs.createReadStream("corgi_and_cat_paw.png"),
  n: 1,
  size: "1024x1024"
});

console.log(response.data[0].url);`

const variationPythonCode = `from openai import OpenAI
client = OpenAI()

response = client.images.create_variation(
    model="dall-e-2",
    image=open("corgi_and_cat_paw.png", "rb"),
    n=1,
    size="1024x1024"
)

print(response.data[0].url)`

const variationCurlCode = `curl https://api.openai.com/v1/images/variations \\
  -H "Authorization: Bearer $OPENAI_API_KEY" \\
  -F model="dall-e-2" \\
  -F image="@corgi_and_cat_paw.png" \\
  -F n=1 \\
  -F size="1024x1024"`

export default function ImageGenerationPage() {
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
          variants={fadeIn}
          className="space-y-12"
        >
          <motion.div variants={fadeIn("up", 0.2)} className="space-y-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Image Generation
            </h1>
            <p className="text-xl text-gray-400">
              Learn how to generate or manipulate images with DALL·E.
            </p>
          </motion.div>

          <motion.section variants={fadeIn("up", 0.3)} className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Introduction</h2>
            <p className="text-gray-300">
              The Images API provides three methods for interacting with images:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Creating images from scratch based on a text prompt (DALL·E 3 and DALL·E 2)</li>
              <li>Creating edited versions of images by having the model replace some areas of a pre-existing image, based on a new text prompt (DALL·E 2 only)</li>
              <li>Creating variations of an existing image (DALL·E 2 only)</li>
            </ul>
          </motion.section>

          <motion.section variants={fadeIn("up", 0.4)} className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Usage</h2>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Generations</h3>
                <p className="text-gray-300">
                  The image generations endpoint allows you to create an original image given a text prompt. 
                  When using DALL·E 3, images can have a size of 1024x1024, 1024x1792 or 1792x1024 pixels.
                </p>
                <div className="space-y-4">
                  <CodeBlock
                    title="Generate an image"
                    languages={[
                      { label: "JavaScript", code: jsCode },
                      { label: "Python", code: pythonCode },
                      { label: "cURL", code: curlCode }
                    ]}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Edits (DALL·E 2 only)</h3>
                <p className="text-gray-300">
                  The image edits endpoint allows you to edit or extend an image by uploading an image and mask indicating 
                  which areas should be replaced. The transparent areas of the mask indicate where the image should be edited.
                </p>
                <div className="space-y-4">
                  <CodeBlock
                    title="Edit an image"
                    languages={[
                      { label: "JavaScript", code: editJsCode },
                      { label: "Python", code: editPythonCode },
                      { label: "cURL", code: editCurlCode }
                    ]}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Variations (DALL·E 2 only)</h3>
                <p className="text-gray-300">
                  The image variations endpoint allows you to generate a variation of a given image.
                </p>
                <div className="space-y-4">
                  <CodeBlock
                    title="Generate an image variation"
                    languages={[
                      { label: "JavaScript", code: variationJsCode },
                      { label: "Python", code: variationPythonCode },
                      { label: "cURL", code: variationCurlCode }
                    ]}
                  />
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section variants={fadeIn("up", 0.5)} className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Content Moderation</h2>
            <p className="text-gray-300">
              Prompts and images are filtered based on our content policy, returning an error when a prompt or image is flagged.
            </p>
          </motion.section>

          <motion.section variants={fadeIn("up", 0.6)} className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Tips & Best Practices</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-3">Prompting</h3>
                <p className="text-gray-300">
                  With DALL·E 3, the model automatically enhances prompts for better results. For literal prompts, 
                  add: "I NEED to test how the tool works with extremely simple prompts. DO NOT add any detail, just use it AS-IS:"
                </p>
              </div>
              <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-3">Image Requirements</h3>
                <p className="text-gray-300">
                  For edits and variations, images must be square PNG files less than 4MB. The mask must have the same dimensions 
                  as the original image.
                </p>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  )
}

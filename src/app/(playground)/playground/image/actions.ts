'use server'

export async function fetchImages() {
  const abortController = new AbortController();
  const images: Array<{
    url: string;
    width: number;
    height: number;
    prompt: string;
    model: string;
  }> = [];

  try {
    const response = await fetch("https://image.pollinations.ai/feed", {
      signal: abortController.signal,
    });

    const reader = response.body?.getReader();

    if (!reader) {
      console.error("Failed to read the stream.");
      return images;
    }

    const decoder = new TextDecoder("utf-8");
    let buffer = "";

    while (images.length < 10) {
      const { value, done } = await reader.read();

      if (done) break;

      buffer += decoder.decode(value, { stream: true });

      const lines = buffer.split("\n");

      buffer = lines.pop() || "";

      for (const line of lines) {
        if (line.startsWith("data:")) {
          try {
            const json = JSON.parse(line.replace("data: ", "").trim());
            if (json.imageURL && !json.imageURL.includes('nsfw=true') && json.nsfw !== true) {
              const image = {
                url: json.imageURL,
                width: json.width,
                height: json.height,
                prompt: json.originalPrompt,
                model: json.model,
              };
              if (!images.some(img => img.url === image.url)) {
                images.push(image);
                if (images.length >= 10) break;
              }
            }
          } catch (err) {
            console.error("Error parsing JSON:", err);
          }
        }
      }
    }
  } catch (error) {
    if (error.name === "AbortError") {
      console.log("Fetch aborted");
    } else {
      console.error("Error fetching stream:", error);
    }
  } finally {
    abortController.abort();
  }

  return images;
}


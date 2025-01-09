export const monthlyPricing = {
  free: {
    price: "0",
    features: {
      tokens: "200k tokens/day",
      inputTokens: "4k tokens",
      outputTokens: "4k tokens",
      images: "20/day",
      tts: "20/day",
      ttsChars: "500/request",
      rpm: "2 RPM",
      rps: "1 RPS",
      api: "Not Available",
    },
  },
  pro: {
    price: "500",
    features: {
      tokens: "1M tokens/day",
      inputTokens: "32k tokens",
      outputTokens: "8k tokens",
      images: "50/day",
      tts: "50/day",
      ttsChars: "1k/request",
      rpm: "3 RPM",
      rps: "2 RPS",
      api: "Available",
    },
  },
  advanced: {
    price: "1200",
    features: {
      tokens: "3M tokens/day",
      inputTokens: "Full context window",
      outputTokens: "Full output capability",
      images: "200/day",
      tts: "500/day",
      ttsChars: "2k/request",
      rpm: "4 RPM",
      rps: "3 RPS",
      api: "Available",
    },
  },
  ultimate: {
    price: "2000",
    features: {
      tokens: "5M tokens/day",
      inputTokens: "Full context window",
      outputTokens: "Full output capability",
      images: "500/day",
      tts: "1k/day",
      ttsChars: "5k/request",
      rpm: "4+ RPM",
      rps: "3+ RPS",
      api: "Available",
    },
  },
};

export const yearlyPricing = {
  free: {
    price: "0",
    features: monthlyPricing.free.features,
  },
  pro: {
    price: "390",
    features: monthlyPricing.pro.features,
  },
  advanced: {
    price: "950",
    features: monthlyPricing.advanced.features,
  },
  ultimate: {
    price: "1600",
    features: monthlyPricing.ultimate.features,
  },
};

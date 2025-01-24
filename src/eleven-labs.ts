import { ElevenLabsClient } from "elevenlabs";

const createProvider = () => {
  const apiKey = process.env.ELEVENLABS_API_KEY;

  if (!apiKey) {
    throw new Error("ELEVENLABS_API_KEY is not set");
  }

  return new ElevenLabsClient({ apiKey });
};

const voices = {
  'alice': 'Xb7hH8MSUJpSbSDYk0k2',
  'aria': '9BWtsMINqrJLrRacOk9x',
  'bill': 'pqHfZKP75CvOlQylNhV4',
  'brian': 'nPczCjzI2devNBz1zQrb',
  'callum': 'N2lVS1w4EtoT3dr4eOWO',
  'charlie': 'IKne3meq5aSn9XLyUdCD',
  'charlotte': 'XB0fDUnXU5powFXDhCwa',
  'chris': 'iP95p4xoKVk53GoZ742B',
  'daniel': 'onwK4e9ZLuTAKqWW03F9',
  'eric': 'cjVigY5qzO86Huf0OWal',
  'george': 'JBFqnCBsd6RMkjVDRZzb',
  'jessica': 'cgSgspJ2msm6clMCkdW9',
  'laura': 'FGY2WhTYpPnrIDTdsKH5',
  'liam': 'TX3LPaxmHKxFdv7VOQHJ',
  'lily': 'pFZP5JQG7iQjIQuC4Bku',
  'matilda': 'XrExE9yKIg1WjnnlVkGX',
  'river': 'SAz9YHcvj6GT2YYXdXww',
  'roger': 'CwhRBWXzGAHq8TQ4Fs17',
  'sarah': 'EXAVITQu4vr4xnSDxMaL',
  'will': 'bIHbv24MWmeRgasZH58o',
};

const models = {
  multilingual_v2: 'eleven_multilingual_v2',
  flash_v2_5: 'eleven_flash_v2_5',
  flash_v2: 'eleven_flash_v2',
  turbo_v2: 'eleven_turbo_v2',
  turbo_v2_5: 'eleven_turbo_v2_5',
  multilingual_sts_v2: 'eleven_multilingual_sts_v2',
  english_sts_v2: 'eleven_english_sts_v2',
};

export const elevenlabs = {
  tts: (model: keyof typeof models, voice: keyof typeof voices) => {
    return async (prompt: string) => {
      const provider = createProvider();

      const response = await provider.textToSpeech.convert(voices[voice], {
        text: prompt,
        model_id: models[model],
      });

      return response.toArray();
    };
  },
};

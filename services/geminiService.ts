import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Ensure the API key is available from environment variables
const apiKey = process.env.API_KEY;
if (!apiKey) {
  console.error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: apiKey || "" });

export const generateFunFact = async (topic: string): Promise<string> => {
  if (!apiKey) {
    return `Did you know? ${topic} is a fascinating subject related to space weather. It's amazing how events on the Sun, 93 million miles away, can affect us on Earth!`;
  }

  try {
    const prompt = `Explain "${topic}" to a 10-year-old in one or two fun, short sentences. Start with "Did you know?".`;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    
    return response.text.trim();

  } catch (error) {
    console.error("Error generating fun fact from Gemini API:", error);
    // Return a fallback fact in case of an API error
    return `Did you know? ${topic} is a super interesting part of how the Sun and Earth interact. There's always something new to learn!`;
  }
};

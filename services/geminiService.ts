
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateSoulPrompt = async (intent: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate a transformative, poetic, and creative prompt for an intuitive painting or dance session based on the intent: "${intent}". Focus on movement, pigment, and embodiment. Return a JSON object with a title and a 3-sentence prompt.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            prompt: { type: Type.STRING }
          },
          required: ["title", "prompt"]
        }
      }
    });
    
    return JSON.parse(response.text);
  } catch (error) {
    console.error("Error generating soul prompt:", error);
    return {
      title: "Flow State",
      prompt: "Close your eyes and let the rhythm guide your hand. There are no mistakes, only movement."
    };
  }
};

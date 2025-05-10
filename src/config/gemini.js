
import { GoogleGenAI } from "@google/genai";

const GeminiAPI="AIzaSyAIO9AK-gQ_IygoB8vslm10U7uOUMB28LE"


const ai = new GoogleGenAI({ apiKey: GeminiAPI });

async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
  });
 // Access the actual text content properly
 const resultText = response.candidates?.[0]?.content?.parts?.[0]?.text || "No response found";
  
//  console.log(resultText);
 return resultText;
}

// await main();
export default main;

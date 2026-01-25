
import { GoogleGenAI, Type } from "@google/genai";
import { EXPERIENCES, PROJECTS, SKILLS, EDUCATION, PERSONAL_INFO } from "./constants";

const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

const resumeContext = `
You are an AI Assistant for Abrar Hameem's portfolio. 
Abrar is a Junior AI Engineer with the following background:
- Current Role: Junior AI Engineer at Softograph.
- Skills: ${SKILLS.map(s => `${s.category}: ${s.items.join(', ')}`).join('; ')}.
- Experience: ${EXPERIENCES.map(e => `${e.role} at ${e.company} (${e.period})`).join('; ')}.
- Projects: ${PROJECTS.map(p => p.title).join(', ')}.
- Education: ${EDUCATION[0].degree} from ${EDUCATION[0].institution}.

Answer questions accurately based on this information. If you don't know, suggest they contact him at ${PERSONAL_INFO.email}.
Keep responses professional and concise.
`;

// Fallback responses when API is not available
const fallbackResponses: { [key: string]: string } = {
  "default": `Thanks for your interest in Abrar! The AI assistant is currently offline, but you can learn more about him by exploring the portfolio sections above, or contact him directly at ${PERSONAL_INFO.email}.`,
  "skills": `Abrar's main skills include: ${SKILLS.map(s => `${s.category}: ${s.items.slice(0, 3).join(', ')}`).join('; ')}. Check out the Skills section for more details!`,
  "experience": `Abrar has experience as: ${EXPERIENCES.map(e => `${e.role} at ${e.company}`).join('; ')}. See the Experience section for more info!`,
  "projects": `Abrar has worked on projects including: ${PROJECTS.slice(0, 3).map(p => p.title).join(', ')}. Check the Projects section to learn more!`,
  "education": `Abrar studied ${EDUCATION[0].degree} at ${EDUCATION[0].institution}. See the Education section for details!`,
};

function getFallbackResponse(question: string): string {
  const lowerQuestion = question.toLowerCase();
  
  if (lowerQuestion.includes('skill') || lowerQuestion.includes('expertise')) {
    return fallbackResponses.skills;
  } else if (lowerQuestion.includes('experience') || lowerQuestion.includes('work')) {
    return fallbackResponses.experience;
  } else if (lowerQuestion.includes('project') || lowerQuestion.includes('portfolio')) {
    return fallbackResponses.projects;
  } else if (lowerQuestion.includes('education') || lowerQuestion.includes('degree')) {
    return fallbackResponses.education;
  }
  
  return fallbackResponses.default;
}

export async function askAboutAbrar(question: string): Promise<string> {
  // If API is not available, return fallback response
  if (!ai) {
    return getFallbackResponse(question);
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: question,
      config: {
        systemInstruction: resumeContext,
      },
    });
    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    // Fall back to static response on error
    return getFallbackResponse(question);
  }
}

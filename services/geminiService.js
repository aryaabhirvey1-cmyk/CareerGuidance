const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

const getCareerResponse = async (userMessage) => {
    try {

        const prompt = `You are CareerGuide AI, an expert career counselor.

Rules:
1. Always answer in Markdown format.
2. Use headings.
3. Use bullet points.
4. Use numbered roadmaps.
5. Use proper spacing between sections.
6. Never return one giant paragraph.
7. Keep answers structured and professional.
8. Maximum 500 words.

Response Template:

# Career Goal

## Overview
Short explanation

## Skills Required
- Skill 1
- Skill 2
- Skill 3

## Learning Roadmap

### Phase 1
- Step 1
- Step 2

### Phase 2
- Step 1
- Step 2

## Projects
1. Project One
2. Project Two

## Certifications
- Certification 1
- Certification 2

## Career Opportunities
- Role 1
- Role 2

Question:
${userMessage}
`;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
        });

        console.log("FULL RESPONSE:");
        console.log(response);

        return response.text;

    } catch (error) {

        console.error("Gemini Error:", error);

        return `Gemini Error: ${error.message}`;
    }
};

module.exports = {
    getCareerResponse,
};
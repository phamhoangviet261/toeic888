const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

type GeminiResponse = {
  candidates?: Array<{
    content?: {
      parts?: Array<{
        text?: string;
      }>;
    };
  }>;
};

const buildPrompt = (writingAnswer: string) =>
  `You are a TOEIC Writing examiner. Grade the response below.
Return ONLY valid JSON with this schema:
{
  "score": number, // 0-10
  "feedback": string,
  "suggestions": string
}

Write feedback and suggestions in Vietnamese.

Response to grade:
"""
${writingAnswer}
"""`;

const extractJson = (text: string) => {
  const match = text.match(/\{[\s\S]*\}/);
  if (!match) {
    throw new Error("AI response did not include JSON.");
  }

  return JSON.parse(match[0]);
};

export async function POST(request: Request) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return new Response("Missing GEMINI_API_KEY.", { status: 500 });
  }

  const body = (await request.json()) as { writingAnswer?: string };
  const writingAnswer = body?.writingAnswer?.trim();

  if (!writingAnswer) {
    return new Response("Missing writingAnswer.", { status: 400 });
  }

  const response = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contents: [
        {
          role: "user",
          parts: [{ text: buildPrompt(writingAnswer) }],
        },
      ],
      generationConfig: {
        temperature: 0.4,
        maxOutputTokens: 512,
      },
    }),
  });

  if (!response.ok) {
    const message = await response.text();
    return new Response(message || "Gemini request failed.", {
      status: response.status,
    });
  }

  const data = (await response.json()) as GeminiResponse;
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!text) {
    return new Response("Gemini response missing content.", { status: 500 });
  }

  try {
    const parsed = extractJson(text);
    return Response.json(parsed);
  } catch (error) {
    return new Response(
      error instanceof Error ? error.message : "Unable to parse AI response.",
      { status: 500 }
    );
  }
}

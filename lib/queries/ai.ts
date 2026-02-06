import { useMutation } from "@tanstack/react-query";

export type AIGenerateScoreInput = {
  answer: string;
  prompt?: string;
};

export type AIGenerateScoreResult = {
  score: number;
  feedback: string;
};

const generateScoreWithAI = async (
  input: AIGenerateScoreInput
): Promise<AIGenerateScoreResult> => {
  const response = await fetch("/api/ai/score", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || "AI grading failed.");
  }

  return (await response.json()) as AIGenerateScoreResult;
};

export const useAIGenerateScoreMutation = () =>
  useMutation({
    mutationFn: generateScoreWithAI,
  });

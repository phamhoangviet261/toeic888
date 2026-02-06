import { useMutation } from "@tanstack/react-query";

export type AIGenerateScoreInput = {
  answer: string;
  prompt?: string;
};

export type AIGenerateScoreResult = {
  score: number;
  feedback: string;
};

export type WritingGradingInput = {
  writingAnswer: string;
};

export type WritingGradingResult = {
  score: number;
  feedback: string;
  suggestions: string;
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

const gradeWritingWithAI = async (
  input: WritingGradingInput
): Promise<WritingGradingResult> => {
  const response = await fetch("/api/ai/writing", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || "Writing grading failed.");
  }

  return (await response.json()) as WritingGradingResult;
};

export const useAIGenerateScoreMutation = () =>
  useMutation({
    mutationFn: generateScoreWithAI,
  });

export const useWritingGradingMutation = () =>
  useMutation({
    mutationFn: gradeWritingWithAI,
  });

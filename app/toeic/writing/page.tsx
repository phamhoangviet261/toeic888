"use client";

import { useMemo, useState, type FormEvent } from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import { useWritingGradingMutation } from "../../../lib/queries/ai";

export default function ToeicWritingPage() {
  const [answer, setAnswer] = useState("");
  const gradingMutation = useWritingGradingMutation();

  const wordCount = useMemo(() => {
    const trimmed = answer.trim();
    if (!trimmed) {
      return 0;
    }

    return trimmed.split(/\s+/).length;
  }, [answer]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!answer.trim()) {
      return;
    }
    gradingMutation.mutate({ writingAnswer: answer });
  };

  const isSubmitDisabled = !answer.trim() || gradingMutation.isPending;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container-page flex flex-1 flex-col gap-6 py-12">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold uppercase text-accent">
            TOEIC Writing
          </p>
          <h1 className="text-3xl font-semibold text-ink">
            TOEIC Writing Practice
          </h1>
          <p className="max-w-2xl text-base text-slate-600">
            Practice writing with a focused prompt and receive AI grading aligned
            to TOEIC standards.
          </p>
        </div>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-ink">Writing prompt</h2>
          <p className="mt-3 text-sm text-slate-600">
            You are a customer service representative. Write an email responding
            to a customer who received the wrong item and wants a replacement by
            next Friday. Apologize and confirm the next steps.
          </p>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-ink">Your response</h2>
            <span className="text-sm text-slate-500">
              Word count: {wordCount}
            </span>
          </div>
          <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4">
            <textarea
              value={answer}
              onChange={(event) => setAnswer(event.target.value)}
              placeholder="Write your response here..."
              className="min-h-[200px] w-full rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
            />
            <div className="flex items-center gap-3">
              <button
                type="submit"
                disabled={isSubmitDisabled}
                className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent disabled:cursor-not-allowed disabled:bg-slate-300"
              >
                {gradingMutation.isPending
                  ? "Grading..."
                  : "Submit for AI Grading"}
              </button>
              {gradingMutation.isPending ? (
                <span className="text-sm text-slate-500">
                  Grading in progress. Please wait.
                </span>
              ) : null}
            </div>
            {gradingMutation.isError ? (
              <p className="text-sm text-red-600">
                {(gradingMutation.error as Error).message ||
                  "Unable to grade your response right now."}
              </p>
            ) : null}
          </form>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-ink">AI feedback</h2>
          {gradingMutation.isSuccess ? (
            <div className="mt-4 flex flex-col gap-4 text-sm text-slate-700">
              <div>
                <p className="text-xs font-semibold uppercase text-slate-500">
                  Score
                </p>
                <p className="text-2xl font-semibold text-ink">
                  {gradingMutation.data.score}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase text-slate-500">
                  Feedback
                </p>
                <p className="mt-2 text-sm text-slate-700">
                  {gradingMutation.data.feedback}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase text-slate-500">
                  Suggested improvements
                </p>
                <p className="mt-2 text-sm text-slate-700">
                  {gradingMutation.data.suggestions}
                </p>
              </div>
            </div>
          ) : (
            <p className="mt-3 text-sm text-slate-500">
              Submit your response to see AI grading results.
            </p>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}

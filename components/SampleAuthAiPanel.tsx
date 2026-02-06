"use client";

import { useState, type FormEvent } from "react";
import { setAuthenticated } from "../lib/authSlice";
import { useAppDispatch } from "../lib/hooks";
import { useAIGenerateScoreMutation } from "../lib/queries/ai";
import { useFirebaseLoginMutation } from "../lib/queries/firebase";

export default function SampleAuthAiPanel() {
  const dispatch = useAppDispatch();
  const loginMutation = useFirebaseLoginMutation();
  const aiMutation = useAIGenerateScoreMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [answer, setAnswer] = useState("");
  const [aiResult, setAiResult] = useState<{ score: number; feedback: string } | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    loginMutation.mutate(
      { email, password },
      {
        onSuccess: (user) => {
          dispatch(
            setAuthenticated({
              userId: user.uid,
              email: user.email,
            })
          );
        },
        onError: (err) => {
          const message =
            err instanceof Error ? err.message : "Không thể đăng nhập.";
          setError(message);
        },
      }
    );
  };

  const handleSubmitAnswer = () => {
    setError(null);
    aiMutation.mutate(
      { answer },
      {
        onSuccess: (result) => {
          setAiResult(result);
        },
        onError: (err) => {
          const message =
            err instanceof Error ? err.message : "Không thể chấm điểm.";
          setError(message);
        },
      }
    );
  };

  return (
    <section className="flex flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <form className="flex flex-col gap-4" onSubmit={handleLogin}>
        <h2 className="text-lg font-semibold text-slate-800">Đăng nhập mẫu</h2>
        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
          Email
          <input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-accent"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
          Mật khẩu
          <input
            type="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-accent"
          />
        </label>
        <button
          type="submit"
          disabled={loginMutation.isPending}
          className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loginMutation.isPending ? "Đang đăng nhập..." : "Đăng nhập"}
        </button>
      </form>

      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-semibold text-slate-800">Chấm điểm AI</h3>
        <textarea
          value={answer}
          onChange={(event) => setAnswer(event.target.value)}
          rows={4}
          className="rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-accent"
          placeholder="Nhập câu trả lời để chấm điểm..."
        />
        <button
          type="button"
          onClick={handleSubmitAnswer}
          disabled={aiMutation.isPending || !answer.trim()}
          className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-70"
        >
          {aiMutation.isPending ? "Đang chấm..." : "Gửi chấm điểm"}
        </button>
        {aiResult ? (
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
            Điểm: {aiResult.score} - {aiResult.feedback}
          </div>
        ) : null}
      </div>

      {error ? (
        <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </p>
      ) : null}
    </section>
  );
}

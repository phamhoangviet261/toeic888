"use client";

import { useState, type FormEvent } from "react";
import { setAuthenticated } from "../../lib/authSlice";
import { useAppDispatch } from "../../lib/hooks";
import { useFirebaseRegisterMutation } from "../../lib/queries/firebase";

export default function RegisterForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const registerMutation = useFirebaseRegisterMutation();

  const handleRegister = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    registerMutation.mutate(
      { email, password, fullName },
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
            err instanceof Error ? err.message : "Đăng ký thất bại. Vui lòng thử lại.";
          setError(message);
        },
      }
    );
  };

  const handleGoogleRegister = () => {
    setError(null);

    registerMutation.mutate(
      { provider: "google" },
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
            err instanceof Error ? err.message : "Không thể đăng ký với Google.";
          setError(message);
        },
      }
    );
  };

  const loading = registerMutation.isPending;

  return (
    <div className="flex w-full flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <form className="flex flex-col gap-4" onSubmit={handleRegister}>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-slate-700" htmlFor="register-name">
            Họ và tên
          </label>
          <input
            id="register-name"
            type="text"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            className="rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-accent"
            placeholder="Nguyễn Văn A"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-slate-700" htmlFor="register-email">
            Email
          </label>
          <input
            id="register-email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-accent"
            placeholder="you@example.com"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-slate-700" htmlFor="register-password">
            Mật khẩu
          </label>
          <input
            id="register-password"
            type="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-accent"
            placeholder="Tối thiểu 6 ký tự"
          />
        </div>
        {error ? (
          <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </p>
        ) : null}
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Đang tạo tài khoản..." : "Tạo tài khoản"}
        </button>
      </form>
      <div className="flex items-center gap-3">
        <span className="h-px flex-1 bg-slate-200" />
        <span className="text-xs uppercase tracking-wider text-slate-400">hoặc</span>
        <span className="h-px flex-1 bg-slate-200" />
      </div>
      <button
        type="button"
        onClick={handleGoogleRegister}
        disabled={loading}
        className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-70"
      >
        <span className="h-4 w-4 rounded-full bg-gradient-to-br from-blue-500 via-red-500 to-yellow-500" />
        Login with Google
      </button>
    </div>
  );
}

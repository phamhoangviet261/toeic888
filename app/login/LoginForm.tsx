"use client";

import { useState, type FormEvent } from "react";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { auth, firebaseConfigError, googleProvider } from "../../lib/firebase";

const getAuthErrorMessage = (error: unknown) => {
  if (error instanceof FirebaseError) {
    switch (error.code) {
      case "auth/configuration-not-found":
        return "Chưa cấu hình Firebase Auth. Hãy kiểm tra authDomain và bật phương thức đăng nhập.";
      case "auth/operation-not-allowed":
        return "Phương thức đăng nhập này chưa được bật trong Firebase.";
      case "auth/user-not-found":
      case "auth/wrong-password":
        return "Email hoặc mật khẩu không đúng.";
      case "auth/popup-closed-by-user":
        return "Bạn đã đóng cửa sổ đăng nhập Google.";
      default:
        return error.message;
    }
  }

  return "Đăng nhập thất bại. Vui lòng thử lại.";
};

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

    try {
      if (!auth) {
        throw new Error(firebaseConfigError ?? "Thiếu cấu hình Firebase.");
      }
      await setPersistence(auth, browserLocalPersistence);
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError(getAuthErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError(null);
    setLoading(true);

    try {
      if (!auth) {
        throw new Error(firebaseConfigError ?? "Thiếu cấu hình Firebase.");
      }
      await setPersistence(auth, browserLocalPersistence);
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      setError(getAuthErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  const configurationMessage = firebaseConfigError;

  return (
    <div className="flex w-full flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      {configurationMessage ? (
        <p className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-700">
          {configurationMessage}
        </p>
      ) : null}
      <form className="flex flex-col gap-4" onSubmit={handleLogin}>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-slate-700" htmlFor="login-email">
            Email
          </label>
          <input
            id="login-email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-accent"
            placeholder="you@example.com"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-slate-700" htmlFor="login-password">
            Mật khẩu
          </label>
          <input
            id="login-password"
            type="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-accent"
            placeholder="••••••••"
          />
        </div>
        {error ? (
          <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </p>
        ) : null}
        <button
          type="submit"
          disabled={loading || Boolean(configurationMessage)}
          className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Đang đăng nhập..." : "Đăng nhập"}
        </button>
      </form>
      <div className="flex items-center gap-3">
        <span className="h-px flex-1 bg-slate-200" />
        <span className="text-xs uppercase tracking-wider text-slate-400">hoặc</span>
        <span className="h-px flex-1 bg-slate-200" />
      </div>
      <button
        type="button"
        onClick={handleGoogleLogin}
        disabled={loading || Boolean(configurationMessage)}
        className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-70"
      >
        <span className="h-4 w-4 rounded-full bg-gradient-to-br from-blue-500 via-red-500 to-yellow-500" />
        Login with Google
      </button>
    </div>
  );
}

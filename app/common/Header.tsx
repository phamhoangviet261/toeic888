"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { onAuthStateChanged, type User } from "firebase/auth";
import { auth } from "../../lib/firebase";

export default function Header() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (nextUser) => {
      setUser(nextUser);
    });

    return () => unsubscribe();
  }, []);

  const userLabel = user?.displayName?.trim() || user?.email || "Tài khoản";

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="container-page flex items-center justify-between py-4">
        <Link href="/" className="text-lg font-semibold text-ink">
          Toeic888
        </Link>
        <nav className="flex items-center gap-4 text-sm text-slate-600">
          <Link href="/toeic/listening" className="hover:text-ink">
            TOEIC
          </Link>
          <Link href="/ielts/listening" className="hover:text-ink">
            IELTS
          </Link>
          <Link href="/account" className="hover:text-ink">
            {user ? `Xin chào, ${userLabel}` : "Tài khoản"}
          </Link>
        </nav>
      </div>
    </header>
  );
}

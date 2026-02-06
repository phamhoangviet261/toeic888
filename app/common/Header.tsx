import Link from "next/link";

export default function Header() {
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
            Tài khoản
          </Link>
        </nav>
      </div>
    </header>
  );
}

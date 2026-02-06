import Button from "./Button";

const navItems = [
  { label: "Kỹ năng", href: "#skills" },
  { label: "Tính năng", href: "#features" },
  { label: "Lộ trình", href: "#roadmap" },
];

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="container-page flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-white">
            T8
          </div>
          <div>
            <p className="text-lg font-semibold">Toeic888</p>
            <p className="text-xs text-slate-500">AI luyện TOEIC/IELTS</p>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
          {navItems.map((item) => (
            <a key={item.href} className="hover:text-ink" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <Button className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-white shadow-sm">
          Dùng thử miễn phí
        </Button>
      </div>
    </header>
  );
}

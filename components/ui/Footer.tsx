const footerLinks = [
  { label: "Điều khoản", href: "#" },
  { label: "Chính sách bảo mật", href: "#" },
  { label: "Liên hệ", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-page flex flex-col gap-4 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2024 Toeic888. All rights reserved.</p>
        <div className="flex gap-4">
          {footerLinks.map((link) => (
            <a key={link.label} className="hover:text-ink" href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

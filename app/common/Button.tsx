import Link from "next/link";

type ButtonProps = {
  label: string;
  href?: string;
};

export default function Button({ label, href = "#" }: ButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent"
    >
      {label}
    </Link>
  );
}

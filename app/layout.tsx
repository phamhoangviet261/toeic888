import "./globals.css";
import type { Metadata } from "next";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Toeic888 - AI luyện TOEIC/IELTS",
  description: "Nền tảng luyện 4 kỹ năng TOEIC/IELTS với AI cá nhân hóa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="min-h-screen bg-white text-ink">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

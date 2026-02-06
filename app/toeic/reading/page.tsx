import Header from "../../common/Header";
import Footer from "../../common/Footer";
import Button from "../../common/Button";

export default function ToeicReadingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container-page flex flex-1 flex-col gap-4 py-12">
        <p className="text-sm font-semibold uppercase text-accent">TOEIC Reading</p>
        <h1 className="text-3xl font-semibold text-ink">
          Nâng cấp kỹ năng đọc hiểu
        </h1>
        <p className="max-w-2xl text-base text-slate-600">
          Luyện đọc theo Part và nhận giải thích chi tiết cho từng câu hỏi.
        </p>
        <div>
          <Button label="Ôn luyện Part 5" href="/toeic/speaking" />
        </div>
      </main>
      <Footer />
    </div>
  );
}

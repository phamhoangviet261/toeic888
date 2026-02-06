import Header from "../../common/Header";
import Footer from "../../common/Footer";
import Button from "../../common/Button";

export default function IeltsReadingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container-page flex flex-1 flex-col gap-4 py-12">
        <p className="text-sm font-semibold uppercase text-accent">IELTS Reading</p>
        <h1 className="text-3xl font-semibold text-ink">
          Chiến lược đọc hiểu IELTS
        </h1>
        <p className="max-w-2xl text-base text-slate-600">
          Luyện đọc Academic/General với hướng dẫn phân tích dạng câu hỏi.
        </p>
        <div>
          <Button label="Làm bài đọc" href="/ielts/speaking" />
        </div>
      </main>
      <Footer />
    </div>
  );
}

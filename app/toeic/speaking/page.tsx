import Header from "../../common/Header";
import Footer from "../../common/Footer";
import Button from "../../common/Button";

export default function ToeicSpeakingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container-page flex flex-1 flex-col gap-4 py-12">
        <p className="text-sm font-semibold uppercase text-accent">TOEIC Speaking</p>
        <h1 className="text-3xl font-semibold text-ink">
          Luyện nói TOEIC cùng AI
        </h1>
        <p className="max-w-2xl text-base text-slate-600">
          Thực hành phản xạ giao tiếp và nhận điểm số dự kiến theo rubric chuẩn.
        </p>
        <div>
          <Button label="Thử bài nói" href="/toeic/writing" />
        </div>
      </main>
      <Footer />
    </div>
  );
}

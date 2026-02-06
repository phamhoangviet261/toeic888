import Header from "../../common/Header";
import Footer from "../../common/Footer";
import Button from "../../common/Button";

export default function ToeicListeningPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container-page flex flex-1 flex-col gap-4 py-12">
        <p className="text-sm font-semibold uppercase text-accent">TOEIC Listening</p>
        <h1 className="text-3xl font-semibold text-ink">
          Luyện nghe TOEIC theo lộ trình
        </h1>
        <p className="max-w-2xl text-base text-slate-600">
          Khám phá các bài nghe mô phỏng đề thi và nhận phản hồi theo từng phần.
        </p>
        <div>
          <Button label="Bắt đầu luyện nghe" href="/toeic/reading" />
        </div>
      </main>
      <Footer />
    </div>
  );
}

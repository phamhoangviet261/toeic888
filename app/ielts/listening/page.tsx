import Header from "../../common/Header";
import Footer from "../../common/Footer";
import Button from "../../common/Button";

export default function IeltsListeningPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container-page flex flex-1 flex-col gap-4 py-12">
        <p className="text-sm font-semibold uppercase text-accent">IELTS Listening</p>
        <h1 className="text-3xl font-semibold text-ink">
          Rèn luyện IELTS Listening hiệu quả
        </h1>
        <p className="max-w-2xl text-base text-slate-600">
          Luyện tập theo section với điểm số dự đoán và mẹo xử lý bẫy phổ biến.
        </p>
        <div>
          <Button label="Bắt đầu nghe" href="/ielts/reading" />
        </div>
      </main>
      <Footer />
    </div>
  );
}

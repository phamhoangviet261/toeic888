import Header from "../../common/Header";
import Footer from "../../common/Footer";
import Button from "../../common/Button";

export default function IeltsSpeakingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container-page flex flex-1 flex-col gap-4 py-12">
        <p className="text-sm font-semibold uppercase text-accent">IELTS Speaking</p>
        <h1 className="text-3xl font-semibold text-ink">
          Luyện nói IELTS tự tin
        </h1>
        <p className="max-w-2xl text-base text-slate-600">
          Thực hành Part 1-3 cùng AI và nhận góp ý về phát âm, từ vựng.
        </p>
        <div>
          <Button label="Bắt đầu phỏng vấn" href="/ielts/writing" />
        </div>
      </main>
      <Footer />
    </div>
  );
}

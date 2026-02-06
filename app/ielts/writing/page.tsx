import Header from "../../common/Header";
import Footer from "../../common/Footer";
import Button from "../../common/Button";

export default function IeltsWritingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container-page flex flex-1 flex-col gap-4 py-12">
        <p className="text-sm font-semibold uppercase text-accent">IELTS Writing</p>
        <h1 className="text-3xl font-semibold text-ink">
          Viết IELTS theo band mục tiêu
        </h1>
        <p className="max-w-2xl text-base text-slate-600">
          Thực hành Task 1 &amp; Task 2 với góp ý rõ ràng về cấu trúc và ý tưởng.
        </p>
        <div>
          <Button label="Bắt đầu viết" href="/ielts/listening" />
        </div>
      </main>
      <Footer />
    </div>
  );
}

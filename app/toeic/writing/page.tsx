import Header from "../../common/Header";
import Footer from "../../common/Footer";
import Button from "../../common/Button";

export default function ToeicWritingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container-page flex flex-1 flex-col gap-4 py-12">
        <p className="text-sm font-semibold uppercase text-accent">TOEIC Writing</p>
        <h1 className="text-3xl font-semibold text-ink">
          Viết TOEIC chuẩn cấu trúc
        </h1>
        <p className="max-w-2xl text-base text-slate-600">
          Viết email, báo cáo ngắn và nhận góp ý chi tiết về ngữ pháp lẫn ý tưởng.
        </p>
        <div>
          <Button label="Làm bài viết" href="/toeic/listening" />
        </div>
      </main>
      <Footer />
    </div>
  );
}

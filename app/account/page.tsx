import Header from "../common/Header";
import Footer from "../common/Footer";
import Button from "../common/Button";

export default function AccountPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container-page flex flex-1 flex-col gap-4 py-12">
        <p className="text-sm font-semibold uppercase text-accent">Tài khoản</p>
        <h1 className="text-3xl font-semibold text-ink">
          Bảng điều khiển học tập cá nhân
        </h1>
        <p className="max-w-2xl text-base text-slate-600">
          Theo dõi mục tiêu, kết quả và lời khuyên luyện tập được cá nhân hóa từ
          hệ thống.
        </p>
        <div>
          <Button label="Cập nhật mục tiêu" href="/toeic/listening" />
        </div>
      </main>
      <Footer />
    </div>
  );
}

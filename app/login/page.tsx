import Header from "../common/Header";
import Footer from "../common/Footer";
import Button from "../common/Button";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container-page flex flex-1 flex-col gap-4 py-12">
        <p className="text-sm font-semibold uppercase text-accent">Đăng nhập</p>
        <h1 className="text-3xl font-semibold text-ink">
          Chào mừng quay lại Toeic888
        </h1>
        <p className="max-w-2xl text-base text-slate-600">
          Đăng nhập để tiếp tục theo dõi lộ trình luyện tập và nhận gợi ý học tập
          cá nhân hóa.
        </p>
        <div>
          <Button label="Tiếp tục đăng nhập" href="/account" />
        </div>
      </main>
      <Footer />
    </div>
  );
}

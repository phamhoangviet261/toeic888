import Header from "../common/Header";
import Footer from "../common/Footer";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container-page flex flex-1 flex-col gap-6 py-12">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-semibold uppercase text-accent">Đăng nhập</p>
          <h1 className="text-3xl font-semibold text-ink">
            Chào mừng quay lại Toeic888
          </h1>
          <p className="max-w-2xl text-base text-slate-600">
            Đăng nhập để tiếp tục theo dõi lộ trình luyện tập và nhận gợi ý học
            tập cá nhân hóa.
          </p>
        </div>
        <LoginForm />
      </main>
      <Footer />
    </div>
  );
}

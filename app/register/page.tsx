import Header from "../common/Header";
import Footer from "../common/Footer";
import RegisterForm from "./RegisterForm";

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container-page flex flex-1 flex-col gap-6 py-12">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-semibold uppercase text-accent">Đăng ký</p>
          <h1 className="text-3xl font-semibold text-ink">
            Bắt đầu hành trình luyện tập với AI
          </h1>
          <p className="max-w-2xl text-base text-slate-600">
            Tạo tài khoản để lưu tiến độ và mở khóa lộ trình luyện TOEIC/IELTS
            phù hợp với bạn.
          </p>
        </div>
        <RegisterForm />
      </main>
      <Footer />
    </div>
  );
}

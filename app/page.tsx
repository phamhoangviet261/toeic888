const skills = [
  {
    name: "Listening",
    description: "Luyện đề nghe theo chủ đề, phân tích đáp án và từ vựng khó.",
  },
  {
    name: "Reading",
    description: "Bài đọc theo dạng TOEIC/IELTS, giải thích chi tiết đáp án.",
  },
  {
    name: "Writing",
    description: "AI chấm theo rubric, gợi ý sửa lỗi và viết lại tối ưu.",
  },
  {
    name: "Speaking",
    description: "Thu âm, chuyển giọng nói thành văn bản và nhận feedback.",
  },
];

const features = [
  {
    title: "AI Tutor cá nhân hóa",
    detail: "Đề xuất lộ trình theo mục tiêu điểm và lịch học của bạn.",
  },
  {
    title: "Mock test toàn diện",
    detail: "Bài thi thử chuẩn format kèm phân tích điểm mạnh/yếu.",
  },
  {
    title: "Kho đề phong phú",
    detail: "Cập nhật đề theo chủ đề, mức độ và band mong muốn.",
  },
];

const roadmap = [
  {
    step: "01",
    title: "Chọn mục tiêu",
    detail: "Thiết lập band/score TOEIC hoặc IELTS mong muốn.",
  },
  {
    step: "02",
    title: "Luyện tập thông minh",
    detail: "AI phân tích lỗi, gợi ý bài tập phù hợp năng lực.",
  },
  {
    step: "03",
    title: "Theo dõi tiến bộ",
    detail: "Dashboard hiển thị tiến độ, điểm số và kỹ năng cần cải thiện.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="container-page flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-white">
              T8
            </div>
            <div>
              <p className="text-lg font-semibold">Toeic888</p>
              <p className="text-xs text-slate-500">AI luyện TOEIC/IELTS</p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a className="hover:text-ink" href="#skills">
              Kỹ năng
            </a>
            <a className="hover:text-ink" href="#features">
              Tính năng
            </a>
            <a className="hover:text-ink" href="#roadmap">
              Lộ trình
            </a>
          </nav>
          <button className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-white shadow-sm">
            Dùng thử miễn phí
          </button>
        </div>
      </header>

      <main>
        <section className="bg-gradient-to-b from-soft via-white to-white py-16">
          <div className="container-page grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-accent" />
                AI Learning Platform
              </div>
              <h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
                Học TOEIC/IELTS 4 kỹ năng cùng AI như gia sư riêng
              </h1>
              <p className="text-base text-slate-600 sm:text-lg">
                Luyện Listening, Reading, Writing, Speaking theo mục tiêu điểm số, có feedback
                tức thì và lộ trình học cá nhân hóa.
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-200">
                  Bắt đầu luyện tập
                </button>
                <button className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-ink">
                  Xem demo lớp học
                </button>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-slate-500">
                <div>
                  <p className="text-2xl font-semibold text-ink">45k+</p>
                  <p>học viên đang luyện</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-ink">92%</p>
                  <p>cải thiện điểm sau 6 tuần</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-ink">24/7</p>
                  <p>AI hỗ trợ mọi lúc</p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-100">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-600">Bài luyện hôm nay</p>
                  <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700">
                    Phù hợp mục tiêu 7.0
                  </span>
                </div>
                <div className="space-y-3 rounded-2xl border border-slate-100 bg-soft p-4">
                  <p className="text-base font-semibold text-ink">Speaking - Part 2</p>
                  <p className="text-sm text-slate-600">
                    Describe a memorable trip you had with friends. Speak for 2 minutes.
                  </p>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    AI sẽ chấm theo tiêu chí Fluency, Vocabulary, Grammar.
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-100 p-4">
                    <p className="text-xs font-medium text-slate-500">Điểm ước tính</p>
                    <p className="text-2xl font-semibold text-ink">6.5</p>
                    <p className="text-xs text-slate-500">Cần cải thiện coherence</p>
                  </div>
                  <div className="rounded-2xl border border-slate-100 p-4">
                    <p className="text-xs font-medium text-slate-500">Gợi ý nhanh</p>
                    <p className="text-sm font-semibold text-ink">
                      Thêm ví dụ và sử dụng linking words đa dạng.
                    </p>
                  </div>
                </div>
                <button className="w-full rounded-xl bg-ink px-4 py-3 text-sm font-semibold text-white">
                  Vào phòng luyện ngay
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="py-16">
          <div className="container-page">
            <div className="flex flex-col gap-3 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                4 kỹ năng chính
              </p>
              <h2 className="text-3xl font-semibold text-ink">Luyện tập đầy đủ chuẩn TOEIC/IELTS</h2>
              <p className="text-base text-slate-600">
                Mỗi kỹ năng đều có AI phân tích, chấm điểm và gợi ý cải thiện chi tiết.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <p className="text-lg font-semibold text-ink">{skill.name}</p>
                  <p className="mt-2 text-sm text-slate-600">{skill.description}</p>
                  <button className="mt-6 text-sm font-semibold text-accent">
                    Xem bài luyện →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="bg-soft py-16">
          <div className="container-page grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                Tính năng nổi bật
              </p>
              <h2 className="text-3xl font-semibold text-ink">
                Học thông minh với AI, tối ưu thời gian ôn luyện
              </h2>
              <p className="text-base text-slate-600">
                Tập trung vào lỗi thường gặp, nhận feedback ngay khi hoàn thành bài và theo dõi
                tiến bộ theo tuần.
              </p>
              <button className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white">
                Khám phá thư viện đề
              </button>
            </div>
            <div className="grid gap-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <p className="text-lg font-semibold text-ink">{feature.title}</p>
                  <p className="mt-2 text-sm text-slate-600">{feature.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="roadmap" className="py-16">
          <div className="container-page">
            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                Lộ trình học
              </p>
              <h2 className="text-3xl font-semibold text-ink">
                Theo dõi tiến độ và bứt phá điểm số
              </h2>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {roadmap.map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="text-sm font-semibold text-accent">{item.step}</div>
                  <p className="mt-4 text-lg font-semibold text-ink">{item.title}</p>
                  <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="container-page flex flex-col gap-4 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2024 Toeic888. All rights reserved.</p>
          <div className="flex gap-4">
            <a className="hover:text-ink" href="#">
              Điều khoản
            </a>
            <a className="hover:text-ink" href="#">
              Chính sách bảo mật
            </a>
            <a className="hover:text-ink" href="#">
              Liên hệ
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

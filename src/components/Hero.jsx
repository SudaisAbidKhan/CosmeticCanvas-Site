import logo from "../assets/logo.jpeg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated gradient background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0010] via-[#2d0036] to-[#0d001a]" />
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-pink-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-700/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-rose-500/10 rounded-full blur-2xl animate-ping"
          style={{ animationDuration: "4s" }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, #f9a8d4 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 pt-24 pb-12">
        {/* Left Text */}
        <div className="flex-1 text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-pink-400/30 text-pink-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-pink-400 rounded-full animate-ping inline-block" />
            AI-Powered Beauty Technology
          </div>

          <h1
            className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Find Your{" "}
            <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 bg-clip-text text-transparent">
              Perfect
            </span>
            <br />
            Makeup Match
          </h1>

          <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
            Cosmetic Canvas uses advanced AI to scan your skin tone and
            recommend the ideal cosmetic products — personalized just for you,
            completely free.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="https://drive.google.com/uc?export=download&id=1fzpkDhXJEh2VT4ShpqOnmP4vD_wOO49G"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold px-8 py-4 rounded-2xl shadow-xl shadow-pink-900/40 hover:shadow-pink-500/40 hover:scale-105 transition-all duration-300"
            >
              <svg
                className="w-5 h-5 group-hover:translate-y-0.5 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download Free App
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 border border-white/20 text-white/80 hover:text-white hover:border-pink-400/60 font-semibold px-8 py-4 rounded-2xl backdrop-blur-sm transition-all duration-300"
            >
              Explore Features
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-12 justify-center lg:justify-start">
            {[
              { value: "100%", label: "Free to Use" },
              { value: "AI", label: "Skin Analysis" },
              { value: "50+", label: "Product Types" },
            ].map((s) => (
              <div key={s.label} className="text-center lg:text-left">
                <div
                  className="text-2xl font-bold text-pink-300"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {s.value}
                </div>
                <div className="text-white/40 text-xs mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Logo / Visual */}
        <div className="flex-shrink-0 flex flex-col items-center gap-6">
          <div className="relative">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 blur-2xl opacity-40 scale-110" />
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-pink-400/40 shadow-2xl shadow-pink-900/60">
              <img
                src={logo}
                alt="Cosmetic Canvas"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating chips */}
            <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs px-3 py-1.5 rounded-full shadow-lg">
              ✨ Skin Analysis
            </div>
            <div className="absolute -bottom-4 -left-4 bg-pink-500/80 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full shadow-lg">
              🎨 AI Matched
            </div>
          </div>

          {/* Android badge */}
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-2">
            <svg
              className="w-5 h-5 text-green-400"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.523 15.34l1.08-1.868a.25.25 0 00-.09-.34l-1.09-.63a6.45 6.45 0 00.166-1.502c0-.523-.057-1.03-.166-1.503l1.09-.63a.25.25 0 00.09-.34L17.523 6.66a.25.25 0 00-.342-.091l-1.085.626A6.477 6.477 0 0014 5.67V4.5a.25.25 0 00-.25-.25h-3.5A.25.25 0 0010 4.5v1.17a6.477 6.477 0 00-2.096 1.525L6.82 6.569a.25.25 0 00-.342.091L5.397 8.528a.25.25 0 00.09.341l1.09.63A6.45 6.45 0 006.41 11c0 .524.057 1.03.166 1.502l-1.09.63a.25.25 0 00-.09.341l1.08 1.868a.25.25 0 00.342.09l1.085-.625A6.476 6.476 0 0010 16.33v1.17c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-1.17a6.476 6.476 0 002.096-1.524l1.085.626a.25.25 0 00.342-.091zM12 14a3 3 0 110-6 3 3 0 010 6z" />
            </svg>
            <span className="text-white/60 text-xs">Android 8.0+</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-white/30 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-pink-400/60 to-transparent animate-bounce" />
      </div>
    </section>
  );
}

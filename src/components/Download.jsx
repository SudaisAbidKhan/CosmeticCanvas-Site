// ✅ Google Drive APK direct download link configured
const APK_DOWNLOAD_URL =
  "https://drive.google.com/uc?export=download&id=1ZEaNO7fIi6CvqBenNcrVks4RAJTAF6HW";

const highlights = [
  { icon: "🆓", label: "Completely Free", sub: "No subscriptions, ever" },
  { icon: "🤖", label: "AI-Powered", sub: "TensorFlow Lite on-device" },
  { icon: "🔒", label: "Google Sign-In", sub: "Safe & secure auth" },
  { icon: "📱", label: "Android 8.0+", sub: "Lightweight & fast" },
];

export default function Download() {
  return (
    <section id="download" className="py-24 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fdf0f8] via-white to-[#f3e8ff] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-400 via-purple-500 to-fuchsia-400" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="rounded-3xl bg-gradient-to-br from-gray-900 to-gray-950 p-12 lg:p-16 shadow-2xl overflow-hidden relative">
          {/* Inner glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-pink-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl" />

          {/* Content grid */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
            {/* Left */}
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-block bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-5">
                📲 Available Now
              </span>
              <h2
                className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Download{" "}
                <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Cosmetic Canvas
                </span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto lg:mx-0">
                Your AI-powered beauty companion is ready. Install the free
                Android app and discover your perfect makeup match today.
              </p>

              {/* Download Button */}
              <a
                href={APK_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white font-bold px-8 py-5 rounded-2xl shadow-xl shadow-pink-900/40 hover:shadow-pink-500/40 hover:scale-105 transition-all duration-300 text-lg"
              >
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <svg
                    className="w-5 h-5 group-hover:translate-y-0.5 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs text-white/70 font-normal leading-none mb-0.5">
                    Download for Android
                  </div>
                  <div>Get the APK — Free</div>
                </div>
              </a>

              <p className="text-gray-600 text-xs mt-4">
                Android 8.0 or higher required · ~15 MB · No ads
              </p>
            </div>

            {/* Right — Highlights */}
            <div className="flex-shrink-0 grid grid-cols-2 gap-4">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col items-center text-center hover:bg-white/10 hover:border-pink-500/30 transition-all duration-300"
                >
                  <span className="text-3xl mb-2">{h.icon}</span>
                  <div className="text-white font-semibold text-sm">
                    {h.label}
                  </div>
                  <div className="text-gray-500 text-xs mt-0.5">{h.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Install instruction */}
          <div className="relative z-10 mt-10 border-t border-white/10 pt-8">
            <p className="text-gray-500 text-sm text-center mb-4">
              Installation Guide
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-400">
              {[
                "Download APK from above",
                "Allow unknown sources in settings",
                "Open the APK file",
                "Install & Sign in with Google",
              ].map((step, i) => (
                <div key={step} className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-pink-500/20 border border-pink-500/30 text-pink-400 text-xs flex items-center justify-center font-bold flex-shrink-0">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                  {i < 3 && (
                    <svg
                      className="hidden sm:block w-4 h-4 text-gray-700 flex-shrink-0"
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
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

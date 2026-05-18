const steps = [
  {
    number: "01",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "Sign In with Google",
    desc: "No lengthy forms — just tap to sign in with your Google account. Completely free, no subscriptions ever.",
    color: "from-pink-400 to-rose-500",
  },
  {
    number: "02",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Scan Your Skin",
    desc: "Point the camera at your face. Our AI instantly detects your skin tone, undertone, and classifies your skin type.",
    color: "from-purple-500 to-violet-600",
  },
  {
    number: "03",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Select Your Preferences",
    desc: "Choose your skin condition (oily, dry, sensitive...) and the makeup occasion — party, wedding, casual, or professional.",
    color: "from-fuchsia-500 to-pink-500",
  },
  {
    number: "04",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "Get Your Matches",
    desc: "Receive curated recommendations for foundation, lipstick, blush, eyeshadow, and more — perfectly matched to you.",
    color: "from-rose-500 to-pink-600",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "linear-gradient(45deg, #f9a8d4 1px, transparent 1px), linear-gradient(-45deg, #c084fc 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-pink-500/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
            Simple Steps
          </span>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            How Cosmetic Canvas{" "}
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            From scan to recommendation in seconds — beauty intelligence made simple.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-pink-500/0 via-pink-500/30 to-pink-500/0" />

          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Number badge */}
              <div className="absolute -top-3 -right-3 w-7 h-7 bg-gray-900 border border-gray-700 rounded-full flex items-center justify-center z-10">
                <span className="text-gray-500 text-[10px] font-bold">{step.number}</span>
              </div>

              {/* Icon circle */}
              <div
                className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-xl mb-6 group-hover:scale-110 group-hover:shadow-pink-500/30 transition-all duration-300`}
              >
                {step.icon}
                {/* Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300`} />
              </div>

              <h3
                className="text-white font-bold text-lg mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="#download"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold px-8 py-4 rounded-2xl shadow-xl shadow-pink-900/40 hover:shadow-pink-500/40 hover:scale-105 transition-all duration-300"
          >
            Start Your Beauty Journey
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

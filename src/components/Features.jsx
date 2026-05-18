const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "AI Skin Tone Detection",
    desc: "Live camera scans your face to classify skin tone — fair, medium, dark — and detect undertones with high accuracy using TensorFlow Lite.",
    color: "from-pink-500 to-rose-500",
    bg: "bg-pink-50",
    border: "border-pink-100",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Smart Recommendations",
    desc: "Get personalized suggestions for foundation, concealer, lipstick, blush, eyeshadow, and more — matched to your skin type and occasion.",
    color: "from-purple-500 to-violet-500",
    bg: "bg-purple-50",
    border: "border-purple-100",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Skin Condition Matching",
    desc: "Select your skin condition — dry, oily, sensitive, acne-prone, or allergic — and get products safe and optimized for your needs.",
    color: "from-rose-400 to-pink-500",
    bg: "bg-rose-50",
    border: "border-rose-100",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    title: "Product Browser",
    desc: "Explore a curated catalogue of cosmetics with brand names, prices, ratings, and shade details — filter by category instantly.",
    color: "from-fuchsia-500 to-pink-500",
    bg: "bg-fuchsia-50",
    border: "border-fuchsia-100",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Shop / Brand Booth Mode",
    desc: "Cosmetic shop staff can showcase brand-specific product listings to walk-in customers — a digital beauty counter in your pocket.",
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3C7 3 3 7.5 3 12s4 9 9 9 9-4.5 9-9-4-9-9-9zm0 0v9m0 0l3-3m-3 3l-3-3" />
      </svg>
    ),
    title: "Daily Skincare Routine",
    desc: "View and track your personalized daily skincare steps curated to your skin profile — morning and night routines built for you.",
    color: "from-pink-400 to-fuchsia-500",
    bg: "bg-pink-50",
    border: "border-pink-100",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-60" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-60" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-gradient-to-r from-pink-100 to-purple-100 text-pink-600 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
            What We Offer
          </span>
          <h2
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Everything You Need for{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Perfect Beauty
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            A complete AI-powered beauty companion — from skin analysis to
            personalized product discovery.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`group relative p-7 rounded-3xl border ${f.border} ${f.bg} hover:shadow-xl hover:shadow-pink-100/60 hover:-translate-y-1 transition-all duration-300`}
            >
              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${f.color} text-white shadow-lg mb-5`}
              >
                {f.icon}
              </div>

              <h3
                className="text-lg font-bold text-gray-800 mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {f.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>

              {/* Hover accent line */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-b-3xl bg-gradient-to-r ${f.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

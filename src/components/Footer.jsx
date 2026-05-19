import logo from "../assets/logo.jpeg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    {
      heading: "App",
      items: [
        { label: "Features", href: "#features" },
        { label: "How It Works", href: "#how-it-works" },
        { label: "Screenshots", href: "#screenshots" },
        { label: "Download", href: "#download" },
      ],
    },
    {
      heading: "Product",
      items: [
        { label: "Skin Analysis", href: "#features" },
        { label: "Browse Products", href: "#features" },
        { label: "My Routine", href: "#features" },
        { label: "Shop Mode", href: "#features" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-950 border-t border-white/5 relative overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/40 to-transparent" />

      {/* Background orbs */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-flex items-center gap-3 mb-5 group">
              <img
                src={logo}
                alt="Cosmetic Canvas"
                className="w-10 h-10 rounded-full object-cover shadow-md group-hover:scale-110 transition-transform duration-300"
              />
              <span
                className="text-white font-bold text-xl tracking-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Cosmetic <span className="text-pink-400">Canvas</span>
              </span>
            </a>

            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-6">
              AI-powered beauty technology that scans your skin and recommends
              the perfect cosmetic products — personalized, free, and always
              available in your pocket.
            </p>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2">
              {["TensorFlow Lite", "Google Sign-In", "Android", "Free Forever"].map((t) => (
                <span
                  key={t}
                  className="text-xs text-gray-500 border border-gray-800 px-3 py-1 rounded-full hover:border-pink-500/40 hover:text-pink-400 transition-colors duration-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {links.map((col) => (
            <div key={col.heading}>
              <h4
                className="text-white font-semibold text-sm uppercase tracking-widest mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {col.heading}
              </h4>
              <ul className="space-y-3">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-gray-500 text-sm hover:text-pink-400 transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-gray-700 group-hover:bg-pink-400 transition-colors duration-200" />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © {currentYear} Cosmetic Canvas. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            <span className="text-gray-600 text-xs">Made with</span>
            <span className="text-pink-500 text-sm">♥</span>
            <span className="text-gray-600 text-xs">for beauty lovers</span>
          </div>

          {/* Download mini CTA */}
          <a
            href="#download"
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 hover:border-pink-500/40 hover:bg-pink-500/10 text-gray-400 hover:text-pink-400 text-xs font-medium px-4 py-2 rounded-full transition-all duration-300"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download APK
          </a>
        </div>
      </div>
    </footer>
  );
}

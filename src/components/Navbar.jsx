import { useState, useEffect } from "react";
import logo from "../assets/logo.jpeg";
import { useAuth } from "../context/AuthContext";
import Login from "./Auth/Login";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Screenshots", href: "#screenshots" },
    {
      label: "Download",
      href: "https://drive.google.com/uc?export=download&id=1ZEaNO7fIi6CvqBenNcrVks4RAJTAF6HW",
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 rounded-bl-lg rounded-br-lg ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg shadow-pink-100/40 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Cosmetic Canvas Logo"
            className="w-10 h-10 rounded-full object-cover shadow-md group-hover:scale-110 transition-transform duration-300"
          />
          <span
            className={`font-bold text-xl tracking-tight transition-colors duration-300 ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Cosmetic <span className="text-pink-400">Canvas</span>
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-pink-400 relative after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-[2px] after:bg-pink-400 after:transition-all after:duration-300 hover:after:w-full ${
                  scrolled ? "text-gray-600" : "text-white/90"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Auth and Download Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {isAuthenticated ? (
            <>
              <span className="text-sm text-gray-600">{user?.email}</span>
              <button
                onClick={logout}
                className="bg-red-500 text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-red-600 transition-all duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => setLoginOpen(true)}
              className="bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-blue-600 transition-all duration-300"
            >
              Login
            </button>
          )}
          <a
            href="https://drive.google.com/uc?export=download&id=1fzpkDhXJEh2VT4ShpqOnmP4vD_wOO49G"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-md hover:shadow-pink-300/50 hover:scale-105 transition-all duration-300"
          >
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
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download App
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-gray-700" : "text-white"}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div
            className={`w-5 h-0.5 mb-1 transition-all ${scrolled ? "bg-gray-700" : "bg-white"}`}
          />
          <div
            className={`w-5 h-0.5 mb-1 transition-all ${scrolled ? "bg-gray-700" : "bg-white"}`}
          />
          <div
            className={`w-5 h-0.5 transition-all ${scrolled ? "bg-gray-700" : "bg-white"}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-pink-100 px-6 py-4 flex flex-col gap-4 shadow-lg">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 font-medium hover:text-pink-500 transition-colors"
            >
              {l.label}
            </a>
          ))}
          {isAuthenticated ? (
            <>
              <span className="text-sm text-gray-600 px-4 py-2">
                {user?.email}
              </span>
              <button
                onClick={() => {
                  logout();
                  setMenuOpen(false);
                }}
                className="bg-red-500 text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-red-600 transition-all duration-300 text-center"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                setLoginOpen(true);
                setMenuOpen(false);
              }}
              className="bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-blue-600 transition-all duration-300"
            >
              Login
            </button>
          )}
          <a
            href="#download"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm font-semibold px-5 py-2.5 rounded-full text-center justify-center"
          >
            Download App
          </a>
        </div>
      )}

      {/* Login Modal */}
      <Login isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
    </nav>
  );
}

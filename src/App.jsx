import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import AppScreenshots from "./components/AppScreenshots";
import HowItWorks from "./components/HowItWorks";
import Download from "./components/Download";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen antialiased">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <AppScreenshots />
        <Download />
      </main>
      <Footer />
    </div>
  );
}
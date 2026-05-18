import homeScreen from "../assets/app-screenshot-home.jpeg";
import productsScreen from "../assets/app-screenshot-products.jpeg";

const screens = [
  {
    img: homeScreen,
    title: "Personalized Dashboard",
    desc: "Your beauty hub — scan your skin, browse products, and track your daily routine all from one elegant home screen.",
    tag: "Home Screen",
    color: "from-pink-500 to-purple-500",
  },
  {
    img: productsScreen,
    title: "Smart Product Browser",
    desc: "Filter by category, explore top-rated products with pricing and brand info — tap the heart to save your favourites.",
    tag: "Product Browser",
    color: "from-fuchsia-500 to-pink-500",
  },
];

export default function AppScreenshots() {
  return (
    <section id="screenshots" className="py-24 bg-gradient-to-b from-[#fdf0f8] to-white relative overflow-hidden">
      {/* Background swirl */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-pink-100/40 to-purple-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-gradient-to-r from-pink-100 to-purple-100 text-pink-600 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
            App Preview
          </span>
          <h2
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            See It In{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Action
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            A beautiful, intuitive interface designed to make beauty discovery
            effortless and enjoyable.
          </p>
        </div>

        {/* Screens */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {screens.map((s, i) => (
            <div
              key={s.title}
              className={`flex-1 flex flex-col ${i % 2 === 1 ? "lg:flex-col-reverse" : ""} items-center gap-8`}
            >
              {/* Phone mockup */}
              <div className="relative group">
                {/* Glow */}
                <div className={`absolute -inset-4 bg-gradient-to-br ${s.color} opacity-20 rounded-[3rem] blur-2xl group-hover:opacity-30 transition-opacity duration-500`} />

                {/* Phone frame */}
                <div className="relative w-56 bg-gray-900 rounded-[2.5rem] p-2.5 shadow-2xl ring-1 ring-white/10 group-hover:-translate-y-2 transition-transform duration-500">
                  {/* Notch */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-900 rounded-full z-10" />
                  {/* Screen */}
                  <div className="rounded-[2rem] overflow-hidden bg-white aspect-[9/19]">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  {/* Home indicator */}
                  <div className="flex justify-center mt-2">
                    <div className="w-20 h-1 bg-gray-700 rounded-full" />
                  </div>
                </div>

                {/* Tag */}
                <div
                  className={`absolute -top-3 ${i === 0 ? "-right-3" : "-left-3"} bg-gradient-to-r ${s.color} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg`}
                >
                  {s.tag}
                </div>
              </div>

              {/* Text */}
              <div className="text-center lg:text-left max-w-sm">
                <h3
                  className="text-2xl font-bold text-gray-800 mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {s.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

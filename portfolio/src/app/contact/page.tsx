import Link from "next/link";

export default async function ContactPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center relative">
      <div className="max-w-6xl w-full px-4 relative">
        {/* two column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/*left column  */}
          <div className="text-center lg:text-left relative z-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
              Hi, I'm Sara
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up animation-delay-300">
              Software Developer
            </p>
            <Link href="/projects">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 animate-fade-in-up animation-delay-600">
                View My Work
              </button>
            </Link>
          </div>

          <div className="flex justify-center lg:justify-end relative">
            <div className="relative flex items-center justify-center">
              <div className="w-96 h-96 bg-white bg-opacity-10 rounded-full"></div>
              <img
                src="images/sara-anm-tran.png"
                alt="saras animated photo"
                className="absolute w-80 h-80 rounded-full object-cover shadow-2xl"
              />

              {/* Floating skill badges - top layer (z-30) */}
              <div className="absolute top-4 -left-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold z-30 animate-bounce">
                React
              </div>
              <div className="absolute bottom-8 -right-8 bg-pink-400 text-white px-3 py-1 rounded-full text-sm font-semibold z-30 animate-pulse">
                TypeScript
              </div>
              <div className="absolute top-1/2 -left-8 bg-green-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold z-30">
                Node.js
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

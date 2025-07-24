'use client'

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center w-full min-h-[60vh] py-16 overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black via-sky-900 to-black z-0" />
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-br from-sky-400 via-sky-500 to-sky-700 bg-clip-text text-transparent drop-shadow-lg mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
          Astrix
        </h1>
        <p className="text-lg md:text-2xl text-white/80 font-mono max-w-2xl mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
          The next-gen AI platform that makes your life easier, faster, and smarter.
        </p>
        <span className="inline-block px-6 py-2 rounded-full bg-sky-400/80 text-white font-semibold shadow-lg animate-bounce" style={{ fontFamily: 'Raleway, sans-serif' }}>
          Try it now — it's free!
        </span>
      </div>
    </section>
  );
}

  
 
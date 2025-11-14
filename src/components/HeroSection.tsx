export default function HeroSection() {
  return (
    <section className="relative bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative flex items-center justify-center">
          <div className="absolute left-8 w-[36rem] h-[36rem] opacity-20">
            <img src="/svg/Artboard 4.svg" alt="" className="w-full h-full object-contain" />
          </div>

          <div className="relative text-center z-10">
            <h1 className="text-4xl md:text-5xl font-light text-[#172963] mb-6 tracking-wide uppercase">
              Your crypto isn't gone<br />
              <span className="text-3xl md:text-4xl">we can retrieve it.</span>
            </h1>

            <p className="text-xl md:text-2xl text-[#464d51] mb-8 max-w-2xl mx-auto font-light leading-relaxed normal-case">
              Don't let your crypto stay out of reach.<br />
              Submit a case report today and let's work<br />
              on getting your funds back.
            </p>

            <a href="#contact">
              <button className="bg-[#172963] text-white hover:bg-[#1e3a5f] transition-all px-12 py-4 text-lg tracking-widest font-light rounded-lg uppercase">
                START YOUR RECOVERY
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

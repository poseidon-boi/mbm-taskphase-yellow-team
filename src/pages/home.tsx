import bgvid from "../assets/bg-vid.mp4";

function Home() {
  return (
    <section className="relative w-full min-h-screen bg-[#101317] overflow-hidden">
      
      {/* Background video */}
      <video
        src={bgvid}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#101317]/80" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center pt-32">
        <div className="max-w-4xl px-6 text-center text-[#C2C7CE]">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            Yellow Team
          </h1>
          <p className="text-lg md:text-xl text-[#9AA0A6]">
            This is the first home page of Yellow Team
          </p>
        </div>
      </div>

      <div>
        
      </div>
    </section>
  );
}

export default Home;

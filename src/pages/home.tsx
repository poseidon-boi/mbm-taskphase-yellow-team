import bgvid from "../assets/bg-vid.mp4";

function Home() {
  return (
    <>
    <section className="relative w-full min-h-screen bg-[#101317] overflow-hidden">
      
      {/* Background video */}
      <video
        src={bgvid}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-80"
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
    </section>
    <section>
          <p className="text-5xl text-[#EAC49A] p-4">Lorem ipsum dolor sit amet, </p>
          <p className="text-5xl text-[#EAC49A] p-4"> consectetur adipisicing elit. Officia quaerat vitae</p>
          <div className="p-10">
            <div className="bg-white p-5 rounded-lg"> 
            <div className="text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, at magnam. Non aspernatur nisi molestiae maxime doloremque, distinctio nihil, ullam soluta fugit hic fugiat! Perspiciatis aut dicta maiores neque asperiores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, delectus aspernatur ducimus aliquid minus blanditiis, minima harum quaerat ad nostrum, odit quidem perferendis. Corrupti dolor recusandae et? Porro, quam dolorum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto est, minima odit corporis quis possimus illo dolorem accusantium earum doloremque dicta numquam eligendi optio? Possimus corporis itaque eius quaerat harum!
            </div>
          </div>
          </div>
        </section>
    </>
  );
}

export default Home;

function Description() {
  const renderTitleHover = (text: string) =>
    text.split("").map((char, i) => (
      <span
        key={i}
        className="inline-block transition-colors duration-200 hover:text-[#dda15e]"
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  return (
    <div className="w-full bg-[#1F2A13] text-white">

      {/* ===== TITLE ROW (FULL WIDTH) ===== */}
      <div className="pt-32 pb-24 flex justify-center">
        <h1 className="text-6xl font-bold">
          {renderTitleHover("Description")}
        </h1>
      </div>

      {/* ===== TWO-COLUMN ROW ===== */}
      <div className="flex w-full min-h-screen px-10">

        {/* LEFT COLUMN — STICKY */}
        <aside className="w-[10%] px-8 sticky top-32 mt-10 self-start">
          <nav className="flex flex-col gap-6 text-xl">
            <a
              href="#hello"
              className="group relative w-fit text-white/80 hover:text-white"
            >
              hello
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#dda15e] transition-all duration-300 group-hover:w-full" />
            </a>

            <a
              href="#bye"
              className="group relative w-fit text-white/80 hover:text-white"
            >
              bye
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#dda15e] transition-all duration-300 group-hover:w-full" />
            </a>
          </nav>
        </aside>

        {/* RIGHT COLUMN — CONTENT */}
        <main className="w-[90%] pb-32">
          <div className="bg-[#FEFAE0] text-black p-16 rounded-lg shadow-2xl">

            {/* SECTION: HELLO */}
            <section className="mb-32">
              <div id="hello" className="scroll-mt-32" />

              <h2 className="text-6xl font-semibold mb-4">hello</h2>
              <div className="h-[2px] bg-black/30 mb-8" />

              <p className="text-xl mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <p className="text-xl">
                Eligendi enim natus delectus fugiat. Animi dolorum voluptatem.
              </p>
            </section>

            {/* SECTION: BYE */}
            <section>
              <div id="bye" className="scroll-mt-32" />

              <h2 className="text-6xl font-semibold mb-4">bye</h2>
              <div className="h-[2px] bg-black/30 mb-8" />

              <p className="text-xl mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <p className="text-xl">
                Tenetur in sapiente eaque quis id iste.
              </p>
            </section>

          </div>
        </main>
      </div>
    </div>
  );
}

export default Description;

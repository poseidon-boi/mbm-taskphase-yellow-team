function Medals() {
  const renderTitleHover = (text: string) =>
    text.split("").map((char, i) => (
      <span
        key={i}
        className="inline-block transition-colors duration-200 hover:text-[#dda15e]"
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  const Button = ({
    label,
    href,
  }: {
    label: string;
    href: string;
  }) => (
    <a
      href={href}
      className="
      inline-block
  px-10 py-5
  rounded-2xl
  bg-[#1F2A13]
  text-white
  text-2xl
  font-semibold
  shadow-lg
  border border-white/20
  transition-all
  duration-200
  hover:bg-[#E6BB89]
  hover:text-black
  hover:-translate-y-0.5
  active:translate-y-0 
      "
    >
      {label}
    </a>
  );

  return (
    <div className="w-full min-h-screen bg-[#1F2A13] text-white">
      {/* ===== TITLE ===== */}
      <div className="pt-32 pb-24 mb-15 flex justify-center">
        <h1 className="text-6xl font-bold">
          {renderTitleHover("Medal Criteria")}
        </h1>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="max-w-5xl mx-auto pb-32 space-y-20">

        {/* ===== BRONZE ===== */}
        <section>
          <h2 className="text-5xl font-semibold mb-6 text-[#CD7F32] flex justify-center">
            Bronze
          </h2>
          <div className="flex p-5 gap-6 flex-wrap justify-center">
            <Button label="Attributions" href="/team/attributions" />
            <Button label="Description" href="/project/description" />
          </div>
        </section>

        {/* ===== SILVER ===== */}
        <section>
          <h2 className="text-5xl font-semibold mb-6 text-[#C0C0C0] flex justify-center">
            Silver
          </h2>
          <div className="flex p-5 gap-6 flex-wrap justify-center">
            <Button label="Engineering" href="/project/engineering" />
            <Button label="Human Practices" href="/engagement/hp" />
          </div>
        </section>

        {/* ===== GOLD ===== */}
        <section>
          <h2 className="text-5xl font-semibold mb-6 text-[#FFD700] flex justify-center">
            Gold
          </h2>
          <div className="flex  p-5 gap-6 flex-wrap justify-center">
            <Button label="Software" href="/drylab/software" />
            <Button label="Model" href="/drylab/model" />
            <Button label="Best Part Collection" href="/project/design" />
          </div>
        </section>

      </div>
    </div>
  );
}

export default Medals;

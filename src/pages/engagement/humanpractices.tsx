import hp1 from "../../assets/hp1.png";
import hp2 from "../../assets/hp2.png";
import hp3 from "../../assets/hp3.png";
import hp4 from "../../assets/hp4.png";
import hp5 from "../../assets/hp5.png";
import hp6 from "../../assets/hp6.png";
import hp7 from "../../assets/hp7.png";
import hp8 from "../../assets/hp8.png";
import sur1 from "../../assets/sur1.png";
import sur2 from "../../assets/sur2.png";
import sur3 from "../../assets/sur3.png";
import sur4 from "../../assets/sur4.png";
import sur5 from "../../assets/sur5.png";

function HumanPractices() {
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
    <div className="w-full text-white">
      {/* ===== TITLE ROW (FULL WIDTH) ===== */}
      <div className="pt-32 pb-24 flex justify-center">
        <h1 className="text-6xl font-bold">
          {renderTitleHover("Human Practices")}
        </h1>
      </div>

      {/* ===== TWO-COLUMN ROW ===== */}
      <div className="flex w-full min-h-screen px-10">
        {/* LEFT COLUMN — STICKY */}
        <aside className="w-[10%] px-8 sticky top-32 mt-10 self-start">
          <nav className="flex flex-col gap-6 text-xl">
            <a
              href="#Rigel Bioenviron Solutions Private Limited"
              className="group relative w-fit text-white/80 hover:text-white"
            >
              Rigel Bioenviron Solutions Private Limited
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#dda15e] transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#Deltora Biopolymers Private Limited"
              className="group relative w-fit text-white/80 hover:text-white"
            >
              Deltora Biopolymers Private Limited
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#dda15e] transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#Potential Sponsers"
              className="group relative w-fit text-white/80 hover:text-white"
            >
             Potential Sponsers
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#dda15e] transition-all duration-300 group-hover:w-full" />
            </a>
          </nav>
        </aside>

        {/* RIGHT COLUMN — CONTENT */}
        <main className="w-[90%] pb-32 ml-10">
          <div className="bg-[#FEFAE0] text-black p-16 rounded-lg shadow-2xl">
            {/* SECTION: Rigel Bioenviron Solutions Private Limited */}
            <section className="mb-12">
              <div
                id="Rigel Bioenviron Solutions Private Limited"
                className="scroll-mt-32"
              />
              <h2 className="text-6xl font-semibold mb-4">
                Rigel Bioenviron Solutions Private Limited
              </h2>
              <div className="h-[2px] bg-black/30 mb-8" />
              <div className="flex gap-10 items-start ">
                <div className="flex-1"><p className="text-xl mb-6">
                As part of our Human Practices activities, we contacted Rigel Bioenviron Solutions Pvt. Ltd. to understand the current state of polyhydroxyalkanoates (PHAs) in India. We spoke to Dr. Sanchita Mukherjee, who provided important insights about production capabilities and application pathways for PHAs in the country. Dr. Mukherjee explained that PHAs are not produced at a large commercial scale in India. While PHAs are being made domestically, this production is limited and does not yet support widespread manufacturing for plastic applications. Rigel Bioenviron Solutions produces PHAs from industrial waste streams, showing a sustainable approach; however, these materials are not sold as mass-use plastics. Instead, the company primarily supplies PHAs to the food industry for niche, high-value uses. When we asked about potential end users of PHAs, Dr. Mukherjee mentioned the following:
              </p>
             
              <ol className="list-disc ml-6 mb-6 space-y-2 text-xl">
  <li>
    Plastic manufacturers seeking sustainable material alternatives
  </li>
  <li>
    Food and ice-cream producers for packaging and food-contact applications
  </li>
  <li>
    Medical applications such as sutures
  </li>
</ol>

              <p className="text-xl mb-6">
                Where biodegradability and safety are crucial. This conversation uncovers a gap between the proven technical feasibility of PHAs and their widespread commercial adoption in India. It emphasized the importance of our project's goal to develop a copolymer with better applicability for sustainable plastic alternatives.
              </p></div>
                <div className="w-[320px] flex-shrink-0">
    <img
      src={hp1}
      alt="Discussion with Rigel Bioenviron Solutions"
      className="w-full h-auto object-contain rounded-lg shadow-lg"
    />
  </div>
              </div>
            </section>

            {/* SECTION: Deltora Biopolymers Private Limited */}
            <section>
              <div
                id="Deltora Biopolymers Private Limited"
                className="scroll-mt-32"
              />

              <h2 className="text-6xl font-semibold mb-4">
                Deltora Biopolymers Private Limited
              </h2>
              <div className="h-[2px] bg-black/30 mb-8" />

              <div className="flex gap-10 items-start">
                <div className="flex-1">
                    <p className="text-xl mb-6">
                We spoke to Mr. Divyesh Dadhaniya from Deltora Biopolymers Private Limited to understand the production, application of Biopolymers in the industry, and who our customers could be.
              </p>
              <p className="text-xl mb-6">
                He explained that Deltora primarily focuses on the production of raw biopolymer materials and compounding, rather than manufacturing finished products. He highlighted that these compounded biopolymers are commonly used in injection molded products and cutlery, where biodegradable materials need to meet both functional and processing requirements. However he did not disclose the companies that purchase these biopolymer raw materials.</p>
            </div>
                <div>
                    <img
      src={hp2}
      alt="Discussion with  Deltora Biopolymers Private Limited"
      className="w-full h-auto object-contain rounded-lg shadow-lg"
    />
                </div>
                </div></section>

            {/* SECTION: other companis */}
            <section className="mb-12">
  <div id="Potential-Sponsors" className="scroll-mt-32" />

  <h2 className="text-6xl font-semibold mb-4">
    Potential Sponsors
  </h2>
  <div className="h-[2px] bg-black/30 mb-8" />

  <p className="text-xl mb-10">
    The following organizations have been identified as potential sponsors
    based on their involvement in biopolymers, sustainability, and
    biotechnology-driven manufacturing.
  </p>

  {/* SPONSOR TILES */}
  <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
    {[hp3, hp4, hp5, hp6, hp7, hp8].map((img, index) => (
      <div
        key={index}
        className="bg-white rounded-xl shadow-md p-6 flex items-center justify-center hover:shadow-xl transition-shadow duration-300"
      >
        <img
          src={img}
          alt={`Potential sponsor ${index + 1}`}
          className="max-h-[120px] w-auto object-contain"
        />
      </div>
    ))}
  </div>
</section>

 <h2 className="text-6xl font-semibold mb-4">
    Survey conducted to understand public perception on plastics
  </h2>
  <div className="h-[2px] bg-black/30 mb-8" />

  <p className="text-xl mb-10">
    To understand potential acceptance and perception of biodegradable plastics, we conducted a public survey with 190 respondents across diverse age groups and educational backgrounds. The aim of this survey was to evaluate public readiness and application relevance for a microbially produced biopolymer being developed as part of our project.
  </p>

  {/* SPONSOR TILES */}
  <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
    {[sur1,sur2,sur3,sur4,sur5].map((img, index) => (
      <div
        key={index}
        className="bg-white rounded-xl shadow-md p-6 flex items-center justify-center hover:shadow-xl transition-shadow duration-300"
      >
        <img
          src={img}
          alt={`Survey ${index + 1}`}
          className="max-h-[120px] w-auto object-contain"
        />
      </div>
    ))}
  </div>
  <p className="text-xl mt-10 mb-10">
    Our survey conducted across multiple age groups shows that majority of the general population is aware of the drawbacks caused due to the extensive use of one time plastics. They are also aware of the other options present out there i.e. biodegradable plastics, and have shown concern towards the detrimental impacts they pose to the environment. Considering that people are willing to pay a higher price for everyday use items shows that our biologically sustainable alternative holds importance.
   </p>

          </div>
        </main>
      </div>
    </div>
  );
}

export default HumanPractices;

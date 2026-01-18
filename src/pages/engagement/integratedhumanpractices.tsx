import ihp1 from "../../assets/ihp1.png";
import ihp2 from "../../assets/ihp2.png";
import ihp3 from "../../assets/ihp3.png";
import ihp4 from "../../assets/ihp4.png";
import ihp5 from "../../assets/ihp5.png";
import ihp6 from "../../assets/ihp6.png";
import ihp7 from "../../assets/ihp7.png";
import ihp8 from "../../assets/ihp8.png";
import ihp9 from "../../assets/ihp9.png";
import ihp10 from "../../assets/ihp10.png";

function IntegratedHumanPractices() {
  const renderTitleHover = (text: string) =>
    text.split("").map((char, i) => (
      <span
        key={i}
        className="inline-block transition-colors duration-200 hover:text-[#dda15e]"
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  const sections = [
    {
      date: "January 4, 2026",
      image: ihp1,
      content: (
        <>
          <p className="text-xl mb-6">
            We contacted Professor Paolo Bombelli (Department of Biochemistry,
            University of Cambridge) to determine whether ethylene glycol produced
            during <em>Galleria mellonella</em>-mediated polyethylene degradation
            had ever been quantitatively measured.
          </p>
          <p className="text-xl">
            He clarified that FTIR was used for identification, which provides
            qualitative but not quantitative validation, revealing a major data
            gap.
          </p>
        </>
      ),
    },
    {
      date: "January 5, 2026",
      image: ihp2,
      content: (
        <p className="text-xl">
          Professor Christophe LeMoine (Brandon University) explained that glycol
          measurements in prior studies relied on general biochemical assays and
          could not conclusively confirm ethylene glycol.
        </p>
      ),
    },
    {
      date: "January 10, 2026",
      image: ihp3,
      content: (
        <p className="text-xl">
          We reached out to researchers at the University of Malaya and UCL for
          quantitative mechanical and thermal property data of P(3HB-co-4HB);
          no response was received.
        </p>
      ),
    },
    {
      date: "January 11, 2026",
      image: ihp4,
      content: (
        <>
          <p className="text-xl mb-6">
            Outreach to Korea Biofoundry and Dankook University regarding
            unpublished PHA blend data did not yield responses.
          </p>
          <p className="text-xl">
            Subsequent discussions with MIT Manipal faculty clarified how 4HB
            distribution and crystallinity affect flexibility and performance.
          </p>
        </>
      ),
    },
    {
      date: "Industry Engagements",
      image: ihp5,
      content: (
        <>
          <p className="text-xl mb-6">
            Rigel Bioenviron Solutions Pvt. Ltd. highlighted that PHAs are not yet
            produced at large commercial scale in India.
          </p>
          <p className="text-xl">
            Production is currently limited to niche, high-value applications.
          </p>
        </>
      ),
    },
    {
      date: "Potential Sponsors",
      image: ihp6,
      content: (
        <ul className="text-xl grid grid-cols-2 gap-y-4">
          {[
            "Sutures India Pvt. Ltd.",
            "Imaginarium (Mumbai)",
            "Arthware Biopolymers",
            "IDT",
            "SnapGene",
            "BioRender",
            "GenScript",
            "MAHE",
            "Twist Bioscience",
          ].map((s) => (
            <li key={s}>• {s}</li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <div className="w-full text-white">
      {/* TITLE */}
      <div className="pt-32 pb-24 flex justify-center">
        <h1 className="text-6xl font-bold">
          {renderTitleHover("Integrated Human Practices")}
        </h1>
      </div>

      {/* CONTENT */}
      <div className="px-20 pb-32">
        <div className="bg-[#FEFAE0] text-black p-16 rounded-lg shadow-2xl space-y-32">
          {sections.map((section, i) => (
            <section key={i}>
              <h2 className="text-5xl font-semibold mb-4">
                {section.date}
              </h2>
              <div className="h-[2px] bg-black/30 mb-10" />

              <div className="flex gap-16 items-start">
                {/* TEXT */}
                <div className="w-[65%]">
                  {section.content}
                </div>

                {/* IMAGE */}
                <div className="w-[35%]">
                  <img
                    src={section.image}
                    alt={section.date}
                    className="w-full rounded-lg shadow-lg object-cover"
                  />
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

export default IntegratedHumanPractices;

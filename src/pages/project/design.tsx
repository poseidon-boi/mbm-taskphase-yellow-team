import { useEffect } from "react";
import design1 from "../../assets/design1.png";
import design2 from "../../assets/desing2.png";

const renderTitleHover = (text: string) =>
  text.split("").map((char, i) => (
    <span
      key={i}
      className="inline-block transition-colors duration-200 hover:text-[#dda15e]"
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));

export default function Design() {
  useEffect(() => {
    if ((window as any).MathJax) {
      (window as any).MathJax.typeset();
    }
  }, []);

  return (
    <div className="w-full text-white">
      {/* ===== TITLE ===== */}
      <div className="pt-32 pb-24 flex justify-center">
        <h1 className="text-6xl font-bold">{renderTitleHover("Design")}</h1>
      </div>

      {/* ===== TWO COLUMN LAYOUT ===== */}
      <div className="flex w-full min-h-screen px-10">
        {/* ===== LEFT SIDEBAR ===== */}
        <aside className="w-[15%] sticky top-32 self-start">
          <nav className="flex flex-col gap-6 text-xl bg-[#1F2A13] p-6 rounded-lg">
            {[
              "Goal",
              "EL222 System",
              "Activation Cassette",
              "Response Cassette",
              "Linkage",
              "Activity Variation",
              "Promoter Confirmation",
              "Plasmid Design",
              "Light-Sensitive Plasmid",
              "References",
              "Parts Used",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.replace(/\s+/g, "-")}`}
                className="group relative w-fit text-white/80 hover:text-white transition-colors"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#dda15e] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
        </aside>

        {/* ===== RIGHT CONTENT ===== */}
        <main className="w-[85%] pb-32 ml-10">
          <div className="bg-[#FEFAE0] text-black p-16 rounded-lg shadow-2xl space-y-16">
            {/* ===== EXAMPLE SECTION ===== */}
            <section id="Goal" className="scroll-mt-32">
              <h2 className="text-4xl font-semibold mb-4">GOAL</h2>
              <div className="h-[2px] bg-black/30 mb-6" />
              <p className="text-xl mb-4">
                To ensure that there is 4HB production only in the presence of
                blue light, we planned to introduce a light sensitive promoter.
                To do that, it was necessary to knock out the native gene in the
                genome to prevent constitutive 4HB production even in the
                absence of blue light.
              </p>
            </section>

            <section id="EL222-System" className="scroll-mt-32">
              <h2 className="text-4xl font-semibold mb-4">The EL222 System</h2>
              <div className="h-[2px] bg-black/30 mb-6" />
              <p className="text-xl mb-4">
                We intend to regulate the expression of the gbd gene in
                Cupriavidus necator H16 by using a light inducible promoter
                system. The EL222 system has been well studied across several
                bacterial species, particularly Escherichia coli (Camsund et
                al., 2021), yeast species such as Yarrowia lipolytica (Wang et
                al., 2022) and mammalian species (Motta-Mena et al., 2014). The
                light responsive transcription factor EL222 has been derived
                from Erythrobacter litoralis HTCC2594.
              </p>
              <p className="text-xl mb-4">
                The system mainly consists of 2 domains: the activation cassette
                and the response cassette (Wang et al., 2022). The activation
                cassette is responsible for the production of EL222 DNA binding
                protein.
              </p>
              <p className="text-xl mb-4">
                EL222 consists of 2 domains: a light oxygen voltage domain (LOV)
                in the N-terminal half, and a LuxR type Helix-Turn-Helix (HTH)
                DNA binding sequence in the C-terminal half (Takakado et al.,
                2018). In the dark, the LOV domain binds the HTH domain,
                covering the helix, preventing dimerization and binding to the
                DNA. Blue light illumination at 450 nm causes a protein-flavin
                adduct to be formed within the LOV domain, disrupting the
                LOV-HTH interaction and allowing the EL222 to bind to the DNA
                (Motta-Mena et al., 2014).
              </p>
              <div className="m-5 rounded text-gray-600 flex flex-col justify-center items-center text-center">
                <img src={design1}></img>
                <p>Fig 1: Structure of the EL222 light transcription unit used in Escherichia coli (Meng et al., 2024).</p>
              </div>
              <div className="m-5 rounded text-gray-600 flex flex-col justify-center items-center text-center">
                <img src={design2}></img>
                <p>Fig 2: The binding of the EL222 complex in presence of light in eukaryotic organisms. (Motta-Mena et al., 2014). </p>
              </div>
            </section>

            <section id="Activation-Cassette" className="scroll-mt-32">
              <h2 className="text-4xl font-semibold mb-4">
                The Activation Cassette
              </h2>
              <div className="h-[2px] bg-black/30 mb-6" />
              <p className="text-xl mb-4">
                The general structure of the activation cassette consists of the following parts:
              </p>
              <ol>
    <li>A promoter</li>
    <li>Ribosomal Binding Sites (RBS)</li>
    <li>EL222’s CDS</li>
    <li>Terminator</li>
</ol>
<p className="text-xl mb-4">
In our activation cassette construction, we have used bacterial specific promoters, RBS, and terminators.
</p>

            </section>

            <section id="Response-Cassette" className="scroll-mt-32">
              <h2 className="text-4xl font-semibold mb-4">
                The Response Cassette
              </h2>
              <div className="h-[2px] bg-black/30 mb-6" />
            </section>

            <section id="Linkage" className="scroll-mt-32">
              <h2 className="text-4xl font-semibold mb-4">Linkage</h2>
              <div className="h-[2px] bg-black/30 mb-6" />
            </section>

            <section id="Activity-Variation" className="scroll-mt-32">
              <h2 className="text-4xl font-semibold mb-4">
                Variation of EL222 Activity
              </h2>
              <div className="h-[2px] bg-black/30 mb-6" />
            </section>

            <section id="Promoter-Confirmation" className="scroll-mt-32">
              <h2 className="text-4xl font-semibold mb-4">
                Promoter Confirmation
              </h2>
              <div className="h-[2px] bg-black/30 mb-6" />
            </section>

            <section id="Plasmid-Design" className="scroll-mt-32">
              <h2 className="text-4xl font-semibold mb-4">Plasmid Design</h2>
              <div className="h-[2px] bg-black/30 mb-6" />
            </section>

            <section id="Light-Sensitive-Plasmid" className="scroll-mt-32">
              <h2 className="text-4xl font-semibold mb-4">
                Plasmid for the Light-Sensitive Promoter
              </h2>
              <div className="h-[2px] bg-black/30 mb-6" />
            </section>

            <section id="References" className="scroll-mt-32">
              <h2 className="text-4xl font-semibold mb-4">References</h2>
              <div className="h-[2px] bg-black/30 mb-6" />
            </section>

            <section id="Parts-Used" className="scroll-mt-32">
              <h2 className="text-4xl font-semibold mb-4">Parts Used</h2>
              <div className="h-[2px] bg-black/30 mb-6" />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

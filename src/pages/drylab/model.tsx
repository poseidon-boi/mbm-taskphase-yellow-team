import { useEffect } from "react";
import model1 from "../../assets/model1.png";
import model2 from "../../assets/model2.png";

const renderTitleHover = (text: string) =>
  text.split("").map((char, i) => (
    <span
      key={i}
      className="inline-block transition-colors duration-200 hover:text-[#dda15e]"
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));

export default function Model() {
  useEffect(() => {
    if ((window as any).MathJax) {
      (window as any).MathJax.typeset();
    }
  }, []);

  return (
    <div className="w-full text-white">
      {/* ===== TITLE ===== */}
      <div className="pt-32 pb-24 flex justify-center">
        <h1 className="text-6xl font-bold">{renderTitleHover("Model")}</h1>
      </div>

      {/* ===== TWO COLUMN LAYOUT ===== */}
      <div className="flex w-full min-h-screen px-10">
        {/* ===== LEFT SIDEBAR ===== */}
        <aside className="w-[15%] px-8 sticky top-32 mt-10 self-start">
          <nav className="flex flex-col gap-3 p-3 text-xl bg-[#1F2A13]">
            {[
              "Purpose",
              "Scope",
              "System",
              "Optogenetic Control",
              "Gene Expression",
              "4HB Formation",
              "3HB Formation",
              "Polymerization",
              "Copolymer Output",
              "Significance",
              "References",
            ].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="group relative w-fit text-white/80 hover:text-white"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#dda15e] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
        </aside>

        {/* ===== RIGHT CONTENT ===== */}
        <main className="w-[90%] pb-32 ml-10">
          <div className="bg-[#FEFAE0] text-black p-16 rounded-lg shadow-2xl">
            <h2 className="text-5xl font-semibold mb-4">
              Optogenetic Control of Copolymer Composition Model
            </h2>
            <div className="h-[2px] bg-black/30 mb-8" />
            {/* ===== 1. PURPOSE ===== */}
            <section id="Purpose" className="mb-12 scroll-mt-32">
              <h2 className="text-4xl font-semibold mb-4">
                1. Purpose of This Model
              </h2>

              <p className="text-xl mb-4">
                This model’s purpose is to describe the use of light-regulated
                gene expression to modulate the availability of monomers inside
                cells to create poly(3-hydroxybutyrate-co-4-hydroxybutyrate)
                [P(3HB-co-4HB)] copolymers in <em>Cupriavidus necator H16</em>{" "}
                and to adjust the overall composition of those copolymers.
              </p>

              <p className="text-xl mb-4">
                The model establishes a quantitative connection between:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-xl mb-4">
                <li>Optogenetic regulation of gene expression,</li>
                <li>Light-dependent metabolic flux into the 4HB pathway,</li>
                <li>Constitutive production of 3HB,</li>
                <li>Native polymerization by PHA synthase (PhaC).</li>
              </ul>

              <p className="text-xl">
                The final output of the model is the relative fraction of 4HB
                incorporated into the copolymer, which directly determines
                polymer material properties.
              </p>
            </section>

            {/* ===== 2. SCOPE ===== */}
            <section id="Scope" className="mb-12 scroll-mt-32">
              <h2 className="text-4xl font-semibold mb-4">
                2. Scope of the Modeling
              </h2>

              <p className="text-xl mb-4">
                This model includes transcriptional regulation by light, dynamic
                intracellular monomer pool models, flux-based polymer formation,
                and prediction of copolymer composition.
              </p>

              <p className="text-xl mb-4">
                The model does not include polymer chain length, granule
                formation, molecular weight distribution, or cellular spatial
                organization.
              </p>

              <p className="text-xl">
                The biological justification for omitting chain-level modeling
                is supported by extensive literature demonstrating that PHA
                copolymer composition is primarily determined by the relative
                intracellular availability of monomer precursors rather than
                chain-level kinetics.
              </p>
            </section>

            {/* ===== 3. SYSTEM ===== */}
            <section id="System" className="mb-12 scroll-mt-32">
              <h2 className="text-4xl font-semibold mb-4">
                3. Biological System Representation
              </h2>

              <p className="text-xl mb-4">
                The intracellular system is simplified into three interacting
                modules:
              </p>

              <ul className="list-disc pl-6 space-y-4 text-xl">
                <li>
                  <strong>Optogenetic control module</strong>
                  <br />
                  Light regulates transcription via the EL222 system.
                </li>

                <li>
                  <strong>Monomer precursor module</strong>
                  <ul className="list-disc pl-6 mt-2">
                    <li>4HB is produced through a light-controlled pathway.</li>
                    <li>
                      3HB is produced constitutively through the native{" "}
                      <em>phaCAB</em> pathway.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>Polymerization module</strong>
                  <br />
                  Native PhaC incorporates available monomers into the growing
                  copolymer chain.
                </li>
              </ul>
            </section>

            {/* ===== 4. OPTOGENETICS ===== */}
            <section id="Optogenetic Control" className="mb-12 scroll-mt-32">
              <h2 className="text-4xl font-semibold mb-4">
                4. Optogenetic Control Module (EL222 System)
              </h2>

              <p className="text-xl mb-4">
                The biological foundation of the EL222 system is a transcription
                factor that responds to blue light and undergoes a
                conformational change upon illumination.
              </p>

              <p className="text-xl mb-4">
                Activated EL222 binds to double-stranded DNA near a promoter
                region, recruits RNA polymerase, and initiates transcription.
              </p>

              <p className="text-xl mb-4">
                In darkness, EL222 dissociates from DNA, preventing
                transcription.
              </p>

              <p className="text-xl mb-4">
                This behavior has been experimentally demonstrated by Jayaraman
                et al. (2016).
              </p>

              <div className="m-5 rounded text-gray-600 flex flex-col justify-center items-center text-center">
                <img src={model1}></img>
                <p>Figure 1: EL222-mediated transcriptional activation</p>
                <p>
                  Dark (OFF state):EL222 remains inactive, RNA polymerase cannot
                  bind, and gene expression is OFF.
                </p>
                <p>
                  Blue light (ON state): EL222 binds near the −35/−10 promoter
                  elements, recruits RNA polymerase, and transcription is
                  initiated.
                </p>
              </div>
              <div className="m-3rounded text-gray-600 flex flex-col justify-center items-center text-center">
                <img src={model2}></img>
                <p>Figure 2: Dynamic switching of gene expression</p>
                <p>
                  The experimental data demonstrates that mRNA synthesis begins
                  immediately upon illumination, halts rapidly when light is
                  removed, and decays over time due to natural degradation.
                </p>
                <p>
                  These observations confirm that EL222-mediated gene expression
                  is strongly light-dependent with minimal basal leakage in
                  darkness.
                </p>
              </div>
            </section>

            {/* ===== 5. GENE EXPRESSION ===== */}
            <section id="Gene Expression" className="mb-12 scroll-mt-32">
              <h2 className="text-4xl font-semibold mb-4">
                5. Mathematical Representation of Light-Controlled Gene
                Expression
              </h2>

              <p className="text-xl mb-4">
                Based on the experimental behavior shown above, transcription
                under optogenetic control is modeled as:
              </p>

              <div className="text-xl my-6">
                {"$$"}
                {
                  "\\frac{d[mRNA_{light}]}{dt} = k_{light} \\cdot L(t) - \\delta_{mRNA}[mRNA_{light}]"
                }
                {"$$"}
              </div>
              <table className="w-full border-collapse text-lg mt-6">
  <thead>
    <tr className="bg-black text-white">
      <th className="border border-black px-6 py-3 text-left font-semibold">
        Parameter
      </th>
      <th className="border border-black px-6 py-3 text-left font-semibold">
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr className="hover:bg-[#FEFAE0]/70 transition-colors">
      <td className="border border-black px-6 py-3 font-mono">
        k<sub>light</sub>
      </td>
      <td className="border border-black px-6 py-3">
        Transcription rate when light is ON
      </td>
    </tr>

    <tr className="hover:bg-[#FEFAE0]/70 transition-colors">
      <td className="border border-black px-6 py-3 font-mono">
        L(t)
      </td>
      <td className="border border-black px-6 py-3">
        Light input function (0 = OFF, 1 = ON)
      </td>
    </tr>

    <tr className="hover:bg-[#FEFAE0]/70 transition-colors">
      <td className="border border-black px-6 py-3 font-mono">
        δ<sub>mRNA</sub>
      </td>
      <td className="border border-black px-6 py-3">
        mRNA degradation constant
      </td>
    </tr>
  </tbody>
</table>

              <p className="text-xl mt-4">
                The production term exists only when light is present, while
                mRNA decays naturally once illumination is removed.
              </p>
            </section>
            {/* ===== 6. Light-Controlled 4HB Monomer Formation ===== */}
<section className="mb-16 scroll-mt-32">
  <h2 className="text-4xl font-semibold mb-6">
    6. Light-Controlled 4HB Monomer Formation
  </h2>

  <p className="text-xl mb-4">
    The enzyme encoded under the light-regulated promoter catalyzes formation of
    the 4HB precursor.
  </p>

  <p className="text-xl mb-6">
    The intracellular 4HB monomer pool (M<sub>1</sub>) is governed by:
  </p>

  <div className="text-xl my-6">
  {"$$"}
  {"\\frac{d[M_1]}{dt} = v^{light}_{4HB} - k_{phaC}[PhaC][M_1]"}
  {"$$"}
</div>


  <table className="w-full border-collapse text-lg mb-6">
    <thead>
      <tr className="bg-black text-white">
        <th className="border border-black px-6 py-3 text-left">Parameter</th>
        <th className="border border-black px-6 py-3 text-left">Description</th>
      </tr>
    </thead>
    <tbody className="bg-white">
      <tr className="hover:bg-[#FEFAE0]/70">
        <td className="border border-black px-6 py-3 font-mono">
          v<sup>light</sup><sub>4HB</sub>
        </td>
        <td className="border border-black px-6 py-3">
          Light-dependent 4HB formation rate
        </td>
      </tr>
      <tr className="hover:bg-[#FEFAE0]/70">
        <td className="border border-black px-6 py-3 font-mono">
          k<sub>phaC</sub>
        </td>
        <td className="border border-black px-6 py-3">
          Polymerization rate constant
        </td>
      </tr>
      <tr className="hover:bg-[#FEFAE0]/70">
        <td className="border border-black px-6 py-3 font-mono">[PhaC]</td>
        <td className="border border-black px-6 py-3">
          PHA synthase concentration
        </td>
      </tr>
      <tr className="hover:bg-[#FEFAE0]/70">
        <td className="border border-black px-6 py-3 font-mono">
          [M<sub>1</sub>]
        </td>
        <td className="border border-black px-6 py-3">
          4HB monomer pool
        </td>
      </tr>
    </tbody>
  </table>

  <p className="text-xl">
    Light controls entry flux into the 4HB pool, while PhaC continuously consumes
    monomers for polymer formation.
  </p>
</section>

<hr className="my-16 border-black/30" />

{/* ===== 7. Constitutive 3HB Monomer Formation ===== */}
<section className="mb-16 scroll-mt-32">
  <h2 className="text-4xl font-semibold mb-6">
    7. Constitutive 3HB Monomer Formation
  </h2>

  <p className="text-xl mb-6">
    3HB is synthesized independently of optogenetic regulation through the native
    pathway:
  </p>

  <div className="text-xl my-6">
  {"$$"}
  {"\\frac{d[M_2]}{dt} = v^{const}_{3HB} - k_{phaC}[PhaC][M_2]"}
  {"$$"}
</div>


  <table className="w-full border-collapse text-lg mb-6">
    <thead>
      <tr className="bg-black text-white">
        <th className="border border-black px-6 py-3 text-left">Parameter</th>
        <th className="border border-black px-6 py-3 text-left">Description</th>
      </tr>
    </thead>
    <tbody className="bg-white">
      <tr className="hover:bg-[#FEFAE0]/70">
        <td className="border border-black px-6 py-3 font-mono">
          v<sup>const</sup><sub>3HB</sub>
        </td>
        <td className="border border-black px-6 py-3">
          Constant 3HB synthesis rate
        </td>
      </tr>
      <tr className="hover:bg-[#FEFAE0]/70">
        <td className="border border-black px-6 py-3 font-mono">
          k<sub>phaC</sub>
        </td>
        <td className="border border-black px-6 py-3">
          Polymerization rate constant
        </td>
      </tr>
      <tr className="hover:bg-[#FEFAE0]/70">
        <td className="border border-black px-6 py-3 font-mono">[PhaC]</td>
        <td className="border border-black px-6 py-3">
          Native PHA synthase
        </td>
      </tr>
      <tr className="hover:bg-[#FEFAE0]/70">
        <td className="border border-black px-6 py-3 font-mono">
          [M<sub>2</sub>]
        </td>
        <td className="border border-black px-6 py-3">
          3HB monomer pool
        </td>
      </tr>
    </tbody>
  </table>

  <p className="text-xl">
    Both monomers compete simultaneously for incorporation by the same enzyme,
    forming the basis of tunable copolymer composition.
  </p>
</section>

{/* ===== 8. Polymer Formation by Native PhaC ===== */}
<section className="mb-16 scroll-mt-32">
  <h2 className="text-4xl font-semibold mb-6">
    8. Polymer Formation by Native PhaC
  </h2>

  <p className="text-xl mb-4">
    PhaC incorporates both 3HB-CoA and 4HB-CoA substrates during polymerization.
  </p>

  <p className="text-xl mb-6">
    Polymer accumulation is modeled as:
  </p>

 <div className="text-xl my-6">
  {"$$"}
  {"\\frac{dP}{dt} = k_{phaC}[PhaC](M_1 + M_2)"}
  {"$$"}
</div>


  <p className="text-xl">
    Polymer accumulation therefore reflects the total availability of monomer
    substrates.
  </p>
</section>

<hr className="my-16 border-black/30" />

{/* ===== 9. Copolymer Composition Output ===== */}
<section className="mb-16 scroll-mt-32">
  <h2 className="text-4xl font-semibold mb-6">
    9. Copolymer Composition Output
  </h2>

  <p className="text-xl mb-6">
    The fraction of 4HB incorporated into the polymer is defined as:
  </p>

 <div className="text-xl my-6">
  {"$$"}
  {"\\text{4HB fraction} = \\frac{M_1}{M_1 + M_2}"}
  {"$$"}
</div>


  <p className="text-xl">
    Extensive PHA literature demonstrates that intracellular monomer ratios are
    mirrored in copolymer composition.
  </p>
</section>

<hr className="my-16 border-black/30" />

{/* ===== 10. Model Significance ===== */}
<section className="scroll-mt-32">
  <h2 className="text-4xl font-semibold mb-6">
    10. Model Significance
  </h2>

  <ul className="list-disc pl-6 space-y-3 text-xl mb-6">
    <li>Polymer properties can be tuned without modifying PhaC.</li>
    <li>Monomer flux control alone is sufficient.</li>
    <li>Light enables reversible, real-time, and non-invasive regulation.</li>
  </ul>

  <p className="text-xl">
    This model establishes a conceptual foundation for tunable biodegradable
    plastics through optogenetically controlled metabolism.
  </p>
</section>

            {/* ===== REFERENCES ===== */}
            <section id="References" className="scroll-mt-32">
              <h2 className="mt-5 text-4xl font-semibold mb-4">References</h2>
              <div className="h-[2px] bg-black/30 mb-8" />
              <ol className="list-decimal pl-6 space-y-6 text-xl">
                <li>
                  Jayaraman, P., et al. (2016). <em>Nucleic Acids Research</em>.
                </li>
                <li>
                  Pospisilova, A., et al. (2022). <em>Polymers</em>.
                </li>
                <li>
                  Vital-Vilchis, I., & Karunakaran, E. (2025).{" "}
                  <em>Journal of Polymers and the Environment</em>.
                </li>
              </ol>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

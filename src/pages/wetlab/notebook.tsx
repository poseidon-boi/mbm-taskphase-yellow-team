import React from 'react';

function Notebook() {
  const renderTitleHover = (text: string) =>
    text.split("").map((char, i) => (
      <span
        key={i}
        className="inline-block transition-colors duration-200 hover:text-[#dda15e]"
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  const navLinks = [
    { id: "notebook", label: "Notebook" },
    { id: "identifying-risks", label: "Identifying Project Risks" },
    { id: "handling-risks", label: "Handling These Risks" },
    { id: "lab-environment", label: "Laboratory Environment" },
    { id: "biological-safety", label: "Biological Safety" },
    { id: "safety-training", label: "Laboratory and Safety Training" },
    { id: "chemical-safety", label: "Chemical Safety" },
    { id: "regulatory-compliance", label: "Regulatory Compliance" },
    { id: "wet-lab-timeline", label: "Wet Lab Timeline" },
    { id: "references", label: "References" },
  ];

  return (
    <div className="w-full text-white">
      {/* ===== TITLE ROW ===== */}
      <div className="pt-32 pb-24 flex justify-center">
        <h1 className="text-6xl font-bold">
          {renderTitleHover("Notebook")}
        </h1>
      </div>

      <div className="flex w-full min-h-screen px-10">
        {/* LEFT SIDE LINKS — STICKY */}
        <aside className="w-[20%] px-8 sticky top-32 mt-10 self-start max-h-[80vh] overflow-y-auto custom-scrollbar">
          <nav className="flex flex-col gap-4 text-lg">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="group relative w-fit text-white/70 hover:text-white transition-all"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#dda15e] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
        </aside>

        {/* MAIN CONTENT AREA */}
        <main className="w-[80%] pb-32 ml-10">
          <div className="bg-[#FEFAE0] text-black p-16 rounded-lg shadow-2xl space-y-20">
            
            {/* Safety and Responsibility */}
            <section id="notebook" className="scroll-mt-32">
              <h2 className="text-5xl font-semibold mb-4 text-black">Safety and Responsibility</h2>
              <div className="h-[2px] bg-black/20 mb-8" />
              <p className="text-xl mb-6">
                Our laboratory team values the safety of laboratory personnel, the surrounding environment, and the greater community. 
                All experimental plans developed for this project are constructed to be compliant with institutional biosafety guidelines and corresponding national laws related to biosafety. 
                Because this project involves wet laboratory techniques, we emphasize the careful handling of biological materials, chemical reagents, and laboratory processes in order to support responsible and transparent research practices under the guidance of our supervising faculty.
              </p>
            </section>

            {/* Identifying Project Risks */}
            <section id="identifying-risks" className="scroll-mt-32">
              <h2 className="text-5xl font-semibold mb-4 text-black">Identifying Project Risks</h2>
              <div className="h-[2px] bg-black/20 mb-8" />
              <p className="text-xl mb-6">
                To assess potential risks associated with the project, the team reviewed biosafety documentation and consulted academic advisors experienced in microbial and molecular biology research. 
                Based on these discussions, it was concluded that the risks associated with the proposed work are minimal, provided that standard biosafety practices are strictly followed.
              </p>
              <p className="text-xl mb-6">
                The project focuses on genetic engineering and metabolic pathway modulation in bacterial systems. The microorganisms intended for use include:
              </p>
              <ul className="list-disc ml-10 text-xl mb-6 space-y-4">
                <li>
                  <i className="italic">Escherichia coli</i> S17-1, a non-pathogenic laboratory strain commonly used for plasmid maintenance and bacterial conjugation.
                </li>
                <li>
                  <i className="italic">Cupriavidus necator</i> H16, a well-characterized soil bacterium extensively used for polyhydroxyalkanoate (PHA) production.
                </li>
              </ul>
              <p className="text-xl mb-6">
                Both organisms are classified as Risk Group 1, as neither is known to cause disease in healthy humans. 
                This project does not involve pathogenic organisms, human or animal samples, or any intentional environmental release. 
                All genetically modified strains will remain within contained laboratory facilities.
              </p>
            </section>

            {/* Handling These Risks */}
            <section id="handling-risks" className="scroll-mt-32">
              <h2 className="text-5xl font-semibold mb-4 text-black">Handling These Risks</h2>
              <div className="h-[2px] bg-black/20 mb-8" />
              
              <div id="lab-environment" className="mb-12 scroll-mt-32">
                <h3 className="text-3xl font-bold mb-4">Laboratory Environment</h3>
                <p className="text-xl mb-6">
                  All experimental procedures are planned to be conducted in a Biosafety Level 1 (BSL-1) laboratory environment, which is appropriate for work involving non-pathogenic microorganisms such as <i className="italic">E. coli</i> S17-1 and <i className="italic">Cupriavidus necator</i> H16.
                </p>
                <p className="text-xl mb-6">
                  At present, wet laboratory experimentation remains in the planning phase. 
                  All proposed experimental workflows have been designed to conform to BSL-1 safety requirements. 
                  When laboratory work begins, experiments will be conducted using established laboratory infrastructure, including autoclaves, chemical fume hoods, and designated biological waste disposal systems, in accordance with institutional safety guidelines.
                </p>
              </div>

              <div id="biological-safety" className="mb-12 scroll-mt-32">
                <h3 className="text-3xl font-bold mb-4">Biological Safety</h3>
                <p className="text-xl mb-4">The biological systems planned for use in this project are limited to non-pathogenic bacterial strains:</p>
                <ul className="list-disc ml-10 text-xl mb-6 space-y-4">
                  <li>
                    <i className="italic">Escherichia coli</i> S17-1 (Risk Group 1)<br />
                    Used as a donor strain for plasmid transfer via bacterial conjugation.
                  </li>
                  <li>
                    <i className="italic">Cupriavidus necator</i> H16 (Risk Group 1)<br />
                    Used as the production host for polyhydroxyalkanoate synthesis.
                  </li>
                </ul>
                <p className="text-xl mb-6">
                  All recombinant DNA constructs are designed exclusively for contained laboratory research. 
                  No organisms will be released into the environment. 
                  Upon initiation of wet laboratory work, all cultures and biological waste will be decontaminated through autoclaving prior to disposal.
                </p>
              </div>

              <div id="safety-training" className="mb-12 scroll-mt-32">
                <h3 className="text-3xl font-bold mb-4">Laboratory and Safety Training</h3>
                <p className="text-xl mb-4">Team members have received foundational training in laboratory safety and biosafety practices, including:</p>
                <ul className="list-disc ml-10 text-xl mb-6 space-y-2">
                  <li>Aseptic techniques for handling microbial cultures</li>
                  <li>Understanding of biosafety levels</li>
                  <li>Identification of biological and chemical hazards</li>
                  <li>Proper use of Personal Protective Equipment (PPE)</li>
                </ul>
                <p className="text-xl mb-6">
                  When laboratory work begins, all members will strictly follow standard operating procedures (SOPs), including the mandatory use of lab coats, gloves, closed footwear, and protective eyewear wherever required.
                </p>
              </div>

              <div id="chemical-safety" className="mb-12 scroll-mt-32">
                <h3 className="text-3xl font-bold mb-4">Chemical Safety</h3>
                <p className="text-xl mb-6">
                  The chemicals planned for use in this project include laboratory solvents, antibiotics, inducers, and reagents commonly used in molecular biology and polymer analysis.
                </p>
                <p className="text-xl mb-4 font-bold">During future wet laboratory experimentation:</p>
                <ul className="list-disc ml-10 text-xl mb-6 space-y-2">
                  <li>Flammable solvents will be handled inside chemical fume hoods and kept away from ignition sources</li>
                  <li>Disposable gloves will be worn when handling antibiotics and chemical reagents</li>
                  <li>Organic solvents will be stored, used, and disposed of according to institutional chemical safety guidelines</li>
                </ul>
                <p className="text-xl mb-6">
                  All chemical waste will be segregated and disposed of following approved laboratory protocols.
                </p>
              </div>
            </section>

            {/* Regulatory Compliance */}
            <section id="regulatory-compliance" className="scroll-mt-32">
              <h2 className="text-5xl font-semibold mb-4 text-black">Regulatory Compliance</h2>
              <div className="h-[2px] bg-black/20 mb-8" />
              <p className="text-xl mb-4">The design and planning of this project follow national biosafety regulations, including:</p>
              <ul className="list-disc ml-10 text-xl mb-6 space-y-4">
                <li>
                  <span className="font-bold">The Environment (Protection) Act, 1986</span>, which governs the handling and disposal of hazardous substances.
                </li>
                <li>
                  <span className="font-bold">Rules for the Manufacture, Use, Import, Export, and Storage of Hazardous Micro-Organisms or Genetically Engineered Organisms or Cells (1989)</span>, which outline safe practices for genetic engineering research in India.
                </li>
              </ul>
              <p className="text-xl mb-6">
                By adhering to these regulations, the team aims to ensure responsible research conduct while minimizing potential risks to individuals, institutions, and the environment.
              </p>
            </section>

            {/* Wet Lab Timeline */}
            <section id="wet-lab-timeline" className="scroll-mt-32">
              <h2 className="text-5xl font-semibold mb-4 text-black">Wet Lab Timeline</h2>
              <div className="h-[2px] bg-black/20 mb-8" />
              <div className="space-y-10 text-xl">
                <div>
                  <h3 className="text-2xl font-bold text-[#dda15e]">Feb 15 - Mar 1</h3>
                  <p className="italic text-gray-600 mb-2">(Can be done simultaneously with dry lab)</p>
                  <ul className="list-disc ml-10 space-y-1">
                    <li>Design primers for PCR amplification and to confirm knockout mutants</li>
                    <li>Verify fragment design, restriction sites, and plasmid compatibility</li>
                    <li>Place an order for the required gene fragments, plasmids, strains and reagents</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#dda15e]">Mar - April</h3>
                  <ul className="list-disc ml-10 space-y-1">
                    <li>Wet Lab Training</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#dda15e]">May 20 - May 30</h3>
                  <ul className="list-disc ml-10 space-y-1">
                    <li>Verify <i className="italic">Escherichia coli</i> and <i className="italic">Cupriavidus necator</i> culture conditions</li>
                    <li>Establish a growth curve for the maximum yield.</li>
                    <li>PCR to amplify the ordered gene fragments</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#dda15e]">July 15 - Aug 15</h3>
                  <ul className="list-disc ml-10 space-y-1">
                    <li>Suicide plasmid assembly and transformation into <i className="italic">E. Coli</i></li>
                    <li>Conjugation of plasmid into <i className="italic">C. necator</i></li>
                    <li>PCR verification of the knockout gene</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#dda15e]">Aug 20 - Sep 7</h3>
                  <ul className="list-disc ml-10 space-y-1">
                    <li>Plasmid assembly</li>
                    <li>Introduction of an expression plasmid containing a light-sensitive promoter into <i className="italic">E. Coli</i></li>
                    <li>Conjugation of plasmid into <i className="italic">C. necator</i></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#dda15e]">Sep 10 - Oct 1</h3>
                  <ul className="list-disc ml-10 space-y-1">
                    <li>Culturing the transformed cell with appropriate nutrient media and blue light</li>
                    <li>Establish a growth curve for the maximum yield</li>
                    <li>Simultaneous extraction and quantification</li>
                    <li>Analyse & reproduce results by repeating key procedures</li>
                    <li>Organise & compile information for presentation</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* References */}
            <section id="references" className="scroll-mt-32 pb-10">
              <h2 className="text-5xl font-semibold mb-4 text-black">REFERENCES</h2>
              <div className="h-[2px] bg-black/20 mb-8" />
              <ul className="list-disc ml-10 text-lg space-y-4">
                <li>
                  Ministry of Environment & Forests. (1989). <i className="italic">Rules for the Manufacture, Use, Import, Export, and Storage of Hazardous Micro-Organisms / Genetically Engineered Organisms or Cells</i>. Government of India, New Delhi.
                </li>
                <li>
                  Government of India. (1986). <i className="italic">The Environment (Protection) Act, 1986</i>. New Delhi, India.
                </li>
              </ul>
            </section>

          </div>
        </main>
      </div>
    </div>
  );
}

export default Notebook;
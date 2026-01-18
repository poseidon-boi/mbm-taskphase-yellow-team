function Attributions() {
  const renderTitleHover = (text: string) =>
    text.split("").map((char, i) => (
      <span
        key={i}
        className="inline-block transition-colors duration-200 hover:text-[#dda15e]"
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  const team = [
    { id: "ruchi", name: "1. Ruchi Pawar" },
    { id: "joshua", name: "2. Joshua" },
    { id: "aniket", name: "3. Aniket" },
    { id: "nandan", name: "4. Nandan" },
    { id: "jatin", name: "5. Jatin" },
    { id: "shreyas", name: "6. Shreyas" },
    { id: "sharon", name: "7. Sharon" },
    { id: "nivedita", name: "8. Nivedita" },
    { id: "fiona", name: "9. Fiona" },
    { id: "reeya", name: "10. Reeya" },
    { id: "dheekshidhaa", name: "11. Aaryan" },
    {id : "aaryan", name: "12. Aaryan"}
  ];

  return (
    <div className="w-full text-white min-h-screen">
      {/* ===== TITLE ROW ===== */}
      <div className="pt-32 pb-24 flex justify-center">
        <h1 className="text-6xl font-bold">
          {renderTitleHover("Attributions")}
        </h1>
      </div>

      <div className="flex w-full px-10">
        {/* LEFT SIDE LINKS — STICKY */}
        <aside className="w-[20%] px-8 sticky top-32 mt-10 self-start max-h-[80vh] overflow-y-auto custom-scrollbar">
          <nav className="flex flex-col gap-4 text-lg">
            {team.map((member) => (
              <a
                key={member.id}
                href={`#${member.id}`}
                className="group relative w-fit text-white/70 hover:text-white transition-all"
              >
                {member.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#dda15e] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
        </aside>

        {/* MAIN CONTENT AREA */}
        <main className="w-[80%] pb-32 ml-10">
          <div className="bg-[#FEFAE0] text-black p-16 rounded-lg shadow-2xl space-y-20">
            
            {/* 1. Ruchi Pawar */}
            <section id="ruchi" className="scroll-mt-32">
              <h2 className="text-4xl font-bold mb-4 text-black">1. Ruchi Pawar:</h2>
              <div className="h-[2px] bg-black/20 mb-6" />
              <p className="text-xl">Webdev and graphic design</p>
            </section>

            {/* 2. Joshua */}
            <section id="joshua" className="scroll-mt-32">
              <h2 className="text-4xl font-bold mb-4 text-black">2. Joshua:</h2>
              <div className="h-[2px] bg-black/20 mb-6" />
              <ul className="list-decimal ml-8 text-xl space-y-2">
                <li>ideation of vinasse problem</li>
                <li>contributed to lunar dust problem by looking into self assembling protein scaffolds</li>
                <li>extra cellularization of triacylglycerols in E.coli.</li>
                <li>suicide plasmid and light plasmid design</li>
                <li>homologous arm retrieval from upstream and downstream of gene of interest.</li>
                <li>confirmed gene was present in an operon</li>
              </ul>
            </section>

            {/* 3. Aniket */}
            <section id="aniket" className="scroll-mt-32">
              <h2 className="text-4xl font-bold mb-4 text-black">3. Aniket:</h2>
              <div className="h-[2px] bg-black/20 mb-6" />
              <ul className="list-decimal ml-8 text-xl space-y-4">
                <li>Ideation of Chitin Accumulation</li>
                <li>Ideation of the Khadi cloth early warning climate system</li>
                <li>Thermoplastic masks -
                  <ul className="list-[lower-roman] ml-8 mt-2 space-y-1">
                    <li>Found an alternative material for PCL</li>
                    <li>Started the dry lab part to prove the properties</li>
                    <li>Found an alternative statement to this and developed copolymer production by C.necator with tunable properties.</li>
                    <li>Started the initial research into the updated statement and helped in developing a layout of the process.</li>
                    <li>Helped in finding literature for SSA accumulation literature and proved that SSA doesn't get accumulated, therefore, no toxicity.</li>
                    <li>RecA requirement literature, and found that even in the presence of RecA, editing efficiency of plasmid integration is around 70-80 %.</li>
                    <li>Worked on developing potential model with Jatin.</li>
                  </ul>
                </li>
              </ul>
            </section>

            {/* 4. Nandan */}
            <section id="nandan" className="scroll-mt-32">
              <h2 className="text-4xl font-bold mb-4 text-black">4. Nandan:</h2>
              <div className="h-[2px] bg-black/20 mb-6" />
              <ul className="list-decimal ml-8 text-xl space-y-2">
                <li>Ideation on multiple potential projects, including: Rice Sheath Rot, Pomegranate Bacterial Blight, Stability of medication in space, Lunar Dust remediation, TAG extracellularisation, Production of copolymer 3HB-co-4HB with controlled composition and tunable properties.</li>
                <li>Quantification of problem statement.</li>
                <li>Verifying that differences in structure change properties of the polymer.</li>
                <li>Suicide Plasmid and Expression Plasmid Design.</li>
                <li>Conjugative Plasmid transfer and related procedures.</li>
                <li>Obtaining pathway from KEGG</li>
              </ul>
            </section>

            {/* 5. Jatin */}
            <section id="jatin" className="scroll-mt-32">
              <h2 className="text-4xl font-bold mb-4 text-black">5. Jatin:</h2>
              <div className="h-[2px] bg-black/20 mb-6" />
              <ul className="list-decimal ml-8 text-xl space-y-2">
                <li>Presented and ideated for TAGs production to mediate ill effects of palm oil production.</li>
                <li>Researched and formulated the initial framework/solution for TAG production: Lipids production from fermenting crude insect oil using engineered microbes.</li>
                <li>Assisted in foundational research and investigation into light inducible promoter</li>
                <li>Carried out modelling for metabolic reactions taking place in the genetic circuits developed for metabolic pathway of the chassis along with Aniket.</li>
                <li>Designed the software architecture and computational pipeline for an interactive interactive metabolic pathway simulation tool.</li>
              </ul>
            </section>

            {/* 6. Shreyas */}
            <section id="shreyas" className="scroll-mt-32">
              <h2 className="text-4xl font-bold mb-4 text-black">6. Shreyas:</h2>
              <div className="h-[2px] bg-black/20 mb-6" />
              <p className="text-xl mb-4">Worked on addressing the papaya mealybug problem statement by the incorporation of a herbicide. Also worked on the lunar dust and space medication problem statements.</p>
              <p className="text-xl">Researched on extracellularisation of TAGs in R toruloides, working and design of the light inducible system.</p>
            </section>

            {/* 7. Sharon */}
            <section id="sharon" className="scroll-mt-32">
              <h2 className="text-4xl font-bold mb-4 text-black">7. Sharon:</h2>
              <div className="h-[2px] bg-black/20 mb-6" />
              <p className="text-xl font-bold mb-2">Ideation</p>
              <ul className="list-decimal ml-8 text-xl mb-6 space-y-1">
                <li>Production of biodegradable copolymer P(3HB-co-4HB)</li>
                <li>Making a signal system for the detection of a potential climate crisis</li>
                <li>Use of dye retention proteins for cotton/cellulose to reduce dye runoff</li>
                <li>Production of TAGs from waste substances</li>
              </ul>
              <p className="text-xl font-bold mb-2">Research:</p>
              <ul className="list-decimal ml-8 text-xl mb-6 space-y-1">
                <li>Microbial chassis and strain selection, PHA biosynthetic pathway, checking for critical points, genes and enzymes in the pathway.</li>
                <li>The impact and applications of P(3HB-co-4HB)</li>
                <li>Material properties and changes in the same depending on the concentration and position of 4HB monomers</li>
                <li>Looked for protocols and experimental workflow</li>
              </ul>
              <p className="text-xl font-bold mb-2">iHP:</p>
              <ul className="list-decimal ml-8 text-xl space-y-1">
                <li>Dr Subramanya Bhat K</li>
                <li>Dr Vrunda R</li>
                <li>Dr Divyashree M S</li>
              </ul>
            </section>

            {/* 8. Nivedita */}
            <section id="nivedita" className="scroll-mt-32">
              <h2 className="text-4xl font-bold mb-4 text-black">8. Nivedita:</h2>
              <div className="h-[2px] bg-black/20 mb-6" />
              <ul className="list-decimal ml-8 text-xl space-y-4">
                <li>Ideation of dye retention for cotton clothing project</li>
                <li>Research for mask project, including finding impact, and already existing alternatives</li>
                <li>Tags project
                  <ul className="list-[lower-alpha] ml-8 mt-2 space-y-1">
                    <li>Research for the conversion of ethylene glycol to glycerol</li>
                    <li>Finding potential waste material that could be converted into the substrate required</li>
                  </ul>
                </li>
                <li>Production of biodegradable copolymer P(3HB-co-4HB)
                  <ul className="list-[lower-alpha] ml-8 mt-2 space-y-1">
                    <li>Ideation of this project</li>
                    <li>application of this copolymer</li>
                    <li>Finding different organisms that produce this copolymer</li>
                    <li>Visit to Dr Subramanya Bhat K regarding inputs for applications/ property change with position of 4HB</li>
                  </ul>
                </li>
                <li>Education, HP, iHP.</li>
              </ul>
            </section>

            {/* 9. Fiona */}
            <section id="fiona" className="scroll-mt-32">
              <h2 className="text-4xl font-bold mb-4 text-black">9. Fiona:</h2>
              <div className="h-[2px] bg-black/20 mb-6" />
              <ul className="list-disc ml-8 text-xl space-y-2">
                <li>Contributed to the initial ideation of the project and looked for problem statements.</li>
                <li>Developed early problem statements, including those related to paddy blast disease and Anthracnose disease of Beans, in agriculture.</li>
                <li>Researched for TAG uses.</li>
                <li>Investigated applications of the copolymer P(3HB-co-4HB) and PHA’s through review of research papers.</li>
                <li>Researched the impact of the copolymer, focusing on its sustainability, biodegradability, and potential societal and biomedical benefits</li>
                <li>Researched biosynthetic pathways involved in the production of the polymer, supporting the biological feasibility of the project.</li>
                <li>Met and consulted with Prof. Gautham Thakur and Prof. Gautham Jeppu to gain insights into polymer applications and feasibility</li>
                <li>Participated in Human Practices by contacting and speaking with industry representatives (e.g., Deltora Pvt.Ltd., Rigel solutions ) to understand practical and industrial perspectives.</li>
                <li>Assisted in ideating and drafting content for multiple sections of the project wiki, including background, applications, and human practices</li>
              </ul>
            </section>

            {/* 10. Reeya */}
            <section id="reeya" className="scroll-mt-32">
              <h2 className="text-4xl font-bold mb-4 text-black">10. Reeya:</h2>
              <div className="h-[2px] bg-black/20 mb-6" />
              <p className="text-xl mb-4">Ideation of initial problem statements, including treatment of fabrics to increase dye retention, reduce microplastic fiber shedding, Sunflower Necrosis Disease, Rice Sheath Rot, Biochar, Lunar Dust, PFAS free coating, Metformin</p>
              <div className="grid grid-cols-2 gap-8 text-xl">
                <div>
                  <p className="font-bold">TAG production:</p>
                  <ul className="list-[lower-alpha] ml-8 space-y-1">
                    <li>TAG production pathway</li>
                    <li>increasing TAG production</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold">P(3HB-co-4HB) synthesis:</p>
                  <ul className="list-[lower-alpha] ml-8 space-y-1">
                    <li>Co-Polymer production pathway</li>
                    <li>Existing polymer production methods and quantification</li>
                    <li>Wet lab protocols</li>
                    <li>Applications of the co-polymer</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 11. Dheekshidhaa */}
            <section id="dheekshidhaa" className="scroll-mt-32 pb-10">
              <h2 className="text-4xl font-bold mb-4 text-black">11. Aaryan:</h2>
              <div className="h-[2px] bg-black/20 mb-6" />
              <ul className="list-disc ml-8 text-xl space-y-2">
                <li>Ideation of Rapid, low-cost on-site mycotoxin test for spices & areca nut and anthracnose disease of beans from the agriculture village.</li>
                <li>Conversion of PET to TAG/Glycerol.</li>
                <li>Properties required for the masks.</li>
                <li>Researched on the genes involved in production of the copolymer P(3HB-co-4HB)</li>
                <li>Research related to PHA production.</li>
                <li>Applications and properties of this copolymer.</li>
                <li>Finding different organisms that produce this copolymer</li>
                <li>Met and consulted with Prof. Gautham Thakur and Prof. Gautham Jeppu to gain knowledge about the copolymer</li>
                <li>Protocols of wet lab, DBTL cycle</li>
              </ul>
            </section>

            {/* 11. Aaryan */}
            <section id="aaryan" className="scroll-mt-32 pb-10">
              <h2 className="text-4xl font-bold mb-4 text-black">11. Aaryan:</h2>
              <div className="h-[2px] bg-black/20 mb-6" />
              <ul className="list-disc ml-8 text-xl space-y-2">
                <li>Contacted researchers and companies to acquire the bacteria strains needed</li>
                <li>Worked on the TAGs project (specifically extracellularisation).</li>
                <li>Ideation of bioChar (filtering wastewater).</li>
                <li>Helped with Constructing optogenetic system for final project.</li>
                <li>Helped on Papaya MealyBug.</li>
                <li>Space projects conceptual work (gamma-PGA, clinostats, lunar dust)</li>
                <li>Applications, properties, general background of the Co-polymer.</li>
              </ul>
            </section>

          </div>
        </main>
      </div>
    </div>
  );
}

export default Attributions;
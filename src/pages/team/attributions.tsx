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
    { id: "dheekshidhaa", name: "11. Dheekshidhaa" },
    {id : "aaryan", name: "12. Aaryan"}
    {id: "johanna", name:"13. Johanna"}
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
    <li>Ideation of vinasse problem.</li>
    <li>Contributed to lunar dust problem by looking into self-assembling protein scaffolds.</li>
    <li>Extra cellularization of triacylglycerols in <em>E. coli</em>.</li>
    <li>Suicide plasmid and light plasmid design.</li>
    <li>Homologous arm retrieval from upstream and downstream of gene of interest.</li>
    <li>Confirmed gene was present in an operon.</li>
  </ul>
</section>

{/* 3. Aniket */}
<section id="aniket" className="scroll-mt-32">
  <h2 className="text-4xl font-bold mb-4 text-black">3. Aniket:</h2>
  <div className="h-[2px] bg-black/20 mb-6" />
  <ul className="list-decimal ml-8 text-xl space-y-4">
    <li>Ideation of Chitin Accumulation</li>
    <li>Ideation of the Khadi cloth early warning climate system</li>
    <li>
      Thermoplastic masks
      <ul className="list-[lower-alpha] ml-8 mt-2 space-y-1">
        <li>Found an alternative material for PCL</li>
        <li>Started the dry lab part to prove the properties</li>
        <li>Found an alternative statement and developed copolymer production by <em>C. necator</em> with tunable properties</li>
        <li>Started initial research into the updated statement and helped develop a process layout</li>
        <li>Found literature for SSA accumulation and proved SSA does not accumulate, indicating no toxicity</li>
        <li>Studied RecA requirement and found plasmid integration efficiency of ~70–80% even in its presence</li>
        <li>Worked on developing a potential model with Jatin</li>
      </ul>
    </li>
  </ul>
</section>

{/* 4. Nandan */}
<section id="nandan" className="scroll-mt-32">
  <h2 className="text-4xl font-bold mb-4 text-black">4. Nandan:</h2>
  <div className="h-[2px] bg-black/20 mb-6" />
  <ul className="list-decimal ml-8 text-xl space-y-2">
    <li>Ideation on multiple projects including Rice Sheath Rot, Pomegranate Bacterial Blight, stability of medication in space, lunar dust remediation, TAG extracellularisation, and production of 3HB-co-4HB copolymer with tunable properties.</li>
    <li>Quantification of problem statements.</li>
    <li>Verification that structural differences alter polymer properties.</li>
    <li>Suicide plasmid and expression plasmid design.</li>
    <li>Conjugative plasmid transfer and related procedures.</li>
    <li>Obtaining metabolic pathways from KEGG.</li>
  </ul>
</section>

{/* 5. Jatin */}
<section id="jatin" className="scroll-mt-32">
  <h2 className="text-4xl font-bold mb-4 text-black">5. Jatin:</h2>
  <div className="h-[2px] bg-black/20 mb-6" />
  <ul className="list-decimal ml-8 text-xl space-y-2">
    <li>Ideated TAG production to mitigate the ill effects of palm oil production.</li>
    <li>Formulated the framework for TAG production via fermenting crude insect oil using engineered microbes.</li>
    <li>Assisted in foundational research on light-inducible promoters.</li>
    <li>Performed modelling of metabolic reactions in genetic circuits with Aniket.</li>
    <li>Designed software architecture and computational pipeline for an interactive metabolic pathway simulation tool.</li>
  </ul>
</section>

{/* 6. Sharon */}
<section id="sharon" className="scroll-mt-32">
  <h2 className="text-4xl font-bold mb-4 text-black">6. Sharon:</h2>
  <div className="h-[2px] bg-black/20 mb-6" />

  <p className="text-xl font-bold mb-2">Ideation</p>
  <ul className="list-decimal ml-8 text-xl mb-6 space-y-1">
    <li>Production of biodegradable copolymer P(3HB-co-4HB)</li>
    <li>Signal system for detection of potential climate crises</li>
    <li>Dye retention proteins for cotton/cellulose to reduce runoff</li>
    <li>Production of TAGs from waste substances</li>
  </ul>

  <p className="text-xl font-bold mb-2">Research</p>
  <ul className="list-decimal ml-8 text-xl mb-6 space-y-1">
    <li>Microbial chassis and strain selection and PHA biosynthetic pathways</li>
    <li>Impact and applications of P(3HB-co-4HB)</li>
    <li>Material property variation with 4HB monomer concentration and position</li>
    <li>Experimental protocols and workflows</li>
  </ul>

  <p className="text-xl font-bold mb-2">iHP</p>
  <ul className="list-decimal ml-8 text-xl space-y-1">
    <li>Dr Subramanya Bhat K</li>
    <li>Dr Vrunda R</li>
    <li>Dr Divyashree M S</li>
  </ul>
</section>

{/* 7. Nivedita */}
<section id="nivedita" className="scroll-mt-32">
  <h2 className="text-4xl font-bold mb-4 text-black">7. Nivedita:</h2>
  <div className="h-[2px] bg-black/20 mb-6" />
  <ul className="list-decimal ml-8 text-xl space-y-4">
    <li>Ideation of dye retention for cotton clothing</li>
    <li>Research for mask project and evaluation of existing alternatives</li>
    <li>
      TAGs project
      <ul className="list-[lower-alpha] ml-8 mt-2 space-y-1">
        <li>Conversion of ethylene glycol to glycerol</li>
        <li>Identification of waste substrates</li>
      </ul>
    </li>
    <li>
      Production of biodegradable copolymer P(3HB-co-4HB)
      <ul className="list-[lower-alpha] ml-8 mt-2 space-y-1">
        <li>Project ideation</li>
        <li>Applications of the copolymer</li>
        <li>Identifying producing organisms</li>
        <li>Consultation with Dr Subramanya Bhat K</li>
        <li>Education, HP, and iHP</li>
      </ul>
    </li>
  </ul>
</section>

{/* 8. Fiona */}
<section id="fiona" className="scroll-mt-32">
  <h2 className="text-4xl font-bold mb-4 text-black">8. Fiona:</h2>
  <div className="h-[2px] bg-black/20 mb-6" />
  <ul className="list-decimal ml-8 text-xl space-y-2">
    <li>Initial project ideation and problem statement identification</li>
    <li>Development of early agriculture-related problem statements</li>
    <li>Investigation of P(3HB-co-4HB) and PHA applications</li>
    <li>Research on sustainability and societal impact</li>
    <li>Study of biosynthetic pathways</li>
    <li>Consultations with Prof. Gautham Thakur and Prof. Gautham Jeppu</li>
    <li>Industry interactions for Human Practices</li>
    <li>Drafting content for multiple wiki sections</li>
  </ul>
</section>

{/* 9. Reeya */}
<section id="reeya" className="scroll-mt-32">
  <h2 className="text-4xl font-bold mb-4 text-black">9. Reeya:</h2>
  <div className="h-[2px] bg-black/20 mb-6" />
  <ul className="list-decimal ml-8 text-xl space-y-2">
    <li>Ideation of multiple initial problem statements including fabrics, agriculture, PFAS-free coatings, and pharmaceuticals</li>
    <li>
      TAG production
      <ul className="list-[lower-alpha] ml-8 mt-2 space-y-1">
        <li>TAG production pathway</li>
        <li>Increasing TAG yield</li>
      </ul>
    </li>
    <li>
      P(3HB-co-4HB) synthesis
      <ul className="list-[lower-alpha] ml-8 mt-2 space-y-1">
        <li>Copolymer production pathway</li>
        <li>Existing methods and quantification</li>
        <li>Wet lab protocols</li>
        <li>Applications</li>
      </ul>
    </li>
  </ul>
</section>

{/* 10. Dheekshidhaa A */}
<section id="dheekshidhaa" className="scroll-mt-32">
  <h2 className="text-4xl font-bold mb-4 text-black">10. Dheekshidhaa A:</h2>
  <div className="h-[2px] bg-black/20 mb-6" />
  <ul className="list-decimal ml-8 text-xl space-y-2">
    <li>Rapid low-cost mycotoxin testing ideation</li>
    <li>Conversion of PET to TAG/Glycerol</li>
    <li>Mask material property research</li>
    <li>Genetic research for copolymer production</li>
    <li>PHA production research</li>
    <li>Copolymer applications and properties</li>
    <li>Identifying producing organisms</li>
    <li>Consultations with polymer experts</li>
    <li>Wet lab protocols and DBTL cycle</li>
  </ul>
</section>

{/* 11. Aaryan */}
<section id="aaryan" className="scroll-mt-32">
  <h2 className="text-4xl font-bold mb-4 text-black">11. Aaryan:</h2>
  <div className="h-[2px] bg-black/20 mb-6" />
  <ul className="list-decimal ml-8 text-xl space-y-2">
    <li>Acquisition of bacterial strains</li>
    <li>TAG extracellularisation</li>
    <li>Biochar filtration ideation</li>
    <li>Optogenetic system construction</li>
    <li>Papaya MealyBug project</li>
    <li>Space project conceptualization</li>
    <li>Copolymer applications and background</li>
  </ul>
</section>

{/* 12. Johanna */}
<section id="johanna" className="scroll-mt-32 pb-10">
  <h2 className="text-4xl font-bold mb-4 text-black">12. Johanna:</h2>
  <div className="h-[2px] bg-black/20 mb-6" />
  <ul className="list-decimal ml-8 text-xl space-y-2">
    <li>Engineered probiotic for mitigating metformin side effects</li>
    <li>Improving plant immunity using chitin oligosaccharides</li>
    <li>Chassis selection and optimization of <em>Rhodotorula toruloides</em></li>
    <li>Copolymer applications, thermomechanical correlations, and iHP visits</li>
  </ul>
</section>

          </div>
        </main>
      </div>
    </div>
  );
}

export default Attributions;
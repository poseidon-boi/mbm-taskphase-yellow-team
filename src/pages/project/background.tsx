function Background() {
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
      {/* ===== TITLE ===== */}
      <div className="pt-32 pb-24 flex justify-center">
        <h1 className="text-6xl font-bold">
          {renderTitleHover("Background")}
        </h1>
      </div>

      {/* ===== TWO-COLUMN LAYOUT ===== */}
      <div className="flex w-full px-10 gap-5">

        {/* ===== LEFT SIDEBAR ===== */}
        <aside className="w-[15%] px-6 sticky top-32 mt-5 self-start">
          <nav className="flex flex-col gap-6 text-lg bg-[#1F2A13] p-4 rounded-md">
            {[
              ["overview", "Overview"],
              ["chassis", "Chassis Selection"],
              ["knockout", "Choice of Gene Knockout"],
              ["references", "References"],
            ].map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className="group relative w-fit text-white/80 hover:text-white transition-colors"
              >
                {label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#dda15e] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
        </aside>

        {/* ===== RIGHT CONTENT ===== */}
        <main className="w-[85%] pb-32">
          <div className="bg-[#FEFAE0] text-black p-16 rounded-lg shadow-2xl">

            {/* ===== OVERVIEW ===== */}
            <section id="overview" className="mb-14 scroll-mt-32">
              <p className="text-xl mb-6">
                Our work is inspired by the increasing demand for biomaterials
                that could be not only useful in advanced life science
                applications but also eco-friendly. Current biomaterials made of
                synthetic polymer have poor biodegradation and biocompatibility,
                posing long-term challenges. To meet these challenges, we
                highlight polyhydroxyalkanoates (PHAs), biodegradable biomaterials
                that naturally occur in the bacterial{" "}
                <em>Cupriavidus necator</em>. PHAs have great applications in
                future biomaterials due to their excellent biocompatibility,
                renewability, and tailorable characteristics.
              </p>

              <p className="text-xl">
                Of all these, however, P(3HB-co-4HB) is unique due to its
                adjustable mechanical and degradative characteristics. The
                flexibility, rigidity, and degradability of this material can be
                adjusted depending on the percentage of its monomers. The
                objectives of this project are focused on attempting to
                biologically engineer a degradative <em>C. necator</em> with a
                goal of using them for applications related to tissue engineering
                because of their degradability.
              </p>
            </section>

            {/* ===== CHASSIS SELECTION ===== */}
            <section id="chassis" className="mb-14 scroll-mt-32">
              <h2 className="text-4xl font-semibold mb-4">
                Chassis Selection
              </h2>
              <div className="h-[2px] bg-black/30 mb-6" />

              <p className="text-xl mb-6">
                The reason <em>C. necator</em> was chosen as the chassis organism
                for the project is due to the efficient metabolism of substrates
                towards intracellular polymer accumulation. <em>C. necator</em>,
                therefore, is an excellent host suitable for biological
                compatibility and controlled flux towards 4HB-CoA with the
                objective of producing the target copolymer
                poly(3HB-co-4HB).
              </p>

              <p className="text-xl">
                <em>Cupriavidus necator</em> has a well-established ability to
                produce polyhydroxyalkanoates (PHA) and its established
                suitability for the production of PHA copolymers. The organism
                naturally produces poly(3-hydroxybutyrate) and is amenable to the
                production of similar monomers, such as 4-hydroxybutyrate, when
                the appropriate precursors are available.
              </p>
            </section>

            {/* ===== GENE KNOCKOUT ===== */}
            <section id="knockout" className="mb-14 scroll-mt-32">
              <h2 className="text-4xl font-semibold mb-4">
                Choice of Gene Knockout
              </h2>
              <div className="h-[2px] bg-black/30 mb-6" />

              <p className="text-xl mb-6">
                In <em>Cupriavidus necator</em>, the 4-hydroxybutyryl-CoA
                (4HB-CoA) is an intermediate linked to the metabolism of butyrate
                and its activation as a precursor to the incorporation of 4HB
                units into the Polyhydroxyalkanoates. The metabolic transformation
                of succinate semialdehyde to 4HB-CoA is carried out by the
                two-step enzymatic action of NAD-dependent
              </p>

              <p className="text-xl mb-6">
                In the choice of the regulating reactions for the pathways, we
                picked the initial enzymatic reaction catalyzed by the gene{" "}
                <em>gbd</em>, which phosphorylates SSA to
                4-hydroxybutyrate. This was informed by the central importance of
                SSA in metabolism. SSA is a highly reactive and dangerous compound
                that is carefully controlled in bacterial cells. In the case of
                the bacterium <em>C. necator</em>, SSA is a precursor in various
                biosynthetic pathways, such as the tricarboxylic acid cycle, the
                vitamin B₆ biosynthesis cycle, and the arg-pro cycle.
              </p>

              <p className="text-xl mb-6">
                Owing to the danger posed by the intracellular accumulation of
                SSA, bacterial cells work to redirect this compound into
                different metabolic pathways. Inhibition of the downstream
                enzymes, with the allowance of SSA accumulation, would pose a
                substantial metabolic burden.
              </p>

              <p className="text-xl mb-6">
                By contrast, the intermediate 4-hydroxybutyrate is a relatively
                pathway-specific metabolite, which does not enter any other
                major central metabolic pathways directly. Based on this
                consideration, the downstream enzyme
                4-hydroxybutyrate-CoA transferase has been regarded as a riskier
                target because of the possibility of 4-hydroxybutyrate
                accumulation with no metabolic outlets.
              </p>

              <p className="text-xl">
                Based on these considerations, the approach of silencing{" "}
                <em>gbd</em> was selected as a safer and more controlled strategy
                for regulating the carbon flux into the 4HB-CoA pool while
                minimizing unintended disruptions to central metabolism.
              </p>
            </section>

            {/* ===== REFERENCES ===== */}
            <section id="references" className="scroll-mt-32">
              <h2 className="text-4xl font-semibold mb-4">References</h2>
              <div className="h-[2px] bg-black/30 mb-6" />

              <ul className="list-disc pl-6 space-y-4 text-xl">
                <li>
                  Santolin, L., Riedel, S. L., & Brigham, C. J. (2024).{" "}
                  <em>Applied Microbiology and Biotechnology</em>.{" "}
                  <a
                    href="https://doi.org/10.1007/s00253-024-13284-2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#99581E] hover:underline break-all"
                  >
                    https://doi.org/10.1007/s00253-024-13284-2
                  </a>
                </li>

                <li>
                  Morlino et al. (2023). <em>Biotechnology Advances</em>.{" "}
                  <a
                    href="https://doi.org/10.1016/j.biotechadv.2023.108264"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#99581E] hover:underline break-all"
                  >
                    https://doi.org/10.1016/j.biotechadv.2023.108264
                  </a>
                </li>

                <li>
                  UniProt. (n.d.).{" "}
                  <a
                    href="https://www.uniprot.org/uniprotkb/P76149/entry"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#99581E] hover:underline break-all"
                  >
                    https://www.uniprot.org/uniprotkb/P76149/entry
                  </a>
                </li>
              </ul>
            </section>

          </div>
        </main>
      </div>
    </div>
  );
}

export default Background;

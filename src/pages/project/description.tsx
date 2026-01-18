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
    <div className="w-full text-white">
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
              href="#Background and Rationale"
              className="group relative w-fit text-white/80 hover:text-white"
            >
              Background and Rationale
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#dda15e] transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#Relevance and Real-World Impact"
              className="group relative w-fit text-white/80 hover:text-white"
            >
              Relevance and Real-World Impact
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#dda15e] transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#Limitations of Current Production Stratergies"
              className="group relative w-fit text-white/80 hover:text-white"
            >
              Limitations of Current Production Stratergies
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#dda15e] transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#Importance of Block Copolymer Structure"
              className="group relative w-fit text-white/80 hover:text-white"
            >
              Importance of Block Copolymer Structure
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#dda15e] transition-all duration-300 group-hover:w-full" />
            </a>
          </nav>
        </aside>

        {/* RIGHT COLUMN — CONTENT */}
        <main className="w-[90%] pb-32 ml-10">
          <div className="bg-[#FEFAE0] text-black p-16 rounded-lg shadow-2xl">
            {/* SECTION: Background and Rationale */}
            <section className="mb-12">
              <div
                id="Background and Rationale"
                className="scroll-mt-32"
              />
              <h2 className="text-6xl font-semibold mb-4">
                Background and Rationale
              </h2>
              <div className="h-[2px] bg-black/30 mb-8" />
              <p className="text-xl mb-6">
                Polyhydroxyalkanoates (PHAs) are a class of biodegradable
                polyesters that are naturally synthesised by approximately 40%
                of the world’s microorganisms. These polymers are typically
                accumulated under nutrient-limiting conditions, and both the
                type and structure of the PHA produced are strongly influenced
                by the raw materials supplied during microbial growth (Koller
                &amp; Mukherjee, 2020).
              </p>
              <p className="text-xl mb-6">
                Among all the PHAs that have been identified,
                poly(3-hydroxybutyrate-co-4-hydroxybutyrate) [P(3HB-co-4HB)] has
                been investigated extensively due to its high biodegradability
                (Weng et al., 2013) and excellent biocompatibility (Chanprateep
                et al., 2010).
              </p>
              <p className="text-xl mb-6">
                Poly(3-hydroxybutyrate) (PHB), a major constituent of this
                polymer, has been extensively investigated, as D,
                L-3-hydroxybutyrate is a natural compound found in blood and
                tissues. As a result, naturally occurring PHB composites have
                been heavily evaluated for their potential use in biomedical
                applications.
              </p>
              <p className="text-xl mb-6">
                However, PHB alone is hard and brittle, making it less practical
                due to difficulties in plastic processing. To address these
                limitations, poly(4-hydroxybutyrate) [P(4HB)] has been
                incorporated into PHB to form the copolymer P(3HB-co-4HB). The
                addition of 4HB units reduces crystallinity and significantly
                increases flexibility and elasticity.
              </p>
            </section>

            {/* SECTION: Relevance and Real-World Impact */}
            <section>
              <div
                id="Relevance and Real-World Impact"
                className="scroll-mt-32"
              />

              <h2 className="text-6xl font-semibold mb-4">
                Relevance and Real-World Impact
              </h2>
              <div className="h-[2px] bg-black/30 mb-8" />

              <p className="text-xl mb-6">
                The growing demand for advanced biomaterials highlights the
                importance of optimising P(3HB-co-4HB) production. For instance,
                the global tissue engineering market for wound care is said to
                reach about US$34.52 billion by 2034, up from US$7.69 billion in
                2024, with a compound annual growth rate (CAGR) of 16.2% during
                the forecast period from 2024 to 2034. In 2024, North America
                alone accounted for over 38.7% of the market, generating
                revenues of US$3.0 billion (Tissue Engineering for Wound Care
                Market, n.d.).
              </p>
              <p className="text-xl mb-6">
                P(3HB-co-4HB) has been considered for the clinical management of
                wounds, as the dressing selected must prioritise its function as
                an appropriate barrier and its healing properties, while also
                considering patient factors such as comfort, functionality, and
                practicality. A composite scaffold patch was developed using
                different compositions of the biopolymer, along with graphene
                (G) and bioactive glass (BG), to enhance the biopolymer's
                distinctive mechanical and physical characteristics. Two types
                of scaffolds, P(3HB-co-25%4HB)/G/BG and P(3HB-co-37%4HB)/G/BG,
                were prepared for this purpose (Abdul Rahim et al., 2024).
              </p>
              <p className="text-xl mb-6">
                Beyond wound care, P(3HB-co-4HB) was also been explored for drug
                delivery applications. Biodegradable nanoparticles composed of
                this copolymer have been used to encapsulate docetaxel (DCX), a
                poorly water-soluble anticancer drug widely employed in
                chemotherapy. Breast cancer and lung cancer together account for
                approximately 25% of newly diagnosed cancer cases worldwide,
                both of which are treated using docetaxel (Bray et al., 2024).
              </p>
              <p className="text-xl mb-6">
                Nanoparticles formulated using P(3HB-co-4HB) with varying 4HB
                contents, which were P(3HB-co-16%4HB), P(3HB-co-30%4HB), and
                P(3HB-co-70%4HB), were evaluated for particle size, surface
                charge, encapsulation efficiency, and drug release behaviour.
                Among these, P(3HB-co-70%4HB), supplemented with a limited
                number of additives, was identified as the most optimised
                formulation (Faisalina et al., 2020).
              </p>
              <p className="text-xl mb-6">
                In addition, P(3HB-co-4HB) has been proposed as a candidate
                material for fused deposition modelling (FDM), an additive
                manufacturing technique that allows the creation of exact,
                complex three-dimensional objects for a wide range of
                applications. The principle behind FDM is the extrusion of
                molten filament and its gradual deposition in layers, which
                simultaneously solidifies, giving us a three-dimensional
                structure. The P(3HB-co-4HB) copolymer was considered for
                potential applications in the pharmaceutical and medical fields,
                as these fields require a processing filament that is
                biocompatible, biodegradable, and thermoplastic (Kovalcik et
                al., 2021).
              </p>
            </section>

            {/* SECTION: Limitations of Current Production Stratergies */}
            <section className="mb-12">
              <div
                id="Limitations of Current Production Stratergies"
                className="scroll-mt-32"
              />
              <h2 className="text-6xl font-semibold mb-4">
                Limitations of Current Production Stratergies
              </h2>
              <div className="h-[2px] bg-black/30 mb-8" />
              <p className="text-xl mb-6">
                Despite its potential, the production of P(3HB-co-4HB) remains
                constrained by fundamental limitations in existing biosynthetic
                methods. <em>Cupriavidus necator</em> H16 is widely used for the
                high-yield production of PHAs through its native metabolic
                pathways; however, current approaches do not allow precise
                control over the micro- and macro-structural properties of the
                polymer.
              </p>
              <p className="text-xl mb-6">
                While the overall 4HB content of P(3HB-co-4HB) can be modulated
                by supplying different carbon sources, like 4-hydroxybutyric
                acid, 4-chlorobutyric acid, 1,4-butanediol and γ-butyrolactone,
                to the microbial chassis (Kunioka et al., 1989), this strategy
                only influences monomer composition. It does not permit
                regulation of the polymer microstructure, specifically the
                positional distribution of 4HB units along the polymer chain.
              </p>
              <p className="text-xl mb-6">
                This limitation arises from the activity of PHA synthase (PhaC),
                the key enzyme catalysing the final step of PHA biosynthesis
                (Zher Neoh et al., 2022). PhaC is a class I synthase that
                preferentially incorporates short-chain-length monomers and
                synthesises PHA polymers from coenzyme A thioesters of
                hydroxyalkanoic acids following removal of the CoA moiety
                (Assefa et al., 2022). Importantly, PhaC lacks strict
                monomer-CoA specificity, as evidenced by the natural production
                of P(3HB-co-4HB) in <em>Cupriavidus necator</em> H16, and
                therefore incorporates whichever monomer-CoA species is
                available at a given time (de Macedo et al., 2024).
              </p>
              <p className="text-xl mb-6">
                As a result, 3HB-CoA and 4HB-CoA are randomly incorporated into
                the growing polymer chain based solely on intracellular
                availability. Although substrate composition determines
                precursor abundance and thus overall 4HB content, it does not
                allow control over monomer sequence distribution. This lack of
                microstructural control limits the ability to fine-tune material
                properties for specific applications.
              </p>
            </section>

            {/* SECTION: Importance of Block Copolymer Structure */}
            <section className="mb-12">
              <div
                id="Importance of Block Copolymer Structure"
                className="scroll-mt-32"
              />
              <h2 className="text-6xl font-semibold mb-4">
                Importance of Block Copolymer Structure
              </h2>
              <div className="h-[2px] bg-black/30 mb-8" />
              <p className="text-xl mb-6">
                Apart from monomer composition and molecular weight, the
                copolymer chain's molecular structure (random vs block) is also
                crucial for controlling the mechanical and physical properties
                of PHAs (Mai et al., 2024). Literature states that the monomer
                sequence of a polymer plays a significant role in determining
                the mechanical properties of the polymer. The presence of a
                diverse number of properties using the same monomer components
                is a substantial advantage of sequence regulation.
              </p>
              <p className="text-xl mb-6">
                In particular, ABA-type block copolymers consisting of hard (A)
                and soft (B) segments are known to be rigid and/or elastic
                (Matsumoto, 2024), allowing them to be used for varied purposes
                that would not have been possible if the copolymer with the same
                component ratio were randomly polymerised.
              </p>
              <p className="text-xl mb-6">
                Notably, block copolymers of P(3HB-co-4HB) have been reported to
                exhibit higher yield strength and tensile strength than their
                random copolymer and blend counterparts. Although differences in
                microstructure influence elongation at break, block copolymers
                have demonstrated elongation values exceeding 300%, compared to
                only 5.9% for PHB (Hu et al., 2011). These findings underscore
                the importance of achieving sequence-level control over
                P(3HB-co-4HB) biosynthesis to unlock its full application
                potential.
              </p>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Description;

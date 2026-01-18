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
              <p className="text-xl mb-6">
                As part of our Human Practices activities, we contacted Rigel Bioenviron Solutions Pvt. Ltd. to understand the current state of polyhydroxyalkanoates (PHAs) in India. We spoke to Dr. Sanchita Mukherjee, who provided important insights about production capabilities and application pathways for PHAs in the country. Dr. Mukherjee explained that PHAs are not produced at a large commercial scale in India. While PHAs are being made domestically, this production is limited and does not yet support widespread manufacturing for plastic applications. Rigel Bioenviron Solutions produces PHAs from industrial waste streams, showing a sustainable approach; however, these materials are not sold as mass-use plastics. Instead, the company primarily supplies PHAs to the food industry for niche, high-value uses. When we asked about potential end users of PHAs, Dr. Mukherjee mentioned the following,

              </p>
             
              <ul>
                <li>plastic manufacturers looking for sustainable material alternatives</li>
                <li>food and ice-cream producers for packaging and food-contact needs</li>
                <li>medical applications like biodegradable sutures, 
 food packaging sector</li>
              </ul>
              <p className="text-xl mb-6">
                where biodegradability and safety are crucial. This conversation uncovers a gap between the proven technical feasibility of PHAs and their widespread commercial adoption in India. It emphasized the importance of our project's goal to develop a copolymer with better applicability for sustainable plastic alternatives.
              </p>
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

              <p className="text-xl mb-6">
                We spoke to Mr. Divyesh Dadhaniya from Deltora Biopolymers Private Limited to understand the production, application of Biopolymers in the industry, nd who our customers could be.
              </p>
              <p className="text-xl mb-6">
                He explained that Deltora primarily focuses on the production of raw biopolymer materials and compounding, rather than manufacturing finished products. He highlighted that these compounded biopolymers are commonly used in injection molded products and cutlery, where biodegradable materials need to meet both functional and processing requirements. However he did not disclose the companies that purchase these biopolymer raw materials.</p>
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

export default Human Practices;

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
              href="#Introduction"
              className="group relative w-fit text-white/80 hover:text-white"
            >
              Introduction
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#dda15e] transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#Impact"
              className="group relative w-fit text-white/80 hover:text-white"
            >
              Impact
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
            {/* SECTION: Introduction */}
            <section className="mb-12">
              <div
                id="Introduction"
                className="scroll-mt-32"
              />
              <h2 className="text-6xl font-semibold mb-4">
                Introduction
              </h2>
              <div className="h-[2px] bg-black/30 mb-8" />
              <p className="text-xl mb-6">
                Polyhydroxyalkanoates (PHAs) are a class of biodegradable polyesters that are naturally synthesised by approximately 40% of the world’s microorganisms. These polymers are typically accumulated under nutrient-limiting conditions, and both the type and structure of the PHA produced are strongly influenced by the raw materials supplied during microbial growth (Koller & Mukherjee, 2020).

              </p>
              <p className="text-xl mb-6">
                Among all the PHAs that have been identified, poly(3-hydroxybutyrate-co-4-hydroxybutyrate) [P(3HB-co-4HB)] has been investigated extensively due to its high biodegradability (Weng et al., 2013) and excellent biocompatibility (Chanprateep et al., 2010).

              </p>
              <p className="text-xl mb-6">
                Poly(3-hydroxybutyrate) (PHB), a major constituent of this polymer, has been extensively investigated, as D, L-3-hydroxybutyrate is a natural compound found in blood and tissues. As a result, naturally occurring PHB composites have been heavily evaluated for their potential use in biomedical applications.

              </p>
              <p className="text-xl mb-6">
                However, PHB alone is hard and brittle, making it less practical due to difficulties in plastic processing. To address these limitations, poly(4-hydroxybutyrate) [P(4HB)] has been incorporated into PHB to form the copolymer P(3HB-co-4HB). The addition of 4HB units reduces crystallinity and significantly increases flexibility and elasticity(Huong et al., 2021).
</p>
            </section>

            {/* SECTION: Impact */}
            <section>
              <div
                id="Impact"
                className="scroll-mt-32"
              />

              <h2 className="text-6xl font-semibold mb-4">
                Impact
              </h2>
              <div className="h-[2px] bg-black/30 mb-8" />

              <p className="text-xl mb-6">
                The growing demand for advanced biomaterials highlights the importance of optimising P(3HB-co-4HB) production. For instance, the global tissue engineering market for wound care is said to reach about US$34.52 billion by 2034, up from US$7.69 billion in 2024, with a compound annual growth rate (CAGR) of 16.2% during the forecast period from 2024 to 2034. In 2024, North America alone accounted for over 38.7% of the market, generating revenues of US$3.0 billion (Tissue Engineering for Wound Care Market, n.d.)

              </p>
              <p className="text-xl mb-6">
                P(3HB-co-4HB) has been considered for the clinical management of wounds, as the dressing selected must prioritise its function as an appropriate barrier and its healing properties, while also considering patient factors such as comfort, functionality, and practicality. A composite scaffold patch was developed using different compositions of the biopolymer, along with graphene (G) and bioactive glass (BG), to enhance the biopolymer's distinctive mechanical and physical characteristics. Two types of scaffolds, P(3HB-co-25%4HB)/G/BG and P(3HB-co-37%4HB)/G/BG, were prepared for this purpose (Abdul Rahim et al., 2024).
</p>
              <p className="text-xl mb-6">
                Beyond wound care, P(3HB-co-4HB) was also been explored for drug delivery applications. Biodegradable nanoparticles composed of this copolymer have been used to encapsulate docetaxel (DCX), a poorly water-soluble anticancer drug widely employed in chemotherapy. Breast cancer and lung cancer together account for approximately 25% of newly diagnosed cancer cases worldwide, both of which are treated using docetaxel (Bray et al., 2024). Nanoparticles formulated using P(3HB-co-4HB) with varying 4HB contents, which were P(3HB-co-16%4HB), P(3HB-co-30%4HB), and P(3HB-co-70%4HB), were evaluated for particle size, surface charge, encapsulation efficiency, and drug release behaviour. Among these, P(3HB-co-70%4HB), supplemented with a limited number of additives, was identified as the most optimised formulation (Faisalina et al., 2020).
</p>
              <p className="text-xl mb-6">
                In addition, P(3HB-co-4HB) has been proposed as a candidate material for fused deposition modelling (FDM), an additive manufacturing technique that allows the creation of exact, complex three-dimensional objects for a wide range of applications. The principle behind FDM is the extrusion of molten filament and its gradual deposition in layers, which simultaneously solidifies, giving us a three-dimensional structure. The P(3HB-co-4HB) copolymer was considered for potential applications in the pharmaceutical and medical fields, as these fields require a processing filament that is biocompatible, biodegradable, and thermoplastic (Kovalcik et al., 2021).

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

             <section id="references" className="scroll-mt-32">
  <h2 className="text-4xl font-semibold mb-4">References</h2>
  <div className="h-[2px] bg-black/30 mb-6" />

  <ul className="list-disc pl-6 space-y-4 text-xl">
    <li>
      Abdul Rahim, M. A. H., Samsurrijal, S. F., Abdullah, A. A. A., & Mohd Noor, S. N. F. (2024).
      Development and physiochemical assessment of graphene-bioactive glass-P(3HB-co-4HB) composite
      scaffold as prospect biomaterial for wound healing. <em>Biomedical Materials (Bristol)</em>, 19.{" "}
      <a
        href="https://doi.org/10.1088/1748-605X/ad5632"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#99581E] hover:underline break-all"
      >
        https://doi.org/10.1088/1748-605X/ad5632
      </a>
    </li>

    <li>
      Assefa, N. G., Hansen, H., & Altermark, B. (2022). A unique class I polyhydroxyalkanoate synthase
      (PhaC) from <em>Brevundimonas</em> sp. KH11J01 exists as a functional trimer: A comparative study
      with PhaC from <em>Cupriavidus necator</em> H16. <em>New Biotechnology</em>, 70, 57–66.{" "}
      <a
        href="https://doi.org/10.1016/j.nbt.2022.05.003"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#99581E] hover:underline break-all"
      >
        https://doi.org/10.1016/j.nbt.2022.05.003
      </a>
    </li>

    <li>
      Bray, F., Laversanne, M., Sung, H., Ferlay, J., Siegel, R. L., Soerjomataram, I., & Jemal, A.
      (2024). Global cancer statistics 2022: GLOBOCAN estimates of incidence and mortality worldwide
      for 36 cancers in 185 countries. <em>CA: A Cancer Journal for Clinicians</em>, 74, 229–263.{" "}
      <a
        href="https://doi.org/10.3322/caac.21834"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#99581E] hover:underline break-all"
      >
        https://doi.org/10.3322/caac.21834
      </a>
    </li>

    <li>
      Chanprateep, S., Buasri, K., Muangwong, A., & Utiswannakul, P. (2010). Biosynthesis and
      biocompatibility of biodegradable poly(3-hydroxybutyrate-co-4-hydroxybutyrate).
      <em>Polymer Degradation and Stability</em>, 95, 2003–2012.{" "}
      <a
        href="https://doi.org/10.1016/j.polymdegradstab.2010.07.014"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#99581E] hover:underline break-all"
      >
        https://doi.org/10.1016/j.polymdegradstab.2010.07.014
      </a>
    </li>

    <li>
      de Macedo, M. A., Oliveira-Filho, E. R., Taciro, M. K., Piccoli, R. A. M., Gomez, J. G. C., &
      Silva, L. F. (2024). Poly(3-hydroxybutyrate-co-4-hydroxybutyrate) [P(3HB-co-4HB)] biotechnological
      production: challenges and opportunities. <em>Biomass Conversion and Biorefinery</em>, 14,
      26631–26650. Springer Science and Business Media Deutschland GmbH.{" "}
      <a
        href="https://doi.org/10.1007/s13399-022-03500-2"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#99581E] hover:underline break-all"
      >
        https://doi.org/10.1007/s13399-022-03500-2
      </a>
    </li>

    <li>
      Faisalina, A. F., Sonvico, F., Colombo, P., Amirul, A. A., Wahab, H. A., & Majid, M. I. A.
      (2020). Docetaxel-loaded poly(3HB-co-4HB) biodegradable nanoparticles: Impact of copolymer
      composition. <em>Nanomaterials</em>, 10, 1–13.{" "}
      <a
        href="https://doi.org/10.3390/nano10112123"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#99581E] hover:underline break-all"
      >
        https://doi.org/10.3390/nano10112123
      </a>
    </li>

    <li>
      Hu, D., Chung, A. L., Wu, L. P., Zhang, X., Wu, Q., Chen, J. C., & Chen, G. Q. (2011).
      Biosynthesis and characterization of polyhydroxyalkanoate block copolymer P3HB-b-P4HB.
      <em>Biomacromolecules</em>, 12, 3166–3173.{" "}
      <a
        href="https://doi.org/10.1021/bm200660k"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#99581E] hover:underline break-all"
      >
        https://doi.org/10.1021/bm200660k
      </a>
    </li>

    <li>
      Huong, K. H., Sevakumaran, V., & Amirul, A. A. (2021). P(3HB-co-4HB) as high value
      polyhydroxyalkanoate: its development over recent decades and current advances.
      <em>Critical Reviews in Biotechnology</em>, 41, 474–490. Taylor and Francis Ltd.{" "}
      <a
        href="https://doi.org/10.1080/07388551.2020.1869685"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#99581E] hover:underline break-all"
      >
        https://doi.org/10.1080/07388551.2020.1869685
      </a>
    </li>

    <li>
      Koller, M., & Mukherjee, A. (2020). Polyhydroxyalkanoates – Linking properties, applications,
      and end-of-life options. <em>Chemical and Biochemical Engineering Quarterly</em>, 34, 115–129.{" "}
      <a
        href="https://doi.org/10.15255/CABEQ.2020.1819"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#99581E] hover:underline break-all"
      >
        https://doi.org/10.15255/CABEQ.2020.1819
      </a>
    </li>

    <li>
      Tissue Engineering for Wound Care Market. (n.d.).{" "}
      <a
        href="https://market.us/report/tissue-engineering-for-wound-care-market/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#99581E] hover:underline break-all"
      >
        https://market.us/report/tissue-engineering-for-wound-care-market/
      </a>
    </li>

    <li>
      Zher Neoh, S., Fey Chek, M., Tiang Tan, H., Linares-Pastén, J. A., Nandakumar, A., Hakoshima, T.,
      & Sudesh, K. (2022). Polyhydroxyalkanoate synthase (PhaC): The key enzyme for biopolyester
      synthesis. <em>Current Research in Biotechnology</em>, 4, 87–101.{" "}
      <a
        href="https://doi.org/10.1016/j.crbiot.2022.01.002"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#99581E] hover:underline break-all"
      >
        https://doi.org/10.1016/j.crbiot.2022.01.002
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

export default Description;

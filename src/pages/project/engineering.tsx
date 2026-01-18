function Engineering() {
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
          {renderTitleHover("Engineering")}
        </h1>
      </div>

      {/* ===== TWO-COLUMN ROW ===== */}
      <div className="flex w-full min-h-screen px-10">
        {/* LEFT COLUMN — STICKY */}
        <aside className="w-[10%] px-8 sticky top-32 mt-10 self-start">
          <nav className="flex flex-col gap-6 text-xl">
            <a
              href="#Design"
              className="group relative w-fit text-white/80 hover:text-white"
            >
              Design
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#dda15e] transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#Build"
              className="group relative w-fit text-white/80 hover:text-white"
            >
              Build
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#dda15e] transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#Test"
              className="group relative w-fit text-white/80 hover:text-white"
            >
              Test
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#dda15e] transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#Learn"
              className="group relative w-fit text-white/80 hover:text-white"
            >
              Learn
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#dda15e] transition-all duration-300 group-hover:w-full" />
            </a>
          </nav>
        </aside>

        {/* RIGHT COLUMN — CONTENT */}
        <main className="w-[90%] pb-32 ml-10">
          <div className="bg-[#FEFAE0] text-black p-16 rounded-lg shadow-2xl">
            {/* SECTION: Design */}
            <section className="mb-12">
              <div id="Design" className="scroll-mt-32" />
              <h2 className="text-6xl font-semibold mb-4">
                Design
              </h2>
              <div className="h-[2px] bg-black/30 mb-8" />
              <p className="text-xl mb-6">
                Polyhydroxyalkanoates or PHAs are biodegradable bioplastics
                produced by many microbes. Among them the copolymer
                Poly(3-hydroxybutyrate-co-4hydroxybutyrate) or P(3HB-co-4HB) is
                also a member of the PHA family and is used for different
                applications in various sectors. By varying the 4HB monomer’s
                composition and molecular weight, the property of the copolymer
                varies drastically. This block copolymer formed exhibit higher
                yield and tensile strength and therefore presents as a better
                option.
              </p>
              <p className="text-xl mb-6">
                Among all the PHAs that have been identified,
                poly(3-hydroxybutyrate-co-4-hydroxybutyrate) [P(3HB-co-4HB)] has
                been investigated extensively due to its high biodegradability
                (Weng et al., 2013) and excellent biocompatibility (Chanprateep
                et al., 2010).
              </p>
              <p className="text-xl mb-6">
                To control these mechanical properties we used{" "}
                <i>Cupriavidus necator</i>, a bacterium which produces this
                copolymer naturally in the presence of specific substrates. We
                engineered and optimized the metabolic pathways to control and
                regulate the polymer composition and subsequently its
                properties.
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

            {/* SECTION: Build */}
            <section>
              <div id="Build" className="scroll-mt-32" />

              <h2 className="text-6xl font-semibold mb-4">Build</h2>
              <div className="h-[2px] bg-black/30 mb-8" />

              <p className="text-xl mb-6">
                We aimed to achieve constitutive expression of the light
                sensitive EL222 protein, even in the absence of light. The
                binding would take place in the presence of blue light only,
                which could be controlled using the intensity and time of
                irradiation. The activation cassette and response cassette of
                this system was constructed in-silico using Benchling and
                SnapGene.
              </p>
              <p className="text-xl mb-6">
                The activation cassette of the system includes the strong pTac
                bacterial promoter, the ribosomal binding site RBS1, the coding
                sequence (CDS) of the EL222 protein and the bacterial terminator
                rrnbT1. The sequences were obtained from the plasmid pz8-pTac, a
                study on gene expression control in <i>Cupriavidus necator</i>, NCBI
                and Bioparts repository of Wang Lab respectively.{" "}
              </p>
              <p className="text-xl mb-6">
                The response cassette of the system consists of 5 copies of C120
                recognition sequence for EL222, the luxI promoter, ribosome
                binding site RBS34, CDS of the gbd gene, and the double
                terminator. The sequences for these were retrieved from the iGEM
                repository for pBlind, the iGEM repository for RBS34, Kegg and
                the iGEM repository for the double terminator respectively.
              </p>
              <p className="text-xl mb-6">
                The activation cassette and the response cassette were then
                joined by a linker sequence and inserted into the plasmid
                backbone pBBR1-MCS5 using SnapGene. The insert was cloned into
                the multiple cloning site (MCS) using BamHI and EcoRI. It was
                inserted inside the lacZ-alpha gene.
              </p>
              <p className="text-xl mb-6">
                The gene knockout in <i>Cupriavidus necator</i> H16 was done with the
                help of suicide plasmids using plasmid conjugation. The backbone
                of our suicide plasmid was chosen as pK18msB. The homologous
                arms were retrieved from the genome sequence of Cupriavidus
                necator H16. The restriction endonucleases HindIII and EcoRI
                were used to insert the homologous arms.
              </p>
            </section>

            {/* SECTION: Test */}
            <section className="mb-12">
              <div id="Test" className="scroll-mt-32" />
              <h2 className="text-6xl font-semibold mb-4">Test</h2>
              <div className="h-[2px] bg-black/30 mb-8" />
              <p className="text-xl mb-6">
                Initially, we plan on testing the system in-silico to make sure
                that the suicide plasmid for gbd knockout and the light
                sensitive plasmid have assembled correctly, maintain appropriate
                promoter terminator spacing, and exhibit no structural problems.
                Next, we plan on assessing the constructs' suitability for
                transfer via Escherichia coli S17-1 conjugation and ensuring
                that the homology arms are appropriately positioned for
                <i>Cupriavidus necator</i> recombination.
              </p>
              <p className="text-xl mb-6">
                We propose to verify the EL222 construct. Following this, we
                will check the basal expression levels by measuring the reporter
                output, light induced activation, light intensity response,
                exposure time response, and reversibility.
              </p>
            </section>

            {/* SECTION: Learn */}
            <section className="mb-12">
              <div
                id="Learn"
                className="scroll-mt-32"
              />
              <h2 className="text-6xl font-semibold mb-4">
                Learn
              </h2>
              <div className="h-[2px] bg-black/30 mb-8" />
              <p className="text-xl mb-6">
                The data obtained from testing phase would be analyzed to
                identify the limitations in the 4HB incorporation and the issues
                faced in the pathway flux. The insights gained help in the
                promoter strength,gene expression level and the culture
                condiotions to be refined. Using this learning the next
                interation step would be designed accordingly to enable better
                polymer yield, composition and properties and thereby improving
                the overall effiency of the project.
              </p>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Engineering;

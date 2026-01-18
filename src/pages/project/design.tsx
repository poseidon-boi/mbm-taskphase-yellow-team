import { useEffect } from "react";
import design1 from "../../assets/design1.png";
import design2 from "../../assets/desing2.png";

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
        <h1 className="text-6xl font-bold">Design</h1>
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
          <div className="bg-[#FEFAE0] text-black p-16 rounded-lg shadow-2xl space-y-20">

            {/* ===== GOAL ===== */}
            <section id="Goal" className="scroll-mt-32">
              <h2 className="text-4xl font-semibold mb-4">GOAL</h2>
              <div className="h-[2px] bg-black/30 mb-6" />
              <p className="text-xl">
                To ensure that there is 4HB production only in the presence of blue light, we planned to introduce a light sensitive promoter. To do that, it was necessary to knock out the native gene in the genome to prevent constitutive 4HB production even in the absence of blue light.
              </p>
            </section>

            {/* ===== EL222 SYSTEM ===== */}
            <section id="EL222-System" className="scroll-mt-32">
              <h2 className="text-4xl font-semibold mb-4">
                The EL222 System
              </h2>
              <div className="h-[2px] bg-black/30 mb-6" />

              <p className="text-xl mb-6">
                We intend to regulate the expression of the gbd gene in Cupriavidus necator H16 by using a light inducible promoter system. The EL222 system has been well studied across several bacterial species, particularly Escherichia coli (Camsund et al., 2021), yeast species such as Yarrowia lipolytica (Wang et al., 2022) and mammalian species (Motta-Mena et al., 2014). The light responsive transcription factor EL222 has been derived from Erythrobacter litoralis HTCC2594.

              </p>

              <p className="text-xl mb-6">
                The system mainly consists of 2 domains: the activation cassette and the response cassette (Wang et al., 2022). The activation cassette is responsible for the production of EL222 DNA binding protein.
</p>

              <p className="text-xl">
               The system mainly consists of 2 domains: the activation cassette and the response cassette (Wang et al., 2022). The activation cassette is responsible for the production of EL222 DNA binding protein.
</p>
<p className="text-xl">EL222 consists of 2 domains: a light oxygen voltage domain (LOV) in the N-terminal half, and a LuxR type Helix-Turn-Helix (HTH) DNA binding sequence in the C-terminal half (Takakado et al., 2018). In the dark, the LOV domain binds the HTH domain, covering the helix, preventing dimerization and binding to the DNA. Blue light illumination at 450 nm causes a protein-flavin adduct to be formed within the LOV domain, disrupting the LOV-HTH interaction and allowing the EL222 to bind to the DNA (Motta-Mena et al., 2014).

               </p>
               <div className="mt-8 text-gray-500 text-center">
    <img
      src={design1}
      alt="Structure of the EL222 light-inducible transcription unit"
      className="mx-auto w-full max-w-xl"
    />
    <p className="mt-2 text-sm">
      Fig. 1: Structure of the EL222 light-inducible transcription unit used in <em>Escherichia coli</em> (Meng et al., 2024).
    </p>
  </div>
  <div className="mt-8 text-gray-500 text-center">
    <img
      src={design2}
      alt="Structure of the EL222 light-inducible transcription unit"
      className="mx-auto w-full max-w-xl"
    />
    <p className="mt-2 text-sm">
     Fig 2: The binding of the EL222 complex in presence of light in eukaryotic organisms. (Motta-Mena et al., 2014).  </p>
  </div>
            </section>

            {/* ===== ACTIVATION CASSETTE ===== */}
            <section id="Activation-Cassette" className="scroll-mt-32">
              <h2 className="text-4xl font-semibold mb-4">
                The Activation Cassette
              </h2>
              <div className="h-[2px] bg-black/30 mb-6" />

              <p className="text-xl mb-6">
                The general structure of the activation cassette consists of the following parts:
</p>

              <ol className="list-decimal ml-8 text-xl mb-6 space-y-2">
                <li>A promoter</li>
                <li>Ribosomal Binding Sites (RBS)</li>
                <li>EL222’s CDS</li>
                <li>Terminator</li>
              </ol>

              <p className="text-xl mb-6">
                In our activation cassette construction, we have used bacterial specific promoters, RBS, and terminators.
              </p>

              <h3 className="text-2xl font-semibold mb-2">Promoter</h3>
              <p className="text-xl mb-6">
                The promoter we have used is pTac, a strong bacterial promoter used to drive expression of EL222. In a study conducted on our chassis, Cupriavidus necator H16, it was observed that pTac was the strongest promoter driving constitutive production of the reporter gene GFP (Fukui et al., 2011). The sequence for this promoter was obtained from the plasmid pz8-pTac from the Addgene repository.
</p>

              <h3 className="text-2xl font-semibold mb-2">
                Ribosome Binding Site
              </h3>
              <p className="text-xl mb-6">
                The RBS we have used is RBS1. From studies, it was concluded that the fluorescence observed depended upon the relative strength of the RBS used, with RBS1 showing high levels of expression. The sequence for the same was obtained from the same study, with the SD sequence flanked by spacers (Alagesan et al., 2018). It was inserted downstream of the promoter.
</p>

              <h3 className="text-2xl font-semibold mb-2">EL222 CDS</h3>
              <p className="text-xl mb-6">
                The complete sequence for the EL222 protein was obtained from NCBI. It consists of 675 base pairs. This was inserted downstream of the RBS1.
</p>

              <h3 className="text-2xl font-semibold mb-2">Terminator</h3>
              <p className="text-xl">
                The terminator we have used is rrnbT1. The highly stable hairpin structure of this terminator causes the detachment of the RNAP from the DNA. It is characterized to have more than 95% strength in termination. The part was characterized on Escherichia coli BW25113. The termination efficiency was calculated by measuring the fluorescence from the reporter gene GFP and RFP (Cambray et al., 2013).
</p>
            </section>

            {/* ===== RESPONSE CASSETTE ===== */}
            <section id="Response-Cassette" className="scroll-mt-32">
              <h2 className="text-4xl font-semibold mb-4">
                The Response Cassette
              </h2>
              <div className="h-[2px] bg-black/30 mb-6" />

              <p className="text-xl mb-6">
                The response cassette consists of the following components:
              </p>

              <ol className="list-decimal ml-8 text-xl mb-6 space-y-2">
                <li>C120 recognition sequences</li>
                <li>A minimal promoter</li>
                <li>A ribosome binding site</li>
                <li>The gbd coding sequence</li>
                <li>A transcription terminator</li>
              </ol>

              <p className="text-xl mb-6">
                C120 is the DNA recognition sequence bound by the HTH
                domain of EL222. The number of C120 copies directly affects
                transcriptional output. Studies showed that five copies
                yielded maximum reporter expression.
              </p>

              <p className="text-xl mb-6">
                The minimal promoter used was the luxI promoter, which is
                directly compatible with EL222. The RBS used was RBS34,
                selected for its ability to minimize transcriptional
                leakage.
              </p>

              <p className="text-xl">
                A double terminator composed of BBa_B0010 and BBa_B0012 was
                used to prevent transcriptional read-through.
              </p>
            </section>

            {/* ===== LINKAGE & ACTIVITY ===== */}
            <section id="Linkage" className="scroll-mt-32">
              <h2 className="text-4xl font-semibold mb-4">Linkage</h2>
              <div className="h-[2px] bg-black/30 mb-6" />
              <p className="text-xl">
                The activation and response cassettes were joined using a
                linker sequence lacking promoters, ribosome binding sites,
                and start codons. This minimized transcriptional
                interference, insulated adjacent genetic elements, and
                ensured correct transcriptional orientation.
              </p>
            </section>

            <section id="Activity-Variation" className="scroll-mt-32">
              <h2 className="text-4xl font-semibold mb-4">
                Variation of EL222 Activity
              </h2>
              <div className="h-[2px] bg-black/30 mb-6" />
              <p className="text-xl">
                Both blue light intensity and exposure duration influence
                EL222 activity. Increasing either parameter resulted in
                increased reporter gene fluorescence, demonstrating tunable
                transcriptional control.
              </p>
            </section>

            {/* ===== PROMOTER CONFIRMATION ===== */}
            <section id="Promoter-Confirmation" className="scroll-mt-32">
              <h2 className="text-4xl font-semibold mb-4">
                Promoter Confirmation
              </h2>
              <div className="h-[2px] bg-black/30 mb-6" />
              <p className="text-xl">
                Promoter prediction analysis confirmed that the gbd gene
                and its downstream gene are controlled by separate
                promoters, validating independent regulation.
              </p>
            </section>

            {/* ===== PLASMID DESIGN ===== */}
            <section id="Plasmid-Design" className="scroll-mt-32">
              <h2 className="text-4xl font-semibold mb-4">
                Plasmid Design
              </h2>
              <div className="h-[2px] bg-black/30 mb-6" />
              <p className="text-xl">
                Homologous recombination was selected for precise knockout
                of the gbd gene using a suicide plasmid delivered via
                conjugation from E. coli S17-1.
              </p>
            </section>

            {/* ===== LIGHT-SENSITIVE PLASMID ===== */}
            <section id="Light-Sensitive-Plasmid" className="scroll-mt-32">
              <h2 className="text-4xl font-semibold mb-4">
                Plasmid for the Light-Sensitive Promoter
              </h2>
              <div className="h-[2px] bg-black/30 mb-6" />
              <p className="text-xl">
                The pBBR1MCS-5 backbone was selected to clone the activation
                and response cassettes into the MCS region, enabling
                blue-white screening for transformant selection.
              </p>
            </section>

            {/* ===== REFERENCES & PARTS ===== */}
            <section id="References" className="scroll-mt-32">
              <h2 className="text-4xl font-semibold mb-4">References</h2>
              <div className="h-[2px] bg-black/30 mb-6" />
              <ol className="list-decimal ml-8 space-y-4 text-xl">
  <li>
    Camsund, D., Jaramillo, A., & Lindblad, P. (2021). Engineering of a
    Promoter Repressed by a Light-Regulated Transcription Factor in
    Escherichia coli. <i>BioDesign Research</i>, 2021, 9857418.{" "}
    <a
      href="https://doi.org/10.34133/2021/9857418"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#dda15e] hover:underline"
    >
      https://doi.org/10.34133/2021/9857418
    </a>
  </li>

  <li>
    Wang, Z., Yan, Y., & Zhang, H. (2022). A Single-Component Blue
    Light-Induced System Based on EL222 in Yarrowia lipolytica.{" "}
    <i>International Journal of Molecular Sciences</i>, 23(11), 6344.{" "}
    <a
      href="https://doi.org/10.3390/ijms23116344"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#dda15e] hover:underline"
    >
      https://doi.org/10.3390/ijms23116344
    </a>
  </li>

  <li>
    Motta-Mena, L. B., Reade, A., Mallory, M. J., Glantz, S., Weiner,
    O. D., Lynch, K. W., & Gardner, K. H. (2014). An optogenetic gene
    expression system with rapid activation and deactivation kinetics.{" "}
    <i>Nature Chemical Biology</i>, 10(3), 196–202.{" "}
    <a
      href="https://doi.org/10.1038/nchembio.1430"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#dda15e] hover:underline"
    >
      https://doi.org/10.1038/nchembio.1430
    </a>
  </li>

  <li>
    Takakado, A., Nakasone, Y., & Terazima, M. (2018). Sequential DNA
    binding and dimerization processes of the photosensory protein
    EL222. <i>Biochemistry</i>, 57(10), 1603–1610.{" "}
    <a
      href="https://doi.org/10.1021/acs.biochem.7b01206"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#dda15e] hover:underline"
    >
      https://doi.org/10.1021/acs.biochem.7b01206
    </a>
  </li>

  <li>
    Meng, F., Xu, Z., Fan, X., Wang, Z., & Zhou, L. (2024). Optogenetic
    Fine-Tuning of Sus scrofa Basic Fibroblast Growth Factor Expression
    in Escherichia coli. <i>Fermentation</i>, 10(12), 612.{" "}
    <a
      href="https://doi.org/10.3390/fermentation10120612"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#dda15e] hover:underline"
    >
      https://doi.org/10.3390/fermentation10120612
    </a>
  </li>

  <li>
    Fukui, T., Ohsawa, K., Mifune, J., Orita, I., & Nakamura, S. (2011).
    Evaluation of promoters for gene expression in
    polyhydroxyalkanoate-producing Cupriavidus necator H16.{" "}
    <i>Applied Microbiology and Biotechnology</i>, 89(5), 1527–1536.{" "}
    <a
      href="https://doi.org/10.1007/s00253-011-3100-2"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#dda15e] hover:underline"
    >
      https://doi.org/10.1007/s00253-011-3100-2
    </a>
  </li>

  <li>
    Alagesan, S., Hanko, E. K. R., Malys, N., Ehsaan, M., Winzer, K., &
    Minton, N. P. (2018). Functional Genetic Elements for Controlling
    Gene Expression in Cupriavidus necator H16.{" "}
    <i>Applied and Environmental Microbiology</i>, 84(19).{" "}
    <a
      href="https://doi.org/10.1128/aem.00878-18"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#dda15e] hover:underline"
    >
      https://doi.org/10.1128/aem.00878-18
    </a>
  </li>

  <li>
    Cambray, G., Guimaraes, J. C., Mutalik, V. K., Lam, C., Mai, Q.-A.,
    Thimmaiah, T., Carothers, J. M., Arkin, A. P., & Endy, D. (2013).
    Measurement and modeling of intrinsic transcription terminators.{" "}
    <i>Nucleic Acids Research</i>, 41(9), 5139–5148.{" "}
    <a
      href="https://doi.org/10.1093/nar/gkt163"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#dda15e] hover:underline"
    >
      https://doi.org/10.1093/nar/gkt163
    </a>
  </li>

  <li>
    Huang, H.-H., Camsund, D., Lindblad, P., & Heidorn, T. (2010).
    Design and characterization of molecular tools for a Synthetic
    Biology approach towards developing cyanobacterial biotechnology.{" "}
    <i>Nucleic Acids Research</i>, 38(8), 2577–2593.{" "}
    <a
      href="https://doi.org/10.1093/nar/gkq164"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#dda15e] hover:underline"
    >
      https://doi.org/10.1093/nar/gkq164
    </a>
  </li>

  <li>
    Ramon, A., & Smith, H. O. (2010). Single-step linker-based
    combinatorial assembly of promoter and gene cassettes for pathway
    engineering. <i>Biotechnology Letters</i>, 33(3), 549–555.{" "}
    <a
      href="https://doi.org/10.1007/s10529-010-0455-x"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#dda15e] hover:underline"
    >
      https://doi.org/10.1007/s10529-010-0455-x
    </a>
  </li>

  <li>
    Jayaraman, P., Devarajan, K., Chua, T. K., Zhang, H., Gunawan, E.,
    & Poh, C. L. (2016). Blue light-mediated transcriptional activation
    and repression of gene expression in bacteria.{" "}
    <i>Nucleic Acids Research</i>, 44(14), 6994–7005.{" "}
    <a
      href="https://doi.org/10.1093/nar/gkw548"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#dda15e] hover:underline"
    >
      https://doi.org/10.1093/nar/gkw548
    </a>
  </li>

  <li>
    Adams, J. D., Sander, K. B., Criddle, C. S., Arkin, A. P., & Clark,
    D. S. (2023). Engineering osmolysis susceptibility in Cupriavidus
    necator and Escherichia coli for recovery of intracellular products.{" "}
    <i>Microbial Cell Factories</i>, 22(1), 69.{" "}
    <a
      href="https://doi.org/10.1186/s12934-023-02064-8"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#dda15e] hover:underline"
    >
      https://doi.org/10.1186/s12934-023-02064-8
    </a>
  </li>

  <li>
    Gascoyne, J. L., Bommareddy, R. R., Heeb, S., & Malys, N. (2021).
    Engineering Cupriavidus necator H16 for the autotrophic production
    of (R)-1,3-butanediol. <i>Metabolic Engineering</i>, 67, 262–276.{" "}
    <a
      href="https://doi.org/10.1016/j.ymben.2021.06.010"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#dda15e] hover:underline"
    >
      https://doi.org/10.1016/j.ymben.2021.06.010
    </a>
  </li>

  <li>
    Hong, Y.-G., Moon, Y.-M., Hong, J.-W., Choi, T.-Ri., Jung, H.-R.,
    Yang, S.-Y., Jang, D.-W., Park, Y.-R., Brigham, C. J., Kim, J.-S.,
    Lee, Y.-K., & Yang, Y.-H. (2019). Discarded Egg Yolk as an Alternate
    Source of Poly(3-Hydroxybutyrate-co-3-hydroxyhexanoate).{" "}
    <i>Journal of Microbiology and Biotechnology</i>, 29(3), 382–391.{" "}
    <a
      href="https://doi.org/10.4014/jmb.1811.11028"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#dda15e] hover:underline"
    >
      https://doi.org/10.4014/jmb.1811.11028
    </a>
  </li>

  <li>
    Tang, R., Weng, C., Peng, X., & Han, Y. (2020). Metabolic
    engineering of Cupriavidus necator H16 for improved
    chemoautotrophic growth and PHB production under oxygen-limiting
    conditions. <i>Metabolic Engineering</i>, 61, 11–23.{" "}
    <a
      href="https://doi.org/10.1016/j.ymben.2020.04.009"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#dda15e] hover:underline"
    >
      https://doi.org/10.1016/j.ymben.2020.04.009
    </a>
  </li>
</ol>

            </section>

            <section id="Parts-Used" className="scroll-mt-32">
              <h2 className="text-5xl font-semibold mb-4">Parts Used</h2>
              <div className="h-[2px] bg-black/30 mb-6" />
              <ol className="list-decimal ml-8 space-y-4 text-xl">
  <li>
    Part: BBa_K2332002 – parts.igem.org (2017).{" "}
    <i>Parts.igem.org</i>{" "}
    <a
      href="https://parts.igem.org/Part:BBa_K2332002"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#dda15e] hover:underline"
    >
      https://parts.igem.org/Part:BBa_K2332002
    </a>
  </li>

  <li>
    Part: BBa_B0034 – parts.igem.org (n.d.).{" "}
    <i>Parts.igem.org</i>{" "}
    <a
      href="https://parts.igem.org/Part:BBa_B0034"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#dda15e] hover:underline"
    >
      https://parts.igem.org/Part:BBa_B0034
    </a>
  </li>

  <li>
    Shetty, R. (2003, July 17). Part: BBa_B0015.{" "}
    <i>Parts.igem.org</i>{" "}
    <a
      href="https://parts.igem.org/Part:BBa_B0015"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#dda15e] hover:underline"
    >
      https://parts.igem.org/Part:BBa_B0015
    </a>
  </li>
</ol>

            </section>

          </div>
        </main>
      </div>
    </div>
  );
}

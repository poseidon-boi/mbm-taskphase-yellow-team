function Software() {
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
        <h1 className="text-6xl font-bold">{renderTitleHover("Software")}</h1>
      </div>

      {/* ===== TWO-COLUMN ROW ===== */}
      <div className="flex w-full min-h-screen px-10">
        {/* LEFT COLUMN — STICKY */}
        <aside className="w-[10%] px-8 sticky top-32 mt-10 self-start">
          <nav className="flex flex-col gap-6 text-xl">
            <a
              href="#Software"
              className="group relative w-fit text-white/80 hover:text-white"
            >
              Software
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#dda15e] transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#Feature Set"
              className="group relative w-fit text-white/80 hover:text-white"
            >
              Feature Set
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#dda15e] transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#Target Set/Software Outputs"
              className="group relative w-fit text-white/80 hover:text-white"
            >
              Target Set/Software Outputs
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#dda15e] transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#Data Curation"
              className="group relative w-fit text-white/80 hover:text-white"
            >
              Data Curation
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#dda15e] transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#Approach"
              className="group relative w-fit text-white/80 hover:text-white"
            >
              Approach
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#dda15e] transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#Usage"
              className="group relative w-fit text-white/80 hover:text-white"
            >
              Usage
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#dda15e] transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#Future Works"
              className="group relative w-fit text-white/80 hover:text-white"
            >
              Future Works
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#dda15e] transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#References"
              className="group relative w-fit text-white/80 hover:text-white"
            >
              References
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#dda15e] transition-all duration-300 group-hover:w-full" />
            </a>
          </nav>
        </aside>

        {/* RIGHT COLUMN — CONTENT */}
        <main className="w-[90%] pb-32 ml-10">
  <div className="bg-[#FEFAE0] text-black p-16 rounded-lg shadow-2xl">

    {/* ===== SOFTWARE ===== */}
    <section className="mb-12">
      <div id="Software" className="scroll-mt-32" />
      <p className="text-xl mb-6">
        An interactive pathway simulator using generative AI that can predict and
        simulate the effects of genetic modification such as knockout and
        overexpression on the cell.
      </p>

      <p className="text-xl mb-6">
        While tracing the formation of P(3HB-o-4HB) via the butanoate pathway of
        chassis <em>Cupriavidus necator H16</em> , there were various time-consuming
        hurdles that hindered the efficiency of the project such as:
      </p>

      <ul className="list-disc pl-6 space-y-4 text-xl mb-6">
        <li>
          The effects of knocking out the gene of interest on target and competing
          pathways.
        </li>
        <li>
          Accumulation of intermediary metabolites that could compromise cell
          health or product yield.
        </li>
        <li>
          Estimating and quantifying overall flux and yield changes.
        </li>
      </ul>

      <p className="text-xl mb-6">
        Although existing software partially addresses these challenges, most are
        strain-specific (e.g., <em>Escherichia. coli</em>). They lack gene essentiality and do not consider pathway competency. (Choudhury et al., 2024). 
      </p>

      <p className="text-xl">
        Hence, this idea provides a one-stop dynamic solution to pathway mapping
        using interactive simulations to support informed decision-making.
      </p>
    </section>

    {/* ===== FEATURE SET ===== */}
    <section className="mb-12">
      <div id="Feature Set" className="scroll-mt-32" />
      <h2 className="text-6xl font-semibold mb-4">Feature Set</h2>
      <div className="h-[2px] bg-black/30 mb-8" />

      <ul className="list-disc pl-6 space-y-4 text-xl">
        <li><strong>Host organism:</strong> The strain of bacteria used for the job such as in this case <em>Cupriavidus necator  H16</em>.
        <li><strong>Load:</strong> Plasmid size (kb)</li>
        <li><strong>Gene of interest:</strong> The gene that is undergoing modification.</li>
        <li><strong>Nature of perturbation:</strong> Modification to be applied such as knockout or overexpression.</li>
        <li><strong>Target pathway:</strong> Native metabolic pathway</li>
        <li><strong>Competing pathways:</strong> Other pathways that are connected to the substrate or intermediary metabolites</li>
        <li><strong>Substrate:</strong> The starting compound from which the mapping begins</li>
        <li><strong>Product:</strong> Compound of interest that is finally being affected by the perturbation.</li>
        <li><strong>Nutrient medium</strong></li>
        <li><strong>Oxygen condition</strong></li>
        <li>
          <strong>Objective mode:</strong> Helps the model pinpoint a specific type of outcomes since in this type of computations there are large number of possibilities.
        </li>
      </ul>
    </section>

    {/* ===== TARGET SET ===== */}
    <section className="mb-12">
      <div id="Target Set" className="scroll-mt-32" />
      <h2 className="text-6xl font-semibold mb-4">
        Target Set / Software Outputs
      </h2>
      <div className="h-[2px] bg-black/30 mb-8" />

      <ul className="list-disc pl-6 space-y-4 text-xl">
        <li>Flux changes</li>
        <li>Yield changes</li>
        <li>Accumulation risk</li>
      </ul>
    </section>

    {/* ===== DATA CURATION ===== */}
    <section className="mb-12">
      <div id="Data Curation" className="scroll-mt-32" />
      <h2 className="text-6xl font-semibold mb-4">Data Curation</h2>
      <div className="h-[2px] bg-black/30 mb-8" />

      <ol className="list-decimal pl-6 space-y-4 text-xl">
        <li>
          Feature set data for <em>Cupriavidus necator</em> H16 derived from
          perturbation modeling studies (Pearcy et al., 2022).
        </li>
        <li>BRENDA database for kinetic parameters.</li>
        <li>KEGG database for pathway information.</li>
      </ol>
    </section>

    {/* ===== APPROACH ===== */}
    <section className="mb-12">
      <div id="Approach" className="scroll-mt-32" />
      <h2 className="text-6xl font-semibold mb-4">Approach</h2>
      <div className="h-[2px] bg-black/30 mb-8" />

      <p className="text-xl mb-6">
        The computational pipeline consists of three layers:
      </p>

      <ul className="list-disc pl-6 space-y-4 text-xl">
        <li>
          <strong>Graph Neural Networks:</strong> Captures the topology of metabolic pathways by converting them into graphs in which each node represents reactions that are connected by edges that represent a particular shared metabolite. 
          Hence this allows the model to trace any ripple effect that propagates through the entire network for a specific perturbation. (Hasibi et al., 2024).
        </li>
        <li>
          <strong>Variational Autoencoders:</strong>Generative model that learns a smooth, probabilistic latent space, allowing it not only to compress and reconstruct data but 
          also to generate entirely new, realistic samples. This helps predicting and analysing flux distributions across the pathway. (Choudhury et al., 2024)
        </li>
        <li>
          <strong>Reinforcement Learning Agent (RLA):</strong>  Optimizes flux allocation when multiple metabolic pathways compete for the same substrate. By learning optimal trade-offs through trial-and-error in simulated environments. 
          Current flux balance analysis algorithms are modelled to perform with a particular objective. (Espinel-Ríos et al., 2025)
        </li>
      </ul>
    </section>

    {/* ===== USAGE ===== */}
    <section className="mb-12">
      <div id="Usage" className="scroll-mt-32" />
      <h2 className="text-6xl font-semibold mb-4">Usage</h2>
      <div className="h-[2px] bg-black/30 mb-8" />

      <p className="text-xl mb-6">
        The given model can have a wide range of applications from an academic and research application to an industrial application
      </p>

      <ul className="list-disc pl-6 space-y-4 text-xl">
        <li>he model can prove to be a powerful and insightful tool in research 
          and hypothesis generation and helping them anticipate the effects of 
          all modifications that they could plan and apply to make educated decisions.</li>
        <li>Speed up and optimise genetic engineering processes by avoiding evitable mistakes.</li>
        <li>
          The model is capable of simulate the effects of knocking out pHAC gene in the butanoate pathway of <em>Cupriavidus necator H16</em>.
        </li>
      </ul>
    </section>

    {/* ===== FUTURE WORKS ===== */}
    <section className="mb-12">
      <div id="Future Works" className="scroll-mt-32" />
      <h2 className="text-6xl font-semibold mb-4">Future Works</h2>
      <div className="h-[2px] bg-black/30 mb-8" />

      <ul className="list-disc pl-6 space-y-4 text-xl">
        <li>The model's organism library can be expanded to various other bacteria.</li>
        <li>Can be integrated into real life research environments by integrating more laboratory specific parameters.</li>
        <li>
          ransfer learning from model organisms could enable accurate flux predictions for understudied species with minimal experimental data.
        </li>
      </ul>
    </section>

    {/* ===== REFERENCES ===== */}
    <section>
      <div id="References" className="scroll-mt-32" />
      <h2 className="text-6xl font-semibold mb-4">References</h2>
      <div className="h-[2px] bg-black/30 mb-8" />

      <ul className="list-disc pl-6 space-y-6 text-xl">
        <li>
          Choudhury et al. (2024). <em>Nature Catalysis</em>.{" "}
          <a href="https://doi.org/10.1038/s41929-024-01220-6" target="_blank" rel="noopener noreferrer"
             className="text-[#99581E] hover:underline break-all">
            https://doi.org/10.1038/s41929-024-01220-6
          </a>
        </li>
        <li>
          Espinel-Ríos et al. (2025).{" "}
          <a href="https://doi.org/10.1002/bit.70077" target="_blank" rel="noopener noreferrer"
            className="text-[#99581E] hover:underline break-all">
            https://doi.org/10.1002/bit.70077
          </a>
        </li>
        <li>
          Hasibi et al. (2024). <em>NPJ Systems Biology and Applications</em>.{" "}
          <a href="https://doi.org/10.1038/s41540-024-00348-2" target="_blank" rel="noopener noreferrer" className="text-[#99581E] hover:underline break-all">
            https://doi.org/10.1038/s41540-024-00348-2
          </a>
        </li>
        <li>
          Pearcy et al. (2022). <em>PLoS Computational Biology</em>.{" "}
          <a href="https://doi.org/10.1371/journal.pcbi.1010106" target="_blank" rel="noopener noreferrer" className="text-[#99581E] hover:underline break-all">
            https://doi.org/10.1371/journal.pcbi.1010106
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

export default Software;

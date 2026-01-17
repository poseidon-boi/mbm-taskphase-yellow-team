import sdg3 from "../../assets/sdg3.png";
import sdg9 from "../../assets/sdg9.png";
import sdg12 from "../../assets/sdg12.png";
import sdg14 from "../../assets/sdg14.png";

function Sustainability() {
  const renderTitleHover = (text: string) =>
    text.split("").map((char, i) => (
      <span
        key={i}
        className="inline-block transition-colors duration-200 hover:text-[#dda13e]"
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  return (
    <div className="w-full bg-[#1F2A13] text-white">
      {/* ===== TITLE ROW ===== */}
      <div className="pt-32 pb-24 flex justify-center">
        <h1 className="text-6xl font-bold">
          {renderTitleHover("Sustainability")}
        </h1>
      </div>

      {/* ===== TWO-COLUMN LAYOUT ===== */}
      <div className="flex w-full min-h-screen px-10 gap-5">
        {/* LEFT SIDEBAR */}
        <aside className="w-[10%] px-6 sticky mt-5 top-32 self-start">
          <nav className="flex flex-col gap-7 text-lg">
            <a
              href="#SDG Goals"
              className="group relative w-fit text-white/80 hover:text-white transition-colors"
            >
              SDG Goals
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#dda13e] transition-all duration-300 group-hover:w-full" />
            </a>

            <a
              href="#sdg-3"
              className="group relative w-fit text-white/80 hover:text-white transition-colors"
            >
              SDG 3
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#dda13e] transition-all duration-300 group-hover:w-full" />
            </a>

            <a
              href="#sdg-9"
              className="group relative w-fit text-white/80 hover:text-white transition-colors"
            >
              SDG 9
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#dda13e] transition-all duration-300 group-hover:w-full" />
            </a>

            <a
              href="#sdg-12"
              className="group relative w-fit text-white/80 hover:text-white transition-colors"
            >
              SDG 12
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#dda13e] transition-all duration-300 group-hover:w-full" />
            </a>

            <a
              href="#sdg-14"
              className="group relative w-fit text-white/80 hover:text-white transition-colors"
            >
              SDG 14
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#dda13e] transition-all duration-300 group-hover:w-full" />
            </a>

            <a
              href="#references"
              className="group relative w-fit text-white/80 hover:text-white transition-colors"
            >
              References
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#dda13e] transition-all duration-300 group-hover:w-full" />
            </a>
          </nav>
        </aside>

        {/* RIGHT CONTENT */}
        <main className="w-[90%] pb-32">
          <div className="bg-[#FEFAE0] text-black p-16 rounded-lg shadow-2xl">
            {/* ===== SDG Goals ===== */}
            <section className="mb-14">
              <div id="SDG Goals" className="scroll-mt-32" />
              <h2 className="text-4xl font-semibold mb-4">SDG Goals</h2>
              <div className="h-[2px] bg-black/30 mb-6" />
              <p className="text-xl">
                Our initiative adheres to the United Nations’ 2030 Agenda for
                Sustainable Development and encompasses multiple Sustainable
                Development Goals (SDGs). In addition, we combine synthetic
                biology, sustainable material design, and environmentally
                conscious practices into our project proposal. Through reating a
                new engineered strain of Cupriavidus Necator for the production
                of a biodegradable/copolymer, Poly
                (3-Hydroxybutyrate-co-4-Hydroxybutyrate) we will produce a
                sustainable biomaterial that will ultimately replace lasting
                petroleum products in all fields Where There are currently
                plastic applications. Using Cupriavidus Necator as a source of a
                new sustainable biomass.
              </p>
            </section>

            {/* ===== SDG 3 ===== */}
            <section className="mb-20">
              <div id="sdg-3" className="scroll-mt-32" />

              <h2 className="text-4xl font-semibold mb-4">
                SDG 3: Good Health and Well-being
              </h2>
              <div className="h-[2px] bg-black/30 mb-10" />

              <div className="flex gap-12 items-start">
                {/* LEFT — SDG IMAGE (square, never stretched) */}
                <div
                  className="w-40 md:w-48 lg:w-56 aspect-square flex-shrink-0
                             flex items-center justify-center mt-10"
                >
                  <img
                    src={sdg3}
                    alt="SDG 3"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* RIGHT — TEXT */}
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-2">
                    Goal 3: Ensure healthy lives and promote well-being for all
                    at all ages.
                  </h3>

                  <p className="font-bold text-2xl mt-4">Target 3.9</p>
                  <p className="mb-4 text-lg">
                    By 2030, substantially reduce the number of deaths and
                    illnesses from hazardous chemicals and air, water, and soil
                    pollution and contamination.
                  </p>

                  <p className="text-lg">
                    Biomedical and industrial plastic products made of PCL
                    contribute to the buildup of microplastics, which can lead
                    to inflammation and long-term health challenges due to slow
                    degradation. We address this by developing P(3HB-co-4HB), a
                    completely biodegradable and biocompatible alternative to
                    PCL. This polymer is naturally metabolized by living
                    organisms and, through controlled microstructure regulation,
                    enables safer medical materials—supporting SDG 3 by reducing
                    human exposure to persistent and hazardous plastic waste
                    (Microplastics in Drinking-Water, 2019).
                  </p>
                </div>
              </div>
            </section>

            {/* ===== SDG 9 ===== */}
            <section className="mb-14">
              <div id="sdg-9" className="scroll-mt-32" />
              <h2 className="text-4xl font-semibold mb-4">
                SDG 9: Industry, Innovation and Infrastructure
              </h2>
              <div className="h-[2px] bg-black/30 mb-8" />
              <div className="flex">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    Goal 9: Build resilient infrastructure, promote inclusive
                    and sustainable industrialization, and foster innovation.
                  </h3>

                  <p className="font-bold text-2xl mt-4">Target 9.5</p>
                  <p className="mb-4 text-lg">
                    Enhance scientific research, upgrade the technological
                    capabilities of industrial sectors, and encourage innovation
                    by 2030.
                  </p>
                  <p className="mb-4 text-lg">
                    A synthetic regulatory framework has been developed by us.
                    The synthetic regulatory framework allows for precise
                    regulation of polymer microstructures via biosynthesis
                    instead of using traditional, substrate-dependent approaches
                    to create custom microstructures for polymers. This provides
                    an opportunity to enhance the characteristics and
                    performance of polymers without using modified feedstock. In
                    addition, synthetic regulatory frameworks are modular and
                    scalable, making them a viable option for producing
                    environmentally friendly polymers on a commercial scale.
                    Therefore, as a result of the contributions made by our
                    project to establish microbial biomanufacturing in the
                    design complexity of these new bio-based plastic materials,
                    it is expected to lead to the development of additional
                    innovative industrial processes. (Huong et al., 2021)
                  </p>
                </div>
                <div
                  className="w-40 md:w-48 lg:w-56 aspect-square flex-shrink-0
                             flex items-center justify-center mt-10 ml-5 rounded"
                >
                  <img
                    src={sdg9}
                    alt="SDG 9"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </section>

            {/* ===== SDG 12 ===== */}
            <section className="mb-14">
              <div id="sdg-12" className="scroll-mt-32" />
              <h2 className="text-4xl font-semibold mb-4">
                SDG 12: Responsible Consumption and Production
              </h2>
              <div className="h-[2px] bg-black/30 mb-8" />

              <div className="flex gap-12">
                <div
                  className="w-40 md:w-48 lg:w-56 aspect-square flex-shrink-0
                             flex items-center justify-center mb-2 rounded"
                >
                  <img
                    src={sdg12}
                    alt="SDG 12"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    Goal 12: Ensure sustainable consumption and production
                    patterns.
                  </h3>

                  <p className="font-bold mt-4 text-2xl">Target 12.4 (2020)</p>
                  <p className="mb-4 text-lg">
                    By 2020, achieve the environmentally sound management of
                    chemicals and all wastes throughout their life cycle, and
                    significantly reduce their release to air, water, and soil.
                  </p>
                  <p className="mb-4 text-lg">
                    The world has a huge amount of plastic waste / and
                    microplastics, even though this goal was set for 2020, this
                    demonstrates that there is still very much need for new
                    solutions using more sustainable materials. This project
                    will be part of the global effort to create products made
                    from sustainable materials to replace the traditional
                    petroleum based plastics in production, using a biologically
                    based polymer that doesn't create long lived microplas
                  </p>
                </div>
              </div>
            </section>

            {/* ===== SDG 14 ===== */}
            <section className="mb-14">
              <div id="sdg-14" className="scroll-mt-32" />
              <h2 className="text-4xl font-semibold mb-4">
                SDG 14: Life Below Water
              </h2>
              <div className="h-[2px] bg-black/30 mb-8" />

              <div className="flex">
                {/* LEFT — TEXT */}
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    Goal 14: Conserve and sustainably use the oceans, seas, and
                    marine resources for sustainable development.
                  </h3>

                  <p className="font-bold mt-4 text-2xl">Target 14.1 (2025)</p>
                  <p className="mb-4 text-lg">
                    By 2025, prevent and significantly reduce marine pollution
                    of all kinds, particularly from land-based activities,
                    including marine debris and microplastics.
                  </p>

                  <p className="mb-4 text-lg">
                    Plastic waste severely impacts marine ecosystems and affects
                    all levels of ocean life. While the global objective of
                    eliminating marine plastic pollution remains unchanged,
                    long-term and sustainable solutions are still urgently
                    needed. Our project addresses this challenge at the source
                    by developing biodegradable plastic alternatives that can
                    replace conventional long-lasting plastics in everyday
                    applications.
                  </p>

                  <p className="mb-4 text-lg">
                    The introduction of <em>P(3HB-co-4HB)</em> as a sustainable
                    biopolymer provides a promising pathway toward reducing
                    microplastic accumulation in aquatic environments. By
                    enabling the replacement of persistent plastics with
                    environmentally degradable materials, this approach directly
                    supports the objectives of <strong>SDG 14</strong> and
                    promotes long-term ocean health (Lu et al., 2018).
                  </p>
                </div>

                {/* RIGHT — SDG IMAGE */}
                <div
                  className="w-40 md:w-48 lg:w-56 aspect-square flex-shrink-0
                 flex items-center justify-center mt-10 ml-4 rounded"
                >
                  <img
                    src={sdg14}
                    alt="SDG 14 – Life Below Water"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </section>

            {/* ===== REFERENCES ===== */}
            <section className="mb-14">
              <div id="references" className="scroll-mt-32" />
              <h2 className="text-4xl font-semibold mb-4">References</h2>
              <div className="h-[2px] bg-black/30 mb-8" />

              <ul className="list-disc pl-6 space-y-4 text-xl">
                <li>
                  Huong, K. H., Sevakumaran, V., & Amirul, A. A. (2021).{" "}
                  <em>
                    P(3HB-co-4HB) as high value polyhydroxyalkanoate: its
                    development over recent decades and current advances.
                  </em>{" "}
                  Critical Reviews in Biotechnology, 41(4), 474–490. Taylor and
                  Francis Ltd.{" "}
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
                  Koller, M., Maršálek, L., de Sousa Dias, M. M., & Braunegg, G.
                  (2017).{" "}
                  <em>
                    Producing microbial polyhydroxyalkanoate (PHA) biopolyesters
                    in a sustainable manner.
                  </em>{" "}
                  New Biotechnology, 37, 24–38. Elsevier B.V.{" "}
                  <a
                    href="https://doi.org/10.1016/j.nbt.2016.05.001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#99581E] hover:underline break-all"
                  >
                    https://doi.org/10.1016/j.nbt.2016.05.001
                  </a>
                </li>

                <li>
                  Lu, B., Wang, G. X., Huang, D., Ren, Z. L., Wang, X. W., Wang,
                  P. L., Zhen, Z. C., Zhang, W., & Ji, J. H. (2018).{" "}
                  <em>
                    Comparison of PCL degradation in different aquatic
                    environments: Effects of bacteria and inorganic salts.
                  </em>{" "}
                  Polymer Degradation and Stability, 150, 133–139.{" "}
                  <a
                    href="https://doi.org/10.1016/j.polymdegradstab.2018.02.002"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#99581E] hover:underline break-all"
                  >
                    https://doi.org/10.1016/j.polymdegradstab.2018.02.002
                  </a>
                </li>

                <li>
                  World Health Organization. (2019).{" "}
                  <em>Microplastics in drinking-water.</em>{" "}
                  <a
                    href="https://www.who.int/publications/i/item/9789241516198"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#99581E] hover:underline break-all"
                  >
                    https://www.who.int/publications/i/item/9789241516198
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

export default Sustainability;

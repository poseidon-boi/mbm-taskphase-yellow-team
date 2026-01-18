

function Experiments() {
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
      {/* ===== TITLE ROW ===== */}
      <div className="pt-32 pb-24 flex justify-center">
        <h1 className="text-6xl font-bold">
          {renderTitleHover("Experiments")}
        </h1>
      </div>

      <div className="flex w-full min-h-screen px-10 justify-center">
        {/* MAIN CONTENT AREA */}
        <main className="w-full max-w-5xl pb-32">
          <div className="bg-[#FEFAE0] text-black p-16 rounded-lg shadow-2xl space-y-20">
            
            {/* 1. Media Preparation */}
            <section id="Media Preparation">
              <h2 className="text-5xl font-semibold mb-4 text-black drop-shadow-sm">1. Media Preparation</h2>
              <div className="h-[2px] bg-black/20 mb-8" />
              <p className="text-xl mb-4 font-bold">Aim: To prepare the media required to cultivate bacteria.</p>
              
              <h3 className="text-2xl font-bold mb-2">Materials Required:</h3>
              <div className="text-lg mb-6 leading-relaxed">
                <p className="font-semibold">Schlegel’s Mineral Medium Components (g/L)</p>
                <ul className="list-disc ml-6 mb-4">
                  <li>Na₂HPO₄ – 9.1</li>
                  <li>KH₂PO₄ – 1.5</li>
                  <li>MgSO₄ – 0.2</li>
                  <li>Ferric citrate (C₆H₅O₇Fe) – 0.025</li>
                </ul>
                <p className="font-semibold">Trace Element Solution (g/L; added at 3 mL/L medium)</p>
                <ul className="list-disc ml-6 mb-4">
                  <li>H₃BO₃ – 0.288</li>
                  <li>CoCl₂ – 0.030</li>
                  <li>CuSO₄ – 0.080</li>
                  <li>MnCl₂ – 0.008</li>
                  <li>ZnSO₄ – 0.176</li>
                  <li>NaMoO₄ – 0.050</li>
                  <li>NiCl₂ – 0.008</li>
                </ul>
                <p className="font-semibold">Additional Reagents</p>
                <ul className="list-disc ml-6">
                  <li>NH₄Cl (0.4–0.6 g/L; nitrogen source)</li>
                  <li>Fructose (15 g/L; carbon source)</li>
                </ul>
              </div>
              <h3 className="text-2xl font-bold mb-2">Procedure:</h3>
              <ol className="list-decimal ml-6 text-xl space-y-2 mb-8">
                <li>Prepare Schlegel’s mineral medium by dissolving the listed components in distilled water at the specified concentrations.</li>
                <li>Add trace element solution at a final concentration of 3 mL per liter of medium.</li>
                <li>Add NH₄Cl to the medium at a limiting concentration of 0.4–0.6 g/L.</li>
              </ol>
              <cite className="block text-sm text-gray-600 border-l-4 border-[#dda15e] pl-4 italic">
                Zhila, N. O., Sapozhnikova, K. Y., et al. (2023). Processes, 11(5), 1423.
              </cite>
            </section>

            {/* 2. Subculturing bacteria */}
            <section id="Subculturing bacteria">
              <h2 className="text-5xl font-semibold mb-4 text-black">2. Subculturing bacteria</h2>
              <div className="h-[2px] bg-black/20 mb-8" />
              <p className="text-xl mb-4 font-bold">Aim: Cultivate bacterial strains in Schlegel’s mineral medium.</p>
              <h3 className="text-2xl font-bold mb-2">Materials Required:</h3>
              <ul className="list-disc ml-6 text-lg mb-6">
                <li>Schlegel’s Mineral Medium.</li>
                <li>Incubator shaker with temperature control.</li>
                <li>Membrane filtration unit (0.21 µm pore size).</li>
              </ul>
              <h3 className="text-2xl font-bold mb-2">Procedure:</h3>
              <ol className="list-decimal ml-6 text-xl space-y-2 mb-8">
                <li>Transfer the bacterial collection culture from an agar-based nutrient medium into liquid medium containing fructose at 15 g/L as the carbon source.</li>
                <li>Sterilize the fructose solution separately by membrane filtration using a 0.21 µm pore-size filter.</li>
                <li>Inoculate the filtered fructose solution into the growth medium under aseptic conditions.</li>
                <li>Grow the starting culture in 0.5 L flasks for 24 hours.</li>
                <li>Incubate cultures in a thermostatically controlled incubator shaker under appropriate agitation and temperature conditions.</li>
                <li>Use the 24-hour culture as inoculum for subsequent experiments.</li>
                <li>Conduct cultivation in batch mode using the prepared mineral medium.</li>
              </ol>
            </section>

            {/* 3. Growth Curve */}
            <section id="Growth Curve">
              <h2 className="text-5xl font-semibold mb-4 text-black">3. Growth Curve</h2>
              <div className="h-[2px] bg-black/20 mb-8" />
              <p className="text-xl mb-4 font-bold">Aim: To analyse and compare the growth pattern of Cupriavidus necator H16 under defined conditions.</p>
              
              <h3 className="text-2xl font-bold mb-2 mt-6">Materials Required:</h3>
              <ul className="list-disc ml-6 text-lg mb-6 grid grid-cols-2">
                <li>Pure culture of Cupriavidus necator H16</li>
                <li>Nutrient Broth</li>
                <li>Sterile conical flasks or culture tubes</li>
                <li>Inoculating loop or micropipette</li>
                <li>Incubator</li>
                <li>Spectrophotometer</li>
                <li>Cuvettes</li>
              </ul>
              <h3 className="text-2xl font-bold mb-2">Procedure:</h3>
              <ol className="list-decimal ml-6 text-xl space-y-2 mb-8">
                <li>Prepare the required growth medium and sterilize it by autoclaving.</li>
                <li>Transfer a measured volume of sterile medium into sterile flasks or culture tubes under aseptic conditions.</li>
                <li>Inoculate the medium with a small amount of the pure microbial culture.</li>
                <li>Incubate the inoculated culture at the appropriate temperature.</li>
                <li>Every one hour, withdraw a small sample of the culture.</li>
                <li>Measure the optical density (OD) of the sample using a spectrophotometer at an appropriate wavelength.</li>
                <li>Record the OD values at each time point.</li>
                <li>Continue taking the readings until the culture reaches stationary phase.</li>
                <li>Plot the values ... called the growth curve.</li>
              </ol>
            </section>

            {/* 4. PCR */}
            <section id="PCR">
              <h2 className="text-5xl font-semibold mb-4 text-black">4. PCR</h2>
              <div className="h-[2px] bg-black/20 mb-8" />
              <p className="text-xl mb-4 font-bold">Aim: To amplify specific DNA fragments.</p>
              
              <h3 className="text-2xl font-bold mb-2 mt-6">Materials Required:</h3>
              <ul className="list-disc ml-6 text-lg mb-6 grid grid-cols-2">
                <li>dNTPs</li>
                <li>Forward and Reverse primer</li>
                <li>Template DNA</li>
                <li>DNA polymerase</li>
                <li>Nuclease-free water</li>
                <li>DMSO/Betadine</li>
              </ul>
              <h3 className="text-2xl font-bold mb-2">Procedure:</h3>
              <ol className="list-decimal ml-6 text-xl space-y-2 mb-4">
                <li>Thaw all PCR components on ice.</li>
                <li>Prepare a master mix ...</li>
                <li>PCR cycling conditions:</li>
              </ol>
              <div className="bg-black/5 p-6 rounded-md ml-6 mb-8 border border-black/10">
                <ul className="list-disc ml-6 text-lg space-y-1">
                  <li>Initial denaturation: 98 °C for 30 s.</li>
                  <li>30 cycles of:
                    <ul className="list-circle ml-8">
                      <li>Denaturation: 98 °C for 10 s.</li>
                      <li>Annealing: (Primer Tm − 3 °C) for 20–30 s.</li>
                      <li>Extension: 72 °C for 30–45 s per kb.</li>
                    </ul>
                  </li>
                  <li>Final extension: 72 °C for 5 min.</li>
                  <li>Hold: 4 °C.</li>
                </ul>
              </div>
              <p className="text-xl font-bold ml-6 mb-2">PCR product handling:</p>
              <ul className="list-disc ml-12 text-lg mb-8">
                <li>If single clear band: Perform PCR cleanup.</li>
                <li>If multiple bands: Gel extraction ...</li>
                <li>Store purified product at −20 °C.</li>
              </ul>
            </section>

            {/* 5. Restriction Ligation */}
            <section id="Restriction Ligation">
              <h2 className="text-5xl font-semibold mb-4 text-black">5. Restriction Ligation</h2>
              <div className="h-[2px] bg-black/20 mb-8" />
              <p className="text-xl mb-4 font-bold">Aim: To cleave DNA at specific nucleotide sequences using restriction endonucleases.</p>
              
              <h3 className="text-2xl font-bold mb-2 mt-6">Materials Required:</h3>
              <ul className="list-disc ml-6 text-lg mb-6">
                <li>Template DNA</li>
                <li>Restriction enzyme of interest</li>
                <li>Appropriate restriction enzyme buffer</li>
              </ul>
              <h3 className="text-2xl font-bold mb-2">Procedure:</h3>
              <ol className="list-decimal ml-6 text-xl space-y-2 mb-8">
                <li>The DNA sample ...</li>
                <li>6. DNA ligase is added to allow.</li>
                <li>The process is completed by enzyme inactivation and gel electrophoresis to confirm fragment size.</li>
              </ol>
            </section>

            {/* 6. Heat shock transformation S17-1 */}
            <section id="Heat shock transformation">
              <h2 className="text-5xl font-semibold mb-4 text-black">6. Heat shock transformation of suicide plasmid into Escherichia coli S17-1</h2>
              <div className="h-[2px] bg-black/20 mb-8" />
              <p className="text-xl mb-4 font-bold">Aim: To introduce a suicide plasmid into Escherichia coli S17-1 strain.</p>
              
              <h3 className="text-2xl font-bold mb-2 mt-6">Procedure:</h3>
              <ol className="list-decimal ml-6 text-xl space-y-2 mb-8">
                <li>Incubate cells on ice ...</li>
                <li>Incubate on LB agar plate with kanamycin to confirm uptake of plasmid.</li>
              </ol>
            </section>

            {/* 7. Conjugation H16 */}
            <section id="Conjugation">
              <h2 className="text-5xl font-semibold mb-4 text-black">7. Conjugation into Cupriavidus necator H16</h2>
              <div className="h-[2px] bg-black/20 mb-8" />
              <p className="text-xl mb-4 font-bold">Aim: To transfer suicide plasmid from Escherichia coli S17-1 to Cupriavidus necator H16.</p>
              

[Image of bacterial conjugation mechanism]

              <h3 className="text-2xl font-bold mb-2 mt-6">Materials Required:</h3>
              <ul className="list-disc ml-6 text-lg mb-6">
                <li>4. Escherichia coli S17-1 donor strain carrying suicide plasmid</li>
                <li>5. LB or low salt LB MOPS medium ...</li>
                <li>10. Agar plates</li>
                <li>11. PCR reagents and primers flanking the target locus</li>
              </ul>
              <h3 className="text-2xl font-bold mb-2">Procedure:</h3>
              <ol className="list-decimal ml-6 text-xl space-y-2 mb-8">
                <li>Grow Escherichia coli ...</li>
                <li>9. Perform colony PCR to confirm gene knockout.</li>
              </ol>
            </section>

            {/* 12. Expression Plasmid Transformation */}
            <section id="Heat Shock Expression">
              <h2 className="text-5xl font-semibold mb-4 text-black">12. Heat Shock Transformation of Expression Plasmid into Escherichia coli S17-1</h2>
              <div className="h-[2px] bg-black/20 mb-8" />
              <p className="text-xl mb-4 font-bold">Aim: To introduce expression plasmid into Escherichia coli S17-1</p>
              <h3 className="text-2xl font-bold mb-2">Procedure:</h3>
              <p className="text-xl italic mb-8 bg-black/5 p-4 rounded">Incubate cells on ice ... return to ice for 90 seconds.</p>
            </section>

            {/* 13. Blue White Screening */}
            <section id="Blue White Screening">
              <h2 className="text-5xl font-semibold mb-4 text-black">13. Blue White Screening</h2>
              <div className="h-[2px] bg-black/20 mb-8" />
              <p className="text-xl mb-4 font-bold">Aim: To confirm the transformation of expression plasmid into Escherichia coli S17-1.</p>
              
              <h3 className="text-2xl font-bold mb-2 mt-6">Materials Required:</h3>
              <ul className="list-disc ml-6 text-lg mb-6">
                <li>1. Escherichia coli S17-1 culture ...</li>
                <li>11. Inoculating needles</li>
              </ul>
              <h3 className="text-2xl font-bold mb-2">Procedure:</h3>
              <ol className="list-decimal ml-6 text-xl space-y-2 mb-8">
                <li>Pour measured amounts ...</li>
                <li>8. Then, the colonies carrying the recombinant plasmids are selected and cultured.</li>
                <ul className="list-circle ml-8">
                  <li>Colonies that carry wild-type plasmids ...</li>
                  <li>Colonies that carry recombinant plasmids ...</li>
                </ul>
              </ol>
            </section>

            {/* 14. Conjugation Expression */}
            <section id="Conjugation Expression">
              <h2 className="text-5xl font-semibold mb-4 text-black">14. Conjugation of Escherichia coli S17-1 carrying expression plasmid into Cupriavidus necator H16</h2>
              <div className="h-[2px] bg-black/20 mb-8" />
              <p className="text-xl mb-4 font-bold">Aim: To transfer expression plasmid ...</p>
              <h3 className="text-2xl font-bold mb-2">Materials Required:</h3>
              <ul className="list-disc ml-6 text-lg mb-6">
                <li>15. Escherichia coli S171 donor strain ...</li>
                <li>21. PCR reagents and primers flanking the target locus</li>
              </ul>
              <h3 className="text-2xl font-bold mb-2">Procedure:</h3>
              <ol className="list-decimal ml-6 text-xl space-y-2 mb-8">
                <li>Grow Escherichia coli ...</li>
                <li>9. Perform colony PCR and sequencing to confirm gene knockout.</li>
              </ol>
            </section>

            {/* 22. Cultivation */}
            <section id="Nitrogen Limited Cultivation">
              <h2 className="text-5xl font-semibold mb-4 text-black">22. Cultivation of Cupriavidus necator H16 under nitrogen-limited conditions to synthesise P(3HB-co-4HB)</h2>
              <div className="h-[2px] bg-black/20 mb-8" />
              <p className="text-xl mb-4 font-bold">Aim: Cultivate Cupriavidus necator H16 under nitrogen-limited conditions ...</p>
              <h3 className="text-2xl font-bold mb-2">Materials Required:</h3>
              <ul className="list-disc ml-6 text-lg mb-6">
                <li>1. Schlegel’s Mineral Medium</li>
                <li>2. Trace Element Solution ...</li>
                <li>5. Membrane filtration unit (0.21 µm pore size)</li>
              </ul>
              <h3 className="text-2xl font-bold mb-2">Procedure:</h3>
              <ol className="list-decimal ml-6 text-xl space-y-2 mb-8">
                <li>Transfer the bacterial ...</li>
                <li>9. Continue cultivation to obtain P(3HB-co-4HB) production.</li>
              </ol>
            </section>

            {/* 12. Extraction */}
            <section id="Extraction">
              <h2 className="text-5xl font-semibold mb-4 text-black">12. Extraction of P(3HB-co-4HB)</h2>
              <div className="h-[2px] bg-black/20 mb-8" />
              <p className="text-xl mb-4 font-bold">Aim: To extract and purify ...</p>
              <h3 className="text-2xl font-bold mb-2">Materials and Reagents:</h3>
              <ul className="list-disc ml-6 text-lg mb-6">
                <li>1. Bacterial culture ...</li>
                <li>9. Drying oven</li>
              </ul>
              <h3 className="text-2xl font-bold mb-2">Procedure:</h3>
              <ol className="list-decimal ml-6 text-xl space-y-2 mb-8">
                <li>Separate bacterial cells ...</li>
                <li>12. Dry the final purified polymer at 40 °C.</li>
              </ol>
            </section>

            {/* 13. Quantification */}
            <section id="Quantification">
              <h2 className="text-5xl font-semibold mb-4 text-black">13. Quantification of P(3HB-co-4HB)</h2>
              <div className="h-[2px] bg-black/20 mb-8" />
              <p className="text-xl mb-4 font-bold">Aim: To determine the monomer composition ...</p>
              
              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-bold mb-2">¹H NMR Analysis</h3>
                  
                  <p className="font-bold mb-1 mt-4">Materials Required:</p>
                  <ul className="list-disc ml-6 mb-4">
                    <li>1. Purified P(3HB-co-4HB) polymer samples ...</li>
                    <li>11. Nitrogen gas supply</li>
                  </ul>
                  <p className="font-bold mb-1">Sample Preparation:</p>
                  <ol className="list-decimal ml-6 mb-4">
                    <li>Weigh approximately 10–20 mg ...</li>
                    <li>5. Prepare reference samples ...</li>
                  </ol>
                  <p className="font-bold mb-1">NMR Acquisition Parameters:</p>
                  <ul className="list-disc ml-6">
                    <li>1. Spectrometer frequency: 600 MHz.</li>
                    <li>7. Data points per scan: 65,000.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-2">Differential Scanning Calorimetry (DSC) Analysis</h3>
                  
                  <p className="font-bold mb-1 mt-4">Sample Preparation:</p>
                  <ol className="list-decimal ml-6 mb-4">
                    <li>Weigh approximately 7 mg ...</li>
                    <li>3. Seal the pan tightly to exclude air.</li>
                  </ol>
                  <p className="font-bold mb-1">DSC Measurement Conditions:</p>
                  <ul className="list-disc ml-6">
                    <li>1. Atmosphere: Nitrogen</li>
                    <li>2. Heating rate: 10 °C min⁻¹</li>
                    <li>3. Temperature range: –30 °C to 200 °C</li>
                  </ul>
                </div>
              </div>
              <cite className="block text-sm text-gray-600 border-l-4 border-[#dda15e] pl-4 italic mt-8">
                Malafaia, C. B., Reis, N. P. S., et al.
              </cite>
            </section>

          </div>
        </main>
      </div>
    </div>
  );
}

export default Experiments;
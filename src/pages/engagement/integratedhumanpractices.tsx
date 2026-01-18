import ihp1 from "../../assets/ihp1.png";
import ihp2 from "../../assets/ihp2.png";
import ihp3 from "../../assets/ihp3.png";
import ihp4 from "../../assets/ihp4.png";
import ihp5 from "../../assets/ihp5.png";
import ihp6 from "../../assets/ihp6.png";
import ihp7 from "../../assets/ihp7.png";
import ihp8 from "../../assets/ihp8.png";
import ihp9 from "../../assets/ihp9.png";
import ihp10 from "../../assets/ihp10.png";

function IntegratedHumanPractices() {
  const renderTitleHover = (text: string) =>
    text.split("").map((char, i) => (
      <span
        key={i}
        className="inline-block transition-colors duration-200 hover:text-[#dda15e]"
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  const sections = [
    {
      date: "January 4th, 2026",
      image: ihp1,
      content: (
        <>
          <p className="text-xl mb-4 font-medium">
            E-mail sent to Professor Paolo Bombelli
          </p>
          <p className="text-xl mb-4">
            <strong>Designation:</strong> Department of Biochemistry, University
            of Cambridge
          </p>
          <p className="text-xl mb-6">
            We contacted Professor Bombelli to ask whether ethylene glycol formed
            during <em>Galleria mellonella</em>-mediated polyethylene degradation
            has ever been quantitatively measured. We explained that most
            published studies only provide qualitative evidence using
            spectroscopic or biochemical methods. We asked if his group had
            obtained any quantitative data or if such measurements exist but
            remain unpublished or difficult to achieve. Our aim was to
            understand the current experimental limitations and research gaps in
            this field.
          </p>
          <p className="text-xl">
            <strong>Response:</strong> Paolo explained that his team identified
            ethylene glycol using FTIR, which only provides qualitative
            confirmation. No quantitative measurements were performed. Although
            FTIR can be adapted for semi-quantitative analysis, it was not
            applied, and accurate quantification remains challenging. This
            confirmed that reliable quantitative data are still lacking.
          </p>
        </>
      ),
    },
    {
      date: "January 5th, 2026",
      image: ihp2,
      content: (
        <>
          <p className="text-xl mb-4 font-medium">
            E-mail sent to Professor Christophe LeMoine
          </p>
          <p className="text-xl mb-4">
            <strong>Designation:</strong> Professor & Dean of Science, Biology
            Department, Brandon University
          </p>
          <p className="text-xl mb-6">
            We inquired whether ethylene glycol produced during
            <em>Galleria mellonella</em>-mediated polyethylene degradation has
            ever been quantitatively measured. We asked if any quantitative data
            existed in larval excreta or degradation products, or if such data
            were unpublished or experimentally challenging.
          </p>
          <p className="text-xl">
            <strong>Response:</strong> Professor LeMoine clarified that the glycol
            detected in his study was identified using a general biochemical
            assay, which cannot definitively confirm ethylene glycol. To his
            knowledge, no published work has clearly identified and quantified
            ethylene glycol as a confirmed by-product. This resulted in a
            scientific bottleneck.
          </p>
        </>
      ),
    },
    {
      date: "January 9th, 2026",
      image: ihp3,
      content: (
        <>
          <p className="text-xl mb-4 font-medium">
            E-mail sent to Dr. Xiangfeng Huang and Dr. Jia Liu
          </p>
          <p className="text-xl mb-4">
            <strong>Designation:</strong> Professor, Department of Environmental
            Science, Tongji University
          </p>
          <p className="text-xl">
            We contacted them to understand whether
            <em>Rhodotorula toruloides</em> has been observed to secrete TAGs
            extracellularly, why this differs from other oleaginous yeasts, and
            whether cultivation strategies could be combined with genetic
            engineering to enable this behaviour. This outreach was related to a
            previous project.
          </p>
        </>
      ),
    },
    {
      date: "January 9th, 2026",
      image: ihp4,
      content: (
        <>
          <p className="text-xl mb-4 font-medium">
            E-mail sent to Professor Gert-Jan M. Gruter
          </p>
          <p className="text-xl mb-4">
            <strong>Designation:</strong> Professor, Industrial Sustainable
            Chemistry, University of Amsterdam
          </p>
          <p className="text-xl">
            We asked whether glucose from polycotton acid hydrolysis could be
            directly used for microbial fermentation, how degradation
            by-products like HMF and levulinic acid affect yeast growth, and
            whether salt formation during neutralization causes stress. This
            inquiry was informed by our previous project.
          </p>
        </>
      ),
    },
    {
      date: "January 10th, 2026",
      image: ihp5,
      content: (
        <>
          <p className="text-xl mb-4 font-medium">
            E-mail sent to Dr. Nik S. A. N. Sharifulden and Lady V. Barrios Silva
          </p>
          <p className="text-xl mb-4">
            <strong>Designation:</strong> Faculty, Department of Oral Biology,
            University of Malaya; Doctoral Researcher, UCL
          </p>
          <p className="text-xl">
            We requested quantitative mechanical, thermal, crystallinity, and
            tensile data for P(3HB-co-4HB), particularly at 40 mol% 4HB, to assess
            its suitability as a substitute for polycaprolactone in biomedical
            masks. No response was received.
          </p>
        </>
      ),
    },
    {
      date: "January 11th, 2026",
      image: ihp6,
      content: (
        <>
          <p className="text-xl mb-4 font-medium">
            E-mail sent to Dr. Minki Jo and Dr. Sooan Shin
          </p>
          <p className="text-xl mb-4">
            <strong>Designation:</strong> Dankook University; Korea Biofoundry /
            Accurie Biosciences
          </p>
          <p className="text-xl">
            We requested extensive unpublished material property data for
            P(3HB-co-4HB) blends intended for biodegradable thermoplastic mask
            applications. No response was received.
          </p>
        </>
      ),
    },
    {
      date: "January 14th, 2026",
      image: ihp7,
      content: (
        <p className="text-xl">
          Insight from Professor Goutam Thakur (Department of Biomedical
          Engineering, MIT Manipal) on how mechanical strength, melting point, and
          crystallinity affect application-specific biomedical performance,
          particularly in drug delivery systems.
        </p>
      ),
    },
    {
      date: "January 15th, 2026",
      image: ihp8,
      content: (
        <p className="text-xl">
          E-mail sent to Dr. Dayananda K. Pai (Department of Aeronautical &
          Automobile Engineering, MIT Manipal) requesting expert input on PHB
          material properties. No response was received.
        </p>
      ),
    },
    {
      date: "January 16th, 2026",
      image: ihp9,
      content: (
        <p className="text-xl">
          Discussion with Professor Divyashree M S highlighted that 4HB formation
          is influenced by substrate choice and carbon-to-nitrogen ratio, and
          that precise nutrient control is critical for achieving desired
          polymer structure.
        </p>
      ),
    },
    {
      date: "January 16th, 2026",
      image: ihp10,
      content: (
        <p className="text-xl">
          Professor Subrahmanya Bhat K explained that uniform 4HB positional
          distribution improves flexibility and reduces brittleness in
          copolymers.
        </p>
      ),
    },
  ];

  return (
    <div className="w-full text-white">
      <div className="pt-32 pb-24 flex justify-center">
        <h1 className="text-6xl font-bold">
          {renderTitleHover("Integrated Human Practices")}
        </h1>
      </div>

      <div className="px-20 pb-32">
        <div className="bg-[#FEFAE0] text-black p-16 rounded-lg shadow-2xl space-y-32">
          {sections.map((section, i) => (
            <section key={i}>
              <h2 className="text-5xl font-semibold mb-4">{section.date}</h2>
              <div className="h-[2px] bg-black/30 mb-10" />

              <div className="flex gap-16 items-start">
                <div className="w-[65%]">{section.content}</div>
                <div className="w-[35%]">
                  <img
                    src={section.image}
                    alt={section.date}
                    className="w-full rounded-lg shadow-lg object-cover"
                  />
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

export default IntegratedHumanPractices;

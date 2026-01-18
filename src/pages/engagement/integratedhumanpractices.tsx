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
        <strong>Designation:</strong> Professor & Dean of Science, Biology Department,
        Brandon University
      </p>
      <p className="text-xl mb-6">
        We inquired whether ethylene glycol produced during
        <em> Galleria mellonella</em>-mediated polyethene degradation has ever been
        quantitatively measured. We noted that most existing studies only report
        qualitative evidence using spectroscopic or biochemical methods. We asked
        if his group had obtained any quantitative data on ethylene glycol in larval
        excreta or degradation products. We also asked whether such data exist, but
        are unpublished or experimentally challenging to obtain.
      </p>
      <p className="text-xl">
        <strong>Response from Professor Christophe LeMoine:</strong> Professor
        LeMoine explained that the glycol detected in his group's study was
        identified using a general biochemical glycol assay, which does not allow
        definitive confirmation that the compound is ethylene glycol. He clarified
        that, to his knowledge, there are currently no published studies that clearly
        identify and quantitatively measure ethylene glycol as a confirmed
        by-product of polyethylene degradation by <em>Galleria mellonella</em>.
        This caused us to run into a bottleneck, after which we could no longer
        continue with this project.
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
        E-mail sent to Dr Xiangfeng Huang and Dr Jia Liu
      </p>
      <p className="text-xl mb-4">
        <strong>Designation:</strong> Professor, Department of Environmental Science,
        Tongji University
      </p>
      <p className="text-xl">
        We contacted Dr Huang and Dr Liu to understand whether
        <em> Rhodotorula toruloides</em> has ever been observed to secrete TAGs
        outside the cell. We were curious about why this behaviour differs from
        that of other oleaginous yeasts such as <em>Cryptococcus curvatus</em>.
        We also asked whether cultivation strategies from previous studies could be
        combined with genetic engineering to enable extracellular TAG production.
        Finally, we requested their suggestions on strains, conditions, and
        modifications that could help guide our project direction. However, this
        outreach was related to a previous project.
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
        <strong>Designation:</strong> Professor, Industrial Sustainable Chemistry,
        University of Amsterdam
      </p>
      <p className="text-xl">
        We asked Professor Gruter if the glucose from polycotton acid hydrolysis
        could go straight into microbial fermentation. We wanted to know how
        by-products from degradation, like HMF and Levulinic acid, might slow down
        yeast growth. We also looked into whether salt formation during
        neutralization could cause stress to <em>Rhodotorula toruloides</em>.
        We questioned whether the initial breakdown of the material would yield
        sufficient sugars for fermentation or whether additional enzymes would be
        required. We also explored the feasibility of integrating textile waste
        degradation with microbial oil production. This line of inquiry was
        informed by our previous project.
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
        E-mail sent to Dr. Nik S A N Sharifulden and Lady V Barrios Silva
      </p>
      <p className="text-xl mb-4">
        <strong>Designation of Dr. Nik S A N Sharifulden:</strong> Faculty, Department
        of Oral Biology, University of Malaya.
      </p>
      <p className="text-xl mb-4">
        <strong>Designation of Lady V Barrios Silva:</strong> Doctoral researcher,
        University College London.
      </p>
      <p className="text-xl">
        We reached out to Dr. Sharifulden and Dr. Lady V. Barrios Silva to obtain
        quantitative data on the material properties of the P(3HB-co-4HB)
        copolymer, with particular interest in the 40 mol% 4HB composition. We
        wanted to know some details about tensile strength, Young's modulus, how
        much it stretched before breaking, its crystallinity, and its thermal
        properties. We were particularly interested in assessing whether this
        copolymer could effectively substitute for polycaprolactone, especially
        in those biomedical masks that use thermoplastics. We also asked if they
        could share any unpublished or extra data to help us pick the right
        materials. Unfortunately, we did not recieve any response from them.
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
        E-mail sent to Dr. Minki Jo, Dr. Sooan Shin
      </p>
      <p className="text-xl mb-4">
        <strong>Designation:</strong> Minki Jo – Department of Polymer Science and
        Engineering, Dankook University
      </p>
      <p className="text-xl mb-4">
        <strong>Designation:</strong> Dr. Sooan Shin – researcher-founder-entrepreneur,
        HOD of Korea Biofoundry, CEO and founder of Accurie Biosciences
      </p>
      <p className="text-xl">
        We reached out to them asking for extensive material property data for
        blends of P(3HB-co-4HB) copolymers that would be used for biodegradable
        thermoplastic mask applications. We directed our interest in particular
        ratios of blends and requested properties such as mechanical, thermal,
        crystallinity, and melt processing, which could help us in understanding
        and discovering practical applications. Since some of this information
        was not completely found in the literature, we also inquired if any
        additional or non-published data could be disclosed. Our goal was to
        prevent any ungrounded choices from affecting material selection by being
        well-informed and scientifically supported design choices. However we
        received no response from them.
      </p>
    </>
  ),
},
{
  date: "January 14th, 2026",
  image: ihp7,
  content: (
    <>
      <p className="text-xl mb-4 font-medium">
        Insight from Prof. Goutam Thakur on Biomedical Applications of our Copolymer
      </p>
      <p className="text-xl mb-4">
        <strong>Designation:</strong> Professor, Department of Biomedical Engineering,
        Manipal Institute of Technology, Manipal.
      </p>
      <p className="text-xl">
        We discussed the biomedical applications of our copolymer and learned how
        its properties mechanical strength, melting point, and crystallinity—
        affect its performance in different uses. We also understood that each
        application has unique requirements, and for drug delivery, the polymer
        must have the right balance of hardness and softness for each specific
        drug.
      </p>
    </>
  ),
},
{
  date: "January 15th, 2026",
  image: ihp8,
  content: (
    <>
      <p className="text-xl mb-4">
        <strong>Designation:</strong> Professor, Department of Aeronautical &
        Automobile Engineering, Manipal Institute of Technology, Manipal.
      </p>
      <p className="text-xl">
        E-mail sent to Dr. Dayananda K. Pai: We reached out to Dr. Pai for a quick
        talk on polyhydroxybutyrate (PHB) and its material properties. We inquired
        about his convenience for a short talk to receive professional assistance
        for our project related to polymers. Our goal was to acquire a deeper
        understanding of PHB characteristics from a materials science angle and
        to direct our project better with the help of an expert's input.
        Unfortunately, we didn’t hear back from him.
      </p>
    </>
  ),
},
{
  date: "January 16th, 2026",
  image: ihp9,
  content: (
    <>
      <p className="text-xl mb-4 font-medium">
        Discussion with Divyashree M S on Factors Affecting (4HB) Formation
      </p>
      <p className="text-xl mb-4">
        <strong>Designation:</strong> Associate Professor, Department of Biotechnology,
        Manipal Institute of Technology, Manipal.
      </p>
      <p className="text-xl">
        Professor Divyashree M S gave very important information about the factors
        that affect the creation of 4 Hydroxybutyrte (4HBs). She told that 4HB's
        formation is influenced by the substrate and the ratio of carbon (C) to
        nitrogen (N) in the growth medium, which must be very carefully kept
        throughout the growth process. She pointed out that exact management of
        nutrient composition during organism growth is very important to get the
        desired structural assembly.
      </p>
    </>
  ),
},
{
  date: "January 16th, 2026",
  image: ihp10,
  content: (
    <>
      <p className="text-xl mb-4 font-medium">
        Discussion with Dr. Subrahmanya Bhat K
      </p>
      <p className="text-xl mb-4">
        <strong>Designation:</strong> Professor, Department of Chemistry,
        Manipal Institute of Technology, Manipal.
      </p>
      <p className="text-xl">
        Professor Subramanyam B H explained that the position of
        4-hydroxybutyrate (4HB) units in a copolymer influences its mechanical
        properties. Uniform 4HB distribution improves flexibility and reduces
        brittleness.
      </p>
    </>
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

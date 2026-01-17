function Education() {
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
        <h1 className="text-6xl font-bold">{renderTitleHover("Education")}</h1>
      </div>

      {/* ===== TWO-COLUMN LAYOUT ===== */}
      <div className="flex w-full min-h-screen px-10 gap-5">
        {/* LEFT SIDEBAR */}
        <aside className="w-[10%] px-6 sticky mt-5 top-32 self-start">
          <nav className="flex flex-col gap-7 text-lg text-white/80">
            <a href="#overview" className="hover:text-white">
              Overview
            </a>
            <a href="#six-to-ten" className="hover:text-white">
              6–10 Years
            </a>
            <a href="#eleven-to-fifteen" className="hover:text-white">
              11–15 Years
            </a>
            <a href="#sixteen-to-eighteen" className="hover:text-white">
              16–18 Years
            </a>
            <a href="#college" className="hover:text-white">
              College Students
            </a>
          </nav>
        </aside>

        {/* RIGHT CONTENT */}
        <main className="w-[90%] pb-32">
          <div className="bg-[#FEFAE0] text-black p-16 rounded-lg shadow-2xl">
            {/* ===== OVERVIEW ===== */}
            <section className="mb-14">
              <div id="overview" className="scroll-mt-32" />
              <h2 className="text-4xl font-semibold mb-4">
                Education (Age-Wise Outreach)
              </h2>
              <div className="h-[2px] bg-black/30 mb-6" />
              <p className="text-xl">
                Our education initiatives were designed to introduce biology and
                synthetic biology concepts in an age-appropriate, engaging, and
                accessible manner. Activities were tailored to different age
                groups to build curiosity, foundational knowledge, and critical
                thinking skills.
              </p>
            </section>

            {/* ===== 6–10 YEARS ===== */}
            <section className="mb-14">
              <div id="six-to-ten" className="scroll-mt-32" />
              <h2 className="text-4xl font-semibold mb-4">6–10 Years</h2>
              <div className="h-[2px] bg-black/30 mb-8" />

              <h3 className="text-2xl font-semibold mb-2">
                Activity 1: Biology Through Storytelling
              </h3>

              <p className="font-bold text-2xl mt-4">Aim</p>
              <p className="mb-4 text-lg">
                This activity aimed to introduce young students to basic
                biological concepts through an illustrative comic format. By
                using a simple story about a friendly bacterium that converts
                sugar into eco-friendly plastic, biological concepts were made
                easier to understand and more relatable.
              </p>

              <p className="font-bold text-2xl">Activity</p>
              <p className="mb-4 text-lg">
                Students were introduced to biology through an illustrated comic
                story following a friendly bacterium that eats sugar and
                produces a special, eco-friendly plastic. Students learned how
                this plastic is safer for nature and helps reduce pollution.
              </p>
              <p className="mb-4 text-lg">
                Using simple examples, we explained how changing the building
                blocks of plastic can make it softer or stronger. This helped
                students understand that biology can be used to create useful
                materials and solve real-world environmental problems in a fun
                and accessible way.
              </p>

              <p className="font-bold text-2xl">Impact</p>
              <p className="text-lg">
                The activity sparked curiosity about microorganisms and their
                usefulness. The story-based approach made science enjoyable and
                encouraged students to view biology as helpful, interesting, and
                connected to everyday life.
              </p>

              <h3 className="text-2xl font-semibold mt-10 mb-2">
                Activity 2: Drawing Biology
              </h3>

              <p className="font-bold mt-4 text-2xl">Aim</p>
              <p className="mb-4 text-lg">
                This activity aimed to engage young students with biology in a
                creative and interactive manner, using drawings to explore
                existing knowledge and introduce fundamental biological
                concepts.
              </p>

              <p className="font-bold text-2xl">Activity</p>
              <p className="mb-4 text-lg">
                Students were asked to draw anything they associated with
                biology, such as plants, animals, cells, microbes, or materials.
                Each student explained their drawing, describing what each part
                represented. Facilitators used these explanations to identify
                misconceptions and introduce concepts such as cells, genes, and
                living systems.
              </p>

              <p className="font-bold text-2xl">Impact</p>
              <p className="text-lg">
                This activity helped students gain confidence in expressing
                their ideas and encouraged curiosity, observation, and early
                scientific thinking.
              </p>

              <p className="text-2xl font-semibold mt-4 mb-2">
                Supporting Sessions
              </p>
              <ul className="list-disc pl-6 text-lg">
                <li>
                  Interactive discussions on heredity, genes, and environment
                </li>
                <li>
                  Simple graphic videos introducing the scope of biology,
                  including: Animals and plants, Humans and microbes (bacteria,
                  fungi, viruses), Cells, Food and nutrition, Habitats and
                  ecosystems, Bodies of water (ponds, rivers, oceans), Insects
                  and other small organisms, Environment and nature.
                </li>
              </ul>
            </section>

            {/* ===== 11–15 YEARS ===== */}
            <section className="mb-14">
              <div id="eleven-to-fifteen" className="scroll-mt-32" />
              <h2 className="text-4xl font-semibold mb-4">11–15 Years</h2>
              <div className="h-[2px] bg-black/30 mb-8" />

              <h3 className="text-2xl font-semibold mb-2">
                Biology Word Search Challenge
              </h3>

              <p className="font-bold mt-4 text-2xl">Aim</p>
              <p className="mb-4 text-lg">
                The aim of this activity was to help students learn and retain
                key biology terms while improving reading comprehension and
                problem-solving skills.
              </p>

              <p className="font-bold text-2xl">Activity</p>
              <p className="mb-4 text-lg">
                Students completed a crossword or word search puzzle containing
                terms such as cell, photosynthesis, DNA, microbe, ecosystem, and
                organelle. Students worked individually or in small groups,
                while facilitators explained challenging terms using real-life
                examples.
              </p>

              <p className="font-bold text-2xl">Impact</p>
              <p className="text-lg">
                The activity reinforced biological vocabulary and core concepts
                in a fun, game-based format, improving memory, logical
                reasoning, and teamwork.
              </p>

              <p className="text-2xl font-semibold mt-4 mb-2">
                Supporting Session
              </p>
              <p className="text-lg">
                A basic educational session was conducted on biology, plastics,
                biodegradability, and their environmental impact.
              </p>
            </section>

            {/* ===== 16–18 YEARS ===== */}
            <section className="mb-14">
              <div id="sixteen-to-eighteen" className="scroll-mt-32" />
              <h2 className="text-4xl font-semibold mb-4">16–18 Years</h2>
              <div className="h-[2px] bg-black/30 mb-8" />

              <h3 className="text-2xl font-semibold mb-2">
                Genetic Circuits Card-Based Game
              </h3>

              <p className="font-bold mt- text-2xl">Aim</p>
              <p className="mb-4 text-lg">
                This activity aimed to help students understand how genetic
                circuits function through a simple and interactive learning
                approach, without requiring laboratory access.
              </p>

              <p className="font-bold text-2xl">Activity</p>
              <p className="mb-4 text-lg">
                A physical card-based game was designed where each card
                represented a biological component such as a promoter, gene,
                repressor, or reporter. Students assembled these cards to
                construct functional genetic circuits.
              </p>
              <p className="mb-4 text-lg">
                Problem statements such as “Design a bacterium that produces
                light only when pollution is present” were used to guide
                discussion. After the activity, students were introduced to
                recombinant DNA technology in greater detail.
              </p>

              <p className="font-bold text-2xl">Impact</p>
              <p className="text-lg">
                Students developed a clear understanding of gene regulation
                logic. The game format made complex synthetic biology concepts
                approachable and prepared students for advanced learning in
                recombinant DNA technology.
              </p>
            </section>

            {/* ===== COLLEGE ===== */}
            <section>
              <div id="college" className="scroll-mt-32" />
              <h2 className="text-4xl font-semibold mb-4">College Students</h2>
              <div className="h-[2px] bg-black/30 mb-8" />

              <h3 className="text-2xl font-semibold mb-2">
                Synthetic Biology Policy & Decision-Making Simulation
              </h3>

              <p className="font-bold mt-4 text-2xl">Aim</p>
              <p className="mb-4 text-lg">
                The aim of this activity was to expose college students to
                real-world decision-making in synthetic biology by integrating
                scientific, ethical, economic, and societal perspectives.
              </p>

              <p className="font-bold text-2xl">Activity</p>
              <p className="mb-4 text-lg">
                Students participated in a policy-based simulation and were
                assigned stakeholder roles such as scientists, policymakers,
                industry representatives, and public advocates. Using a shared
                case study, teams evaluated scientific feasibility, economic
                impact, ethical concerns, and societal consequences.
              </p>

              <p className="font-bold text-2xl">Impact</p>
              <p className="text-lg">
                The simulation helped students appreciate the ethical, social,
                and regulatory responsibilities involved in synthetic biology.
                Students developed the ability to analyze complex problems from
                multiple perspectives.
              </p>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Education;

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
    <div className="w-full text-white">
      {/* ===== TITLE ROW ===== */}
      <div className="pt-32 pb-24 flex justify-center">
        <h1 className="text-6xl font-bold">{renderTitleHover("Education")}</h1>
      </div>

      {/* ===== TWO-COLUMN LAYOUT ===== */}
      <div className="flex px-10 gap-5">
        {/* LEFT SIDEBAR */}
        <aside className="w-[15%] px-6 sticky mt-5 top-32 self-start">
          <nav className="flex flex-col gap-7 text-lg bg-[#1F2A13] p-3">
            <a
              href="#overview"
              className="group relative w-fit text-white/80 hover:text-white"
            >
              Overview
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#dda13e] transition-all duration-300 group-hover:w-full" />
            </a>

            <a
              href="#six-to-ten"
              className="group relative w-fit text-white/80 hover:text-white"
            >
              6–10 Years
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#dda13e] transition-all duration-300 group-hover:w-full" />
            </a>

            <a
              href="#eleven-to-fifteen"
              className="group relative w-fit text-white/80 hover:text-white"
            >
              11–15 Years
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#dda13e] transition-all duration-300 group-hover:w-full" />
            </a>

            <a
              href="#sixteen-to-eighteen"
              className="group relative w-fit text-white/80 hover:text-white"
            >
              16–18 Years
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#dda13e] transition-all duration-300 group-hover:w-full" />
            </a>

            <a
              href="#college"
              className="group relative w-fit text-white/80 hover:text-white"
            >
              College Students
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#dda13e] transition-all duration-300 group-hover:w-full" />
            </a>

            <a
              href="#other-initiatives"
              className="group relative w-fit text-white/80 hover:text-white"
            >
              Other Initiatives
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#dda13e] transition-all duration-300 group-hover:w-full" />
            </a>

            <a
              href="#schools"
              className="group relative w-fit text-white/80 hover:text-white"
            >
              Schools
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#dda13e] transition-all duration-300 group-hover:w-full" />
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

              <p className="font-bold mt-4 text-2xl">Aim</p>
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
              <p className="mb-4 text-lg">
                Teams negotiated and proposed regulatory decisions, culminating
                in a consensus policy developed through structured discussion.
                Facilitators ensured scientific accuracy while encouraging
                independent reasoning.
              </p>
              <p className="font-bold text-2xl">Impact</p>
              <p className="text-lg">
                The simulation helped students appreciate the ethical, social,
                and regulatory responsibilities involved in synthetic biology.
                Students developed the ability to analyze complex problems from
                multiple perspectives.
              </p>
            </section>

            <section id="other-initiatives" className="mb-12">
              <h2 className="mt-5 text-4xl font-semibold mb-6">
                Other Possible Educational and Engagement Initiatives
              </h2>
              <div className="h-[2px] bg-black/30 mb-8" />
              <div className="space-y-8 text-xl">
                {/* MBM x NSS / RedX */}
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    1. MBM × NSS / RedX
                  </h3>
                  <p>
                    MBM can collaborate with NSS/RedX to organise a beach
                    cleanup drive, helping students directly observe the sheer
                    amount of plastic waste in their surroundings and understand
                    its harmful impact on the environment. This activity would
                    also raise students' awareness of plastic consumption and
                    show how the use of biodegradable polymers, such as{" "}
                    <em>P(3HB-co-4HB)</em>, can make a significant positive
                    impact.
                  </p>
                </div>

                {/* MBM x IE-BT */}
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    2. MBM × IE-BT
                  </h3>
                  <p>
                    MBM can also collaborate with IE-BT to organise guest
                    speaker sessions in which experts discuss the importance of
                    reducing conventional plastic use, the harmful effects of
                    plastics on the environment, and the various applications of
                    plastics. These sessions would also highlight how
                    biopolymers can be used to produce biodegradable
                    alternatives, and how synthetic biology-produced plastics,
                    such as <em>P(3HB-co-4HB)</em>, have the potential for
                    scale-up and wide-ranging applications.
                  </p>
                </div>

                {/* All India iGEM Meet */}
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    3. All India iGEM Meet
                  </h3>
                  <p>
                    The All India iGEM Meet is an opportunity to connect with
                    students and participants from across the country. Through
                    talks, workshops, and interactive sessions, we can help
                    people understand the impact of plastic pollution and
                    inspire them to see the potential of biodegradable plastics
                    in making a real difference in everyday life.
                  </p>
                </div>
              </div>
            </section>

            <section id="schools" className="mb-12">
              <h2 className="text-4xl font-semibold mb-6">
                Schools We Will Visit
              </h2>
              <div className="h-[2px] bg-black/30 mb-8" />
              <p className="text-xl mb-6">
                We believe that education must begin locally at the origin of
                our project and expand nationwide. Therefore, this is the list
                of schools we aim to conduct our activities and sessions at:
              </p>

              <ol className="list-decimal pl-6 space-y-2 text-xl">
                <li>Nehru High School, Alevoor, Udupi</li>
                <li>Ambalpady English Medium School, Udupi</li>
                <li>Little Rock Indian School, Brahmavara</li>
                <li>Sacred Heart Girls High School, Bangalore</li>
                <li>Bangalore International Academy, Bangalore</li>
                <li>National Centre for Excellence, Bangalore</li>
                <li>Sushila Birla Girls School, Kolkata</li>
                <li>Vidya Mandir Estancia, Chennai</li>
                <li>St. Gregorios School, New Delhi</li>
                <li>Meridian School, Hyderabad</li>
                <li>Alpine Public School, Bengaluru</li>
                <li>Hiranandani Foundation School, Thane</li>
              </ol>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Education;

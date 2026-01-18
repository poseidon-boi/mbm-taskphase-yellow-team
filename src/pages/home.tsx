import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import bgvid from "../assets/bg-vid.mp4";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const rootRef = useRef<HTMLDivElement>(null);

  const introRef = useRef<HTMLDivElement>(null);
  const philosophyRef = useRef<HTMLDivElement>(null);

  const challengeRef = useRef<HTMLDivElement>(null);
  const challengeTitleRef = useRef<HTMLHeadingElement>(null);
  const challengeCardRef = useRef<HTMLDivElement>(null);

  const solutionRef = useRef<HTMLDivElement>(null);
  const solutionTitleRef = useRef<HTMLHeadingElement>(null);
  const solutionCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* =========================
         INTRO — TEAM YELLOW
      ========================== */
      if (introRef.current) {
        gsap.fromTo(
          introRef.current.querySelectorAll(".intro-word"),
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.25,
            duration: 1.2,
            ease: "power3.out",
          }
        );
      }

      /* =========================
         SECTION 2 — PHILOSOPHY
      ========================== */
      if (philosophyRef.current) {
        const words =
          philosophyRef.current.querySelectorAll<HTMLSpanElement>(".word");

        gsap
          .timeline({
            scrollTrigger: {
              trigger: philosophyRef.current,
              start: "top top",
              end: "+=200%",
              pin: true,
              scrub: true,
            },
          })
          .fromTo(
            words,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              stagger: 0.25,
              ease: "power2.out",
            }
          );
      }

      /* =========================
         SECTION 3 — THE CHALLENGE
      ========================== */
      if (
        challengeRef.current &&
        challengeTitleRef.current &&
        challengeCardRef.current
      ) {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: challengeRef.current,
              start: "top top",
              end: "+=150%",
              pin: true,
              scrub: true,
            },
          })
          .fromTo(
            challengeTitleRef.current,
            { x: -250, opacity: 0 },
            { x: 0, opacity: 1, ease: "power3.out" },
            0
          )
          .fromTo(
            challengeCardRef.current,
            { x: 250, opacity: 0 },
            { x: 0, opacity: 1, ease: "power3.out" },
            0.1
          );
      }

      /* =========================
         SECTION 4 — THE SOLUTION
      ========================== */
      if (
        solutionRef.current &&
        solutionTitleRef.current &&
        solutionCardRef.current
      ) {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: solutionRef.current,
              start: "top top",
              end: "+=150%",
              pin: true,
              scrub: true,
            },
          })
          .fromTo(
            solutionTitleRef.current,
            { x: 250, opacity: 0 },
            { x: 0, opacity: 1, ease: "power3.out" },
            0
          )
          .fromTo(
            solutionCardRef.current,
            { x: -250, opacity: 0 },
            { x: 0, opacity: 1, ease: "power3.out" },
            0.1
          );
      }
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={rootRef}
      className="w-full min-h-screen bg-[#101317] overflow-x-hidden"
    >
      {/* =========================
          HERO — INTRODUCING TEAM YELLOW
      ========================== */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          src={bgvid}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div
          ref={introRef}
          className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
        >
          <h2 className="intro-word text-sm tracking-[0.4em] text-[#dda15e] mb-6">
            INTRODUCING
          </h2>

          <h1 className="intro-word text-6xl md:text-8xl font-extrabold text-white">
            PolyPrakash
          </h1>

          <p className="intro-word mt-8 max-w-xl text-lg text-[#FEFAE0]/80">
            Design with intent. Control by light.
          </p>
        </div>
      </section>

      {/* =========================
          SECTION 2 — PHILOSOPHY
      ========================== */}
      <section
        ref={philosophyRef}
        className="h-screen flex items-center justify-center"
      >
        <div className="max-w-5xl px-10 space-y-10">
          {[
            "Structure and composition define function.",
            "We refused randomness.",
            "We let light decide.",
          ].map((line, i) => (
            <h2
              key={i}
              className="text-5xl md:text-6xl text-[#FEFAE0] font-light"
            >
              {line.split(" ").map((word, j) => (
                <span
                  key={j}
                  className={`word inline-block mr-4 ${
                    word.toLowerCase().includes("light")
                      ? "text-[#dda15e]"
                      : ""
                  }`}
                >
                  {word}
                </span>
              ))}
            </h2>
          ))}
        </div>
      </section>

      {/* =========================
          SECTION 3 — THE CHALLENGE
      ========================== */}
      <section
        ref={challengeRef}
        className="h-screen flex items-center bg-[#101317] overflow-hidden"
      >
        <div className="w-full flex items-center justify-between px-16 gap-16">
          <h2
            ref={challengeTitleRef}
            className="text-7xl md:text-8xl font-extrabold text-[#FEFAE0]"
          >
            THE
            <br />
            CHALLENGE
          </h2>

          <div
            ref={challengeCardRef}
            className="max-w-xl bg-[#FEFAE0] text-[#101317] p-10 rounded-2xl shadow-2xl"
          >
            <p className="text-xl font-medium mb-6">Right now:</p>
            While P(3HB-co-4HB) offers diverse material properties, precise and dynamic tunability remains a key limitation. Current production strategies rely on static control, restricting real-time adjustment of polymer composition.
          </div>
        </div>
      </section>

      {/* =========================
          SECTION 4 — THE SOLUTION
      ========================== */}
      <section
        ref={solutionRef}
        className="h-screen flex items-center bg-[#101317] overflow-hidden"
      >
        <div className="w-full flex items-center justify-between px-16 gap-16">
          <div
            ref={solutionCardRef}
            className="max-w-xl bg-[#FEFAE0] text-[#101317] p-10 rounded-2xl shadow-2xl"
          >
            <p className="text-xl font-medium mb-6">Our approach:</p>
            To address this, we developed a light-tunable system that dynamically regulates 4HB incorporation during polymer synthesis. This optogenetic approach enables precise, reversible control over polymer properties.
          </div>

          <h2
            ref={solutionTitleRef}
            className="text-7xl md:text-8xl font-extrabold text-[#FEFAE0] text-right"
          >
            THE
            <br />
            SOLUTION
          </h2>
        </div>
      </section>

      <div className="h-[20vh]" />
    </div>
  );
}

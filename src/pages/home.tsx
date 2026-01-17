import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import bgvid from "../assets/bg-vid.mp4";
import plastic from "../assets/plastic.png";
import compound from "../assets/compound.png";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const rootRef = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* =========================
         SECTION 2
      ========================== */
      if (section2Ref.current) {
        const words =
          section2Ref.current.querySelectorAll<HTMLSpanElement>(".word");

        gsap
          .timeline({
            scrollTrigger: {
              trigger: section2Ref.current,
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
              stagger: 0.3,
              ease: "power2.out",
            },
          );
      }

      /* =========================
         SECTION 4 — STORY
      ========================== */
      if (section4Ref.current) {
        const section = section4Ref.current;

        const leftWords =
          section.querySelectorAll<HTMLDivElement>(".left-word");
        const plasticImg =
          section.querySelector<HTMLImageElement>(".plastic-image");
        const valueWords =
          section.querySelectorAll<HTMLSpanElement>(".value-word");
        const compoundImg =
          section.querySelector<HTMLImageElement>(".compound-image");

        if (!plasticImg || !compoundImg) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=700%", // HUMAN-SCALE
            pin: true,
            scrub: true,
          },
        });

        /* 1 — LEFT TEXT IN */
        tl.fromTo(
          leftWords,
          { x: -120, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            stagger: 0.35,
            ease: "power2.out",
          },
        );

        /* 2 — PLASTIC IN FROM RIGHT */
        tl.fromTo(
          plasticImg,
          { x: 500, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 2,
            ease: "power2.out",
          },
        );

        /* 2.5 — PLASTIC HOLDS (SCREEN TIME) */
        tl.to(plasticImg, {
          x: 0, // no movement
          opacity: 1, // stays visible
          duration: 2, // <-- THIS IS THE PAUSE
          ease: "none",
        });

        /* 3 — LEFT TEXT + PLASTIC OUT */
        tl.to(
          leftWords,
          {
            x: -200,
            opacity: 0,
            stagger: 0.2,
            duration: 1.5,
            ease: "power2.inOut",
          },
          "<",
        );

        tl.to(
          plasticImg,
          {
            x: -700,
            opacity: 0,
            duration: 2,
            ease: "power2.inOut",
          },
          "<",
        );

        /* 4 — VALUE TEXT IN (FROM RIGHT, SAME STYLE) */
        tl.fromTo(
          valueWords,
          { x: 400, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            stagger: 0.3,
            ease: "power2.out",
          },
        );

        /* 5 — COMPOUND IN (AFTER TEXT) */
        tl.fromTo(
          compoundImg,
          { x: -300, opacity: 0 },
          { x: 0, opacity: 1, duration: 2, ease: "power2.out" },
        );

        /* 6 — BACKGROUND TO BLACK */
        tl.to(section, {
          backgroundColor: "#000000",
          duration: 1,
          ease: "none",
        });
      }
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="w-full min-h-screen bg-[#101317]">
      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          src={bgvid}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-6xl font-bold text-white tracking-wide">
            Yellow Team
          </h1>
        </div>
      </section>

      {/* SECTION 2 */}
      <section
        ref={section2Ref}
        className="h-screen flex items-center justify-center"
      >
        <div className="max-w-5xl px-10 space-y-6">
          {[
            "Plastic is biodegradable,",
            "That is not interesting anymore.",
          ].map((line, i) => (
            <h2 key={i} className="text-6xl text-[#FEFAE0] font-light">
              {line.split(" ").map((w, j) => {
  const isHighlight =
    w.toLowerCase().includes("not") ||
    w.toLowerCase().includes("interesting");

  return (
    <span
      key={j}
      className={`word inline-block mr-4 ${
        isHighlight ? "text-[#dda15e]" : ""
      }`}
    >
      {w}
    </span>
  );
})}

            </h2>
          ))}
        </div>
      </section>

      {/* SECTION 4 */}
      <section
        ref={section4Ref}
        className="relative h-screen flex items-center overflow-hidden bg-[#101317]"
      >
        <div className="relative w-full px-24">
          {/* LEFT TEXT */}
          <div className="max-w-xl space-y-6 text-6xl text-[#FEFAE0] font-light ml-12 z-20">
            {["Most", "stop", "at", "degradation.", "We", "didn't."].map((w, i) => {
  const isHighlight = w === "We" || w === "didn't.";

  return (
    <div
      key={i}
      className={`left-word ${
        isHighlight ? "text-[#dda15e]" : ""
      }`}
    >
      {w}
    </div>
  );
})}

          </div>

          {/* PLASTIC */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-16 z-30 pointer-events-none">
            <img
              src={plastic}
              className="plastic-image w-[30rem] h-[30rem] object-contain"
            />
          </div>

          {/* VALUE TEXT — RIGHT STACK */}
          <div className="absolute inset-y-0 right-24 flex items-center z-40 pointer-events-none">
            <div className="space-y-6 text-6xl text-[#FEFAE0] font-light text-right">
              {[
  "We",
  "found",
  "value",
  "in those",
  "monomers",
  "and",
  "metabolites.",
].map((word, i) => {
  const isHighlight =
    word === "monomers" || word === "metabolites.";

  return (
    <div
      key={i}
      className={`value-word ${
        isHighlight ? "text-[#dda15e]" : ""
      }`}
    >
      {word}
    </div>
  );
})}

            </div>
          </div>

          {/* COMPOUND */}
          <div className="absolute inset-y-0 left-0 flex items-center pl-24 z-30 pointer-events-none">
            <img
              src={compound}
              className="compound-image w-[26rem] h-[26rem] object-contain"
            />
          </div>
        </div>
      </section>

      <div className="h-[20vh] bg-black" />
    </div>
  );
}

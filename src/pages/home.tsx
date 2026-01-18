import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import bgvid from "../assets/bg-vid.mp4";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const rootRef = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);

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
            "Structure and composition define fucntion.",
            "We didn't leave it to chance.",
            "We let light control it.",
          ].map((line, i) => (
            <h2 key={i} className="text-6xl text-[#FEFAE0] font-light">
              {line.split(" ").map((w, j) => {
                const isHighlight =
                  w.toLowerCase().includes("chance.") ||
                  w.toLowerCase().includes("light");

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

      {/* END SPACER */}
      <div className="h-[20vh] bg-[#101317]" />
    </div>
  );
}

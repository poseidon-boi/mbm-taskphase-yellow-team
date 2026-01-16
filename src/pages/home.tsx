import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bgvid from "../assets/bg-vid.mp4";
import bacteria from "../assets/bacteria.png";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const rootRef = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);
  const section5Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* =========================
         SECTION 2 — PINNED TEXT
      ========================== */
      if (section2Ref.current) {
        const words = section2Ref.current.querySelectorAll(".word");

        gsap.timeline({
          scrollTrigger: {
            trigger: section2Ref.current,
            start: "top top",
            end: "+=250%",
            pin: true,
            scrub: 1,
          },
        }).from(words, {
          y: 32,
          opacity: 0,
          stagger: 0.35,
          ease: "power2.out",
        });
      }

      /* =========================
         SECTION 4 — LOSS OF CONTROL
      ========================== */
      if (section4Ref.current) {
        const left = section4Ref.current.querySelectorAll(".left-word");
        const right = section4Ref.current.querySelectorAll(".right-word");
        const image =
          section4Ref.current.querySelector(".bacteria-image");

        gsap.timeline({
          scrollTrigger: {
            trigger: section4Ref.current,
            start: "top top",
            end: "+=500%",
            pin: true,
            scrub: 1,
          },
        })
          .from(left, {
            x: -120,
            opacity: 0,
            stagger: 0.25,
            ease: "power2.out",
          })
          .from(
            right,
            {
              x: 120,
              opacity: 0,
              stagger: 0.25,
              ease: "power2.out",
            },
            "+=0.6"
          )
          .to([...left, ...right], {
            opacity: 0.2,
            ease: "none",
          })
          .to(
            image,
            {
              opacity: 1,
              scale: 2,
              ease: "power2.out",
            },
            "<"
          )
          .to(image, {
            scale: 8,
            ease: "power3.inOut",
          })
          .to(
            section4Ref.current,
            {
              backgroundColor: "#000000",
              ease: "none",
            },
            "-=0.5"
          );
      }

      /* =========================
         SECTION 5 — QUESTION / YES
      ========================== */
      if (section5Ref.current) {
        const q = section5Ref.current.querySelector(".question");
        const a = section5Ref.current.querySelector(".answer");

        gsap.timeline({
          scrollTrigger: {
            trigger: section5Ref.current,
            start: "top top",
            end: "+=300%",
            pin: true,
            scrub: 1,
          },
        })
          .from(q, {
            y: -30,
            opacity: 0,
            ease: "power2.out",
          })
          .from(
            a,
            {
              scale: 0.3,
              opacity: 0,
              ease: "back.out(1.7)",
            },
            "+=0.6"
          )
          .to(
            section5Ref.current,
            {
              backgroundColor: "#dda15e",
              ease: "none",
            },
            "<"
          )
          .to(
            [q, a],
            {
              color: "#000000",
              ease: "none",
            },
            "<"
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
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-6xl font-bold text-white tracking-tighter">
            Yellow Team
          </h1>
          <p className="mt-6 text-sm tracking-[0.4em] text-white/60 uppercase">
            Degrading problems one by one
          </p>
        </div>
      </section>

      {/* SECTION 2 */}
      <section
        ref={section2Ref}
        className="h-screen flex items-center justify-center"
      >
        <div className="max-w-5xl px-10 space-y-6">
          <h2 className="text-6xl text-[#FEFAE0] font-light">
            {"Plastic is everywhere".split(" ").map((w, i) => (
              <span key={i} className="word inline-block mr-4">
                {w}
              </span>
            ))}
          </h2>

          <h2 className="text-6xl text-[#FEFAE0] font-light">
            {"Some of it is biodegradable".split(" ").map((w, i) => (
              <span key={i} className="word inline-block mr-4">
                {w}
              </span>
            ))}
          </h2>

          <h2 className="text-6xl text-[#FEFAE0] font-light">
            {"Most of it lasts forever.".split(" ").map((w, i) => (
              <span
                key={i}
                className={`word inline-block mr-4 ${
                  w.toLowerCase().includes("forever")
                    ? "text-[#dda15e]"
                    : ""
                }`}
              >
                {w}
              </span>
            ))}
          </h2>
        </div>
      </section>

      {/* SECTION 4 */}
      <section
        ref={section4Ref}
        className="relative h-screen flex items-center justify-center bg-[#101317]"
      >
        <div className="grid grid-cols-3 gap-14 max-w-6xl px-10">
          <div className="space-y-4 text-4xl text-[#FEFAE0] font-light uppercase z-20">
            {["Biodegradable", "plastic", "are", "made", "by", "bacteria"].map(
              (w, i) => (
                <div key={i} className="left-word">
                  {w}
                </div>
              )
            )}
          </div>

          <div className="flex justify-center overflow-visible z-30">
            <img
              src={bacteria}
              alt="bacteria"
              className="bacteria-image w-64 h-64 opacity-0 scale-50 object-contain"
            />
          </div>

          <div className="space-y-4 text-4xl text-[#FEFAE0] font-light uppercase text-right z-10">
            {[
              "Their",
              "properties",
              "become",
              "stiff",
              "after",
              "production",
            ].map((w, i) => (
              <div key={i} className="right-word">
                {w}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 */}
      <section
        ref={section5Ref}
        className="h-screen flex flex-col items-center justify-center bg-[#dda15e]"
      >
        <h2 className="question text-4xl text-[#FEFAE0] font-light tracking-wide mb-24">
          Can we choose how plastic behaves?
        </h2>
        <div className="answer text-8xl text-[#FEFAE0] font-light tracking-widest">
          YES
        </div>
      </section>

      <div className="h-[20vh] bg-white" />
    </div>
  );
}

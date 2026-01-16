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
        const words =
          section2Ref.current.querySelectorAll<HTMLSpanElement>(".word");

        gsap
          .timeline({
            scrollTrigger: {
              trigger: section2Ref.current,
              start: "top top",
              end: "+=250%",
              pin: true,
              scrub: 1,
              anticipatePin: 1,
            },
          })
          .from(words, {
            y: 30,
            opacity: 0,
            stagger: 0.35,
            ease: "power2.out",
          });
      }

      /* =========================
         SECTION 4 — LOSS OF CONTROL
      ========================== */
      if (section4Ref.current) {
        const section4 = section4Ref.current;
        const left = section4.querySelectorAll(".left-word");
        const right = section4.querySelectorAll(".right-word");
        const image =
          section4.querySelector<HTMLImageElement>(".bacteria-image");

        gsap
          .timeline({
            scrollTrigger: {
              trigger: section4,
              start: "top top",
              end: "+=500%",
              pin: true,
              scrub: 1,
              anticipatePin: 1,
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
            scale: 4,
            ease: "power3.inOut",
          })
          .to(
            section4,
            {
              backgroundColor: "#000000",
              ease: "none",
            },
            "-=0.4"
          );
      }

      /* =========================
         SECTION 5 — QUESTION → YES
      ========================== */
      if (section5Ref.current) {
        const section5 = section5Ref.current;
        const question =
          section5.querySelector<HTMLHeadingElement>(".question");
        const answer =
          section5.querySelector<HTMLDivElement>(".answer");

        gsap
          .timeline({
            scrollTrigger: {
              trigger: section5,
              start: "top top",
              end: "+=350%",
              pin: true,
              scrub: true,
              anticipatePin: 1,
            },
          })

          // Question appears on black
          .from(question, {
            opacity: 0,
            y: 20,
            ease: "power2.out",
          })

          // Background + question invert gradually
          .to(
            section5,
            {
              backgroundColor: "#dda15e",
              ease: "none",
            },
            "+=0.4"
          )
          .to(
            question,
            {
              color: "#000000",
              ease: "none",
            },
            "<"
          )

          // YES revealed last
          .from(
            answer,
            {
              opacity: 0,
              y: 40,
              ease: "power2.out",
            },
            "+=0.4"
          )
          .to(
            answer,
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
          {[
            "Plastic is everywhere",
            "Some of it is biodegradable",
            "Most of it lasts forever.",
          ].map((line, i) => (
            <h2 key={i} className="text-6xl text-[#FEFAE0] font-light">
              {line.split(" ").map((w, j) => (
                <span
                  key={j}
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
          ))}
        </div>
      </section>

      {/* SECTION 4 */}
      <section
        ref={section4Ref}
        className="relative h-screen flex items-center justify-center bg-[#101317]"
      >
        <div className="relative grid grid-cols-2 gap-14 max-w-6xl px-10">
          {/* LEFT */}
          <div className="space-y-6 text-6xl text-[#FEFAE0] font-light z-20">
            {["Biodegradable", "plastic", "are", "made", "by", "bacteria"].map(
              (w, i) => (
                <div key={i} className="left-word">
                  {w}
                </div>
              )
            )}
          </div>

          {/* RIGHT */}
          <div className="space-y-6 text-6xl text-[#FEFAE0] font-light text-right justify-self-end z-10">
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

          {/* CENTER IMAGE */}
          <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
            <img
              src={bacteria}
              alt="bacteria"
              className="bacteria-image w-64 h-64 opacity-0 scale-50 object-contain"
            />
          </div>
        </div>
      </section>

      {/* SECTION 5 */}
      <section
        ref={section5Ref}
        className="h-screen flex flex-col items-center justify-center bg-black"
      >
        <h2 className="question text-6xl text-white font-light mb-24">
          Can we change the way plastic behaves?
        </h2>

        <div className="answer text-6xl text-white font-light">
          YES!
        </div>
      </section>

      <div className="h-[20vh] bg-white" />
    </div>
  );
}

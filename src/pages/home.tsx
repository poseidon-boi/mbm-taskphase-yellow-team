import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bgvid from "../assets/bg-vid.mp4";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const mainRef = useRef<HTMLDivElement>(null);
  const videoSectionRef = useRef<HTMLDivElement>(null);
  const textSectionRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // 1. CREATE A MAIN TIMELINE
      // This allows us to sequence the word reveal AND the color change perfectly
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: textSectionRef.current,
          start: "top top",      // Pin starts when text section hits the top
          end: "+=300%",         // How long the user stays "locked" on this screen
          pin: true,             // LOCK the grey background
          scrub: 1.5,            // Smoothly links animation to scroll
          anticipatePin: 1,
        }
      });

      // 2. ADD WORD REVEAL TO TIMELINE
      const words = gsap.utils.toArray(".word");
      tl.from(words, {
        x: 100,
        opacity: 0,
        stagger: 0.5,           // Large stagger for slow, individual rendering
        duration: 2,
        ease: "power2.out",
      });

      // 3. ADD COLOR CHANGE TO TIMELINE
      // This happens AFTER all words have rendered because it's next in the timeline
      const highlightWords = highlightRef.current?.querySelectorAll(".word");
      if (highlightWords && highlightWords.length >= 2) {
        const lastTwo = Array.from(highlightWords).slice(-2);
        
        tl.to(lastTwo, {
          color: "#ffc300",
          duration: 1,
          ease: "none"
        }, "+=0.2"); // Slight delay after last word appears before turning gold
      }

    }, mainRef);

    return () => ctx.revert(); 
  }, []);

  const line1 = "Lorem ipsum dolor sit amet,";
  const line2 = "consectetur adipisicing elit.";
  const highlight = "Officia quaerat vitae";

  return (
    <div ref={mainRef} className="bg-[#101317] w-full">
      {/* 1. VIDEO PART: This scrolls away normally */}
      <section ref={videoSectionRef} className="h-screen w-full overflow-hidden">
        <video
          src={bgvid}
          autoPlay muted loop playsInline
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-6xl font-bold text-white mb-4">Yellow Team</h1>
          <p className="text-sm tracking-[0.4em] text-white/40 uppercase font-medium">Scroll to Begin</p>
        </div>
      </section>

      {/* 2. PINNED GRAY SECTION: The "Stage" */}
      <section 
        ref={textSectionRef} 
        className="h-screen bg-[#101317] flex flex-col justify-center items-center relative z-10"
      >
        <div className="max-w-5xl w-full px-10">
          {[line1, line2].map((line, index) => (
            <h2 key={index} className="text-6xl text-[#FEFAE0] mb-10 leading-snug font-light">
              {line.split(" ").map((word, i) => (
                <span key={i} className="word inline-block mr-5">{word}</span>
              ))}
            </h2>
          ))}

          <h2 ref={highlightRef} className="text-6xl text-[#FEFAE0] leading-snug font-light">
            {highlight.split(" ").map((word, i) => (
              <span key={i} className="word inline-block mr-5">
                {word}
              </span>
            ))}
          </h2>
        </div>
      </section>

      {/* 3. NEXT CONTENT: Only reachable after the animation is done */}
      <section className="h-screen bg-[#1a1d21] flex items-center justify-center">
        <h2 className="text-4xl text-white/20 uppercase tracking-[1em]">Next Chapter</h2>
      </section>
    </div>
  );
}

export default Home;
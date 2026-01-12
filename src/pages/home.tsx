import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bgvid from "../assets/bg-vid.mp4";
import fries from "../assets/fries.jpg";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const mainRef = useRef<HTMLDivElement>(null);
  const videoSectionRef = useRef<HTMLDivElement>(null);
  const textSectionRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLHeadingElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // 1. PINNED TEXT TIMELINE (Section 2)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: textSectionRef.current,
          start: "top top",      
          end: "+=250%",         
          pin: true,             
          scrub: 1,              
          anticipatePin: 1,
        }
      });

      const words = gsap.utils.toArray(".word");
      tl.from(words, {
        y: 30,
        opacity: 0,
        stagger: 0.4,           
        duration: 1.5,
        ease: "power2.out",
      });

      const highlightWords = highlightRef.current?.querySelectorAll(".word");
      if (highlightWords && highlightWords.length >= 2) {
        tl.to(Array.from(highlightWords).slice(-2), {
          color: "#ffc300",
          duration: 0.8,
        }, "+=0.1");
      }

      // 2. REWRITTEN SECTION 3 ANIMATION
      // Using a separate timeline triggered by the container
      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: section3Ref.current,
          start: "top 70%", // Triggers when the top of the fries section is 70% down the screen
          toggleActions: "play none none reverse",
        }
      });

      tl3.from(".bg-card", {
        x: -200,          // Move from 200px left
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
      })
      .from(".fries-image", {
        x: 200,           // Move from 200px right
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
      }, "-=0.8"); // Starts 0.8 seconds before the previous animation ends (overlap)

    }, mainRef);

    return () => ctx.revert(); 
  }, []);

  const line1 = "Lorem ipsum dolor sit amet,";
  const line2 = "consectetur adipisicing elit.";
  const highlight = "Officia quaerat vitae";

  return (
    <div ref={mainRef} className="bg-[#101317] w-full min-h-screen overflow-x-hidden">
      
      {/* SECTION 1: VIDEO */}
      <section ref={videoSectionRef} className="relative h-screen w-full overflow-hidden">
        <video
          src={bgvid}
          autoPlay muted loop playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-6xl font-bold text-white mb-4 tracking-tighter">Yellow Team</h1>
          <p className="text-sm tracking-[0.4em] text-white/60 uppercase font-light">Scroll Down</p>
        </div>
      </section>

      {/* SECTION 2: PINNED TEXT */}
      <section 
        ref={textSectionRef} 
        className="h-screen bg-[#101317] flex flex-col justify-center items-center"
      >
        <div className="max-w-5xl w-full px-10">
          <div className="space-y-4">
            <h2 className="text-6xl text-[#FEFAE0] leading-tight font-light">
              {line1.split(" ").map((word, i) => (
                <span key={i} className="word inline-block mr-4">{word}</span>
              ))}
            </h2>
            <h2 className="text-6xl text-[#FEFAE0] leading-tight font-light">
              {line2.split(" ").map((word, i) => (
                <span key={i} className="word inline-block mr-4">{word}</span>
              ))}
            </h2>
            <h2 ref={highlightRef} className="text-6xl text-[#FEFAE0] leading-tight font-light">
              {highlight.split(" ").map((word, i) => (
                <span key={i} className="word inline-block mr-4">{word}</span>
              ))}
            </h2>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE CONTENT (FRIES) */}
      <section 
        ref={section3Ref} 
        className="min-h-screen py-32 px-10 flex items-center"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          
          {/* LEFT: Project Background Card */}
          <div className="bg-card flex-1 bg-white rounded-2xl p-10 shadow-2xl border border-gray-100">
            <h3 className="text-3xl font-bold mb-6 text-[#101317]">Project Background</h3>
            <p className="text-lg text-gray-600 leading-relaxed italic border-l-4 border-[#ffc300] pl-6">
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
            </p>
            <p className="mt-6 text-gray-500 leading-relaxed">
              This card is sliding in from the left as you scroll down.
            </p>
          </div>
          
          {/* RIGHT: Fries Image */}
          <div className="fries-image flex-1">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={fries} 
                alt="Fries" 
                className="w-full h-auto object-cover" 
              />
            </div>
          </div>

        </div>
      </section>

      <div className="h-[20vh] bg-[#101317]" />
    </div>
  );
}

export default Home;